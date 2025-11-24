import { ProfileForm } from '@/components/settings/profile-form';
import { NotificationsForm } from '@/components/settings/notifications-form';

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in space-y-6">
      <h1 className="text-2xl font-bold font-headline text-foreground">Settings & Profile</h1>
      <ProfileForm />
      <NotificationsForm />
    </div>
  );
}
