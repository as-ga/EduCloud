'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Bell } from 'lucide-react';

const notificationItems = [
  { id: 'announcements', label: 'Course announcements', checked: true },
  { id: 'deadlines', label: 'Assignment deadlines', checked: true },
  { id: 'results', label: 'Graded quiz results', checked: true },
  { id: 'forum', label: 'Discussion forum replies', checked: false },
];

export function NotificationsForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Bell className="w-5 h-5 text-primary" /> Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notificationItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
            <Label htmlFor={item.id} className="font-normal">{item.label}</Label>
            <Switch id={item.id} defaultChecked={item.checked} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
