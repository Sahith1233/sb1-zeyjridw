// Camera utility functions
export const initializeCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ 
      video: { 
        facingMode: 'user',
        width: { ideal: 1280 },
        height: { ideal: 720 }
      } 
    });
    return stream;
  } catch (err) {
    console.error('Error accessing camera:', err);
    throw new Error('Camera access denied');
  }
};

export const stopCamera = (stream: MediaStream) => {
  stream.getTracks().forEach(track => track.stop());
};