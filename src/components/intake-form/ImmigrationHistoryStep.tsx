
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
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
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Immigration Status</CardTitle>
          <CardDescription>Information about your citizenship and immigration status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label>Are you a U.S. citizen?</Label>
            <RadioGroup
              value={formData.immigration_info.us_citizen ? 'yes' : 'no'}
              onValueChange={(value) => setFormData(prev => ({
                ...prev,
                immigration_info: { ...prev.immigration_info, us_citizen: value === 'yes' }
              }))}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="citizen-yes" />
                <Label htmlFor="citizen-yes">Yes, I am a U.S. citizen</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="citizen-no" />
                <Label htmlFor="citizen-no">No, I am not a U.S. citizen</Label>
              </div>
            </RadioGroup>
          </div>

          {!formData.immigration_info.us_citizen && (
            <div className="space-y-2">
              <Label htmlFor="immigrationStatus">Immigration Status</Label>
              <Select
                value={formData.immigration_info.immigration_status || ''}
                onValueChange={(value) => setFormData(prev => ({
                  ...prev,
                  immigration_info: { ...prev.immigration_info, immigration_status: value }
                }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your immigration status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="permanent-resident">Permanent Resident (Green Card)</SelectItem>
                  <SelectItem value="work-visa">Work Visa</SelectItem>
                  <SelectItem value="student-visa">Student Visa</SelectItem>
                  <SelectItem value="tourist-visa">Tourist/Visitor Visa</SelectItem>
                  <SelectItem value="asylum-refugee">Asylum/Refugee Status</SelectItem>
                  <SelectItem value="tps">Temporary Protected Status</SelectItem>
                  <SelectItem value="daca">DACA</SelectItem>
                  <SelectItem value="undocumented">Undocumented</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <Separator />

          <div className="space-y-3">
            <Label>Have you ever been deported or removed from the United States?</Label>
            <RadioGroup
              value={formData.immigration_info.prior_deportation ? 'yes' : 'no'}
              onValueChange={(value) => setFormData(prev => ({
                ...prev,
                immigration_info: { ...prev.immigration_info, prior_deportation: value === 'yes' }
              }))}
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

          {formData.immigration_info.prior_deportation && (
            <div className="space-y-2">
              <Label htmlFor="deportationDetails">Deportation Details</Label>
              <Textarea
                id="deportationDetails"
                value={formData.immigration_info.deportation_details || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  immigration_info: { ...prev.immigration_info, deportation_details: e.target.value }
                }))}
                placeholder="Please provide details about your deportation/removal"
                rows={3}
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Criminal History</CardTitle>
          <CardDescription>Information about any prior legal issues</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label>Do you have any other open criminal cases?</Label>
            <RadioGroup
              value={formData.criminal_history.open_cases ? 'yes' : 'no'}
              onValueChange={(value) => setFormData(prev => ({
                ...prev,
                criminal_history: { ...prev.criminal_history, open_cases: value === 'yes' }
              }))}
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

          {formData.criminal_history.open_cases && (
            <div className="space-y-2">
              <Label htmlFor="openCasesDetails">Open Cases Details</Label>
              <Textarea
                id="openCasesDetails"
                value={formData.criminal_history.open_cases_details || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  criminal_history: { ...prev.criminal_history, open_cases_details: e.target.value }
                }))}
                placeholder="Please describe your other open cases"
                rows={3}
              />
            </div>
          )}

          <div className="space-y-3">
            <Label>Are you on probation or parole?</Label>
            <RadioGroup
              value={formData.criminal_history.probation_parole ? 'yes' : 'no'}
              onValueChange={(value) => setFormData(prev => ({
                ...prev,
                criminal_history: { ...prev.criminal_history, probation_parole: value === 'yes' }
              }))}
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

          {formData.criminal_history.probation_parole && (
            <div className="space-y-2">
              <Label htmlFor="probationDetails">Probation/Parole Details</Label>
              <Textarea
                id="probationDetails"
                value={formData.criminal_history.probation_details || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  criminal_history: { ...prev.criminal_history, probation_details: e.target.value }
                }))}
                placeholder="Please provide details about your probation/parole"
                rows={3}
              />
            </div>
          )}

          <div className="space-y-3">
            <Label>Do you have any prior criminal record?</Label>
            <RadioGroup
              value={formData.criminal_history.prior_record ? 'yes' : 'no'}
              onValueChange={(value) => setFormData(prev => ({
                ...prev,
                criminal_history: { ...prev.criminal_history, prior_record: value === 'yes' }
              }))}
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

          {formData.criminal_history.prior_record && (
            <div className="space-y-2">
              <Label htmlFor="priorRecordSummary">Prior Record Summary</Label>
              <Textarea
                id="priorRecordSummary"
                value={formData.criminal_history.prior_record_summary || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  criminal_history: { ...prev.criminal_history, prior_record_summary: e.target.value }
                }))}
                placeholder="Please summarize your prior criminal record"
                rows={3}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
