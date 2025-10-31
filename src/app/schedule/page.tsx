import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { schedule } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import type { Program } from '@/lib/definitions';
import { Card } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

export default function SchedulePage() {
  const daysOfWeek: Program['day'][] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const getProgramsForDay = (day: Program['day']) => {
    return schedule.filter(p => p.day === day).sort((a, b) => a.time.localeCompare(b.time));
  };

  return (
    <div className="bg-secondary">
      <div className="container py-12 md:py-20">
        <div className="mb-12 text-center animate-fade-in-up">
          <h1 className="text-4xl font-headline font-bold mb-4">Program Guide</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Plan your spiritual journey with our weekly schedule of live and pre-recorded programs. All times are in your local time zone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-px overflow-hidden rounded-lg border bg-border">
          {daysOfWeek.map((day, index) => (
            <div key={day} className="bg-background animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`}}>
              <div className="p-4 border-b text-center bg-card">
                <h2 className="text-lg font-headline font-semibold">{day}</h2>
              </div>
              <div className="p-2 space-y-2">
                {getProgramsForDay(day).map(program => (
                  <Card key={program.id} className="transition-all hover:shadow-md hover:border-primary/50">
                    <div className="p-3">
                      <p className="text-xs font-semibold text-primary mb-1 flex items-center gap-1.5"><Clock className="h-3 w-3"/>{program.time}</p>
                      <h3 className="font-semibold text-sm leading-tight">{program.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{program.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
