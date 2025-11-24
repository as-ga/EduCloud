import Link from 'next/link';
import Image from 'next/image';
import { COURSES } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export function MyCourses() {
  return (
    <div className="lg:col-span-2 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold font-headline text-foreground">My Courses</h2>
        <Button variant="link" asChild className="text-primary">
          <Link href="/courses">View All</Link>
        </Button>
      </div>

      {COURSES.map((course) => {
        const placeholder = PlaceHolderImages.find(p => p.id === course.thumbnail);
        const gradientClasses = {
          py: 'from-blue-500 to-indigo-600',
          math: 'from-green-500 to-emerald-600',
          eng: 'from-orange-400 to-red-500',
        };

        return (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex flex-col sm:flex-row gap-4">
              {placeholder ? (
                 <Image
                    src={placeholder.imageUrl}
                    alt={course.title}
                    width={192}
                    height={112}
                    className="w-full sm:w-48 h-28 rounded-lg object-cover"
                    data-ai-hint={placeholder.imageHint}
                  />
              ) : (
                <div className={cn("w-full sm:w-48 h-28 rounded-lg flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br", gradientClasses[course.thumbnail as keyof typeof gradientClasses] || gradientClasses.py )}>
                  {course.thumbnail.toUpperCase()}
                </div>
              )}
             
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-foreground leading-tight">{course.title}</h3>
                    <Badge variant="secondary" className="flex-shrink-0">Term {course.term}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Next: {course.nextUp}</p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>{course.progress}% Complete</span>
                    <span>{course.completedModules}/{course.totalModules} Modules</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" asChild className="flex-1 py-1 h-auto text-sm">
                    <Link href={`/courses/${course.id}`}>Resume</Link>
                  </Button>
                  <Button size="sm" variant="secondary" asChild className="flex-1 py-1 h-auto text-sm">
                    <Link href="/assessment">Quiz</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
