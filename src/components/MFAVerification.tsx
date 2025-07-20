import React, { useState } from 'react';
import { authenticator } from '@otplib/preset-default';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Smartphone, Key } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface MFAVerificationProps {
  user: any;
  onMFAVerified: () => void;
  onBackupCodeUsed?: () => void;
}

export default function MFAVerification({ user, onMFAVerified, onBackupCodeUsed }: MFAVerificationProps) {
  const [verificationCode, setVerificationCode] = useState('');
  const [useBackupCode, setUseBackupCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const verifyMFACode = async () => {
    if (!verificationCode) {
      toast({
        title: "Error",
        description: "Please enter a verification code",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Get user's MFA settings
      const { data: mfaSettings, error: mfaError } = await supabase
        .from('user_mfa_settings')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (mfaError || !mfaSettings) {
        throw new Error('MFA settings not found');
      }

      let isValid = false;

      if (useBackupCode) {
        // Verify backup code
        const backupCodes = mfaSettings.backup_codes as string[];
        isValid = backupCodes.includes(verificationCode.toUpperCase());
        
        if (isValid) {
          // Remove used backup code
          const updatedCodes = backupCodes.filter(code => code !== verificationCode.toUpperCase());
          await supabase
            .from('user_mfa_settings')
            .update({ backup_codes: updatedCodes })
            .eq('user_id', user.id);
          
          onBackupCodeUsed?.();
        }
      } else {
        // Verify TOTP code
        if (verificationCode.length !== 6 || !/^\d{6}$/.test(verificationCode)) {
          toast({
            title: "Error",
            description: "Please enter a valid 6-digit code",
            variant: "destructive"
          });
          return;
        }

        isValid = authenticator.verify({
          token: verificationCode,
          secret: mfaSettings.totp_secret,
        });
      }

      if (!isValid) {
        toast({
          title: "Invalid Code",
          description: useBackupCode 
            ? "Invalid backup code. Please try again." 
            : "Invalid verification code. Please try again.",
          variant: "destructive"
        });
        return;
      }

      // Log successful MFA verification
      await supabase.rpc('log_audit_event', {
        p_user_id: user.id,
        p_action: 'mfa_verification_success',
        p_resource_type: 'authentication',
        p_details: { method: useBackupCode ? 'backup_code' : 'totp' }
      });

      onMFAVerified();
    } catch (error: any) {
      console.error('MFA verification error:', error);
      
      // Log failed MFA verification
      await supabase.rpc('log_audit_event', {
        p_user_id: user.id,
        p_action: 'mfa_verification_failed',
        p_resource_type: 'authentication',
        p_details: { 
          method: useBackupCode ? 'backup_code' : 'totp',
          error: error.message 
        }
      });

      toast({
        title: "Error",
        description: error.message || "Failed to verify MFA code",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold">
            <Shield className="h-6 w-6" />
            Two-Factor Authentication
          </CardTitle>
          <CardDescription>
            Please verify your identity to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Your account is protected by two-factor authentication. 
              Please enter your verification code to continue.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="flex justify-center gap-4 mb-4">
              <Button
                variant={!useBackupCode ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setUseBackupCode(false);
                  setVerificationCode('');
                }}
                className="flex items-center gap-2"
              >
                <Smartphone className="h-4 w-4" />
                Authenticator App
              </Button>
              <Button
                variant={useBackupCode ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setUseBackupCode(true);
                  setVerificationCode('');
                }}
                className="flex items-center gap-2"
              >
                <Key className="h-4 w-4" />
                Backup Code
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="verification-code">
                {useBackupCode ? 'Backup Code' : 'Verification Code'}
              </Label>
              <Input
                id="verification-code"
                type="text"
                value={verificationCode}
                onChange={(e) => {
                  const value = useBackupCode 
                    ? e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8)
                    : e.target.value.replace(/\D/g, '').slice(0, 6);
                  setVerificationCode(value);
                }}
                placeholder={useBackupCode ? 'Enter backup code' : 'Enter 6-digit code'}
                maxLength={useBackupCode ? 8 : 6}
                className="text-center text-lg tracking-widest"
                autoComplete="one-time-code"
              />
              <p className="text-xs text-muted-foreground text-center">
                {useBackupCode 
                  ? 'Use one of your saved backup codes'
                  : 'Open your authenticator app and enter the 6-digit code'
                }
              </p>
            </div>

            <Button 
              onClick={verifyMFACode} 
              disabled={loading || !verificationCode || (!useBackupCode && verificationCode.length !== 6)}
              className="w-full"
            >
              {loading ? 'Verifying...' : 'Verify Code'}
            </Button>

            <div className="text-center">
              <Button
                variant="link"
                size="sm"
                onClick={() => {
                  setUseBackupCode(!useBackupCode);
                  setVerificationCode('');
                }}
                className="text-xs"
              >
                {useBackupCode 
                  ? "Use authenticator app instead" 
                  : "Lost your phone? Use backup code"
                }
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}