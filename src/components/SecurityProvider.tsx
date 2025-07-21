import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSecureSession } from '@/hooks/useSecureSession';
import SessionTimeoutWarning from './SessionTimeoutWarning';
import { useToast } from '@/hooks/use-toast';

interface SecurityContextType {
  isSecure: boolean;
  logSecurityEvent: (event: string, details?: any) => Promise<void>;
  validateSession: () => Promise<boolean>;
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
  const { toast } = useToast();

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
      } else {
        setIsSecure(true);
      }
    };

    checkSecurity();
  }, [session, validateSession, toast]);

  const handleExtendSession = async () => {
    const validation = await validateSession(session);
    if (validation.isValid) {
      await logSecurityEvent('session_extended');
      setIsSecure(true);
    }
  };

  const contextValue: SecurityContextType = {
    isSecure,
    logSecurityEvent,
    validateSession: async () => {
      if (!session) return false;
      const validation = await validateSession(session);
      return validation.isValid;
    }
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