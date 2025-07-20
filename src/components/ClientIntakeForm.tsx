import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import ChargeAutocomplete from './ChargeAutocomplete';
import { Save, Send } from 'lucide-react';

interface ClientIntakeFormProps {
  userId: string;
}

interface IntakeData {
  docket_number: string;
  court_name: string;
  charges: Array<{
    charge_name: string;
    statute_code: string;
    full_description: string;
  }>;
  biographical_info: {
    full_name: string;
    date_of_birth: string;
    phone: string;
    address: string;
    emergency_contact_name: string;
    emergency_contact_phone: string;
  };
  case_facts: string;
  contact_info: {
    preferred_contact_method: string;
    best_time_to_contact: string;
  };
}

export default function ClientIntakeForm({ userId }: ClientIntakeFormProps) {
  const [formData, setFormData] = useState<IntakeData>({
    docket_number: '',
    court_name: '',
    charges: [],
    biographical_info: {
      full_name: '',
      date_of_birth: '',
      phone: '',
      address: '',
      emergency_contact_name: '',
      emergency_contact_phone: '',
    },
    case_facts: '',
    contact_info: {
      preferred_contact_method: '',
      best_time_to_contact: '',
    },
  });
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [intakeId, setIntakeId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadExistingIntake();
  }, [userId]);

  const loadExistingIntake = async () => {
    try {
      const { data, error } = await supabase
        .from('client_intakes')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'draft')
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setIntakeId(data.id);
        setFormData({
          docket_number: data.docket_number || '',
          court_name: data.court_name || '',
          charges: (data.charges as Array<{ charge_name: string; statute_code: string; full_description: string }>) || [],
          biographical_info: (data.biographical_info as {
            full_name: string;
            date_of_birth: string;
            phone: string;
            address: string;
            emergency_contact_name: string;
            emergency_contact_phone: string;
          }) || {
            full_name: '',
            date_of_birth: '',
            phone: '',
            address: '',
            emergency_contact_name: '',
            emergency_contact_phone: '',
          },
          case_facts: data.case_facts || '',
          contact_info: (data.contact_info as {
            preferred_contact_method: string;
            best_time_to_contact: string;
          }) || {
            preferred_contact_method: '',
            best_time_to_contact: '',
          },
        });
      }
    } catch (error: any) {
      console.error('Error loading intake:', error);
    }
  };

  const saveDraft = async () => {
    setSaving(true);
    try {
      const intakeData = {
        user_id: userId,
        docket_number: formData.docket_number,
        court_name: formData.court_name,
        charges: formData.charges,
        biographical_info: formData.biographical_info,
        case_facts: formData.case_facts,
        contact_info: formData.contact_info,
        status: 'draft',
      };

      if (intakeId) {
        const { error } = await supabase
          .from('client_intakes')
          .update(intakeData)
          .eq('id', intakeId);

        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('client_intakes')
          .insert([intakeData])
          .select()
          .single();

        if (error) throw error;
        setIntakeId(data.id);
      }

      toast({
        title: "Draft Saved",
        description: "Your information has been saved as a draft.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save draft",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const submitForm = async () => {
    setSubmitting(true);
    try {
      const intakeData = {
        user_id: userId,
        docket_number: formData.docket_number,
        court_name: formData.court_name,
        charges: formData.charges,
        biographical_info: formData.biographical_info,
        case_facts: formData.case_facts,
        contact_info: formData.contact_info,
        status: 'submitted',
        submitted_at: new Date().toISOString(),
      };

      if (intakeId) {
        const { error } = await supabase
          .from('client_intakes')
          .update(intakeData)
          .eq('id', intakeId);

        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('client_intakes')
          .insert([intakeData])
          .select()
          .single();

        if (error) throw error;
        setIntakeId(data.id);
      }

      toast({
        title: "Form Submitted",
        description: "Your intake form has been submitted successfully. We will review your information and contact you soon.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const addCharge = (charge: { charge_name: string; statute_code: string; full_description: string }) => {
    setFormData(prev => ({
      ...prev,
      charges: [...prev.charges, charge]
    }));
  };

  const removeCharge = (index: number) => {
    setFormData(prev => ({
      ...prev,
      charges: prev.charges.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      {/* Case Information */}
      <Card>
        <CardHeader>
          <CardTitle>Case Information</CardTitle>
          <CardDescription>Basic details about your legal case</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="docket">Docket Number</Label>
              <Input
                id="docket"
                value={formData.docket_number}
                onChange={(e) => setFormData(prev => ({ ...prev, docket_number: e.target.value }))}
                placeholder="Enter docket number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="court">Court Name</Label>
              <Input
                id="court"
                value={formData.court_name}
                onChange={(e) => setFormData(prev => ({ ...prev, court_name: e.target.value }))}
                placeholder="Enter court name"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charges */}
      <Card>
        <CardHeader>
          <CardTitle>Criminal Charges</CardTitle>
          <CardDescription>Add the charges you are facing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ChargeAutocomplete onSelectCharge={addCharge} />
          
          {formData.charges.length > 0 && (
            <div className="space-y-2">
              <Label>Selected Charges:</Label>
              {formData.charges.map((charge, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{charge.charge_name}</p>
                    <p className="text-sm text-muted-foreground">{charge.statute_code}</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeCharge(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Biographical Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Your personal details and contact information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={formData.biographical_info.full_name}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  biographical_info: { ...prev.biographical_info, full_name: e.target.value }
                }))}
                placeholder="Enter your full legal name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                value={formData.biographical_info.date_of_birth}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  biographical_info: { ...prev.biographical_info, date_of_birth: e.target.value }
                }))}
              />
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.biographical_info.phone}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  biographical_info: { ...prev.biographical_info, phone: e.target.value }
                }))}
                placeholder="(555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.biographical_info.address}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  biographical_info: { ...prev.biographical_info, address: e.target.value }
                }))}
                placeholder="Enter your full address"
              />
            </div>
          </div>

          <Separator />
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="emergencyName">Emergency Contact Name</Label>
              <Input
                id="emergencyName"
                value={formData.biographical_info.emergency_contact_name}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  biographical_info: { ...prev.biographical_info, emergency_contact_name: e.target.value }
                }))}
                placeholder="Emergency contact full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
              <Input
                id="emergencyPhone"
                type="tel"
                value={formData.biographical_info.emergency_contact_phone}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  biographical_info: { ...prev.biographical_info, emergency_contact_phone: e.target.value }
                }))}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Case Facts */}
      <Card>
        <CardHeader>
          <CardTitle>Case Facts</CardTitle>
          <CardDescription>Please describe the facts and circumstances of your case</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={formData.case_facts}
            onChange={(e) => setFormData(prev => ({ ...prev, case_facts: e.target.value }))}
            placeholder="Please provide a detailed description of what happened, including dates, times, locations, and any relevant circumstances..."
            className="min-h-32"
          />
        </CardContent>
      </Card>

      {/* Contact Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Preferences</CardTitle>
          <CardDescription>How would you prefer us to contact you?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contactMethod">Preferred Contact Method</Label>
              <Input
                id="contactMethod"
                value={formData.contact_info.preferred_contact_method}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contact_info: { ...prev.contact_info, preferred_contact_method: e.target.value }
                }))}
                placeholder="Phone, Email, Text, etc."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bestTime">Best Time to Contact</Label>
              <Input
                id="bestTime"
                value={formData.contact_info.best_time_to_contact}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contact_info: { ...prev.contact_info, best_time_to_contact: e.target.value }
                }))}
                placeholder="Morning, Afternoon, Evening, etc."
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={saveDraft}
          variant="outline"
          disabled={saving}
        >
          <Save className="w-4 h-4 mr-2" />
          {saving ? 'Saving...' : 'Save Draft'}
        </Button>
        <Button
          onClick={submitForm}
          disabled={submitting}
        >
          <Send className="w-4 h-4 mr-2" />
          {submitting ? 'Submitting...' : 'Submit Form'}
        </Button>
      </div>
    </div>
  );
}