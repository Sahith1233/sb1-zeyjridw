import { useState, useRef, useCallback } from 'react';
import { initializeCamera, stopCamera } from '../utils/camera';

export const useCamera = () => {
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startCamera = useCallback(async () => {
    try {
      const stream = await initializeCamera();
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsActive(true);
      setError(null);
    } catch (err) {
      setError('Failed to start camera');
      setIsActive(false);
    }
  }, []);

  const stopVideoStream = useCallback(() => {
    if (streamRef.current) {
      stopCamera(streamRef.current);
      streamRef.current = null;
      setIsActive(false);
    }
  }, []);

  return {
    isActive,
    error,
    videoRef,
    startCamera,
    stopVideoStream
  };
};