import { VideoSection } from '@/components/course-player/video-section';
import { Syllabus } from '@/components/course-player/syllabus';

export default function CoursePlayerPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch course data based on params.id
  // const course = await getCourseById(params.id);

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col lg:flex-row gap-6 animate-fade-in">
      <VideoSection />
      <Syllabus />
    </div>
  );
}
