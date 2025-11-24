'use client';

import { useRouter } from 'next/navigation';
import { Menu, Search, Bell, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface TopbarProps {
  toggleMobile: () => void;
}

export function Topbar({ toggleMobile }: TopbarProps) {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <header className="h-16 bg-card border-b flex items-center justify-between px-4 lg:px-8 fixed top-0 right-0 left-0 lg:left-64 z-30">
      <Button onClick={toggleMobile} variant="ghost" size="icon" className="lg:hidden">
        <Menu className="w-6 h-6" />
      </Button>
      
      <div className="hidden md:flex items-center bg-muted rounded-lg px-3 w-96">
        <Search className="w-4 h-4 text-muted-foreground mr-2" />
        <Input
          type="text"
          placeholder="Search courses, lessons, or resources..."
          className="bg-transparent border-none outline-none text-sm w-full shadow-none focus-visible:ring-0"
        />
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-card"></span>
        </Button>
        <Button variant="ghost" size="icon">
          <HelpCircle className="w-5 h-5" />
        </Button>
        <div className="h-6 w-px bg-border mx-1 hidden sm:block"></div>
        <Button onClick={handleLogout} variant="ghost" className="text-muted-foreground hover:text-destructive">
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline ml-2">Logout</span>
        </Button>
      </div>
    </header>
  );
}
