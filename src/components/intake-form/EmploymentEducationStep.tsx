
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

interface EmploymentEducationStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const EmploymentEducationStep: React.FC<EmploymentEducationStepProps> = ({
  formData,
  setFormData
}) => {
  const handleEmploymentStatusChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      employment_info: {
        ...prev.employment_info,
        employed: value === 'employed',
        unemployed: value === 'unemployed'
      }
    }));
  };

  const handleEducationStatusChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      education_info: {
        ...prev.education_info,
        in_school: value === 'yes'
      }
    }));
  };

  const handleHighestEducationChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      education_info: {
        ...prev.education_info,
        highest_education: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Employment Information</CardTitle>
          <CardDescription>Tell us about your current employment status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label className="text-base font-medium">Current Employment Status</Label>
            <RadioGroup 
              value={formData.employment_info?.employed ? 'employed' : formData.employment_info?.unemployed ? 'unemployed' : ''}
              onValueChange={handleEmploymentStatusChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="employed" id="employed" />
                <Label htmlFor="employed">Currently Employed</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unemployed" id="unemployed" />
                <Label htmlFor="unemployed">Currently Unemployed</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.employment_info?.employed && (
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
                  className="bg-background text-foreground"
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
                  className="bg-background text-foreground"
                />
              </div>
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
                  className="bg-background text-foreground"
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
                  className="bg-background text-foreground"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Education Information</CardTitle>
          <CardDescription>Current educational status and background</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label className="text-base font-medium">Highest Level of Education Completed</Label>
            <Select value={formData.education_info?.highest_education || ''} onValueChange={handleHighestEducationChange}>
              <SelectTrigger className="bg-background text-foreground">
                <SelectValue placeholder="Select highest education level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="less-than-high-school">Less than High School</SelectItem>
                <SelectItem value="high-school-diploma">High School Diploma/GED</SelectItem>
                <SelectItem value="some-college">Some College</SelectItem>
                <SelectItem value="associates-degree">Associate's Degree</SelectItem>
                <SelectItem value="bachelors-degree">Bachelor's Degree</SelectItem>
                <SelectItem value="masters-degree">Master's Degree</SelectItem>
                <SelectItem value="doctoral-degree">Doctoral Degree</SelectItem>
                <SelectItem value="professional-degree">Professional Degree</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="space-y-3">
            <Label className="text-base font-medium">Are you currently enrolled in school?</Label>
            <RadioGroup 
              value={formData.education_info?.in_school ? 'yes' : 'no'}
              onValueChange={handleEducationStatusChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="in-school-yes" />
                <Label htmlFor="in-school-yes">Yes, I am currently enrolled</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="in-school-no" />
                <Label htmlFor="in-school-no">No, I am not currently enrolled</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.education_info?.in_school && (
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
                  className="bg-background text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="schoolLocation">School Location *</Label>
                <Input
                  id="schoolLocation"
                  value={formData.education_info.school_location || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    education_info: { ...prev.education_info, school_location: e.target.value }
                  }))}
                  placeholder="City, State"
                  className="bg-background text-foreground"
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
                  className="bg-background text-foreground"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
