import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, PlayCircle, FileText, HelpCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export function Syllabus() {
  return (
    <Card className="w-full lg:w-80 h-full flex flex-col shrink-0">
      <CardHeader className="border-b">
        <CardTitle className="text-base">Course Content</CardTitle>
        <Progress value={75} className="w-full h-1 mt-2" />
        <p className="text-xs text-muted-foreground mt-1">75% Completed</p>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-0">
        {[1, 2, 3, 4].map((week) => (
          <div key={week} className="border-b">
            <div className="px-4 py-3 bg-muted font-medium text-sm flex justify-between items-center">
              <span>Week {week}</span>
              {week < 4 ? <CheckCircle className="w-4 h-4 text-green-500" /> : <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>}
            </div>
            {week === 4 && (
              <div className="bg-card">
                {[
                  { title: 'Lecture 4.1', icon: PlayCircle, active: false },
                  { title: 'Lecture 4.2', icon: PlayCircle, active: true },
                  { title: 'Reading Material', icon: FileText, active: false },
                  { title: 'Graded Quiz', icon: HelpCircle, active: false },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "px-8 py-2 text-sm cursor-pointer flex items-center gap-2 border-l-2",
                      item.active
                        ? 'text-primary bg-primary/10 font-medium border-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-primary border-transparent'
                    )}
                  >
                    <item.icon className="w-3 h-3" /> {item.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
