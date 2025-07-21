
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Save, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

import { IntakeFormData } from './intake-form/IntakeFormValidation';
import { EmploymentEducationStep } from './intake-form/EmploymentEducationStep';
import { FamilyHealthStep } from './intake-form/FamilyHealthStep';
import { ImmigrationHistoryStep } from './intake-form/ImmigrationHistoryStep';
import { RepresentationFactsStep } from './intake-form/RepresentationFactsStep';
import { FileUploadStep } from './intake-form/FileUploadStep';
import { AboutMeStep } from './intake-form/AboutMeStep';
import { CaseDetailsStep } from './intake-form/CaseDetailsStep';
import { ClientInformationStep } from './intake-form/ClientInformationStep';

interface RefactoredClientIntakeFormProps {
  userId: string;
}

const STEPS = [
  { id: 1, title: 'Case Details', description: 'Basic case information' },
  { id: 2, title: 'Client Information', description: 'Personal and contact details' },
  { id: 3, title: 'Employment & Education', description: 'Work and education background' },
  { id: 4, title: 'Family & Health', description: 'Family status and health information' },
  { id: 5, title: 'Immigration & History', description: 'Immigration status and criminal history' },
  { id: 6, title: 'About Me', description: 'Tell us about yourself' },
  { id: 7, title: 'Representation & Facts', description: 'Case representation and facts' },
  { id: 8, title: 'Files & Consent', description: 'Upload documents and provide consent' }
];

// Type casting utilities for database data
function safeJsonCast<T>(value: any, fallback: T): T {
  if (value === null || value === undefined) return fallback;
  if (typeof value === 'object' && !Array.isArray(value)) return value as T;
  return fallback;
}

function safeArrayCast<T>(value: any, fallback: T[]): T[] {
  if (Array.isArray(value)) return value as T[];
  return fallback;
}

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
    ssn_last4: '',
    home_address: '',
    mailing_address: '',
    phone_numbers: [{ type: 'cell', number: '' }],
    email: '',
    emergency_contact: { name: '', relation: '', phone: '' },
    employment_info: { employed: false, unemployed: false },
    education_info: { in_school: false, highest_education: '', school_location: '' },
    family_info: { marital_status: '', children: [] },
    substance_mental_health: { past_treatment: false, current_medications: '' },
    immigration_info: { us_citizen: false, prior_deportation: false },
    criminal_history: { open_cases: false, probation_parole: false, prior_record: false },
    representation_type: undefined,
    case_facts: '',
    about_me: '',
    uploaded_files: [],
    consent_given: false,
    e_signature: { full_name: '', date: new Date().toISOString().split('T')[0] },
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
        
        // Transform database data back to form structure
        const biographicalInfo = safeJsonCast(data.biographical_info, {}) as any;
        const contactInfo = safeJsonCast(data.contact_info, {}) as any;
        
        const safeFormData: Partial<IntakeFormData> = {
          // Direct columns
          docket_number: data.docket_number || '',
          arraignment_date: data.arraignment_date || '',
          next_court_date: data.next_court_date || '',
          court_name: data.court_name || '',
          court_session: data.court_session || '',
          ada_prosecutor: data.ada_prosecutor || '',
          middle_name: data.middle_name || '',
          ssn_last4: data.ssn_last4 || '',
          mailing_address: data.mailing_address || '',
          representation_type: data.representation_type as 'bar_advocate' | 'private_client' | undefined,
          case_facts: data.case_facts || '',
          about_me: data.about_me || '',
          consent_given: data.consent_given || false,
          
          // Extract from biographical_info JSONB
          first_name: biographicalInfo.first_name || '',
          last_name: biographicalInfo.last_name || '',
          
          // Extract from contact_info JSONB
          email: contactInfo.email || '',
          home_address: contactInfo.home_address || '',
          
          // JSONB columns
          charges: safeArrayCast(data.charges, []),
          phone_numbers: safeArrayCast(data.phone_numbers, [{ type: 'cell', number: '' }]),
          uploaded_files: safeArrayCast(data.uploaded_files, []),
          bail_info: safeJsonCast(data.bail_info, { bail_set: false }),
          emergency_contact: safeJsonCast(data.emergency_contact, { name: '', relation: '', phone: '' }),
          employment_info: safeJsonCast(data.employment_info, { employed: false, unemployed: false }),
          education_info: safeJsonCast(data.education_info, { in_school: false, highest_education: '', school_location: '' }),
          family_info: safeJsonCast(data.family_info, { marital_status: '', children: [] }),
          substance_mental_health: safeJsonCast(data.substance_mental_health, { past_treatment: false, current_medications: '' }),
          immigration_info: safeJsonCast(data.immigration_info, { us_citizen: false, prior_deportation: false }),
          criminal_history: safeJsonCast(data.criminal_history, { open_cases: false, probation_parole: false, prior_record: false }),
          e_signature: safeJsonCast(data.e_signature, { full_name: '', date: new Date().toISOString().split('T')[0] }),
        };
        
        setFormData(safeFormData);
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
    // Simple validation - can be enhanced later
    return true;
  };

  const saveProgress = async (isAutoSave = false) => {
    if (saving) return;
    
    console.log('Saving progress, isAutoSave:', isAutoSave, 'userId:', userId, 'formData:', formData);
    setSaving(true);
    try {
      // Transform form data to match database schema
      const dataToSave = {
        user_id: userId,
        progress_step: currentStep,
        status: 'draft',
        updated_at: new Date().toISOString(),
        
        // Direct columns
        docket_number: formData.docket_number || null,
        arraignment_date: formData.arraignment_date || null,
        next_court_date: formData.next_court_date || null,
        court_name: formData.court_name || null,
        court_session: formData.court_session || null,
        ada_prosecutor: formData.ada_prosecutor || null,
        middle_name: formData.middle_name || null,
        ssn_last4: formData.ssn_last4 || null,
        mailing_address: formData.mailing_address || null,
        representation_type: formData.representation_type || null,
        case_facts: formData.case_facts || null,
        about_me: formData.about_me || null,
        consent_given: formData.consent_given || false,
        
        // JSONB columns with proper structure
        biographical_info: {
          first_name: formData.first_name || '',
          last_name: formData.last_name || '',
        },
        contact_info: {
          email: formData.email || '',
          home_address: formData.home_address || '',
        },
        bail_info: formData.bail_info || { bail_set: false },
        phone_numbers: formData.phone_numbers || [{ type: 'cell', number: '' }],
        emergency_contact: formData.emergency_contact || { name: '', relation: '', phone: '' },
        employment_info: formData.employment_info || { employed: false, unemployed: false },
        education_info: formData.education_info || { in_school: false, highest_education: '', school_location: '' },
        family_info: formData.family_info || { marital_status: '', children: [] },
        substance_mental_health: formData.substance_mental_health || { past_treatment: false, current_medications: '' },
        immigration_info: formData.immigration_info || { us_citizen: false, prior_deportation: false },
        criminal_history: formData.criminal_history || { open_cases: false, probation_parole: false, prior_record: false },
        e_signature: formData.e_signature || { full_name: '', date: '' },
        charges: formData.charges || [],
        uploaded_files: formData.uploaded_files || [],
      };

      if (intakeId) {
        const { error } = await supabase
          .from('client_intakes')
          .update(dataToSave)
          .eq('id', intakeId);
        
        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('client_intakes')
          .insert(dataToSave)
          .select('id')
          .single();
        
        if (error) throw error;
        if (data) setIntakeId(data.id);
      }

      if (!isAutoSave) {
        toast({
          title: "Progress Saved",
          description: "Your form data has been saved successfully.",
        });
      }
    } catch (error: any) {
      console.error('Error saving progress:', error);
      if (!isAutoSave) {
        toast({
          title: "Error",
          description: "Failed to save progress. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setSaving(false);
    }
  };

  const nextStep = async () => {
    if (!validateCurrentStep()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors before proceeding.",
        variant: "destructive",
      });
      return;
    }

    await saveProgress();
    setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitForm = async () => {
    if (!validateCurrentStep()) {
      toast({
        title: "Validation Error",
        description: "Please correct all errors before submitting.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      // Transform form data for submission using same structure as saveProgress
      const dataToSubmit = {
        user_id: userId,
        status: 'submitted',
        submitted_at: new Date().toISOString(),
        progress_step: STEPS.length,
        
        // Direct columns
        docket_number: formData.docket_number || null,
        arraignment_date: formData.arraignment_date || null,
        next_court_date: formData.next_court_date || null,
        court_name: formData.court_name || null,
        court_session: formData.court_session || null,
        ada_prosecutor: formData.ada_prosecutor || null,
        middle_name: formData.middle_name || null,
        ssn_last4: formData.ssn_last4 || null,
        mailing_address: formData.mailing_address || null,
        representation_type: formData.representation_type || null,
        case_facts: formData.case_facts || null,
        about_me: formData.about_me || null,
        consent_given: formData.consent_given || false,
        
        // JSONB columns with proper structure
        biographical_info: {
          first_name: formData.first_name || '',
          last_name: formData.last_name || '',
        },
        contact_info: {
          email: formData.email || '',
          home_address: formData.home_address || '',
        },
        bail_info: formData.bail_info || { bail_set: false },
        phone_numbers: formData.phone_numbers || [{ type: 'cell', number: '' }],
        emergency_contact: formData.emergency_contact || { name: '', relation: '', phone: '' },
        employment_info: formData.employment_info || { employed: false, unemployed: false },
        education_info: formData.education_info || { in_school: false, highest_education: '', school_location: '' },
        family_info: formData.family_info || { marital_status: '', children: [] },
        substance_mental_health: formData.substance_mental_health || { past_treatment: false, current_medications: '' },
        immigration_info: formData.immigration_info || { us_citizen: false, prior_deportation: false },
        criminal_history: formData.criminal_history || { open_cases: false, probation_parole: false, prior_record: false },
        e_signature: formData.e_signature || { full_name: '', date: '' },
        charges: formData.charges || [],
        uploaded_files: formData.uploaded_files || [],
      };

      if (intakeId) {
        const { error } = await supabase
          .from('client_intakes')
          .update(dataToSubmit)
          .eq('id', intakeId);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('client_intakes')
          .insert(dataToSubmit);
        
        if (error) throw error;
      }

      toast({
        title: "Form Submitted",
        description: "Your intake form has been submitted successfully!",
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const updateFormData = (updates: Partial<IntakeFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CaseDetailsStep formData={formData} setFormData={updateFormData} />;
      
      case 2:
        return <ClientInformationStep formData={formData} setFormData={updateFormData} />;

      case 3:
        return <EmploymentEducationStep formData={formData} setFormData={updateFormData} />;

      case 4:
        return <FamilyHealthStep formData={formData} setFormData={updateFormData} />;

      case 5:
        return <ImmigrationHistoryStep formData={formData} setFormData={updateFormData} />;

      case 6:
        return <AboutMeStep formData={formData} setFormData={updateFormData} />;

      case 7:
        return <RepresentationFactsStep formData={formData} setFormData={updateFormData} />;

      case 8:
        return <FileUploadStep formData={formData} setFormData={updateFormData} userId={userId} />;

      default:
        return <div>Invalid step</div>;
    }
  };

  const progressPercentage = (currentStep / STEPS.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-foreground">Client Intake Form</h1>
          <span className="text-sm text-muted-foreground">
            Step {currentStep} of {STEPS.length}
          </span>
        </div>
        <Progress value={progressPercentage} className="w-full" />
        <div className="flex justify-between mt-2">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className={`text-xs text-center ${
                step.id <= currentStep ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1 ${
                step.id < currentStep ? 'bg-primary text-primary-foreground' :
                step.id === currentStep ? 'bg-primary/20 text-primary border-2 border-primary' :
                'bg-muted text-muted-foreground'
              }`}>
                {step.id < currentStep ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  step.id
                )}
              </div>
              <span className="hidden sm:block">{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="mb-8">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </Button>

        <Button
          variant="outline"
          onClick={() => saveProgress()}
          disabled={saving}
          className="flex items-center space-x-2"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'Saving...' : 'Save Progress'}</span>
        </Button>

        {currentStep < STEPS.length ? (
          <Button
            onClick={nextStep}
            className="flex items-center space-x-2"
          >
            <span>Next Step</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            onClick={submitForm}
            disabled={submitting}
            className="flex items-center space-x-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{submitting ? 'Submitting...' : 'Submit Form'}</span>
          </Button>
        )}
      </div>
    </div>
  );
}
