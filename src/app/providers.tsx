// src/app/providers.tsx
'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NewThemeProvider } from '@/themes/ThemeProvider';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as ShadcnToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
// import { ThemeTestControls } from '@/components/dev/ThemeTestControls'; // BU SATIRI YORUMA ALIN VEYA SİLİN

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient({
    // defaultOptions: {
    //   queries: {
    //     staleTime: 5 * 60 * 1000,
    //   },
    // },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <NewThemeProvider
        defaultTheme="default-light"
        storageKey="next-erp-theme-preference"
        respectSystemPreference={true}
      >
        <TooltipProvider delayDuration={100}>
          {children}
          <ShadcnToaster />
          <SonnerToaster richColors position="top-right" />
          {/* {process.env.NODE_ENV === 'development' && <ThemeTestControls />} BU SATIRI YORUMA ALIN VEYA SİLİN */}
        </TooltipProvider>
      </NewThemeProvider>
    </QueryClientProvider>
  );
}