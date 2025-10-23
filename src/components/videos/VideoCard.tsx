import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle } from "lucide-react";
import type { Video } from "@/lib/definitions";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <Link href={`/videos`} className="block group">
        <div className="relative aspect-video">
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint={video.thumbnailHint}
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <PlayCircle className="h-12 w-12 text-white" />
          </div>
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="text-lg font-headline leading-tight">
          <Link href={`/videos`}>{video.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {video.description}
        </p>
      </CardContent>
      <CardFooter className="flex gap-2 flex-wrap pt-4">
        <Badge variant="secondary">{video.genre}</Badge>
        <Badge variant="outline">{video.teacher}</Badge>
      </CardFooter>
    </Card>
  );
}
