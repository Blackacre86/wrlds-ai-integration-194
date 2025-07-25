import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';
import { ArrowLeft, Mail } from 'lucide-react';
import SEO from '@/components/SEO';
import { loginRateLimiter, signupRateLimiter, DatabaseRateLimiter } from '@/utils/rateLimiter';
import { SessionFingerprintManager } from '@/utils/sessionFingerprinting';

export default function ClientAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [lockoutInfo, setLockoutInfo] = useState<{
    is_locked: boolean;
    failed_attempts: number;
    locked_until?: string;
  } | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [requestingAccess, setRequestingAccess] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Get reCAPTCHA site key from environment or fallback
  const RECAPTCHA_SITE_KEY = "6Ldp5IorAAAAAPD--nwFo4xKR_-1GBby5cy9e__3";

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);

      // Redirect authenticated users to portal
      if (session?.user) {
        navigate('/client-portal');
      }
    });

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        navigate('/client-portal');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const cleanupAuthState = () => {
    localStorage.removeItem('supabase.auth.token');
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        localStorage.removeItem(key);
      }
    });
    Object.keys(sessionStorage || {}).forEach(key => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        sessionStorage.removeItem(key);
      }
    });
  };

  const checkAccountLockout = async (email: string) => {
    try {
      const { data, error } = await supabase.rpc('check_account_lockout', {
        p_email: email
      });

      if (error) throw error;

      const lockoutData = data as {
        is_locked: boolean;
        failed_attempts: number;
        locked_until?: string;
      };
      setLockoutInfo(lockoutData);
      return lockoutData;
    } catch (error) {
      console.error('Error checking account lockout:', error);
      return null;
    }
  };

  const checkEmailAllowlist = async (email: string) => {
    try {
      const { data, error } = await supabase
        .from('client_allowlist')
        .select('*')
        .eq('email', email)
        .eq('status', 'approved')
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return !!data;
    } catch (error) {
      console.error('Error checking email allowlist:', error);
      return false;
    }
  };

  const requestAccessCode = async () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address first",
        variant: "destructive"
      });
      return;
    }

    setRequestingAccess(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: {
          type: 'access_request',
          email: email,
          name: 'Access Request',
          message: `Access request for client portal from ${email}`
        }
      });

      if (error) throw error;

      toast({
        title: "Access Request Sent",
        description: "Your access request has been sent to Summit Law Offices. We'll contact you with your access code soon."
      });
    } catch (error: any) {
      console.error('Error requesting access:', error);
      toast({
        title: "Error",
        description: "Failed to send access request. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setRequestingAccess(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    if (!recaptchaToken) {
      toast({
        title: "Error",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive"
      });
      return;
    }

    // Get IP address and fingerprint for enhanced security
    const ipAddress = await SessionFingerprintManager.getCurrentIP();
    const fingerprint = SessionFingerprintManager.generateFingerprint();

    // Check database rate limiting first
    const rateLimitCheck = await DatabaseRateLimiter.checkRateLimit(
      email,
      'login',
      ipAddress || undefined,
      5, // max attempts
      15 // window minutes
    );

    if (rateLimitCheck.isLimited) {
      const remainingMinutes = Math.ceil(rateLimitCheck.timeRemainingSeconds / 60);
      toast({
        title: "Account Temporarily Locked",
        description: `Too many failed login attempts. Please wait ${remainingMinutes} minutes before trying again.`,
        variant: "destructive"
      });
      return;
    }

    // Also check client-side rate limiting as fallback
    if (loginRateLimiter.isRateLimited(email)) {
      const remainingTime = Math.ceil(loginRateLimiter.getRemainingTime(email) / 1000 / 60);
      toast({
        title: "Too Many Attempts",
        description: `Please wait ${remainingTime} minutes before trying again.`,
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const lockoutData = await checkAccountLockout(email);
      if (lockoutData?.is_locked) {
        const lockedUntil = lockoutData.locked_until ? new Date(lockoutData.locked_until) : null;
        toast({
          title: "Account Locked",
          description: `Too many failed attempts. ${lockedUntil ? `Account is locked until ${lockedUntil.toLocaleString()}` : 'Please try again later.'}`,
          variant: "destructive"
        });
        return;
      }

      cleanupAuthState();
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {
        // Continue even if this fails
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        // Record failed attempt in database
        await DatabaseRateLimiter.recordAttempt(
          email,
          'login',
          ipAddress || undefined,
          5, // max attempts
          15, // window minutes
          30 // lockout minutes
        );
        
        // Also record in legacy system
        await supabase.rpc('record_failed_login', { p_email: email });
        loginRateLimiter.recordAttempt(email);
        
        // Log security event
        await supabase.rpc('log_security_event', {
          p_user_id: null,
          p_action: 'login_failed',
          p_resource_type: 'authentication',
          p_details: JSON.stringify({
            email,
            error: error.message,
            fingerprintHash: fingerprint.fingerprintHash
          }),
          p_ip_address: ipAddress,
          p_user_agent: navigator.userAgent,
          p_fingerprint_hash: fingerprint.fingerprintHash
        });
        
        throw error;
      }

      if (data.user) {
        // Reset rate limits on successful login
        await DatabaseRateLimiter.resetRateLimit(email, 'login', ipAddress || undefined);
        await supabase.rpc('reset_failed_login', { p_email: email });
        loginRateLimiter.reset(email);
        
        // Store session fingerprint
        if (data.session) {
          await SessionFingerprintManager.storeFingerprint(
            data.user.id,
            data.session.access_token.substring(0, 32),
            fingerprint,
            ipAddress || undefined
          );
        }
        
        // Log successful login
        await supabase.rpc('log_security_event', {
          p_user_id: data.user.id,
          p_action: 'login_success',
          p_resource_type: 'authentication',
          p_details: JSON.stringify({
            email,
            fingerprintHash: fingerprint.fingerprintHash
          }),
          p_ip_address: ipAddress,
          p_user_agent: navigator.userAgent,
          p_fingerprint_hash: fingerprint.fingerprintHash
        });
        
        window.location.href = '/client-portal';
      }
    } catch (error: any) {
      toast({
        title: "Sign In Error",
        description: error.message || "Failed to sign in",
        variant: "destructive"
      });
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    // Enhanced password validation
    if (password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive"
      });
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    if (!passwordRegex.test(password)) {
      toast({
        title: "Error",
        description: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
        variant: "destructive"
      });
      return;
    }

    if (!recaptchaToken) {
      toast({
        title: "Error",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      cleanupAuthState();
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {
        // Continue even if this fails
      }

      const redirectUrl = `${window.location.origin}/client-portal`;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl
        }
      });

      if (error) throw error;

      if (data.user) {
        toast({
          title: "Success",
          description: "Account created successfully! Please check your email to confirm your account."
        });

        const { error: profileError } = await supabase
          .from('client_profiles')
          .insert([{
            user_id: data.user.id,
            client_number: `CL-${Date.now()}`
          }]);

        if (profileError) {
          console.error('Error creating profile:', profileError);
        }
      }
    } catch (error: any) {
      toast({
        title: "Sign Up Error",
        description: error.message || "Failed to create account",
        variant: "destructive"
      });
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Client Portal Access - Summit Law Offices" 
        description="Secure access to your legal case information and documents. Sign in to the Summit Law Offices Client Portal." 
        keywords={['client portal', 'legal case access', 'Summit Law Offices', 'secure login', 'criminal defense attorney']} 
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted">
        {/* Header with Back to Site Navigation */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="flex items-center text-2xl font-bold hover:text-primary transition-colors">
                Summit Law
              </Link>
              <Button asChild variant="ghost" size="sm">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Main Site
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex items-center justify-center p-4 pt-8">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Client Portal</CardTitle>
              <CardDescription>
                Access your legal case information securely
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="signin">
                  <form onSubmit={handleSignIn} className="space-y-4">
                    {lockoutInfo?.is_locked && (
                      <Alert className="border-destructive">
                        <AlertDescription>
                          Account temporarily locked due to multiple failed login attempts. 
                          {lockoutInfo.locked_until && (
                            <> Locked until {new Date(lockoutInfo.locked_until).toLocaleString()}</>
                          )}
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    {lockoutInfo && !lockoutInfo.is_locked && lockoutInfo.failed_attempts > 0 && (
                      <Alert className="border-orange-500">
                        <AlertDescription>
                          Warning: {lockoutInfo.failed_attempts} failed login attempt(s). 
                          Account will be locked after 5 failed attempts.
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    <div className="space-y-2">
                      <Label htmlFor="signin-email">Email</Label>
                      <Input
                        id="signin-email"
                        type="email"
                        value={email}
                        onChange={async (e) => {
                          setEmail(e.target.value);
                          if (e.target.value) {
                            await checkAccountLockout(e.target.value);
                          }
                        }}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signin-password">Password</Label>
                      <Input
                        id="signin-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(token) => setRecaptchaToken(token)}
                        onExpired={() => setRecaptchaToken(null)}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={loading || !recaptchaToken || lockoutInfo?.is_locked}
                    >
                      {loading ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup">
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <Alert className="border-blue-500">
                      <AlertDescription>
                        Registration requires approval from Summit Law. Click "Request Access Code" to get started.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Access Code</Label>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={requestAccessCode}
                        disabled={requestingAccess || !email}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        {requestingAccess ? 'Requesting...' : 'Request Access Code'}
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password: 8+ chars, uppercase, lowercase, number"
                        required
                        minLength={8}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                    
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(token) => setRecaptchaToken(token)}
                        onExpired={() => setRecaptchaToken(null)}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={loading || !recaptchaToken}
                    >
                      {loading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                    
                    <Alert>
                      <AlertDescription>
                        By creating an account, you agree to provide accurate information for your legal case.
                        All information is protected by attorney-client privilege.
                      </AlertDescription>
                    </Alert>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
