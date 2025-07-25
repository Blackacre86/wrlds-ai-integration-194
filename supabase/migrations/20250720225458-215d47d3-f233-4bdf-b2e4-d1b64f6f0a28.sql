
-- Add the missing about_me column to client_intakes table
ALTER TABLE public.client_intakes 
ADD COLUMN about_me TEXT;

-- Update the biographical_info JSONB structure to ensure consistency
UPDATE public.client_intakes 
SET biographical_info = COALESCE(biographical_info, '{}'::jsonb)
WHERE biographical_info IS NULL;

-- Update the contact_info JSONB structure to ensure consistency
UPDATE public.client_intakes 
SET contact_info = COALESCE(contact_info, '{}'::jsonb)
WHERE contact_info IS NULL;

-- Ensure all other JSONB fields have proper default structures
UPDATE public.client_intakes 
SET bail_info = COALESCE(bail_info, '{"bail_set": false}'::jsonb)
WHERE bail_info IS NULL;

UPDATE public.client_intakes 
SET phone_numbers = COALESCE(phone_numbers, '[{"type": "cell", "number": ""}]'::jsonb)
WHERE phone_numbers IS NULL;

UPDATE public.client_intakes 
SET emergency_contact = COALESCE(emergency_contact, '{"name": "", "relation": "", "phone": ""}'::jsonb)
WHERE emergency_contact IS NULL;

UPDATE public.client_intakes 
SET employment_info = COALESCE(employment_info, '{"employed": false, "unemployed": false}'::jsonb)
WHERE employment_info IS NULL;

UPDATE public.client_intakes 
SET education_info = COALESCE(education_info, '{"in_school": false, "highest_education": "", "school_location": ""}'::jsonb)
WHERE education_info IS NULL;

UPDATE public.client_intakes 
SET family_info = COALESCE(family_info, '{"marital_status": "", "children": []}'::jsonb)
WHERE family_info IS NULL;

UPDATE public.client_intakes 
SET substance_mental_health = COALESCE(substance_mental_health, '{"past_treatment": false, "current_medications": ""}'::jsonb)
WHERE substance_mental_health IS NULL;

UPDATE public.client_intakes 
SET immigration_info = COALESCE(immigration_info, '{"us_citizen": false, "prior_deportation": false}'::jsonb)
WHERE immigration_info IS NULL;

UPDATE public.client_intakes 
SET criminal_history = COALESCE(criminal_history, '{"open_cases": false, "probation_parole": false, "prior_record": false}'::jsonb)
WHERE criminal_history IS NULL;

UPDATE public.client_intakes 
SET e_signature = COALESCE(e_signature, '{"full_name": "", "date": ""}'::jsonb)
WHERE e_signature IS NULL;

UPDATE public.client_intakes 
SET charges = COALESCE(charges, '[]'::jsonb)
WHERE charges IS NULL;

UPDATE public.client_intakes 
SET uploaded_files = COALESCE(uploaded_files, '[]'::jsonb)
WHERE uploaded_files IS NULL;
