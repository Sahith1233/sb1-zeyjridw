export interface User {
  email: string;
  password: string;
}

export interface EmotionData {
  emotion: string;
  confidence: number;
}

export interface Song {
  title: string;
  artist: string;
  spotifyUrl: string;
  albumArt: string;
}