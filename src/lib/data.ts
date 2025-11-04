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

export const schedule: Program[] = [
    { id: '1', time: '12:00 AM', title: 'BHAJAN', description: 'Soothing devotional music to begin the day.' },
    { id: '2', time: '04:30 AM', title: 'SUNDARKAND PATH', description: 'Recitation of the sacred Sundarkand.' },
    { id: '3', time: '06:15 AM', title: 'SALASAR BALA JI AARTI', description: 'Live morning aarti from Salasar Balaji temple.' },
    { id: '4', time: '07:00 AM', title: 'KHATU SHYAM JI D-LIVE AARTI', description: 'Direct telecast of the aarti from Khatu Shyam Ji temple.' },
    { id: '5', time: '07:30 AM', title: 'BHAJAN CHALISA', description: 'A collection of powerful bhajans and chalisas.' },
    { id: '6', time: '08:00 AM', title: 'BHAJAN CHALISA', description: 'Continued session of devotional hymns.' },
    { id: '7', time: '09:00 AM', title: 'JHANDEWALAN MATA LIVE AARTI', description: 'Witness the grand aarti live from Jhandewalan Mata Mandir.' },
    { id: '8', time: '10:30 AM', title: 'KATHA D-LIVE', description: 'Live spiritual discourse from revered saints.' },
    { id: '9', time: '12:00 PM', title: 'JHANDEWALAN MATA LIVE AARTI', description: 'Mid-day aarti live from Jhandewalan Mata Mandir.' },
    { id: '10', time: '03:00 PM', title: 'KAVI SAMMELAN', description: 'An enriching session of devotional poetry.' },
    { id: '11', time: '04:30 PM', title: 'GAYATRI MANTRA', description: 'Chanting of the powerful Gayatri Mantra for spiritual upliftment.' },
    { id: '12', time: '05:00 PM', title: 'CHALISA', description: 'Recitation of various chalisas for divine blessings.' },
    { id: '13', time: '06:30 PM', title: 'KHATU SHYAM JI D-LIVE AARTI', description: 'Evening aarti broadcast live from Khatu Shyam Ji temple.' },
    { id: '14', time: '06:45 PM', title: 'SARYU MATA LIVE AARTI FROM AYODHYA', description: 'Experience the divine Saryu Aarti from the holy city of Ayodhya.' },
    { id: '15', time: '07:05 PM', title: 'CHITRAKOOT DHAM LIVE AARTI', description: 'Live aarti from the sacred grounds of Chitrakoot Dham.' },
    { id: '16', time: '07:30 PM', title: 'JHANDEWALAN MATA LIVE AARTI', description: 'Evening aarti live from Jhandewalan Mata Mandir.' },
    { id: '17', time: '08:05 PM', title: 'DHARMGRANTH TV SPECIAL SHOW', description: 'A special feature presentation from Dharmagranth TV.' },
    { id: '18', time: '09:00 PM', title: 'HANUMANGARHI LIVE AARTI FROM AYODHYA', description: 'Night aarti live from Hanumangarhi, Ayodhya.' },
    { id: '19', time: '09:30 PM', title: 'KATHA D-LIVE', description: 'Nightly spiritual discourse to conclude your day.' },
    { id: '20', time: '10:00 PM', title: 'KATHA D-LIVE', description: 'Continued live spiritual discourse.' },
    { id: '21', time: '10:30 PM', title: 'KATHA D-LIVE', description: 'Further insights in the ongoing spiritual discourse.' },
    { id: '22', time: '11:00 PM', title: 'KATHA D-LIVE', description: 'Late-night session of spiritual discourse.' },
    { id: '23', time: '11:30 PM', title: 'KATHA D-LIVE', description: 'Concluding part of the live spiritual discourse.' },
];
