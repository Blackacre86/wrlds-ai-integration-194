
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

interface ImmigrationHistoryStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const ImmigrationHistoryStep: React.FC<ImmigrationHistoryStepProps> = ({
  formData,
  setFormData
}) => {
  const handleCitizenshipChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      immigration_info: {
        ...prev.immigration_info,
        us_citizen: value === 'yes'
      }
    }));
  };

  const handlePriorDeportationChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      immigration_info: {
        ...prev.immigration_info,
        prior_deportation: value === 'yes'
      }
    }));
  };

  const handleOpenCasesChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      criminal_history: {
        ...prev.criminal_history,
        open_cases: value === 'yes'
      }
    }));
  };

  const handleProbationParoleChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      criminal_history: {
        ...prev.criminal_history,
        probation_parole: value === 'yes'
      }
    }));
  };

  const handlePriorRecordChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      criminal_history: {
        ...prev.criminal_history,
        prior_record: value === 'yes'
      }
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Immigration Status</CardTitle>
          <CardDescription>Information about your citizenship and immigration status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label className="text-base font-medium">Are you a U.S. citizen?</Label>
            <RadioGroup 
              value={formData.immigration_info?.us_citizen ? 'yes' : formData.immigration_info?.us_citizen === false ? 'no' : ''}
              onValueChange={handleCitizenshipChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="citizen-yes" />
                <Label htmlFor="citizen-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="citizen-no" />
                <Label htmlFor="citizen-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.immigration_info?.us_citizen === false && (
            <div className="space-y-2">
              <Label htmlFor="immigrationStatus">Immigration Status</Label>
              <Select 
                value={formData.immigration_info.immigration_status || ''} 
                onValueChange={(value) => setFormData(prev => ({
                  ...prev,
                  immigration_info: { ...prev.immigration_info, immigration_status: value }
                }))}
              >
                <SelectTrigger className="bg-background text-foreground">
                  <SelectValue placeholder="Select immigration status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="permanent-resident">Permanent Resident (Green Card)</SelectItem>
                  <SelectItem value="work-visa">Work Visa</SelectItem>
                  <SelectItem value="student-visa">Student Visa</SelectItem>
                  <SelectItem value="tourist-visa">Tourist Visa</SelectItem>
                  <SelectItem value="asylum-seeker">Asylum Seeker</SelectItem>
                  <SelectItem value="undocumented">Undocumented</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <Separator />

          <div className="space-y-3">
            <Label className="text-base font-medium">Have you ever been deported or had removal proceedings?</Label>
            <RadioGroup 
              value={formData.immigration_info?.prior_deportation ? 'yes' : formData.immigration_info?.prior_deportation === false ? 'no' : ''}
              onValueChange={handlePriorDeportationChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="deportation-yes" />
                <Label htmlFor="deportation-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="deportation-no" />
                <Label htmlFor="deportation-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.immigration_info?.prior_deportation && (
            <div className="space-y-2">
              <Label htmlFor="deportationDetails">Please provide details</Label>
              <Textarea
                id="deportationDetails"
                value={formData.immigration_info.deportation_details || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  immigration_info: { ...prev.immigration_info, deportation_details: e.target.value }
                }))}
                placeholder="Provide details about deportation or removal proceedings"
                className="bg-background text-foreground"
                rows={3}
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Criminal History</CardTitle>
          <CardDescription>Information about any previous criminal cases or probation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label className="text-base font-medium">Do you have any other open criminal cases?</Label>
            <RadioGroup 
              value={formData.criminal_history?.open_cases ? 'yes' : formData.criminal_history?.open_cases === false ? 'no' : ''}
              onValueChange={handleOpenCasesChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="open-cases-yes" />
                <Label htmlFor="open-cases-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="open-cases-no" />
                <Label htmlFor="open-cases-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.criminal_history?.open_cases && (
            <div className="space-y-2">
              <Label htmlFor="openCasesDetails">Please provide details</Label>
              <Textarea
                id="openCasesDetails"
                value={formData.criminal_history.open_cases_details || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  criminal_history: { ...prev.criminal_history, open_cases_details: e.target.value }
                }))}
                placeholder="Provide details about open cases"
                className="bg-background text-foreground"
                rows={3}
              />
            </div>
          )}

          <Separator />

          <div className="space-y-3">
            <Label className="text-base font-medium">Are you currently on probation or parole?</Label>
            <RadioGroup 
              value={formData.criminal_history?.probation_parole ? 'yes' : formData.criminal_history?.probation_parole === false ? 'no' : ''}
              onValueChange={handleProbationParoleChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="probation-yes" />
                <Label htmlFor="probation-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="probation-no" />
                <Label htmlFor="probation-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.criminal_history?.probation_parole && (
            <div className="space-y-2">
              <Label htmlFor="probationDetails">Please provide details</Label>
              <Textarea
                id="probationDetails"
                value={formData.criminal_history.probation_details || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  criminal_history: { ...prev.criminal_history, probation_details: e.target.value }
                }))}
                placeholder="Provide details about probation or parole"
                className="bg-background text-foreground"
                rows={3}
              />
            </div>
          )}

          <Separator />

          <div className="space-y-3">
            <Label className="text-base font-medium">Do you have any prior criminal record?</Label>
            <RadioGroup 
              value={formData.criminal_history?.prior_record ? 'yes' : formData.criminal_history?.prior_record === false ? 'no' : ''}
              onValueChange={handlePriorRecordChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="prior-record-yes" />
                <Label htmlFor="prior-record-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="prior-record-no" />
                <Label htmlFor="prior-record-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.criminal_history?.prior_record && (
            <div className="space-y-2">
              <Label htmlFor="priorRecordSummary">Please provide a brief summary</Label>
              <Textarea
                id="priorRecordSummary"
                value={formData.criminal_history.prior_record_summary || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  criminal_history: { ...prev.criminal_history, prior_record_summary: e.target.value }
                }))}
                placeholder="Provide a brief summary of your prior criminal record"
                className="bg-background text-foreground"
                rows={3}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
