import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { schedule } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import type { Program } from '@/lib/definitions';

export default function SchedulePage() {
  const daysOfWeek: Program['day'][] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const programsByDay = daysOfWeek.map(day => ({
    day,
    programs: schedule.filter(p => p.day === day).sort((a, b) => a.time.localeCompare(b.time))
  }));

  return (
    <div className="container py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-headline font-bold mb-4">Program Guide</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Plan your spiritual journey with our weekly schedule of live and pre-recorded programs.
        </p>
      </div>

      <div className="space-y-12">
        {programsByDay.map(({ day, programs }) => (
          programs.length > 0 && (
            <div key={day}>
              <h2 className="text-2xl font-headline font-semibold mb-4">{day}</h2>
              <div className="border rounded-lg overflow-hidden bg-card">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Time</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead className="hidden md:table-cell">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {programs.map(program => (
                      <TableRow key={program.id}>
                        <TableCell>
                          <Badge variant="outline">{program.time}</Badge>
                        </TableCell>
                        <TableCell className="font-medium">{program.title}</TableCell>
                        <TableCell className="text-muted-foreground hidden md:table-cell">{program.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
