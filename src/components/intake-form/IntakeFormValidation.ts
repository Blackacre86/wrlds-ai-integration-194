
import { z } from 'zod';

export const caseDetailsSchema = z.object({
  docket_number: z.string().min(1, "Docket number is required"),
  court_name: z.string().min(1, "Court name is required"),
  arraignment_date: z.string().optional(),
  next_court_date: z.string().optional(),
  court_session: z.string().optional(),
  ada_prosecutor: z.string().optional(),
  bail_info: z.object({
    bail_set: z.boolean(),
    bail_amount: z.string().optional(),
    bail_conditions: z.string().optional(),
  }),
  charges: z.array(z.object({
    charge_name: z.string(),
    statute_code: z.string(),
    full_description: z.string(),
  })).min(1, "At least one charge is required"),
});

export const clientInfoSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  middle_name: z.string().optional(),
  last_name: z.string().min(1, "Last name is required"),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  ssn_last4: z.string().optional(),
  home_address: z.string().min(1, "Home address is required"),
  mailing_address: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone_numbers: z.array(z.object({
    type: z.string(),
    number: z.string().min(1, "Phone number is required"),
  })).min(1, "At least one phone number is required"),
  emergency_contact: z.object({
    name: z.string().optional(),
    relation: z.string().optional(),
    phone: z.string().optional(),
  }),
});

export const employmentEducationSchema = z.object({
  employment_info: z.object({
    employed: z.boolean(),
    employer_name: z.string().optional(),
    job_title: z.string().optional(),
    work_address: z.string().optional(),
    work_hours: z.string().optional(),
  }),
  education_info: z.object({
    in_school: z.boolean(),
    school_name: z.string().optional(),
    year_grade: z.string().optional(),
  }),
});

export const familyHealthSchema = z.object({
  family_info: z.object({
    marital_status: z.string().optional(),
    spouse_partner_name: z.string().optional(),
    children: z.array(z.object({
      name: z.string(),
      age: z.string(),
    })),
    other_dependents: z.string().optional(),
  }),
  substance_mental_health: z.object({
    past_treatment: z.boolean(),
    treatment_details: z.string().optional(),
    current_medications: z.string(),
    mental_health_diagnoses: z.string().optional(),
    doctor_counselor_contact: z.string().optional(),
  }),
});

export const immigrationHistorySchema = z.object({
  immigration_info: z.object({
    us_citizen: z.boolean(),
    immigration_status: z.string().optional(),
    prior_deportation: z.boolean(),
    deportation_details: z.string().optional(),
  }),
  criminal_history: z.object({
    open_cases: z.boolean(),
    open_cases_details: z.string().optional(),
    probation_parole: z.boolean(),
    probation_details: z.string().optional(),
    prior_record: z.boolean(),
    prior_record_summary: z.string().optional(),
  }),
});

export const representationFactsSchema = z.object({
  representation_type: z.enum(['bar_advocate', 'private_client'], {
    required_error: "Please select a representation type",
  }),
  case_facts: z.string().min(50, "Please provide a detailed description (at least 50 characters)"),
});

export const filesConsentSchema = z.object({
  uploaded_files: z.array(z.object({
    name: z.string(),
    type: z.string(),
    url: z.string(),
  })),
  consent_given: z.boolean().refine(val => val === true, "Consent is required to proceed"),
  e_signature: z.object({
    full_name: z.string().min(1, "Full name is required for signature"),
    date: z.string().min(1, "Date is required for signature"),
    signature_data: z.string().optional(),
  }),
});

export const fullIntakeSchema = caseDetailsSchema
  .merge(clientInfoSchema)
  .merge(employmentEducationSchema)
  .merge(familyHealthSchema)
  .merge(immigrationHistorySchema)
  .merge(representationFactsSchema)
  .merge(filesConsentSchema);

export type IntakeFormData = z.infer<typeof fullIntakeSchema>;
