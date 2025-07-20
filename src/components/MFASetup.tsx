import React, { useState, useEffect } from 'react';
import { authenticator } from '@otplib/preset-default';
import QRCode from 'qrcode';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Shield, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface MFASetupProps {
  user: any;
  onMFAEnabled: () => void;
}

export default function MFASetup({ user, onMFAEnabled }: MFASetupProps) {
  const [secret, setSecret] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [step, setStep] = useState<'setup' | 'verify' | 'backup'>('setup');
  const [loading, setLoading] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (step === 'setup') {
      generateMFASecret();
    }
  }, [step]);

  const generateMFASecret = async () => {
    try {
      const newSecret = authenticator.generateSecret();
      setSecret(newSecret);
      
      const otpauthUrl = authenticator.keyuri(
        user.email,
        'Summit Law Offices',
        newSecret
      );
      
      const qrUrl = await QRCode.toDataURL(otpauthUrl);
      setQrCodeUrl(qrUrl);
    } catch (error) {
      console.error('Error generating MFA secret:', error);
      toast({
        title: "Error",
        description: "Failed to generate MFA secret",
        variant: "destructive"
      });
    }
  };

  const generateBackupCodes = () => {
    const codes = [];
    for (let i = 0; i < 10; i++) {
      codes.push(Math.random().toString(36).substring(2, 10).toUpperCase());
    }
    return codes;
  };

  const verifyMFACode = async () => {
    if (!verificationCode || verificationCode.length !== 6) {
      toast({
        title: "Error",
        description: "Please enter a valid 6-digit code",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const isValid = authenticator.verify({
        token: verificationCode,
        secret: secret,
      });

      if (!isValid) {
        toast({
          title: "Invalid Code",
          description: "The verification code is incorrect. Please try again.",
          variant: "destructive"
        });
        return;
      }

      // Generate backup codes
      const codes = generateBackupCodes();
      setBackupCodes(codes);

      // Save MFA settings to database
      const { error } = await supabase
        .from('user_mfa_settings')
        .upsert({
          user_id: user.id,
          totp_secret: secret,
          backup_codes: codes,
          is_mfa_enabled: true,
        });

      if (error) throw error;

      setStep('backup');
      toast({
        title: "Success",
        description: "Multi-factor authentication has been enabled successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to enable MFA",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(null), 2000);
      toast({
        title: "Copied",
        description: "Code copied to clipboard",
      });
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const completeMFASetup = () => {
    onMFAEnabled();
  };

  return (
    <div className="space-y-6">
      {step === 'setup' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Set Up Two-Factor Authentication
            </CardTitle>
            <CardDescription>
              Secure your account with an additional layer of protection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Required for Security:</strong> All client accounts must have 
                two-factor authentication enabled to protect sensitive legal information.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div className="text-sm">
                <p className="font-medium mb-2">Step 1: Install an authenticator app</p>
                <p className="text-muted-foreground">
                  Download Google Authenticator, Authy, or any TOTP-compatible app on your phone.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-sm">Step 2: Scan this QR code</p>
                {qrCodeUrl && (
                  <div className="flex flex-col items-center space-y-2">
                    <img 
                      src={qrCodeUrl} 
                      alt="MFA QR Code" 
                      className="w-48 h-48 border rounded-lg"
                    />
                    <p className="text-xs text-muted-foreground text-center">
                      Can't scan? Enter this code manually: 
                    </p>
                    <div className="flex items-center gap-2 bg-muted p-2 rounded font-mono text-sm">
                      <span className="break-all">{secret}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(secret)}
                        className="h-6 w-6 p-0"
                      >
                        {copiedCode === secret ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="verification-code">Step 3: Enter verification code</Label>
                <Input
                  id="verification-code"
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  className="text-center text-lg tracking-widest"
                />
              </div>

              <Button 
                onClick={verifyMFACode} 
                disabled={loading || verificationCode.length !== 6}
                className="w-full"
              >
                {loading ? 'Verifying...' : 'Verify & Enable MFA'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 'backup' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              MFA Enabled Successfully!
            </CardTitle>
            <CardDescription>
              Save these backup codes in a secure location
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> Store these backup codes securely. 
                Each code can only be used once to access your account if you lose your phone.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-2 gap-2">
              {backupCodes.map((code, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between bg-muted p-2 rounded font-mono text-sm"
                >
                  <span>{code}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(code)}
                    className="h-6 w-6 p-0"
                  >
                    {copiedCode === code ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => copyToClipboard(backupCodes.join('\n'))}
                className="flex-1"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy All Codes
              </Button>
              <Button onClick={completeMFASetup} className="flex-1">
                Continue to Portal
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}