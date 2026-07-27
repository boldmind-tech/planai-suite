// tailwind.config.ts — planai-suite
//
// Was previously nearly empty — no darkMode strategy, no colors, no shared
// preset, just one bespoke keyframe. Brought in line with the other apps:
// shared preset (covers PlanAI's own purple/green via the preset's
// brand.planai token, plus the shared plugin set), unified darkMode.

import type { Config } from "tailwindcss";
import preset from "@boldmindng/tailwind-config";

const config: Config = {
  presets: [preset],

  darkMode: ["selector", '[data-theme="dark"]'],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // Kept from the original config — used by .ai-typing-indicator in
      // this app's globals.css.
      keyframes: {
        bounce: {
          "0%, 80%, 100%": { transform: "scale(0.7)", opacity: "0.5" },
          "40%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "bounce-dot": "bounce 1.4s infinite ease-in-out",
      },
    },
  },
};

export default config;
