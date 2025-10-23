import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { videos, genres, teachers } from '@/lib/data';
import VideoCard from '@/components/videos/VideoCard';
import { Input } from '@/components/ui/input';

export default function VideosPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-headline font-bold mb-4">Video Library</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore our extensive collection of discourses, guided meditations, yoga sessions, and cultural programs.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input placeholder="Search videos..." className="max-w-sm" />
        <div className="flex-grow" />
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by Genre" />
          </SelectTrigger>
          <SelectContent>
            {genres.map(genre => (
              <SelectItem key={genre} value={genre}>{genre}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by Teacher" />
          </SelectTrigger>
          <SelectContent>
            {teachers.map(teacher => (
              <SelectItem key={teacher} value={teacher}>{teacher}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
