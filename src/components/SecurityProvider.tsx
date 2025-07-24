import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSecureSession } from '@/hooks/useSecureSession';
import SessionTimeoutWarning from './SessionTimeoutWarning';
import { useToast } from '@/hooks/use-toast';
import { SessionFingerprintManager } from '@/utils/sessionFingerprinting';
import { DatabaseRateLimiter } from '@/utils/rateLimiter';

interface SecurityContextType {
  isSecure: boolean;
  logSecurityEvent: (event: string, details?: any) => Promise<void>;
  validateSession: () => Promise<boolean>;
  checkSuspiciousActivity: () => Promise<boolean>;
  sessionFingerprint: string | null;
}

const SecurityContext = createContext<SecurityContextType | null>(null);

export function useSecurityContext() {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurityContext must be used within SecurityProvider');
  }
  return context;
}

interface SecurityProviderProps {
  children: React.ReactNode;
}

export default function SecurityProvider({ children }: SecurityProviderProps) {
  const { user, session, logSecurityEvent, validateSession } = useSecureSession();
  const [isSecure, setIsSecure] = useState(false);
  const [sessionFingerprint, setSessionFingerprint] = useState<string | null>(null);
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  const { toast } = useToast();

  // Initialize session fingerprinting and IP detection
  useEffect(() => {
    const initializeSecurity = async () => {
      // Get browser fingerprint
      const fingerprint = SessionFingerprintManager.generateFingerprint();
      setSessionFingerprint(fingerprint.fingerprintHash);

      // Get IP address
      const ip = await SessionFingerprintManager.getCurrentIP();
      setIpAddress(ip);

      // Store fingerprint if user is logged in
      if (user && session) {
        await SessionFingerprintManager.storeFingerprint(
          user.id,
          session.access_token.substring(0, 32), // Use part of access token as session ID
          fingerprint,
          ip || undefined
        );

        // Log security event
        await logSecurityEvent('session_fingerprint_created', {
          fingerprintHash: fingerprint.fingerprintHash,
          ipAddress: ip,
          userAgent: fingerprint.userAgent
        });
      }
    };

    initializeSecurity();
  }, [user, session, logSecurityEvent]);

  useEffect(() => {
    const checkSecurity = async () => {
      if (!session) {
        setIsSecure(false);
        return;
      }

      const validation = await validateSession(session);
      if (!validation.isValid) {
        toast({
          title: "Security Alert",
          description: "Session validation failed. Please log in again.",
          variant: "destructive"
        });
        setIsSecure(false);
        return;
      }

      // Check for suspicious activity
      if (user && sessionFingerprint) {
        const suspiciousActivity = await SessionFingerprintManager.detectSuspiciousActivity(
          user.id,
          ipAddress || undefined,
          sessionFingerprint
        );

        if (suspiciousActivity.isSuspicious && suspiciousActivity.riskScore > 75) {
          toast({
            title: "Suspicious Activity Detected",
            description: "Your account may be compromised. Please verify your identity.",
            variant: "destructive"
          });
          
          await logSecurityEvent('suspicious_activity_detected', {
            riskScore: suspiciousActivity.riskScore,
            recentLogins: suspiciousActivity.recentLogins,
            differentIps: suspiciousActivity.differentIps,
            differentFingerprints: suspiciousActivity.differentFingerprints
          });
        }
      }

      setIsSecure(true);
    };

    checkSecurity();
  }, [session, validateSession, toast, user, sessionFingerprint, ipAddress, logSecurityEvent]);

  const handleExtendSession = async () => {
    const validation = await validateSession(session);
    if (validation.isValid) {
      await logSecurityEvent('session_extended');
      
      // Update fingerprint activity
      if (user && session && sessionFingerprint) {
        await SessionFingerprintManager.updateActivity(
          user.id,
          session.access_token.substring(0, 32),
          sessionFingerprint
        );
      }
      
      setIsSecure(true);
    }
  };

  const checkSuspiciousActivity = async (): Promise<boolean> => {
    if (!user || !sessionFingerprint) return false;
    
    const suspiciousActivity = await SessionFingerprintManager.detectSuspiciousActivity(
      user.id,
      ipAddress || undefined,
      sessionFingerprint
    );
    
    return suspiciousActivity.isSuspicious;
  };

  const contextValue: SecurityContextType = {
    isSecure,
    logSecurityEvent,
    validateSession: async () => {
      if (!session) return false;
      const validation = await validateSession(session);
      return validation.isValid;
    },
    checkSuspiciousActivity,
    sessionFingerprint
  };

  return (
    <SecurityContext.Provider value={contextValue}>
      {user && (
        <SessionTimeoutWarning onExtendSession={handleExtendSession} />
      )}
      {children}
    </SecurityContext.Provider>
  );
}