'use client';
import { ReactNode } from 'react';
import { ThemeProvider, FontProvider } from '@boldmind-tech/ui';
import type { ProductThemeType } from '@boldmind-tech/ui';

const PLANAI_THEME: ProductThemeType = {
  slug: 'planai',
  name: 'PlanAI By BoldMind',
  description: 'AI business automation for Nigerian entrepreneurs',
  icon: '🤖',
  status: 'LIVE',
  colors: {
    primary:    '#5B21B6',   
    secondary:  '#059669',   
    accent:     '#8B5CF6',  
    background: '#FAFAFA',
  },
};

export function PlanaiLandingLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="light"
      forceProductSlug="planai"
      defaultProduct={PLANAI_THEME}
    >
      <FontProvider defaultMode="standard">
        {children}
      </FontProvider>
    </ThemeProvider>
  );
}
