import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.52.0";
import { authenticator } from "https://esm.sh/otplib@12.0.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type VerifyMethod = "totp" | "backup";

interface VerifyRequest {
  user_id: string;
  method: VerifyMethod;
  code: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as VerifyRequest;
    const { user_id, method, code } = body || {};

    if (!user_id || !method || !code) {
      return new Response(
        JSON.stringify({ valid: false, error: "Missing parameters" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceKey) {
      console.error("Missing Supabase environment variables");
      return new Response(
        JSON.stringify({ valid: false, error: "Server misconfiguration" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabase = createClient(supabaseUrl, serviceKey);

    // Fetch MFA settings securely on the server
    const { data: mfaSettings, error: mfaError } = await supabase
      .from("user_mfa_settings")
      .select("totp_secret, backup_codes")
      .eq("user_id", user_id)
      .single();

    if (mfaError || !mfaSettings) {
      console.error("MFA settings not found or error:", mfaError);
      await supabase.rpc("log_audit_event", {
        p_user_id: user_id,
        p_action: "mfa_verification_failed",
        p_resource_type: "authentication",
        p_details: { method, error: "settings_not_found" },
      });
      return new Response(
        JSON.stringify({ valid: false, error: "MFA settings not found" }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    let valid = false;

    if (method === "totp") {
      // Basic code sanity check
      if (!/^\d{6}$/.test(code)) {
        return new Response(
          JSON.stringify({ valid: false, error: "invalid_code_format" }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      try {
        valid = authenticator.verify({ token: code, secret: mfaSettings.totp_secret });
      } catch (e) {
        console.error("TOTP verify error:", e);
        valid = false;
      }
    } else if (method === "backup") {
      const codeUpper = code.toUpperCase();
      const backupCodes: string[] = (mfaSettings.backup_codes || []) as string[];
      valid = backupCodes.includes(codeUpper);

      if (valid) {
        // Remove used backup code
        const updated = backupCodes.filter((c) => c !== codeUpper);
        const { error: updateErr } = await supabase
          .from("user_mfa_settings")
          .update({ backup_codes: updated })
          .eq("user_id", user_id);
        if (updateErr) {
          console.error("Failed to consume backup code:", updateErr);
        }
      }
    } else {
      return new Response(
        JSON.stringify({ valid: false, error: "invalid_method" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Log audit
    await supabase.rpc("log_audit_event", {
      p_user_id: user_id,
      p_action: valid ? "mfa_verification_success" : "mfa_verification_failed",
      p_resource_type: "authentication",
      p_details: { method },
    });

    return new Response(
      JSON.stringify({ valid }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error) {
    console.error("verify-mfa function error:", error);
    return new Response(
      JSON.stringify({ valid: false, error: "server_error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});