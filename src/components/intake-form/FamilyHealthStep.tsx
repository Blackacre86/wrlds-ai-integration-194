
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Plus, Minus } from 'lucide-react';

interface FamilyHealthStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const FamilyHealthStep: React.FC<FamilyHealthStepProps> = ({
  formData,
  setFormData
}) => {
  const addChild = () => {
    setFormData(prev => ({
      ...prev,
      family_info: {
        ...prev.family_info,
        children: [...prev.family_info.children, { name: '', age: '' }]
      }
    }));
  };

  const removeChild = (index: number) => {
    setFormData(prev => ({
      ...prev,
      family_info: {
        ...prev.family_info,
        children: prev.family_info.children.filter((_, i) => i !== index)
      }
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Family Information</CardTitle>
          <CardDescription>Information about your family situation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="maritalStatus">Marital Status</Label>
            <Select
              value={formData.family_info.marital_status}
              onValueChange={(value) => setFormData(prev => ({
                ...prev,
                family_info: { ...prev.family_info, marital_status: value }
              }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select marital status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
                <SelectItem value="divorced">Divorced</SelectItem>
                <SelectItem value="separated">Separated</SelectItem>
                <SelectItem value="widowed">Widowed</SelectItem>
                <SelectItem value="domestic-partnership">Domestic Partnership</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {(formData.family_info.marital_status === 'married' || 
            formData.family_info.marital_status === 'domestic-partnership') && (
            <div className="space-y-2">
              <Label htmlFor="spousePartner">Spouse/Partner Name</Label>
              <Input
                id="spousePartner"
                value={formData.family_info.spouse_partner_name || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  family_info: { ...prev.family_info, spouse_partner_name: e.target.value }
                }))}
                placeholder="Enter spouse/partner name"
              />
            </div>
          )}

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-semibold">Children/Dependents</Label>
              <Button type="button" variant="outline" size="sm" onClick={addChild}>
                <Plus className="w-4 h-4 mr-2" />
                Add Child
              </Button>
            </div>

            {formData.family_info.children.map((child: any, index: number) => (
              <div key={index} className="grid gap-4 md:grid-cols-3 border rounded-lg p-4">
                <div className="space-y-2">
                  <Label htmlFor={`childName-${index}`}>Child's Name</Label>
                  <Input
                    id={`childName-${index}`}
                    value={child.name}
                    onChange={(e) => {
                      const newChildren = [...formData.family_info.children];
                      newChildren[index].name = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        family_info: { ...prev.family_info, children: newChildren }
                      }));
                    }}
                    placeholder="Enter child's name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`childAge-${index}`}>Age</Label>
                  <Input
                    id={`childAge-${index}`}
                    value={child.age}
                    onChange={(e) => {
                      const newChildren = [...formData.family_info.children];
                      newChildren[index].age = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        family_info: { ...prev.family_info, children: newChildren }
                      }));
                    }}
                    placeholder="Enter age"
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeChild(index)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}

            <div className="space-y-2">
              <Label htmlFor="otherDependents">Other Dependents</Label>
              <Textarea
                id="otherDependents"
                value={formData.family_info.other_dependents || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  family_info: { ...prev.family_info, other_dependents: e.target.value }
                }))}
                placeholder="List any other dependents (elderly parents, disabled family members, etc.)"
                rows={2}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Substance Use & Mental Health</CardTitle>
          <CardDescription>This information helps us provide better representation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="pastTreatment"
              checked={formData.substance_mental_health.past_treatment}
              onCheckedChange={(checked) => setFormData(prev => ({
                ...prev,
                substance_mental_health: { ...prev.substance_mental_health, past_treatment: checked as boolean }
              }))}
            />
            <Label htmlFor="pastTreatment">I have received treatment for substance abuse or mental health issues</Label>
          </div>

          {formData.substance_mental_health.past_treatment && (
            <div className="space-y-2">
              <Label htmlFor="treatmentDetails">Treatment Details</Label>
              <Textarea
                id="treatmentDetails"
                value={formData.substance_mental_health.treatment_details || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  substance_mental_health: { ...prev.substance_mental_health, treatment_details: e.target.value }
                }))}
                placeholder="Please describe your treatment history"
                rows={3}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="currentMedications">Current Medications</Label>
            <Textarea
              id="currentMedications"
              value={formData.substance_mental_health.current_medications}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                substance_mental_health: { ...prev.substance_mental_health, current_medications: e.target.value }
              }))}
              placeholder="List any medications you are currently taking"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mentalHealthDiagnoses">Mental Health Diagnoses</Label>
            <Textarea
              id="mentalHealthDiagnoses"
              value={formData.substance_mental_health.mental_health_diagnoses || ''}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                substance_mental_health: { ...prev.substance_mental_health, mental_health_diagnoses: e.target.value }
              }))}
              placeholder="List any mental health diagnoses (optional)"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="doctorCounselor">Doctor/Counselor Contact</Label>
            <Input
              id="doctorCounselor"
              value={formData.substance_mental_health.doctor_counselor_contact || ''}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                substance_mental_health: { ...prev.substance_mental_health, doctor_counselor_contact: e.target.value }
              }))}
              placeholder="Name and contact info for your doctor/counselor (optional)"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
