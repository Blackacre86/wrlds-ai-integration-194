import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Save, Send, ArrowLeft, ArrowRight, AlertTriangle } from 'lucide-react';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import ChargeAutocomplete from './ChargeAutocomplete';

// Import step components
import { EmploymentEducationStep } from './intake-form/EmploymentEducationStep';
import { FamilyHealthStep } from './intake-form/FamilyHealthStep';
import { ImmigrationHistoryStep } from './intake-form/ImmigrationHistoryStep';
import { RepresentationFactsStep } from './intake-form/RepresentationFactsStep';
import { FileUploadStep } from './intake-form/FileUploadStep';

// Import validation schemas
import {
  caseDetailsSchema,
  clientInfoSchema,
  employmentEducationSchema,
  familyHealthSchema,
  immigrationHistorySchema,
  representationFactsSchema,
  filesConsentSchema,
  type IntakeFormData
} from './intake-form/IntakeFormValidation';

interface RefactoredClientIntakeFormProps {
  userId: string;
}

const STEPS = [
  'Case Details',
  'Client Information', 
  'Employment & Education',
  'Family & Health',
  'Immigration & History',
  'Representation & Facts',
  'Files & Consent'
];

const STEP_SCHEMAS = [
  caseDetailsSchema,
  clientInfoSchema,
  employmentEducationSchema,
  familyHealthSchema,
  immigrationHistorySchema,
  representationFactsSchema,
  filesConsentSchema,
];

export default function RefactoredClientIntakeForm({ userId }: RefactoredClientIntakeFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<IntakeFormData>>({
    docket_number: '',
    arraignment_date: '',
    next_court_date: '',
    court_name: '',
    court_session: '',
    ada_prosecutor: '',
    bail_info: { bail_set: false },
    charges: [],
    first_name: '',
    middle_name: '',
    last_name: '',
    date_of_birth: '',
    ssn_last4: '',
    home_address: '',
    mailing_address: '',
    phone_numbers: [{ type: 'cell', number: '' }],
    email: '',
    emergency_contact: { name: '', relation: '', phone: '' },
    employment_info: { employed: false },
    education_info: { in_school: false },
    family_info: { marital_status: '', children: [] },
    substance_mental_health: { past_treatment: false, current_medications: '' },
    immigration_info: { us_citizen: true, prior_deportation: false },
    criminal_history: { open_cases: false, probation_parole: false, prior_record: false },
    representation_type: '',
    case_facts: '',
    uploaded_files: [],
    consent_given: false,
    e_signature: { full_name: '', date: new Date().toISOString().split('T')[0] },
    progress_step: 1
  });
  
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [intakeId, setIntakeId] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  useEffect(() => {
    loadExistingIntake();
    // Auto-save every 30 seconds
    const autoSaveInterval = setInterval(() => {
      if (!submitting) {
        saveProgress(true);
      }
    }, 30000);

    return () => clearInterval(autoSaveInterval);
  }, [userId]);

  const loadExistingIntake = async () => {
    try {
      const { data, error } = await supabase
        .from('client_intakes')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'draft')
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setIntakeId(data.id);
        setCurrentStep(data.progress_step || 1);
        
        // Merge existing data with form data
        setFormData(prev => ({
          ...prev,
          ...data,
          // Ensure arrays are properly initialized
          charges: data.charges || [],
          phone_numbers: data.phone_numbers || [{ type: 'cell', number: '' }],
          uploaded_files: data.uploaded_files || [],
        }));
      }
    } catch (error: any) {
      console.error('Error loading intake:', error);
      toast({
        title: "Error",
        description: "Failed to load existing form data",
        variant: "destructive",
      });
    }
  };

  const validateCurrentStep = (): boolean => {
    const schema = STEP_SCHEMAS[currentStep - 1];
    if (!schema) return true;

    try {
      schema.parse(formData);
      setValidationErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          const path = err.path.join('.');
          errors[path] = err.message;
        });
        setValidationErrors(errors);
        
        toast({
          title: "Validation Error",
          description: "Please correct the highlighted fields before proceeding.",
          variant: "destructive",
        });
      }
      return false;
    }
  };

  const saveProgress = async (isAutoSave = false) => {
    setSaving(true);
    try {
      const intakeData = {
        user_id: userId,
        ...formData,
        progress_step: currentStep,
        status: 'draft',
        updated_at: new Date().toISOString(),
      };

      if (intakeId) {
        const { error } = await supabase
          .from('client_intakes')
          .update(intakeData)
          .eq('id', intakeId);
        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('client_intakes')
          .insert([intakeData])
          .select()
          .single();
        if (error) throw error;
        setIntakeId(data.id);
      }

      if (!isAutoSave) {
        toast({
          title: "Progress Saved",
          description: "Your information has been saved.",
        });
      }
    } catch (error: any) {
      if (!isAutoSave) {
        toast({
          title: "Error",
          description: error.message || "Failed to save progress",
          variant: "destructive",
        });
      }
    } finally {
      setSaving(false);
    }
  };

  const nextStep = async () => {
    if (!validateCurrentStep()) return;

    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
      await saveProgress();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitForm = async () => {
    if (!validateCurrentStep()) return;

    setSubmitting(true);
    try {
      const intakeData = {
        user_id: userId,
        ...formData,
        status: 'submitted',
        submitted_at: new Date().toISOString(),
      };

      if (intakeId) {
        const { error } = await supabase
          .from('client_intakes')
          .update(intakeData)
          .eq('id', intakeId);
        if (error) throw error;
      }

      toast({
        title: "Form Submitted",
        description: "Your intake form has been submitted successfully. We will contact you soon.",
      });

      // Reset form or redirect
      setCurrentStep(1);
      
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit form",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const renderCurrentStep = () => {
    const commonProps = { formData, setFormData };
    
    switch (currentStep) {
      case 1:
        return renderCaseDetailsStep();
      case 2:
        return renderClientInfoStep();
      case 3:
        return <EmploymentEducationStep {...commonProps} />;
      case 4:
        return <FamilyHealthStep {...commonProps} />;
      case 5:
        return <ImmigrationHistoryStep {...commonProps} />;
      case 6:
        return <RepresentationFactsStep {...commonProps} />;
      case 7:
        return <FileUploadStep {...commonProps} userId={userId} />;
      default:
        return <div>Invalid step</div>;
    }
  };

  const renderCaseDetailsStep = () => {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Case Details</CardTitle>
            <CardDescription>Basic information about your criminal case</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="docket">Docket Number *</Label>
                <Input
                  id="docket"
                  value={formData.docket_number}
                  onChange={(e) => setFormData(prev => ({ ...prev, docket_number: e.target.value }))}
                  placeholder="Enter docket number"
                  required
                />
                {validationErrors['docket_number'] && (
                  <p className="text-sm text-destructive">{validationErrors['docket_number']}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="court">Court Name *</Label>
                <Select value={formData.court_name} onValueChange={(value) => setFormData(prev => ({ ...prev, court_name: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select court" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cambridge-district">Cambridge District Court</SelectItem>
                    <SelectItem value="somerville-district">Somerville District Court</SelectItem>
                    <SelectItem value="middlesex-superior">Middlesex Superior Court</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {validationErrors['court_name'] && (
                  <p className="text-sm text-destructive">{validationErrors['court_name']}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="arraignment">Arraignment Date</Label>
                <Input
                  id="arraignment"
                  type="date"
                  value={formData.arraignment_date}
                  onChange={(e) => setFormData(prev => ({ ...prev, arraignment_date: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nextCourt">Next Court Date</Label>
                <Input
                  id="nextCourt"
                  type="date"
                  value={formData.next_court_date}
                  onChange={(e) => setFormData(prev => ({ ...prev, next_court_date: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session">Court Session</Label>
                <Select value={formData.court_session} onValueChange={(value) => setFormData(prev => ({ ...prev, court_session: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select session" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="district">District Court</SelectItem>
                    <SelectItem value="superior">Superior Court</SelectItem>
                    <SelectItem value="juvenile">Juvenile Court</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ada">ADA/Prosecutor Name</Label>
              <Input
                id="ada"
                value={formData.ada_prosecutor}
                onChange={(e) => setFormData(prev => ({ ...prev, ada_prosecutor: e.target.value }))}
                placeholder="Enter prosecutor's name"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bailSet"
                  checked={formData.bail_info.bail_set}
                  onCheckedChange={(checked) => setFormData(prev => ({
                    ...prev,
                    bail_info: { ...prev.bail_info, bail_set: checked as boolean }
                  }))}
                />
                <Label htmlFor="bailSet">Bail/Bond has been set</Label>
              </div>
              
              {formData.bail_info.bail_set && (
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="bailAmount">Bail Amount</Label>
                    <Input
                      id="bailAmount"
                      value={formData.bail_info.bail_amount || ''}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        bail_info: { ...prev.bail_info, bail_amount: e.target.value }
                      }))}
                      placeholder="$0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bailConditions">Bail Conditions</Label>
                    <Input
                      id="bailConditions"
                      value={formData.bail_info.bail_conditions || ''}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        bail_info: { ...prev.bail_info, bail_conditions: e.target.value }
                      }))}
                      placeholder="Enter conditions"
                    />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Criminal Charges</CardTitle>
            <CardDescription>Add all charges you are facing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ChargeAutocomplete onSelectCharge={(charge) => {
              setFormData(prev => ({
                ...prev,
                charges: [...prev.charges, charge]
              }));
            }} />
            {validationErrors['charges'] && (
              <p className="text-sm text-destructive">{validationErrors['charges']}</p>
            )}
            
            {formData.charges && formData.charges.length > 0 && (
              <div className="space-y-2">
                <Label>Selected Charges:</Label>
                {formData.charges.map((charge, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{charge.charge_name}</p>
                      <p className="text-sm text-muted-foreground">{charge.statute_code}</p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          charges: prev.charges.filter((_, i) => i !== index)
                        }));
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderClientInfoStep = () => {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your personal details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.first_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, first_name: e.target.value }))}
                  placeholder="Enter first name"
                  required
                />
                {validationErrors['first_name'] && (
                  <p className="text-sm text-destructive">{validationErrors['first_name']}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  value={formData.middle_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, middle_name: e.target.value }))}
                  placeholder="Enter middle name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.last_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, last_name: e.target.value }))}
                  placeholder="Enter last name"
                  required
                />
                {validationErrors['last_name'] && (
                  <p className="text-sm text-destructive">{validationErrors['last_name']}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.date_of_birth}
                  onChange={(e) => setFormData(prev => ({ ...prev, date_of_birth: e.target.value }))}
                  required
                />
                {validationErrors['date_of_birth'] && (
                  <p className="text-sm text-destructive">{validationErrors['date_of_birth']}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="ssn">Last 4 digits of SSN</Label>
                <Input
                  id="ssn"
                  value={formData.ssn_last4}
                  onChange={(e) => setFormData(prev => ({ ...prev, ssn_last4: e.target.value }))}
                  placeholder="XXXX"
                  maxLength={4}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="homeAddress">Home Address *</Label>
              <Textarea
                id="homeAddress"
                value={formData.home_address}
                onChange={(e) => setFormData(prev => ({ ...prev, home_address: e.target.value }))}
                placeholder="Enter your complete home address"
                required
              />
              {validationErrors['home_address'] && (
                <p className="text-sm text-destructive">{validationErrors['home_address']}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mailingAddress">Mailing Address (if different)</Label>
              <Textarea
                id="mailingAddress"
                value={formData.mailing_address}
                onChange={(e) => setFormData(prev => ({ ...prev, mailing_address: e.target.value }))}
                placeholder="Enter mailing address if different from home"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email address"
                required
              />
              {validationErrors['email'] && (
                <p className="text-sm text-destructive">{validationErrors['email']}</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Phone Numbers</Label>
                <Button type="button" variant="outline" size="sm" onClick={() => setFormData(prev => ({
                  ...prev,
                  phone_numbers: [...(prev.phone_numbers || []), { type: 'cell', number: '' }]
                }))}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-4 h-4 mr-2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  Add Phone
                </Button>
              </div>
              
              {formData.phone_numbers && formData.phone_numbers.map((phone, index) => (
                <div key={index} className="grid gap-4 md:grid-cols-3">
                  <Select
                    value={phone.type}
                    onValueChange={(value) => {
                      const newPhones = [...formData.phone_numbers!];
                      newPhones[index].type = value;
                      setFormData(prev => ({ ...prev, phone_numbers: newPhones }));
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cell">Cell</SelectItem>
                      <SelectItem value="home">Home</SelectItem>
                      <SelectItem value="work">Work</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    value={phone.number}
                    onChange={(e) => {
                      const newPhones = [...formData.phone_numbers!];
                      newPhones[index].number = e.target.value;
                      setFormData(prev => ({ ...prev, phone_numbers: newPhones }));
                    }}
                    placeholder="(555) 123-4567"
                  />
                  {formData.phone_numbers.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const newPhones = [...formData.phone_numbers!];
                        newPhones.splice(index, 1);
                        setFormData(prev => ({ ...prev, phone_numbers: newPhones }));
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus w-4 h-4"><path d="M5 12h14"/></svg>
                    </Button>
                  )}
                </div>
              ))}
              {validationErrors['phone_numbers'] && (
                <p className="text-sm text-destructive">{validationErrors['phone_numbers']}</p>
              )}
            </div>

            

            <div className="space-y-4">
              <Label className="text-base font-semibold">Emergency Contact</Label>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="emergencyName">Name</Label>
                  <Input
                    id="emergencyName"
                    value={formData.emergency_contact?.name}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      emergency_contact: { ...prev.emergency_contact, name: e.target.value }
                    }))}
                    placeholder="Emergency contact name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyRelation">Relation</Label>
                  <Input
                    id="emergencyRelation"
                    value={formData.emergency_contact?.relation}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      emergency_contact: { ...prev.emergency_contact, relation: e.target.value }
                    }))}
                    placeholder="Relationship"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">Phone</Label>
                  <Input
                    id="emergencyPhone"
                    value={formData.emergency_contact?.phone}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      emergency_contact: { ...prev.emergency_contact, phone: e.target.value }
                    }))}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Client Intake Form</span>
            <Badge variant="outline">{currentStep} of {STEPS.length}</Badge>
          </CardTitle>
          <div className="space-y-2">
            <Progress value={(currentStep / STEPS.length) * 100} className="w-full" />
            <p className="text-sm text-muted-foreground">
              Current Step: {STEPS[currentStep - 1]}
            </p>
          </div>
        </CardHeader>
      </Card>

      {/* Validation Errors */}
      {Object.keys(validationErrors).length > 0 && (
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Please correct the following errors:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {Object.entries(validationErrors).map(([field, error]) => (
                <li key={field} className="text-destructive">
                  {error}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Step Content */}
      {renderCurrentStep()}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={prevStep}
          variant="outline"
          disabled={currentStep === 1}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        
        <div className="flex gap-2">
          <Button
            onClick={() => saveProgress()}
            variant="outline"
            disabled={saving}
          >
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Saving...' : 'Save Progress'}
          </Button>
          
          {currentStep < STEPS.length ? (
            <Button onClick={nextStep}>
              Next Step
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={submitForm} disabled={submitting}>
              <Send className="w-4 h-4 mr-2" />
              {submitting ? 'Submitting...' : 'Submit Form'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
