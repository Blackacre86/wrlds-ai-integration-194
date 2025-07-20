
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface ESignatureCanvasProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const ESignatureCanvas: React.FC<ESignatureCanvasProps> = ({
  formData,
  setFormData
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2; // For retina displays
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Set drawing styles
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setHasSignature(true);

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    // Save signature as base64
    const canvas = canvasRef.current;
    if (canvas && hasSignature) {
      const signatureData = canvas.toDataURL();
      setFormData(prev => ({
        ...prev,
        e_signature: {
          ...prev.e_signature,
          signature_data: signatureData
        }
      }));
    }
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
    setFormData(prev => ({
      ...prev,
      e_signature: {
        ...prev.e_signature,
        signature_data: ''
      }
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Electronic Signature</CardTitle>
        <CardDescription>
          Please sign below to confirm the accuracy of the information provided
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="signatureName">Full Legal Name *</Label>
            <Input
              id="signatureName"
              value={formData.e_signature.full_name}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                e_signature: { ...prev.e_signature, full_name: e.target.value }
              }))}
              placeholder="Enter your full legal name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signatureDate">Date *</Label>
            <Input
              id="signatureDate"
              type="date"
              value={formData.e_signature.date}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                e_signature: { ...prev.e_signature, date: e.target.value }
              }))}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Digital Signature *</Label>
          <div className="border rounded-lg p-4 bg-background">
            <canvas
              ref={canvasRef}
              width={400}
              height={150}
              className="w-full h-32 border border-dashed border-muted-foreground/50 rounded cursor-crosshair touch-none"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-muted-foreground">
                Sign above using your mouse or finger
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={clearSignature}
                disabled={!hasSignature}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
          <p className="font-medium mb-1">Legal Notice:</p>
          <p>
            By signing above, I certify that the information provided in this intake form is true and 
            accurate to the best of my knowledge. I understand that providing false information may 
            negatively impact my case and could result in legal consequences.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
