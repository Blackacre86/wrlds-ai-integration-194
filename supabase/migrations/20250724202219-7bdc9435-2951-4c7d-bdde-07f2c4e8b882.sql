-- Security Enhancement Migration
-- Phase 1: Critical Infrastructure Security

-- 1. Create database-level rate limiting with IP tracking
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  identifier TEXT NOT NULL, -- email, IP, or user_id
  ip_address INET,
  action_type TEXT NOT NULL, -- 'login', 'signup', 'mfa', 'password_reset'
  attempt_count INTEGER NOT NULL DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  locked_until TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for efficient lookups
CREATE INDEX idx_rate_limits_identifier_action ON public.rate_limits(identifier, action_type);
CREATE INDEX idx_rate_limits_ip_action ON public.rate_limits(ip_address, action_type);
CREATE INDEX idx_rate_limits_window_start ON public.rate_limits(window_start);

-- Enable RLS
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Create policies for rate_limits (admin only)
CREATE POLICY "Rate limits are admin only" 
ON public.rate_limits 
FOR ALL 
USING (false);

-- 2. Create session fingerprinting table
CREATE TABLE IF NOT EXISTS public.session_fingerprints (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  session_id TEXT NOT NULL,
  fingerprint_hash TEXT NOT NULL,
  ip_address INET,
  user_agent TEXT,
  screen_resolution TEXT,
  timezone TEXT,
  language TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_seen TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for efficient lookups
CREATE INDEX idx_session_fingerprints_user_id ON public.session_fingerprints(user_id);
CREATE INDEX idx_session_fingerprints_session_id ON public.session_fingerprints(session_id);
CREATE INDEX idx_session_fingerprints_fingerprint ON public.session_fingerprints(fingerprint_hash);

-- Enable RLS
ALTER TABLE public.session_fingerprints ENABLE ROW LEVEL SECURITY;

-- Create policies for session fingerprints
CREATE POLICY "Users can view their own session fingerprints" 
ON public.session_fingerprints 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own session fingerprints" 
ON public.session_fingerprints 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own session fingerprints" 
ON public.session_fingerprints 
FOR UPDATE 
USING (auth.uid() = user_id);

-- 3. Encrypt MFA backup codes (update existing table)
-- Add encryption key and encrypted backup codes columns
ALTER TABLE public.user_mfa_settings 
ADD COLUMN IF NOT EXISTS backup_codes_encrypted TEXT,
ADD COLUMN IF NOT EXISTS backup_codes_key_id TEXT;

-- 4. Enhanced rate limiting function with IP tracking
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_identifier TEXT,
  p_ip_address INET,
  p_action_type TEXT,
  p_max_attempts INTEGER DEFAULT 5,
  p_window_minutes INTEGER DEFAULT 15
) RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  rate_limit_record RECORD;
  window_start_time TIMESTAMP WITH TIME ZONE;
  is_locked BOOLEAN := false;
  attempts_count INTEGER := 0;
  time_remaining INTEGER := 0;
BEGIN
  window_start_time := now() - (p_window_minutes || ' minutes')::INTERVAL;
  
  -- Check existing rate limit record
  SELECT * INTO rate_limit_record
  FROM public.rate_limits
  WHERE (identifier = p_identifier OR ip_address = p_ip_address)
    AND action_type = p_action_type
    AND window_start > window_start_time
  ORDER BY window_start DESC
  LIMIT 1;
  
  IF rate_limit_record IS NOT NULL THEN
    attempts_count := rate_limit_record.attempt_count;
    
    -- Check if currently locked
    IF rate_limit_record.locked_until IS NOT NULL AND rate_limit_record.locked_until > now() THEN
      is_locked := true;
      time_remaining := EXTRACT(EPOCH FROM (rate_limit_record.locked_until - now()))::INTEGER;
    END IF;
  END IF;
  
  RETURN jsonb_build_object(
    'is_limited', is_locked,
    'attempts_used', attempts_count,
    'max_attempts', p_max_attempts,
    'time_remaining_seconds', time_remaining,
    'window_minutes', p_window_minutes
  );
END;
$$;

-- 5. Function to record rate limit attempt
CREATE OR REPLACE FUNCTION public.record_rate_limit_attempt(
  p_identifier TEXT,
  p_ip_address INET,
  p_action_type TEXT,
  p_max_attempts INTEGER DEFAULT 5,
  p_window_minutes INTEGER DEFAULT 15,
  p_lockout_minutes INTEGER DEFAULT 30
) RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  rate_limit_record RECORD;
  window_start_time TIMESTAMP WITH TIME ZONE;
  new_attempt_count INTEGER;
  should_lock BOOLEAN := false;
  lockout_until TIMESTAMP WITH TIME ZONE := NULL;
BEGIN
  window_start_time := now() - (p_window_minutes || ' minutes')::INTERVAL;
  
  -- Get or create rate limit record
  SELECT * INTO rate_limit_record
  FROM public.rate_limits
  WHERE (identifier = p_identifier OR ip_address = p_ip_address)
    AND action_type = p_action_type
    AND window_start > window_start_time
  ORDER BY window_start DESC
  LIMIT 1;
  
  IF rate_limit_record IS NOT NULL THEN
    -- Update existing record
    new_attempt_count := rate_limit_record.attempt_count + 1;
    
    IF new_attempt_count >= p_max_attempts THEN
      should_lock := true;
      lockout_until := now() + (p_lockout_minutes || ' minutes')::INTERVAL;
    END IF;
    
    UPDATE public.rate_limits
    SET attempt_count = new_attempt_count,
        locked_until = lockout_until,
        updated_at = now()
    WHERE id = rate_limit_record.id;
  ELSE
    -- Create new record
    new_attempt_count := 1;
    
    INSERT INTO public.rate_limits (
      identifier, ip_address, action_type, attempt_count, window_start
    ) VALUES (
      p_identifier, p_ip_address, p_action_type, new_attempt_count, now()
    );
  END IF;
  
  RETURN jsonb_build_object(
    'attempts_used', new_attempt_count,
    'max_attempts', p_max_attempts,
    'is_locked', should_lock,
    'locked_until', lockout_until
  );
END;
$$;

-- 6. Function to reset rate limit (for successful login)
CREATE OR REPLACE FUNCTION public.reset_rate_limit(
  p_identifier TEXT,
  p_ip_address INET,
  p_action_type TEXT
) RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  DELETE FROM public.rate_limits
  WHERE (identifier = p_identifier OR ip_address = p_ip_address)
    AND action_type = p_action_type;
END;
$$;

-- 7. Enhanced audit logging with IP and fingerprint tracking
CREATE OR REPLACE FUNCTION public.log_security_event(
  p_user_id UUID,
  p_action TEXT,
  p_resource_type TEXT,
  p_resource_id TEXT DEFAULT NULL,
  p_details JSONB DEFAULT '{}',
  p_ip_address INET DEFAULT NULL,
  p_user_agent TEXT DEFAULT NULL,
  p_fingerprint_hash TEXT DEFAULT NULL
) RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  audit_id UUID;
  enhanced_details JSONB;
BEGIN
  -- Enhance details with security context
  enhanced_details := p_details || jsonb_build_object(
    'timestamp', now(),
    'fingerprint_hash', p_fingerprint_hash,
    'security_level', CASE 
      WHEN p_action LIKE '%_failed' THEN 'high'
      WHEN p_action LIKE '%_suspicious' THEN 'critical'
      ELSE 'normal'
    END
  );
  
  INSERT INTO public.audit_logs (
    user_id, action, resource_type, resource_id, details, ip_address, user_agent
  ) VALUES (
    p_user_id, p_action, p_resource_type, p_resource_id, enhanced_details, p_ip_address, p_user_agent
  ) RETURNING id INTO audit_id;
  
  RETURN audit_id;
END;
$$;

-- 8. Function to detect suspicious activity
CREATE OR REPLACE FUNCTION public.detect_suspicious_activity(
  p_user_id UUID,
  p_ip_address INET,
  p_fingerprint_hash TEXT
) RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  recent_logins INTEGER;
  different_ips INTEGER;
  different_fingerprints INTEGER;
  result JSONB;
  risk_score INTEGER := 0;
BEGIN
  -- Count recent login attempts (last hour)
  SELECT COUNT(*) INTO recent_logins
  FROM public.audit_logs
  WHERE user_id = p_user_id
    AND action = 'login_attempt'
    AND created_at > now() - interval '1 hour';
  
  -- Count different IPs in last 24 hours
  SELECT COUNT(DISTINCT ip_address) INTO different_ips
  FROM public.audit_logs
  WHERE user_id = p_user_id
    AND created_at > now() - interval '24 hours'
    AND ip_address IS NOT NULL;
  
  -- Count different fingerprints in last 24 hours
  SELECT COUNT(DISTINCT fingerprint_hash) INTO different_fingerprints
  FROM public.session_fingerprints
  WHERE user_id = p_user_id
    AND created_at > now() - interval '24 hours';
  
  -- Calculate risk score
  IF recent_logins > 10 THEN risk_score := risk_score + 30; END IF;
  IF different_ips > 3 THEN risk_score := risk_score + 25; END IF;
  IF different_fingerprints > 2 THEN risk_score := risk_score + 20; END IF;
  
  result := jsonb_build_object(
    'risk_score', risk_score,
    'recent_logins', recent_logins,
    'different_ips', different_ips,
    'different_fingerprints', different_fingerprints,
    'is_suspicious', risk_score > 50
  );
  
  RETURN result;
END;
$$;

-- 9. Cleanup old rate limits (runs via trigger or cron)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Delete rate limits older than 24 hours
  DELETE FROM public.rate_limits
  WHERE created_at < now() - interval '24 hours';
  
  -- Delete inactive session fingerprints older than 30 days
  DELETE FROM public.session_fingerprints
  WHERE last_seen < now() - interval '30 days'
    AND is_active = false;
END;
$$;