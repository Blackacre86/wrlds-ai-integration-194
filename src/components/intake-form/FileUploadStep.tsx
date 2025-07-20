
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Upload, FileText, X, AlertTriangle } from 'lucide-react';
import { ESignatureCanvas } from './ESignatureCanvas';

interface FileUploadStepProps {
  formData: any;
  setFormData: (data: any) => void;
  userId: string;
}

export const FileUploadStep: React.FC<FileUploadStepProps> = ({
  formData,
  setFormData,
  userId
}) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    setUploading(true);
    setUploadProgress(0);

    try {
      const uploadedFiles = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Validate file type
        const allowedTypes = [
          'application/pdf',
          'image/jpeg',
          'image/png',
          'image/gif',
          'text/plain',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        
        if (!allowedTypes.includes(file.type)) {
          toast({
            title: "Invalid File Type",
            description: `${file.name} is not a supported file type.`,
            variant: "destructive",
          });
          continue;
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
          toast({
            title: "File Too Large",
            description: `${file.name} exceeds the 10MB limit.`,
            variant: "destructive",
          });
          continue;
        }

        // Simulate file upload progress
        const progressInterval = setInterval(() => {
          setUploadProgress(prev => Math.min(prev + 10, 90));
        }, 100);

        // In a real implementation, you would upload to Supabase Storage here
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        clearInterval(progressInterval);
        setUploadProgress(100);

        uploadedFiles.push({
          name: file.name,
          type: file.type,
          size: file.size,
          url: `placeholder-url-${Date.now()}-${i}` // Placeholder URL
        });
      }

      setFormData(prev => ({
        ...prev,
        uploaded_files: [...prev.uploaded_files, ...uploadedFiles]
      }));

      toast({
        title: "Files Uploaded",
        description: `${uploadedFiles.length} file(s) uploaded successfully.`,
      });

    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Failed to upload files. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      uploaded_files: prev.uploaded_files.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Document Upload</CardTitle>
          <CardDescription>
            Upload any relevant documents for your case (optional but recommended)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Supported Documents</Label>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Police reports or incident reports</p>
              <p>• Court documents or notices</p>
              <p>• Medical records (if relevant)</p>
              <p>• Photos or videos related to your case</p>
              <p>• Character reference letters</p>
              <p>• Employment records</p>
            </div>
          </div>

          <div className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-6 text-center">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <div className="space-y-2">
              <Button
                variant="outline"
                onClick={() => document.getElementById('file-upload')?.click()}
                disabled={uploading}
              >
                Choose Files
              </Button>
              <input
                id="file-upload"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.gif,.txt,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
              <p className="text-sm text-muted-foreground">
                PDF, Word, Images, and Text files up to 10MB each
              </p>
            </div>
          </div>

          {uploading && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Uploading files...</span>
                <span className="text-sm">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="w-full" />
            </div>
          )}

          {formData.uploaded_files.length > 0 && (
            <div className="space-y-2">
              <Label>Uploaded Files</Label>
              <div className="space-y-2">
                {formData.uploaded_files.map((file: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Consent and Authorization</CardTitle>
          <CardDescription>Please review and accept the following terms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent_given}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent_given: checked as boolean }))}
                className="mt-1"
              />
              <div className="flex-1">
                <Label htmlFor="consent" className="font-medium">
                  I consent to legal representation *
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  I authorize Attorney Joe Brava to represent me in the above-described matter. 
                  I understand that this intake form begins the attorney-client relationship and 
                  that all information provided is confidential and protected by attorney-client privilege.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Important Notice:</p>
                  <p>
                    This form does not guarantee representation. Attorney Joe Brava will review 
                    your case and contact you to discuss representation options, fees, and next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <ESignatureCanvas formData={formData} setFormData={setFormData} />
    </div>
  );
};
