
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

interface EmploymentEducationStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const EmploymentEducationStep: React.FC<EmploymentEducationStepProps> = ({
  formData,
  setFormData
}) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Employment Information</CardTitle>
          <CardDescription>Tell us about your current employment status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="employed"
              checked={formData.employment_info.employed}
              onCheckedChange={(checked) => setFormData(prev => ({
                ...prev,
                employment_info: { ...prev.employment_info, employed: checked as boolean }
              }))}
            />
            <Label htmlFor="employed">I am currently employed</Label>
          </div>

          {formData.employment_info.employed && (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="employerName">Employer Name *</Label>
                <Input
                  id="employerName"
                  value={formData.employment_info.employer_name || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    employment_info: { ...prev.employment_info, employer_name: e.target.value }
                  }))}
                  placeholder="Enter employer name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input
                  id="jobTitle"
                  value={formData.employment_info.job_title || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    employment_info: { ...prev.employment_info, job_title: e.target.value }
                  }))}
                  placeholder="Enter job title"
                  required
                />
              </div>
            </div>
          )}

          {formData.employment_info.employed && (
            <>
              <div className="space-y-2">
                <Label htmlFor="workAddress">Work Address</Label>
                <Textarea
                  id="workAddress"
                  value={formData.employment_info.work_address || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    employment_info: { ...prev.employment_info, work_address: e.target.value }
                  }))}
                  placeholder="Enter work address"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workHours">Work Hours/Schedule</Label>
                <Input
                  id="workHours"
                  value={formData.employment_info.work_hours || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    employment_info: { ...prev.employment_info, work_hours: e.target.value }
                  }))}
                  placeholder="e.g., 9 AM - 5 PM, Monday-Friday"
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Education Information</CardTitle>
          <CardDescription>Current educational status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inSchool"
              checked={formData.education_info.in_school}
              onCheckedChange={(checked) => setFormData(prev => ({
                ...prev,
                education_info: { ...prev.education_info, in_school: checked as boolean }
              }))}
            />
            <Label htmlFor="inSchool">I am currently enrolled in school</Label>
          </div>

          {formData.education_info.in_school && (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="schoolName">School Name *</Label>
                <Input
                  id="schoolName"
                  value={formData.education_info.school_name || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    education_info: { ...prev.education_info, school_name: e.target.value }
                  }))}
                  placeholder="Enter school name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearGrade">Year/Grade Level *</Label>
                <Input
                  id="yearGrade"
                  value={formData.education_info.year_grade || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    education_info: { ...prev.education_info, year_grade: e.target.value }
                  }))}
                  placeholder="e.g., Sophomore, 10th Grade"
                  required
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
