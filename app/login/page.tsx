'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { BookOpen, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await login('student@university.edu', 'password');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card rounded-2xl shadow-xl p-8 border">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
            <BookOpen className="text-primary-foreground w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold font-headline text-foreground">Student Portal</h1>
          <p className="text-muted-foreground mt-2">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email ID</Label>
            <Input id="email" type="email" placeholder="student@university.edu" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Checkbox id="remember-me" />
              <Label htmlFor="remember-me" className="text-slate-600 font-normal">Remember me</Label>
            </div>
            <a href="#" className="text-primary hover:underline">Forgot password?</a>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <LoaderCircle className="animate-spin" />}
            Sign In
          </Button>
        </form>
        <div className="mt-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} EduCloud. All rights reserved.
        </div>
      </div>
    </div>
  );
}
