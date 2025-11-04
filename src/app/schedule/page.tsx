import { schedule } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export default function SchedulePage() {
  const getPeriod = (time: string) => {
    const hour = parseInt(time.split(':')[0], 10);
    const ampm = time.split(' ')[1];
    if (ampm === 'AM') {
      if (hour >= 4 && hour < 12) return 'Morning';
    }
    if (ampm === 'PM') {
      if (hour === 12 || (hour >= 1 && hour < 5)) return 'Afternoon';
      if (hour >= 5 && hour < 9) return 'Evening';
    }
    return 'Night';
  };

  const periodColors = {
    Morning: 'bg-amber-100 border-amber-200',
    Afternoon: 'bg-sky-100 border-sky-200',
    Evening: 'bg-purple-100 border-purple-200',
    Night: 'bg-indigo-100 border-indigo-200',
  };

  const periodIconColors = {
    Morning: 'text-amber-500',
    Afternoon: 'text-sky-500',
    Evening: 'text-purple-500',
    Night: 'text-indigo-500',
  };

  return (
    <div className="bg-secondary/40">
      <div className="container py-16 md:py-24">
        <div className="mb-16 text-center animate-fade-in-up">
          <Badge variant="outline" className="text-lg py-2 px-4 rounded-full border-primary/50 bg-primary/10 text-primary mb-4">
             <Calendar className="mr-2 h-5 w-5" /> Daily Program Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Tune In to Your Inner Self</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our daily schedule is thoughtfully curated to accompany you on your spiritual journey, from dawn till dusk.
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Vertical line for the timeline */}
          <div className="absolute left-8 sm:left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2"></div>
          
          {schedule.map((program, index) => {
            const isLive = program.title.toLowerCase().includes('live');
            const period = getPeriod(program.time);
            const sideClass = index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end';
            const contentClass = index % 2 === 0 ? 'sm:pr-16' : 'sm:pl-16 sm:text-right';
            const cardAnimationDelay = `${index * 0.1}s`;

            return (
              <div key={program.id} className={`flex items-center w-full ${sideClass} animate-fade-in-up`} style={{ animationDelay: cardAnimationDelay }}>
                <div className={`relative w-full sm:w-1/2 ${contentClass}`}>
                    {/* Dot on the timeline */}
                    <div className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-background border-2 border-primary ${index % 2 === 0 ? 'sm:right-0 sm:translate-x-[calc(50%_+_1px)]' : 'sm:left-0 sm:translate-x-[calc(-50%_-_1px)]'} left-8 -translate-x-[calc(50%_+_1px)]`}></div>

                    <Card className={`transition-all hover:shadow-lg hover:-translate-y-1 border-l-4 ${isLive ? 'border-l-red-500' : 'border-l-primary'} ${periodColors[period]}`}>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-4 mb-2">
                                <Badge variant="secondary" className="whitespace-nowrap">
                                    <Clock className="h-4 w-4 mr-1.5"/>
                                    {program.time}
                                </Badge>
                                {isLive && (
                                    <Badge variant="destructive" className="animate-pulse">
                                      <div className="h-2 w-2 rounded-full bg-white mr-1.5"></div> LIVE
                                    </Badge>
                                )}
                            </div>
                            <h3 className="font-headline text-xl font-bold">{program.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{program.description}</p>
                        </CardContent>
                    </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
