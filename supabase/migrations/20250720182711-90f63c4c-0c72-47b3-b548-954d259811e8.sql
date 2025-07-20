
-- Fix all database functions with proper search_path settings
CREATE OR REPLACE FUNCTION public.search_content_by_similarity(query_embedding vector, match_threshold double precision DEFAULT 0.7, match_count integer DEFAULT 10, filter_content_type text DEFAULT NULL::text, filter_practice_area text DEFAULT NULL::text)
 RETURNS TABLE(id uuid, content_id text, content_type text, title text, content_text text, practice_area text, similarity double precision)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
BEGIN
  RETURN QUERY
  SELECT 
    ce.id,
    ce.content_id,
    ce.content_type,
    ce.title,
    ce.content_text,
    ce.practice_area,
    1 - (ce.embedding <=> query_embedding) as similarity
  FROM public.content_embeddings ce
  WHERE 
    (filter_content_type IS NULL OR ce.content_type = filter_content_type)
    AND (filter_practice_area IS NULL OR ce.practice_area = filter_practice_area)
    AND (1 - (ce.embedding <=> query_embedding)) > match_threshold
  ORDER BY ce.embedding <=> query_embedding
  LIMIT match_count;
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.log_audit_event(p_user_id uuid, p_action text, p_resource_type text, p_resource_id text DEFAULT NULL::text, p_details jsonb DEFAULT '{}'::jsonb, p_ip_address inet DEFAULT NULL::inet, p_user_agent text DEFAULT NULL::text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
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
$function$;

CREATE OR REPLACE FUNCTION public.check_account_lockout(p_email text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
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
$function$;

CREATE OR REPLACE FUNCTION public.record_failed_login(p_email text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
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
$function$;

CREATE OR REPLACE FUNCTION public.reset_failed_login(p_email text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
BEGIN
  UPDATE public.account_lockouts
  SET failed_attempts = 0,
      locked_until = NULL,
      updated_at = now()
  WHERE email = p_email;
END;
$function$;

-- Add MFA tables for enhanced security
CREATE TABLE IF NOT EXISTS public.user_mfa_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  totp_secret TEXT,
  backup_codes TEXT[],
  is_mfa_enabled BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add file uploads table for intake documents
CREATE TABLE IF NOT EXISTS public.client_intake_files (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  intake_id UUID REFERENCES client_intakes(id) ON DELETE CASCADE NOT NULL,
  file_name TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  file_path TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  scanned_at TIMESTAMP WITH TIME ZONE,
  scan_result TEXT,
  is_safe BOOLEAN DEFAULT NULL
);

-- Enable RLS on new tables
ALTER TABLE public.user_mfa_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_intake_files ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for MFA settings
CREATE POLICY "Users can manage their own MFA settings" 
ON public.user_mfa_settings 
FOR ALL 
USING (auth.uid() = user_id);

-- Create RLS policies for intake files
CREATE POLICY "Users can manage their own intake files" 
ON public.client_intake_files 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM client_intakes 
    WHERE id = intake_id AND user_id = auth.uid()
  )
);

-- Add updated_at trigger for MFA settings
CREATE TRIGGER update_user_mfa_settings_updated_at
  BEFORE UPDATE ON public.user_mfa_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
