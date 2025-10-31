import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, User, Clapperboard } from "lucide-react";
import type { Video } from "@/lib/definitions";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col group/card">
      <Link href={`/videos`} className="block group">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={video.thumbnailHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PlayCircle className="h-16 w-16 text-white/80 transform-gpu transition-transform group-hover:scale-110" />
          </div>
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="text-lg font-headline leading-tight">
          <Link href={`/videos`} className="hover:text-primary transition-colors">{video.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {video.description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 pt-4">
         <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clapperboard className="h-4 w-4" />
            <span>{video.genre}</span>
         </div>
         <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{video.teacher}</span>
         </div>
      </CardFooter>
    </Card>
  );
}
