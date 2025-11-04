
import { schedule, type Program } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Sparkles, Sun, Moon, Sunset, Sunrise } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


type Period = 'Morning' | 'Afternoon' | 'Evening' | 'Night';

const getPeriod = (time: string): Period => {
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

const programsByPeriod: Record<Period, Program[]> = {
    Morning: [],
    Afternoon: [],
    Evening: [],
    Night: [],
};

schedule.forEach(program => {
    const period = getPeriod(program.time);
    programsByPeriod[period].push(program);
});

const periodDetails: Record<Period, { icon: React.ElementType, color: string }> = {
    Morning: { icon: Sunrise, color: 'text-amber-500' },
    Afternoon: { icon: Sun, color: 'text-sky-500' },
    Evening: { icon: Sunset, color: 'text-purple-500' },
    Night: { icon: Moon, color: 'text-indigo-500' },
};


export default function SchedulePage() {
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

        <div className="space-y-12">
            {(Object.keys(programsByPeriod) as Period[]).map((period, index) => {
                const { icon: Icon, color } = periodDetails[period];
                if (programsByPeriod[period].length === 0) return null;

                return (
                    <div key={period} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                        <h2 className={`flex items-center gap-3 text-3xl font-headline font-bold mb-6 ${color}`}>
                            <Icon className="h-8 w-8" />
                            {period} Schedule
                        </h2>
                        <Card className="shadow-lg overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                                        <TableHead className="w-[150px]">Time</TableHead>
                                        <TableHead>Program</TableHead>
                                        <TableHead className="hidden md:table-cell">Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {programsByPeriod[period].map(program => {
                                        const isLive = program.title.toLowerCase().includes('live');
                                        return (
                                            <TableRow key={program.id} className="transition-colors hover:bg-muted/30">
                                                <TableCell className="font-medium">
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="h-4 w-4 text-primary" />
                                                        <span>{program.time}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        <span className="font-semibold">{program.title}</span>
                                                        {isLive && (
                                                            <Badge variant="destructive" className="animate-pulse whitespace-nowrap">
                                                                <div className="h-2 w-2 rounded-full bg-white mr-1.5"></div> LIVE
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell text-muted-foreground">{program.description}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
}

