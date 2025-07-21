
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';
import { LogOut, FileText, User as UserIcon, Home, Shield } from 'lucide-react';
import RefactoredClientIntakeForm from '@/components/RefactoredClientIntakeForm';
import SecurityProvider from '@/components/SecurityProvider';
import { useSecureSession } from '@/hooks/useSecureSession';

export default function ClientPortal() {
  const { user, session, loading, secureSignOut, logSecurityEvent } = useSecureSession();
  const [activeTab, setActiveTab] = useState('intake');
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/client-auth');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    try {
      await logSecurityEvent('manual_logout');
      await secureSignOut();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <SecurityProvider>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                className="flex items-center text-2xl font-bold hover:text-primary transition-colors"
              >
                Summit Law
              </Link>
              <div className="border-l pl-6">
                <h1 className="text-xl font-semibold">Client Portal</h1>
                <p className="text-sm text-muted-foreground">Welcome, {user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                <Shield className="w-3 h-3 mr-1" />
                Secure Session
              </div>
              <Button asChild variant="outline" size="sm">
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Site
                </Link>
              </Button>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-lg">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={activeTab === 'intake' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('intake')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Case Intake Form
                </Button>
                <Button
                  variant={activeTab === 'profile' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('profile')}
                >
                  <UserIcon className="w-4 h-4 mr-2" />
                  My Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            {activeTab === 'intake' && (
              <RefactoredClientIntakeForm userId={user.id} />
            )}

            {activeTab === 'profile' && (
              <Card>
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                  <CardDescription>
                    Your account information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Email Address</label>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Account Created</label>
                      <p className="text-sm text-muted-foreground">
                        {new Date(user.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      </div>
    </SecurityProvider>
  );
}
