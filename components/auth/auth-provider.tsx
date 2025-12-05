'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AuthContext } from '@/context/auth-context';
import { MOCK_USER } from '@/lib/mock-data';
import type { User } from '@/lib/types';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for a session cookie
    try {
      const session = localStorage.getItem('educloud-auth');
      if (session) {
        setUser(MOCK_USER);
        setIsAuthenticated(true);
      }
    } catch (error) {
      // Local storage is not available
    } finally {
      setTimeout(() => setIsLoading(false), 800); // Simulate loading time
    }
  }, []);

  const login = useCallback(async (email: string, pass: string) => {
    // In a real app, you'd call Firebase here
    console.log('Logging in with', email, pass);
    setIsLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(MOCK_USER);
        setIsAuthenticated(true);
        try {
          localStorage.setItem('educloud-auth', 'true');
        } catch (error) {
           // Local storage is not available
        }
        setIsLoading(false);
        resolve();
      }, 1000);
    });
  }, []);

  const logout = useCallback(async () => {
    // In a real app, you'd call Firebase here
    setIsLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(null);
        setIsAuthenticated(false);
        try {
          localStorage.removeItem('educloud-auth');
        } catch (error) {
          // Local storage is not available
        }
        setIsLoading(false);
        resolve();
      }, 500);
    });
  }, []);

  const value = { user, isAuthenticated, isLoading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
