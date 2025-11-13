import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Tv, Star } from "lucide-react";
import Image from "next/image";
import { schedule } from "@/lib/data";

const nowPlaying = schedule[2]; // Spiritual Discourse
const upNext = schedule.slice(3, 6);

export default function LivePage() {
  return (
    <div className="bg-secondary">
      <div className="container py-12 md:py-20">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge variant="destructive" className="mb-4 text-lg py-1 px-4 rounded-full animate-pulse">
            <Tv className="mr-2 h-5 w-5" /> LIVE
          </Badge>
          <h1 className="text-4xl font-headline font-bold mb-4">Live TV Stream</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our live stream for daily programs, special events, and continuous spiritual content.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <Card className="overflow-hidden shadow-2xl animate-fade-in-up">
                  <div className="aspect-video bg-black relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=2053&auto=format&fit=crop"
                      alt="Live Stream"
                      fill
                      className="object-cover"
                    />
                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <p className="text-2xl font-bold text-white bg-black/50 px-8 py-4 rounded-lg">Live Stream Player</p>
                    </div>
                  </div>
                </Card>

                <Card className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl flex items-center gap-2">
                           <Star className="text-primary"/> Now Playing: {nowPlaying.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{nowPlaying.description}</p>
                        <div className="flex items-center gap-4 mt-4 text-sm">
                            <Badge>{nowPlaying.time}</Badge>
                            <span className="text-muted-foreground">Category: Discourse</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-1 space-y-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <h2 className="text-2xl font-headline font-bold">Up Next</h2>
                <div className="space-y-4">
                    {upNext.map(program => (
                        <Card key={program.id} className="bg-background/50">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{program.title}</h3>
                                    <p className="text-sm text-muted-foreground">{program.time}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="mt-6">
                    <h3 className="text-xl font-headline font-semibold mb-4">Want to see the full schedule?</h3>
                    <p className="text-muted-foreground mb-4">Plan your day of spiritual immersion with our complete program guide.</p>
                    <a href="/schedule" className="text-primary font-semibold hover:underline">View Full TV Guide →</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
