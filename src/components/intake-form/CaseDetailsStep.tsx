import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus, X } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface CaseDetailsStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const CaseDetailsStep: React.FC<CaseDetailsStepProps> = ({
  formData,
  setFormData
}) => {
  const addCharge = () => {
    const newCharges = [...(formData.charges || []), { 
      description: '', 
      statute: '', 
      level: 'misdemeanor' 
    }];
    setFormData(prev => ({ ...prev, charges: newCharges }));
  };

  const removeCharge = (index: number) => {
    const newCharges = formData.charges?.filter((_, i) => i !== index) || [];
    setFormData(prev => ({ ...prev, charges: newCharges }));
  };

  const updateCharge = (index: number, field: string, value: string) => {
    const newCharges = [...(formData.charges || [])];
    newCharges[index] = { ...newCharges[index], [field]: value };
    setFormData(prev => ({ ...prev, charges: newCharges }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Case Information</CardTitle>
          <CardDescription>
            Please provide basic details about your case
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="docket_number">Docket Number</Label>
              <Input
                id="docket_number"
                value={formData.docket_number || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, docket_number: e.target.value }))}
                placeholder="Enter docket number"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="court_name">Court Name</Label>
              <Input
                id="court_name"
                value={formData.court_name || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, court_name: e.target.value }))}
                placeholder="Enter court name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="court_session">Court Session</Label>
              <Input
                id="court_session"
                value={formData.court_session || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, court_session: e.target.value }))}
                placeholder="e.g., Morning, Afternoon"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ada_prosecutor">ADA/Prosecutor</Label>
              <Input
                id="ada_prosecutor"
                value={formData.ada_prosecutor || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, ada_prosecutor: e.target.value }))}
                placeholder="Prosecutor's name"
              />
            </div>

            <div className="space-y-2">
              <Label>Arraignment Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.arraignment_date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.arraignment_date ? format(new Date(formData.arraignment_date), "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.arraignment_date ? new Date(formData.arraignment_date) : undefined}
                    onSelect={(date) => setFormData(prev => ({ 
                      ...prev, 
                      arraignment_date: date ? format(date, 'yyyy-MM-dd') : '' 
                    }))}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Next Court Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.next_court_date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.next_court_date ? format(new Date(formData.next_court_date), "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.next_court_date ? new Date(formData.next_court_date) : undefined}
                    onSelect={(date) => setFormData(prev => ({ 
                      ...prev, 
                      next_court_date: date ? format(date, 'yyyy-MM-dd') : '' 
                    }))}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bail Information</CardTitle>
          <CardDescription>
            Information about your bail status
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="bail_set"
              checked={formData.bail_info?.bail_set || false}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                bail_info: { ...prev.bail_info, bail_set: e.target.checked }
              }))}
              className="rounded border-border"
            />
            <Label htmlFor="bail_set">Bail has been set</Label>
          </div>
          
          {formData.bail_info?.bail_set && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bail_amount">Bail Amount</Label>
                <Input
                  id="bail_amount"
                  value={formData.bail_info?.amount || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    bail_info: { ...prev.bail_info, amount: e.target.value }
                  }))}
                  placeholder="$0.00"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bail_status">Bail Status</Label>
                <select
                  id="bail_status"
                  value={formData.bail_info?.status || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    bail_info: { ...prev.bail_info, status: e.target.value }
                  }))}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  <option value="">Select status</option>
                  <option value="posted">Posted</option>
                  <option value="pending">Pending</option>
                  <option value="denied">Denied</option>
                </select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Charges
            <Button onClick={addCharge} size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Charge
            </Button>
          </CardTitle>
          <CardDescription>
            List all charges against you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.charges?.map((charge, index) => (
            <div key={index} className="p-4 border border-border rounded-lg space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">Charge {index + 1}</h4>
                <Button
                  onClick={() => removeCharge(index)}
                  size="sm"
                  variant="ghost"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label>Charge Description</Label>
                  <Input
                    value={charge.description || ''}
                    onChange={(e) => updateCharge(index, 'description', e.target.value)}
                    placeholder="e.g., Operating Under the Influence"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Statute/Code</Label>
                  <Input
                    value={charge.statute || ''}
                    onChange={(e) => updateCharge(index, 'statute', e.target.value)}
                    placeholder="e.g., M.G.L. c. 90 § 24"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Charge Level</Label>
                  <select
                    value={charge.level || 'misdemeanor'}
                    onChange={(e) => updateCharge(index, 'level', e.target.value)}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  >
                    <option value="misdemeanor">Misdemeanor</option>
                    <option value="felony">Felony</option>
                    <option value="infraction">Infraction</option>
                  </select>
                </div>
              </div>
            </div>
          )) || (
            <p className="text-muted-foreground text-center py-8">
              No charges added yet. Click "Add Charge" to get started.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};