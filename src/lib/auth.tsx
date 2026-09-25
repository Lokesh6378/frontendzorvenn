import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { api, tokenStore } from './api';
import type { AdminUser } from '@/types';

interface AuthState {
  admin: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(() => Boolean(tokenStore.get()));

  const logout = useCallback(() => {
    tokenStore.set(null);
    setAdmin(null);
  }, []);

  useEffect(() => {
    if (!tokenStore.get()) return;
    api<{ admin: AdminUser }>('https://backendzorvenn.onrender.com/api/auth/me')
      .then((res) => setAdmin(res.admin))
      .catch(() => tokenStore.set(null))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    window.addEventListener('zorvenn:unauthorized', logout);
    return () => window.removeEventListener('zorvenn:unauthorized', logout);
  }, [logout]);

  const login = useCallback(async (email: string, password: string) => {
    const res = await api<{ token: string; admin: AdminUser }>('https://backendzorvenn.onrender.com/api/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    tokenStore.set(res.token);
    setAdmin(res.admin);
  }, []);

  return <AuthContext.Provider value={{ admin, loading, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
