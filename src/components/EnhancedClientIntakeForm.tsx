import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import ChargeAutocomplete from './ChargeAutocomplete';
import { Save, Send, Upload, Plus, Minus, AlertTriangle } from 'lucide-react';

interface EnhancedClientIntakeFormProps {
  userId: string;
}

interface IntakeData {
  // Case Details
  docket_number: string;
  arraignment_date: string;
  next_court_date: string;
  court_name: string;
  court_session: string;
  ada_prosecutor: string;
  bail_info: {
    bail_set: boolean;
    bail_amount?: string;
    bail_conditions?: string;
  };
  charges: Array<{
    charge_name: string;
    statute_code: string;
    full_description: string;
  }>;
  
  // Client Information
  first_name: string;
  middle_name: string;
  last_name: string;
  date_of_birth: string;
  ssn_last4: string;
  home_address: string;
  mailing_address: string;
  phone_numbers: Array<{
    type: string;
    number: string;
  }>;
  email: string;
  emergency_contact: {
    name: string;
    relation: string;
    phone: string;
  };
  
  // Employment/Education
  employment_info: {
    employed: boolean;
    employer_name?: string;
    job_title?: string;
    work_address?: string;
    work_hours?: string;
  };
  education_info: {
    in_school: boolean;
    school_name?: string;
    year_grade?: string;
  };
  
  // Family & Dependents
  family_info: {
    marital_status: string;
    spouse_partner_name?: string;
    children: Array<{
      name: string;
      age: string;
    }>;
    other_dependents?: string;
  };
  
  // Substance Use & Mental Health
  substance_mental_health: {
    past_treatment: boolean;
    treatment_details?: string;
    current_medications: string;
    mental_health_diagnoses?: string;
    doctor_counselor_contact?: string;
  };
  
  // Immigration
  immigration_info: {
    us_citizen: boolean;
    immigration_status?: string;
    prior_deportation: boolean;
    deportation_details?: string;
  };
  
  // Criminal/Probation History
  criminal_history: {
    open_cases: boolean;
    open_cases_details?: string;
    probation_parole: boolean;
    probation_details?: string;
    prior_record: boolean;
    prior_record_summary?: string;
  };
  
  // Representation
  representation_type: 'bar_advocate' | 'private_client' | '';
  
  // Case Facts
  case_facts: string;
  
  // Files and Consent
  uploaded_files: Array<{
    name: string;
    type: string;
    url: string;
  }>;
  consent_given: boolean;
  e_signature: {
    full_name: string;
    date: string;
  };
  
  // Progress tracking
  progress_step: number;
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

export default function EnhancedClientIntakeForm({ userId }: EnhancedClientIntakeFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<IntakeData>({
    // Initialize with empty values
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
    e_signature: { full_name: '', date: '' },
    progress_step: 1
  });
  
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [intakeId, setIntakeId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadExistingIntake();
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
        // Populate form with existing data
        setCurrentStep(data.progress_step || 1);
        // ... populate other fields
      }
    } catch (error: any) {
      console.error('Error loading intake:', error);
    }
  };

  const saveProgress = async () => {
    setSaving(true);
    try {
      const intakeData = {
        user_id: userId,
        ...formData,
        progress_step: currentStep,
        status: 'draft',
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

      toast({
        title: "Progress Saved",
        description: "Your information has been saved.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save progress",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const nextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
      saveProgress();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addPhoneNumber = () => {
    setFormData(prev => ({
      ...prev,
      phone_numbers: [...prev.phone_numbers, { type: 'home', number: '' }]
    }));
  };

  const removePhoneNumber = (index: number) => {
    setFormData(prev => ({
      ...prev,
      phone_numbers: prev.phone_numbers.filter((_, i) => i !== index)
    }));
  };

  const addChild = () => {
    setFormData(prev => ({
      ...prev,
      family_info: {
        ...prev.family_info,
        children: [...prev.family_info.children, { name: '', age: '' }]
      }
    }));
  };

  const removeChild = (index: number) => {
    setFormData(prev => ({
      ...prev,
      family_info: {
        ...prev.family_info,
        children: prev.family_info.children.filter((_, i) => i !== index)
      }
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: // Case Details
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
                
                {formData.charges.length > 0 && (
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

      case 2: // Client Information
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
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Phone Numbers</Label>
                    <Button type="button" variant="outline" size="sm" onClick={addPhoneNumber}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Phone
                    </Button>
                  </div>
                  
                  {formData.phone_numbers.map((phone, index) => (
                    <div key={index} className="grid gap-4 md:grid-cols-3">
                      <Select
                        value={phone.type}
                        onValueChange={(value) => {
                          const newPhones = [...formData.phone_numbers];
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
                          const newPhones = [...formData.phone_numbers];
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
                          onClick={() => removePhoneNumber(index)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label className="text-base font-semibold">Emergency Contact</Label>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyName">Name</Label>
                      <Input
                        id="emergencyName"
                        value={formData.emergency_contact.name}
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
                        value={formData.emergency_contact.relation}
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
                        value={formData.emergency_contact.phone}
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

      // Additional cases for steps 3-7 would go here...
      default:
        return <div>Step content for step {currentStep}</div>;
    }
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

      {/* Step Content */}
      {renderStep()}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={prevStep}
          variant="outline"
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        
        <div className="flex gap-2">
          <Button
            onClick={saveProgress}
            variant="outline"
            disabled={saving}
          >
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Saving...' : 'Save Progress'}
          </Button>
          
          {currentStep < STEPS.length ? (
            <Button onClick={nextStep}>
              Next Step
            </Button>
          ) : (
            <Button onClick={() => setSubmitting(true)} disabled={submitting}>
              <Send className="w-4 h-4 mr-2" />
              {submitting ? 'Submitting...' : 'Submit Form'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}