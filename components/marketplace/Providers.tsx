'use client';

import { AuthProvider } from '@boldmindng/auth';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@boldmindng/ui';

export function Providers({ children, defaultProductTheme }: {
  children: React.ReactNode;
  defaultProductTheme?: any;
}) {
  return (
    <ThemeProvider defaultProduct={defaultProductTheme}>
      <AuthProvider>
        {children}
        <Toaster position="top-right" richColors />
      </AuthProvider>
    </ThemeProvider>
  );
}
