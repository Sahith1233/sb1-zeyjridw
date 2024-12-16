import React from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import EmotionCapture from './components/EmotionCapture';
import MusicRecommendation from './components/MusicRecommendation';
import { useAuth } from './hooks/useAuth';
import type { Song } from './types';
import type { Emotion } from './utils/emotion';

// Mock data - replace with actual API calls
const mockSongs: Song[] = [
  {
    title: "Happy Together",
    artist: "The Turtles",
    spotifyUrl: "https://open.spotify.com/track/1JO1xLtVc8mWhIoE3YaCL0",
    albumArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Good Vibrations",
    artist: "The Beach Boys",
    spotifyUrl: "https://open.spotify.com/track/7tf2xZBeDwxjrxhzPRwJF3",
    albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Walking on Sunshine",
    artist: "Katrina & The Waves",
    spotifyUrl: "https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0",
    albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400"
  }
];

function App() {
  const { isAuthenticated } = useAuth();
  const [detectedEmotion, setDetectedEmotion] = React.useState<Emotion | null>(null);

  const handleEmotionDetected = (emotion: Emotion) => {
    setDetectedEmotion(emotion);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {!isAuthenticated ? (
          <LoginForm />
        ) : (
          <div className="space-y-8">
            {!detectedEmotion ? (
              <EmotionCapture onEmotionDetected={handleEmotionDetected} />
            ) : (
              <MusicRecommendation
                emotion={detectedEmotion}
                songs={mockSongs}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;