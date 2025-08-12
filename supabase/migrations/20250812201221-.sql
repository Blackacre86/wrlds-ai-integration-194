-- Secure client_allowlist: enable RLS and remove any public access; rely on safe RPC for checks

-- 1) Enable Row Level Security (RLS)
ALTER TABLE public.client_allowlist ENABLE ROW LEVEL SECURITY;

-- 2) Drop any existing permissive policies to avoid accidental exposure
DROP POLICY IF EXISTS "Public can read client allowlist" ON public.client_allowlist;
DROP POLICY IF EXISTS "Anyone can read client allowlist" ON public.client_allowlist;
DROP POLICY IF EXISTS "Allowlist readable by everyone" ON public.client_allowlist;
DROP POLICY IF EXISTS "Authenticated can read client allowlist" ON public.client_allowlist;

-- 3) Ensure no direct access via SQL grants
REVOKE ALL ON TABLE public.client_allowlist FROM PUBLIC;
REVOKE ALL ON TABLE public.client_allowlist FROM anon;
REVOKE ALL ON TABLE public.client_allowlist FROM authenticated;

-- 4) Keep zero policies so RLS denies ALL direct access by default (most secure)
--    Access should go through the existing SECURITY DEFINER function below.

-- 5) Create or replace safe RPC to check allowlist status without exposing emails
CREATE OR REPLACE FUNCTION public.check_client_allowlist(p_email text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  rec RECORD;
  result jsonb;
BEGIN
  SELECT id, email, status, expires_at INTO rec
  FROM public.client_allowlist
  WHERE lower(email) = lower(p_email)
  ORDER BY created_at DESC
  LIMIT 1;

  IF rec IS NULL THEN
    result := jsonb_build_object(
      'exists', false,
      'status', NULL,
      'is_valid', false,
      'reason', 'not_found'
    );
  ELSE
    result := jsonb_build_object(
      'exists', true,
      'status', rec.status,
      'is_valid', (rec.expires_at IS NULL OR rec.expires_at > now())
    );
  END IF;

  RETURN result;
END;
$function$;

-- 6) Lock down function execution to web clients only
REVOKE ALL ON FUNCTION public.check_client_allowlist(p_email text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.check_client_allowlist(p_email text) TO anon, authenticated;