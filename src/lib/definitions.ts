export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailHint: string;
  genre: string;
  teacher: string;
};

export type Program = {
  id: string;
  time: string;
  title: string;
  description: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
};
