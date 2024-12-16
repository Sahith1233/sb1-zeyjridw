import React from 'react';
import { ExternalLink, Music } from 'lucide-react';
import { Card } from './ui/Card';
import type { Song } from '../types';
import { Emotion, getEmotionColor } from '../utils/emotion';

interface MusicRecommendationProps {
  emotion: Emotion;
  songs: Song[];
}

export default function MusicRecommendation({ emotion, songs }: MusicRecommendationProps) {
  const emotionColor = getEmotionColor(emotion);

  return (
    <Card>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800">
          Based on your {emotion} mood...
        </h3>
        <p className="text-gray-600 mt-2">
          Here are some songs to enhance your mood
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {songs.map((song, index) => (
          <div
            key={index}
            className={`bg-${emotionColor}-50 p-4 rounded-lg hover:shadow-md transition-shadow`}
          >
            <img
              src={song.albumArt}
              alt={`${song.title} album art`}
              className="w-full aspect-square object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold text-gray-800">{song.title}</h4>
            <p className="text-gray-600 text-sm">{song.artist}</p>
            <a
              href={song.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center text-purple-600 hover:text-purple-700"
            >
              <Music className="h-4 w-4 mr-1" />
              <span className="text-sm">Play on Spotify</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
}