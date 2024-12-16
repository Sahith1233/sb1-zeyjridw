import React from 'react';
import { Music } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-center">
        <Music className="h-8 w-8 text-white mr-2" />
        <h1 className="text-3xl font-bold text-white">
          Music Synk 🎶
        </h1>
      </div>
    </header>
  );
}