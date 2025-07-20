
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle } from 'lucide-react';

interface AboutMeStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const AboutMeStep: React.FC<AboutMeStepProps> = ({
  formData,
  setFormData
}) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            About Me
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            This is your opportunity to tell me about yourself in your own words. The more information you provide, 
            the better I can understand your situation and convey it effectively to the Judge. This personal insight 
            helps me craft the strongest possible defense and advocate for the best outcome in your case.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg border">
            <h4 className="font-medium text-foreground mb-2">Consider including:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Your personal background and family situation</li>
              <li>Work history, education, and community involvement</li>
              <li>Any challenges you've overcome or are currently facing</li>
              <li>Your goals and what this case means to you</li>
              <li>Any other information that helps explain who you are as a person</li>
            </ul>
          </div>

          <div className="space-y-2">
            <Label htmlFor="aboutMe" className="text-base font-medium">
              Tell me about yourself
            </Label>
            <Textarea
              id="aboutMe"
              value={formData.about_me || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, about_me: e.target.value }))}
              placeholder="Share your story here... The more detail you provide, the better I can represent you."
              className="bg-background text-foreground min-h-[200px] resize-y"
              rows={10}
            />
            <p className="text-xs text-muted-foreground">
              This information is confidential and protected by attorney-client privilege.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
