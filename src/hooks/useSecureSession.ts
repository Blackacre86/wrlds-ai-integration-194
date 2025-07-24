import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

interface SecurityValidation {
  isValid: boolean;
  reason?: string;
}

export function useSecureSession() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const validateSession = async (currentSession: Session | null): Promise<SecurityValidation> => {
    if (!currentSession) {
      return { isValid: false, reason: 'No session found' };
    }

    // Check if session is expired
    const now = Date.now();
    const expiresAt = new Date(currentSession.expires_at || 0).getTime();
    
    if (now >= expiresAt) {
      return { isValid: false, reason: 'Session expired' };
    }

    // Check if session is about to expire (less than 5 minutes left)
    const timeLeft = expiresAt - now;
    const fiveMinutes = 5 * 60 * 1000;
    
    if (timeLeft < fiveMinutes) {
      try {
        // Try to refresh the session
        const { data, error } = await supabase.auth.refreshSession();
        if (error || !data.session) {
          return { isValid: false, reason: 'Failed to refresh session' };
        }
        return { isValid: true };
      } catch (error) {
        return { isValid: false, reason: 'Session refresh failed' };
      }
    }

    return { isValid: true };
  };

  const logSecurityEvent = async (event: string, details: any = {}) => {
    if (!user) return;
    
    try {
      await supabase.rpc('log_audit_event', {
        p_user_id: user.id,
        p_action: event,
        p_resource_type: 'session',
        p_details: details,
        p_ip_address: null, // Could be enhanced to get real IP
        p_user_agent: navigator.userAgent
      });
    } catch (error) {
      console.error('Failed to log security event:', error);
    }
  };

  const secureSignOut = async () => {
    if (user) {
      await logSecurityEvent('logout', { timestamp: new Date().toISOString() });
    }
    
    // Clear all auth state
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        localStorage.removeItem(key);
      }
    });
    
    await supabase.auth.signOut({ scope: 'global' });
    window.location.href = '/auth';
  };

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        // Set up auth state listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            if (!mounted) return;

            if (event === 'SIGNED_IN' && session) {
              const validation = await validateSession(session);
              if (validation.isValid) {
                setSession(session);
                setUser(session.user);
                await logSecurityEvent('login', { timestamp: new Date().toISOString() });
              } else {
                await secureSignOut();
                return;
              }
            } else if (event === 'SIGNED_OUT') {
              setSession(null);
              setUser(null);
            } else if (event === 'TOKEN_REFRESHED' && session) {
              setSession(session);
              setUser(session.user);
            }
          }
        );

        // Check for existing session
        const { data: { session: existingSession } } = await supabase.auth.getSession();
        if (existingSession && mounted) {
          const validation = await validateSession(existingSession);
          if (validation.isValid) {
            setSession(existingSession);
            setUser(existingSession.user);
          } else {
            await secureSignOut();
          }
        }

        setLoading(false);

        return () => {
          mounted = false;
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Auth initialization error:', error);
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  return {
    user,
    session,
    loading,
    secureSignOut,
    validateSession,
    logSecurityEvent
  };
}