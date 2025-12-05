'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Progress } from '@/components/ui/progress';

const chartData = [
  { name: 'T1', score: 40 },
  { name: 'T2', score: 65 },
  { name: 'T3', score: 55 },
  { name: 'T4', score: 80 },
  { name: 'T5', score: 75 },
  { name: 'T6', score: 90 },
];

const subjects = [
  { name: 'Programming', proficiency: 85, color: 'bg-blue-500' },
  { name: 'Mathematics', proficiency: 75, color: 'bg-green-500' },
  { name: 'Statistics', proficiency: 65, color: 'bg-purple-500' },
];

export function PerformanceAnalytics() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold font-headline text-foreground">Performance Growth</h2>
      <Card className="h-full">
        <CardContent className="p-6 h-full flex flex-col">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
              <Tooltip
                cursor={{ fill: 'hsl(var(--muted))', radius: 'var(--radius)' }}
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
              />
              <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-6 w-full">
            <h4 className="font-bold text-foreground text-sm mb-3">Subject Proficiency</h4>
            <div className="space-y-3">
              {subjects.map((sub) => (
                <div key={sub.name} className="flex items-center gap-3 text-xs">
                  <span className="w-24 text-muted-foreground">{sub.name}</span>
                  <div className="flex-1">
                    <Progress value={sub.proficiency} className="h-1.5 [&>div]:bg-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
