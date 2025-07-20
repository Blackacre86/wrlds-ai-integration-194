
-- Create audit logs table for comprehensive tracking
CREATE TABLE public.audit_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL,
  resource_type TEXT NOT NULL,
  resource_id TEXT,
  details JSONB DEFAULT '{}',
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create email allow list for restricted signups
CREATE TABLE public.client_allowlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  invited_by UUID REFERENCES auth.users(id),
  invite_code TEXT UNIQUE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'used', 'expired')),
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create account lockout tracking
CREATE TABLE public.account_lockouts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  failed_attempts INTEGER DEFAULT 0,
  locked_until TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enhance client_intakes table with all required fields
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS arraignment_date DATE;
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS next_court_date DATE;
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS court_session TEXT;
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS ada_prosecutor TEXT;
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS bail_info JSONB DEFAULT '{}';
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS middle_name TEXT;
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS ssn_last4 TEXT;
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS mailing_address TEXT;
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS phone_numbers JSONB DEFAULT '[]';
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS emergency_contact JSONB DEFAULT '{}';
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS employment_info JSONB DEFAULT '{}';
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS education_info JSONB DEFAULT '{}';
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS family_info JSONB DEFAULT '{}';
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS substance_mental_health JSONB DEFAULT '{}';
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS immigration_info JSONB DEFAULT '{}';
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS criminal_history JSONB DEFAULT '{}';
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS representation_type TEXT CHECK (representation_type IN ('bar_advocate', 'private_client'));
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS uploaded_files JSONB DEFAULT '[]';
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS consent_given BOOLEAN DEFAULT FALSE;
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS e_signature JSONB DEFAULT '{}';
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS google_doc_url TEXT;
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS pdf_backup_url TEXT;
ALTER TABLE public.client_intakes ADD COLUMN IF NOT EXISTS progress_step INTEGER DEFAULT 1;

-- Enable RLS on new tables
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_allowlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.account_lockouts ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for audit_logs (admin access only for now)
CREATE POLICY "Authenticated users can view own audit logs" 
ON public.audit_logs 
FOR SELECT 
USING (auth.uid() = user_id);

-- Create RLS policies for client_allowlist (public read for email verification)
CREATE POLICY "Anyone can check email allowlist" 
ON public.client_allowlist 
FOR SELECT 
USING (true);

-- Create RLS policies for account_lockouts (system use)
CREATE POLICY "System can manage lockouts" 
ON public.account_lockouts 
FOR ALL 
USING (true);

-- Create function to log audit events
CREATE OR REPLACE FUNCTION public.log_audit_event(
  p_user_id UUID,
  p_action TEXT,
  p_resource_type TEXT,
  p_resource_id TEXT DEFAULT NULL,
  p_details JSONB DEFAULT '{}',
  p_ip_address INET DEFAULT NULL,
  p_user_agent TEXT DEFAULT NULL
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  audit_id UUID;
BEGIN
  INSERT INTO public.audit_logs (
    user_id, action, resource_type, resource_id, details, ip_address, user_agent
  ) VALUES (
    p_user_id, p_action, p_resource_type, p_resource_id, p_details, p_ip_address, p_user_agent
  ) RETURNING id INTO audit_id;
  
  RETURN audit_id;
END;
$$;

-- Create function to check failed login attempts
CREATE OR REPLACE FUNCTION public.check_account_lockout(p_email TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  lockout_record RECORD;
  result JSONB;
BEGIN
  SELECT * INTO lockout_record 
  FROM public.account_lockouts 
  WHERE email = p_email;
  
  IF lockout_record IS NULL THEN
    result := jsonb_build_object(
      'is_locked', false,
      'failed_attempts', 0,
      'locked_until', null
    );
  ELSE
    result := jsonb_build_object(
      'is_locked', (lockout_record.locked_until IS NOT NULL AND lockout_record.locked_until > now()),
      'failed_attempts', lockout_record.failed_attempts,
      'locked_until', lockout_record.locked_until
    );
  END IF;
  
  RETURN result;
END;
$$;

-- Create function to record failed login attempt
CREATE OR REPLACE FUNCTION public.record_failed_login(p_email TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_attempts INTEGER := 0;
BEGIN
  -- Get current failed attempts
  SELECT failed_attempts INTO current_attempts
  FROM public.account_lockouts
  WHERE email = p_email;
  
  IF current_attempts IS NULL THEN
    -- First failed attempt
    INSERT INTO public.account_lockouts (email, failed_attempts, updated_at)
    VALUES (p_email, 1, now());
  ELSE
    -- Increment failed attempts
    current_attempts := current_attempts + 1;
    
    IF current_attempts >= 5 THEN
      -- Lock account for 30 minutes after 5 failed attempts
      UPDATE public.account_lockouts
      SET failed_attempts = current_attempts,
          locked_until = now() + interval '30 minutes',
          updated_at = now()
      WHERE email = p_email;
    ELSE
      UPDATE public.account_lockouts
      SET failed_attempts = current_attempts,
          updated_at = now()
      WHERE email = p_email;
    END IF;
  END IF;
END;
$$;

-- Create function to reset failed login attempts on successful login
CREATE OR REPLACE FUNCTION public.reset_failed_login(p_email TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.account_lockouts
  SET failed_attempts = 0,
      locked_until = NULL,
      updated_at = now()
  WHERE email = p_email;
END;
$$;

-- Create updated_at trigger for account_lockouts
CREATE TRIGGER update_account_lockouts_updated_at
  BEFORE UPDATE ON public.account_lockouts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
