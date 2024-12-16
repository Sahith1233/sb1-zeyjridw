// Emotion detection utility functions
export const emotions = [
  'happy',
  'sad',
  'angry',
  'surprised',
  'fearful',
  'disgusted',
  'neutral'
] as const;

export type Emotion = typeof emotions[number];

export const getEmotionColor = (emotion: Emotion): string => {
  const colors = {
    happy: 'yellow',
    sad: 'blue',
    angry: 'red',
    surprised: 'purple',
    fearful: 'gray',
    disgusted: 'green',
    neutral: 'slate'
  };
  return colors[emotion];
};