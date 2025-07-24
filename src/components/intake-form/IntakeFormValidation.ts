
export interface IntakeFormData {
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
    unemployed: boolean;
    employer_name?: string;
    job_title?: string;
    work_address?: string;
    work_hours?: string;
  };
  education_info: {
    in_school: boolean;
    highest_education: string;
    school_location: string;
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
  
  // About Me
  about_me: string;
  
  // Representation
  representation_type: 'bar_advocate' | 'private_client' | undefined;
  
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

export const validateStep = (step: number, data: Partial<IntakeFormData>): string[] => {
  const errors: string[] = [];
  
  switch (step) {
    case 1: // Case Details
      if (!data.docket_number?.trim()) errors.push('Docket number is required');
      if (!data.court_name?.trim()) errors.push('Court name is required');
      break;
      
    case 2: // Client Information
      if (!data.first_name?.trim()) errors.push('First name is required');
      if (!data.last_name?.trim()) errors.push('Last name is required');
      if (!data.home_address?.trim()) errors.push('Home address is required');
      if (!data.email?.trim()) errors.push('Email is required');
      break;
      
    case 3: // Employment & Education
      if (data.employment_info?.employed) {
        if (!data.employment_info.employer_name?.trim()) errors.push('Employer name is required');
        if (!data.employment_info.job_title?.trim()) errors.push('Job title is required');
      }
      if (data.education_info?.in_school) {
        if (!data.education_info.school_name?.trim()) errors.push('School name is required');
        if (!data.education_info.school_location?.trim()) errors.push('School location is required');
      }
      break;
      
    case 8: // Files & Consent
      if (!data.consent_given) errors.push('Consent is required to submit the form');
      if (!data.e_signature?.full_name?.trim()) errors.push('Electronic signature is required');
      break;
  }
  
  return errors;
};
