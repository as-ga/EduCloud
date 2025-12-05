import { Card, CardContent } from '@/components/ui/card';
import { Award, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const stats = [
  {
    title: 'Current CGPA',
    value: '8.9',
    icon: Award,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Credits Earned',
    value: '42/120',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Hours Learned',
    value: '128h',
    icon: Clock,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Assignments Due',
    value: '3',
    icon: AlertCircle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent className="p-4 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center ${stat.color} flex-shrink-0`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
