import Link from 'next/link';
import Image from 'next/image';
import { COURSES } from '@/lib/mock-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function MyCoursesPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold font-headline text-foreground mb-6">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSES.map((course) => {
          const placeholder = PlaceHolderImages.find(p => p.id === course.thumbnail);
          const gradientClasses = {
            py: 'from-blue-500 to-indigo-600',
            math: 'from-green-500 to-emerald-600',
            eng: 'from-orange-400 to-red-500',
          };

          return (
            <Card key={course.id} className="hover:shadow-md transition-shadow flex flex-col">
              {placeholder ? (
                <Image
                  src={placeholder.imageUrl}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover rounded-t-lg"
                  data-ai-hint={placeholder.imageHint}
                />
              ) : (
                 <div className={cn("w-full h-40 flex items-center justify-center text-white font-bold text-4xl bg-gradient-to-br rounded-t-lg", gradientClasses[course.thumbnail as keyof typeof gradientClasses] || gradientClasses.py)}>
                  {course.thumbnail.toUpperCase()}
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="leading-tight text-base">{course.title}</CardTitle>
                  <Badge variant="secondary">Term {course.term}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>{course.progress}% Complete</span>
                  <span>{course.completedModules}/{course.totalModules} Modules</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </CardContent>
              <CardFooter>
                <Button size="sm" asChild className="w-full">
                  <Link href={`/courses/${course.id}`}>Resume Learning</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
