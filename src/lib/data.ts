
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

export const hindiVideos: Video[] = [
  { id: 'h1', title: 'नाचे नन्दलाल, नचावे हरि की मईआ', description: 'नाचे नन्दलाल, नचावे हरि की मईआ ॥ नचावे हरि की मईआ...', thumbnailUrl: 'https://ik.imagekit.io/ggelm1lwa/0.jpg?updatedAt=1762513898737', thumbnailHint: 'krishna statue', genre: 'भजन', teacher: 'लोक कलाकार' },
  { id: 'h2', title: 'माई सबके बाल गोपाल, सदा खुशहाल रहे', description: 'माई सबके बाल गोपाल, सदा खुशहाल रहे, खुशहाल रहे मालामाल रहे, माईं सबके बाल गोपाल, सदा खुशहाल रहे ॥', thumbnailUrl: 'https://ik.imagekit.io/ggelm1lwa/0%20(6).jpg?updatedAt=1762515963741', thumbnailHint: 'child krishna', genre: 'भजन', teacher: 'संत परंपरा' },
  { id: 'h3', title: 'भए प्रगट कृपाला दीनदयाला', description: 'श्री रामअवतार स्तुति बधाई, सोहर, जन्मदिन अवसरों पर लोकप्रिय है। भए प्रगट कृपाला दीनदयाला, कौसल्या हितकारी ।', thumbnailUrl: 'https://ik.imagekit.io/ggelm1lwa/0%20(3).jpg?updatedAt=1762514460652', thumbnailHint: 'ram statue', genre: 'भजन', teacher: 'तुलसीदास' },
  { id: 'h4', title: 'राधा श्री राधा-धुन', description: 'राधा, श्री राधा, श्री राधा, श्री, राधा राधा ॥', thumbnailUrl: 'https://ik.imagekit.io/ggelm1lwa/0%20(1).jpg?updatedAt=1762514304105', thumbnailHint: 'radha krishna', genre: 'भजन', teacher: 'भक्तगण' },
  { id: 'h5', title: 'तुम्हारे हवाले अहोई मैया', description: 'तुम्हरे हवाले किया मैंने गौरी मैया, रखना तू इनका ख्याल माँ, रखा अहोई का व्रत मैंने विधिवत पूंजूँ, तोहे फैले फूले बाल गोपाल', thumbnailUrl: 'https://ik.imagekit.io/ggelm1lwa/0%20(2).jpg?updatedAt=1762514345981', thumbnailHint: 'hindu goddess', genre: 'अहोई अष्टमी भजन', teacher: 'महिला मंडली' },
  { id: 'h6', title: 'अच्चुतम केशवं कृष्ण दामोदरं', description: 'अच्चुतम केशवं कृष्ण दामोदरं, राम नारायणं जानकी बल्लभम । कौन कहता हे भगवान आते नहीं..', thumbnailUrl: 'https://ik.imagekit.io/ggelm1lwa/0%20(4).jpg?updatedAt=1762514851503', thumbnailHint: 'krishna statue', genre: 'भजन', teacher: 'संत परंपरा' },
  { id: 'h7', title: 'प्रभु राम का सुमिरन कर', description: 'प्रभु राम का सुमिरन कर, हर दुःख मिट जाएगा, यही राम नाम तुझको, भव पार लगाएगा ॥', thumbnailUrl: 'https://ik.imagekit.io/ggelm1lwa/0%20(5).jpg?updatedAt=1762515090023', thumbnailHint: 'ram worship', genre: 'भजन', teacher: 'संत परंपरा' },
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
    { id: '7', time: '09:00 AM', title: 'JHANDEWALAN MATA LIVE AARTi', description: 'Witness the grand aarti live from Jhandewalan Mata Mandir.' },
    { id: '9', time: '12:00 PM', title: 'JHANDEWALAN MATA LIVE AARTI', description: 'Mid-day aarti live from Jhandewalan Mata Mandir.' },
    { id: '10', time: '12:00 PM', title: 'KATHA D-LIVE', description: 'Live spiritual discourse from revered saints, running until 9:30 PM.' },
    { id: '11', time: '03:00 PM', title: 'KAVI SAMMELAN', description: 'An enriching session of devotional poetry.' },
    { id: '12', time: '04:30 PM', title: 'GAYATRI MANTRA', description: 'Chanting of the powerful Gayatri Mantra for spiritual upliftment.' },
    { id: '13', time: '05:00 PM', title: 'CHALISA', description: 'Recitation of various chalisas for divine blessings.' },
    { id: '14', time: '06:30 PM', title: 'KHATU SHYAM JI D-LIVE AARTI', description: 'Evening aarti broadcast live from Khatu Shyam Ji temple.' },
    { id: '15', time: '06:45 PM', title: 'SARYU MATA LIVE AARTI FROM AYODHYA', description: 'Experience the divine Saryu Aarti from the holy city of Ayodhya.' },
    { id: '16', time: '07:05 PM', title: 'CHITRAKOOT DHAM LIVE AARTI', description: 'Live aarti from the sacred grounds of Chitrakoot Dham.' },
    { id: '17', time: '07:30 PM', title: 'JHANDEWALAN MATA LIVE AARTI', description: 'Evening aarti live from Jhandewalan Mata Mandir.' },
    { id: '18', time: '08:05 PM', title: 'DHARMGRANTH TV SPECIAL SHOW', description: 'A special feature presentation from Dharmagranth TV.' },
    { id: '19', time: '09:00 PM', title: 'HANUMANGARHI LIVE AARTI FROM AYODHYA', description: 'Night aarti live from Hanumangarhi, Ayodhya.' },
];

