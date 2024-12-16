import React from 'react';
import { Camera } from 'lucide-react';
import { useCamera } from '../hooks/useCamera';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface EmotionCaptureProps {
  onEmotionDetected: (emotion: string) => void;
}

export default function EmotionCapture({ onEmotionDetected }: EmotionCaptureProps) {
  const { isActive, error, videoRef, startCamera, stopVideoStream } = useCamera();
  const [processing, setProcessing] = React.useState(false);

  const handleCapture = async () => {
    setProcessing(true);
    // Simulate emotion detection
    setTimeout(() => {
      setProcessing(false);
      onEmotionDetected('happy');
      stopVideoStream();
    }, 2000);
  };

  React.useEffect(() => {
    return () => {
      stopVideoStream();
    };
  }, [stopVideoStream]);

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
          {!isActive ? (
            <Button
              className="absolute inset-0 w-full h-full"
              onClick={startCamera}
              icon={<Camera className="h-8 w-8" />}
            >
              Start Camera
            </Button>
          ) : null}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        {isActive && (
          <div className="flex justify-center">
            <Button
              onClick={handleCapture}
              isLoading={processing}
              icon={<Camera className="h-5 w-5" />}
            >
              {processing ? 'Analyzing Emotion...' : 'Capture Emotion'}
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}