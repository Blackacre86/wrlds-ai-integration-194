
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface RepresentationFactsStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const RepresentationFactsStep: React.FC<RepresentationFactsStepProps> = ({
  formData,
  setFormData
}) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Type of Representation</CardTitle>
          <CardDescription>Select the type of legal representation you are seeking</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label>What type of representation are you seeking?</Label>
            <RadioGroup
              value={formData.representation_type}
              onValueChange={(value) => setFormData(prev => ({ ...prev, representation_type: value }))}
            >
              <div className="flex items-start space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value="bar_advocate" id="bar-advocate" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="bar-advocate" className="font-medium">Bar Advocate</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Court-appointed counsel for those who qualify financially. This representation is provided 
                    at no cost to qualified individuals.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value="private_client" id="private-client" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="private-client" className="font-medium">Private Client</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Private representation with legal fees. You will be responsible for attorney fees 
                    and costs associated with your case.
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Case Facts</CardTitle>
          <CardDescription>
            Please provide a detailed description of what happened. Be as specific as possible 
            while being honest and accurate.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="caseFacts">Detailed Description of Events *</Label>
            <Textarea
              id="caseFacts"
              value={formData.case_facts}
              onChange={(e) => setFormData(prev => ({ ...prev, case_facts: e.target.value }))}
              placeholder="Please provide a chronological account of what happened, including dates, times, locations, and people involved. Include any relevant background information that might be important for your case."
              rows={8}
              className="min-h-[200px]"
              required
            />
            <p className="text-xs text-muted-foreground">
              This information is confidential and protected by attorney-client privilege. 
              Please be thorough and honest in your description.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
