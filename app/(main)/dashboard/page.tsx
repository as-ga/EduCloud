import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { MyCourses } from '@/components/dashboard/my-courses';
import { PerformanceAnalytics } from '@/components/dashboard/performance-analytics';

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-headline text-foreground">Student Growth Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Alex. You are on track for this term.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/downloads">
              <Download /> Resources
            </Link>
          </Button>
        </div>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MyCourses />
        <PerformanceAnalytics />
      </div>
    </div>
  );
}
