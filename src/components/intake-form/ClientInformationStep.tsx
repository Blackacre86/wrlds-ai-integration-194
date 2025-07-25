import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

interface ClientInformationStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const ClientInformationStep: React.FC<ClientInformationStepProps> = ({
  formData,
  setFormData
}) => {
  const addPhoneNumber = () => {
    const newPhoneNumbers = [...(formData.phone_numbers || []), { type: 'cell', number: '' }];
    setFormData(prev => ({ ...prev, phone_numbers: newPhoneNumbers }));
  };

  const removePhoneNumber = (index: number) => {
    const newPhoneNumbers = formData.phone_numbers?.filter((_, i) => i !== index) || [];
    setFormData(prev => ({ ...prev, phone_numbers: newPhoneNumbers }));
  };

  const updatePhoneNumber = (index: number, field: string, value: string) => {
    const newPhoneNumbers = [...(formData.phone_numbers || [])];
    newPhoneNumbers[index] = { ...newPhoneNumbers[index], [field]: value };
    setFormData(prev => ({ ...prev, phone_numbers: newPhoneNumbers }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Please provide your basic personal details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first_name">First Name *</Label>
              <Input
                id="first_name"
                value={formData.first_name || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, first_name: e.target.value }))}
                placeholder="Enter first name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="middle_name">Middle Name</Label>
              <Input
                id="middle_name"
                value={formData.middle_name || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, middle_name: e.target.value }))}
                placeholder="Enter middle name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="last_name">Last Name *</Label>
              <Input
                id="last_name"
                value={formData.last_name || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, last_name: e.target.value }))}
                placeholder="Enter last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter email address"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ssn_last4">Last 4 digits of SSN</Label>
              <Input
                id="ssn_last4"
                value={formData.ssn_last4 || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, ssn_last4: e.target.value }))}
                placeholder="####"
                maxLength={4}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Address Information</CardTitle>
          <CardDescription>
            Your current address details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="home_address">Home Address *</Label>
            <Input
              id="home_address"
              value={formData.home_address || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, home_address: e.target.value }))}
              placeholder="Street address, city, state, zip code"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mailing_address">Mailing Address (if different)</Label>
            <Input
              id="mailing_address"
              value={formData.mailing_address || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, mailing_address: e.target.value }))}
              placeholder="Street address, city, state, zip code"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Phone Numbers
            <Button onClick={addPhoneNumber} size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Phone
            </Button>
          </CardTitle>
          <CardDescription>
            Your contact phone numbers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.phone_numbers?.map((phone, index) => (
            <div key={index} className="flex gap-4 items-end">
              <div className="flex-1 space-y-2">
                <Label>Phone Type</Label>
                <select
                  value={phone.type || 'cell'}
                  onChange={(e) => updatePhoneNumber(index, 'type', e.target.value)}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  <option value="cell">Cell</option>
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="flex-2 space-y-2">
                <Label>Phone Number</Label>
                <Input
                  value={phone.number || ''}
                  onChange={(e) => updatePhoneNumber(index, 'number', e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>
              
              {formData.phone_numbers?.length > 1 && (
                <Button
                  onClick={() => removePhoneNumber(index)}
                  size="sm"
                  variant="ghost"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          )) || (
            <p className="text-muted-foreground text-center py-4">
              No phone numbers added yet. Click "Add Phone" to get started.
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Contact</CardTitle>
          <CardDescription>
            Person to contact in case of emergency
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="emergency_name">Full Name</Label>
              <Input
                id="emergency_name"
                value={formData.emergency_contact?.name || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  emergency_contact: { ...prev.emergency_contact, name: e.target.value }
                }))}
                placeholder="Emergency contact name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="emergency_relation">Relationship</Label>
              <Input
                id="emergency_relation"
                value={formData.emergency_contact?.relation || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  emergency_contact: { ...prev.emergency_contact, relation: e.target.value }
                }))}
                placeholder="e.g., Spouse, Parent, Friend"
              />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="emergency_phone">Phone Number</Label>
              <Input
                id="emergency_phone"
                value={formData.emergency_contact?.phone || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  emergency_contact: { ...prev.emergency_contact, phone: e.target.value }
                }))}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};