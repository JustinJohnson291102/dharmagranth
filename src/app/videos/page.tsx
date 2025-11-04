"use client";

import React, { useState, useMemo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { videos, genres, teachers } from '@/lib/data';
import VideoCard from '@/components/videos/VideoCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { List, Grid } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Video } from '@/lib/definitions';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('all');
  const [teacherFilter, setTeacherFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      const searchMatch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          video.description.toLowerCase().includes(searchTerm.toLowerCase());
      const genreMatch = genreFilter === 'all' || video.genre === genreFilter;
      const teacherMatch = teacherFilter === 'all' || video.teacher === teacherFilter;
      return searchMatch && genreMatch && teacherMatch;
    });
  }, [searchTerm, genreFilter, teacherFilter]);

  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-headline font-bold mb-4">Video Library</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore our extensive collection of discourses, guided meditations, yoga sessions, and cultural programs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <Input 
          placeholder="Search videos..." 
          className="max-w-sm" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex-grow" />
        <div className="flex gap-2">
            <Select value={genreFilter} onValueChange={setGenreFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by Genre" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Genres</SelectItem>
                {genres.map(genre => (
                <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                ))}
            </SelectContent>
            </Select>
            <Select value={teacherFilter} onValueChange={setTeacherFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by Teacher" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Teachers</SelectItem>
                {teachers.map(teacher => (
                <SelectItem key={teacher} value={teacher}>{teacher}</SelectItem>
                ))}
            </SelectContent>
            </Select>
            <div className="hidden sm:flex">
                <Button variant={viewMode === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('grid')}>
                    <Grid className="h-5 w-5" />
                </Button>
                 <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('list')}>
                    <List className="h-5 w-5" />
                </Button>
            </div>
        </div>
      </div>

      <div 
        className={cn(
            "grid gap-6 animate-fade-in-up",
            viewMode === 'grid' 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
        )}
        style={{animationDelay: '0.4s'}}
      >
        {filteredVideos.length > 0 ? (
            filteredVideos.map(video => (
                viewMode === 'grid' ? (
                    <VideoCard key={video.id} video={video} />
                ) : (
                    <VideoListCard key={video.id} video={video} />
                )
            ))
        ) : (
            <div className="col-span-full text-center py-16">
                <h3 className="text-xl font-semibold">No Videos Found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
            </div>
        )}
      </div>
    </div>
  );
}


function VideoListCard({ video }: { video: Video }) {
    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg w-full">
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 aspect-video sm:aspect-auto relative">
                     <Image
                        src={video.thumbnailUrl}
                        alt={video.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-fill"
                        data-ai-hint={video.thumbnailHint}
                    />
                </div>
                <div className="sm:w-2/3 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-lg font-headline leading-tight">
                        <Link href={`/videos`}>{video.title}</Link>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                        {video.description}
                        </p>
                    </CardContent>
                    <CardFooter className="flex gap-2 flex-wrap pt-4">
                        <Badge variant="secondary">{video.genre}</Badge>
                        <Badge variant="outline">{video.teacher}</Badge>
                    </CardFooter>
                </div>
            </div>
        </Card>
    )
}
