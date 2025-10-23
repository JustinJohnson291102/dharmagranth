import type { Video, Program } from './definitions';
import { PlaceHolderImages } from './placeholder-images';

const getVideoImage = (id: string) => {
  const img = PlaceHolderImages.find(p => p.id === id);
  if (!img) return { url: '', hint: '' };
  return { url: img.imageUrl, hint: img.imageHint };
};

export const videos: Video[] = [
  { id: '1', title: 'The Art of Mindful Living', description: 'Discover peace in everyday life with Swami Ananda.', thumbnailUrl: getVideoImage('video-1').url, thumbnailHint: getVideoImage('video-1').hint, genre: 'Discourse', teacher: 'Swami Ananda' },
  { id: '2', title: 'Meditation for Beginners', description: 'A guided session to start your meditation journey.', thumbnailUrl: getVideoImage('video-2').url, thumbnailHint: getVideoImage('video-2').hint, genre: 'Guided Meditation', teacher: 'Ananya Sharma' },
  { id: '3', title: 'The Architecture of the Soul', description: 'Exploring the symbolism in ancient temple design.', thumbnailUrl: getVideoImage('video-3').url, thumbnailHint: getVideoImage('video-3').hint, genre: 'Documentary', teacher: 'Dr. Ramesh Rao' },
  { id: '4', title: 'Surya Namaskar: A Morning Ritual', description: 'Learn the foundational yoga practice of Sun Salutation.', thumbnailUrl: getVideoImage('video-4').url, thumbnailHint: getVideoImage('video-4').hint, genre: 'Yoga', teacher: 'Priya Mehta' },
  { id: '5', title: 'Symbolism of the Lotus', description: 'Understanding the deep meaning of the sacred flower.', thumbnailUrl: getVideoImage('video-5').url, thumbnailHint: getVideoImage('video-5').hint, genre: 'Discourse', teacher: 'Swami Ananda' },
  { id: '6', title: 'The Power of Prayer', description: 'A talk on connecting with the divine through prayer.', thumbnailUrl: getVideoImage('video-6').url, thumbnailHint: getVideoImage('video-6').hint, genre: 'Discourse', teacher: 'Mata Amrit' },
  { id: '7', title: 'Ganga Aarti: An Evening Spectacle', description: 'Experience the divine ceremony from Varanasi.', thumbnailUrl: getVideoImage('video-7').url, thumbnailHint: getVideoImage('video-7').hint, genre: 'Cultural', teacher: 'N/A' },
  { id: '8', title: 'Kirtan: The Yoga of Sound', description: 'Join a blissful session of devotional chanting.', thumbnailUrl: getVideoImage('video-8').url, thumbnailHint: getVideoImage('video-8').hint, genre: 'Music', teacher: 'Krishna Das' },
  { id: '9', title: 'Understanding the Bhagavad Gita', description: 'Chapter 1 analysis and commentary.', thumbnailUrl: getVideoImage('video-9').url, thumbnailHint: getVideoImage('video-9').hint, genre: 'Scriptures', teacher: 'Dr. Ramesh Rao' },
  { id: '10', title: 'Ragas for Inner Harmony', description: 'A classical music concert for meditation.', thumbnailUrl: getVideoImage('video-10').url, thumbnailHint: getVideoImage('video-10').hint, genre: 'Music', teacher: 'Pandit Jasraj' },
];

export const genres = [...new Set(videos.map(v => v.genre))];
export const teachers = [...new Set(videos.map(v => v.teacher))];

const weeklyProgramTemplate = [
    { time: '06:00 AM', title: 'Morning Chants', description: 'Start your day with sacred mantras.' },
    { time: '07:00 AM', title: 'Yoga Session', description: 'A gentle yoga session to energize your body.' },
    { time: '08:00 AM', title: 'Spiritual Discourse', description: 'Talks on Vedanta and mindful living.' },
    { time: '05:00 PM', title: 'Evening Kirtan', description: 'Devotional chanting to soothe the soul.' },
    { time: '07:00 PM', title: 'Documentary Hour', description: 'Films on spiritual heritage and culture.' },
    { time: '08:30 PM', title: 'Guided Meditation', description: 'A session to calm the mind before sleep.' },
]

export const schedule: Program[] = (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const).flatMap((day, dayIndex) => 
    weeklyProgramTemplate.map((program, programIndex) => ({
        ...program,
        id: `${dayIndex}-${programIndex}`,
        day: day,
    }))
);
