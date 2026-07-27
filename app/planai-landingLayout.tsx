"use client";
import { ReactNode } from "react";
import { ThemeProvider, FontProvider } from "@boldmindng/ui";
import type { ProductThemeType } from "@boldmindng/ui";
import { getColorScheme, getProductBySlug } from "@boldmindng/utils";

// Derived from colors.ts + products.ts rather than hand-copied — if the
// 'planai' scheme or product metadata changes, this stays in sync instead
// of silently drifting from the source of truth.
const scheme = getColorScheme("planai");
const product = getProductBySlug("planai");

const PLANAI_THEME: ProductThemeType = {
  slug: "planai",
  name: product?.name ?? "PlanAI By BoldmindNG",
  description:
    product?.description ?? "AI business automation for Nigerian entrepreneurs",
  icon: product?.icon ?? "⚡",
  status: product?.status ?? "LIVE",
  colors: {
    primary: scheme.primary,
    secondary: scheme.secondary,
    accent: scheme.accent,
    background: scheme.background,
    foreground: scheme.foreground,
    muted: scheme.muted,
  },
};

export function PlanaiLandingLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="light"
      forceProductSlug="planai"
      defaultProduct={PLANAI_THEME}
    >
      <FontProvider defaultMode="standard">{children}</FontProvider>
    </ThemeProvider>
  );
}
