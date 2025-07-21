import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Clock } from 'lucide-react';

interface SessionTimeoutWarningProps {
  onExtendSession: () => void;
}

export default function SessionTimeoutWarning({ onExtendSession }: SessionTimeoutWarningProps) {
  const [showWarning, setShowWarning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    let warningTimer: NodeJS.Timeout;
    let countdownTimer: NodeJS.Timeout;
    let logoutTimer: NodeJS.Timeout;

    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      // Show warning 5 minutes before expiry
      const WARNING_TIME = 5 * 60 * 1000; // 5 minutes in ms
      const SESSION_DURATION = 60 * 60 * 1000; // 1 hour in ms
      
      const sessionStart = new Date(session.refresh_token).getTime();
      const now = Date.now();
      const timeUntilWarning = SESSION_DURATION - WARNING_TIME - (now - sessionStart);
      
      if (timeUntilWarning > 0) {
        warningTimer = setTimeout(() => {
          setShowWarning(true);
          setTimeLeft(WARNING_TIME / 1000); // 5 minutes in seconds
          
          // Start countdown
          countdownTimer = setInterval(() => {
            setTimeLeft(prev => {
              if (prev <= 1) {
                handleAutoLogout();
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
          
          // Auto logout after warning period
          logoutTimer = setTimeout(handleAutoLogout, WARNING_TIME);
        }, timeUntilWarning);
      }
    };

    const handleAutoLogout = async () => {
      await supabase.auth.signOut();
      toast({
        title: "Session Expired",
        description: "You have been logged out due to inactivity.",
        variant: "destructive"
      });
      setShowWarning(false);
    };

    checkSession();

    return () => {
      clearTimeout(warningTimer);
      clearInterval(countdownTimer);
      clearTimeout(logoutTimer);
    };
  }, [toast]);

  const handleExtendSession = async () => {
    try {
      const { error } = await supabase.auth.refreshSession();
      if (error) throw error;
      
      onExtendSession();
      setShowWarning(false);
      setTimeLeft(0);
      
      toast({
        title: "Session Extended",
        description: "Your session has been extended successfully."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to extend session. Please log in again.",
        variant: "destructive"
      });
    }
  };

  if (!showWarning) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Alert className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 border-orange-500 bg-orange-50 max-w-md">
      <Clock className="h-4 w-4" />
      <AlertDescription className="flex flex-col gap-3">
        <div>
          Your session will expire in {minutes}:{seconds.toString().padStart(2, '0')}. 
          You'll be automatically logged out for security.
        </div>
        <Button 
          size="sm" 
          onClick={handleExtendSession}
          className="self-start"
        >
          Extend Session
        </Button>
      </AlertDescription>
    </Alert>
  );
}