"use client";

import { Dumbbell, Flame, Trophy } from "lucide-react";
import { Button } from "@boldmindng/ui";

export default function FitnessCenterPage() {
  return (
    <div data-product="boldmind-fitness" className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
          <Dumbbell size={19} className="text-[var(--product-primary)]" />{" "}
          Boldmind Fitness Center
        </h1>
        <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
          Nigerian meal tracking, home workouts, and an AI coach.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="card text-center">
          <Flame
            size={20}
            className="text-[var(--color-warning)] mx-auto mb-2"
          />
          <div className="text-[22px] font-bold tabular-nums">1,840</div>
          <div className="text-[12px] text-[var(--product-foreground)]/55">
            Calories today
          </div>
        </div>
        <div className="card text-center">
          <Trophy
            size={20}
            className="text-[var(--product-secondary)] mx-auto mb-2"
          />
          <div className="text-[22px] font-bold tabular-nums">Day 12</div>
          <div className="text-[12px] text-[var(--product-foreground)]/55">
            Challenge streak
          </div>
        </div>
        <div className="card text-center">
          <Dumbbell
            size={20}
            className="text-[var(--product-primary)] mx-auto mb-2"
          />
          <div className="text-[22px] font-bold tabular-nums">4 / 5</div>
          <div className="text-[12px] text-[var(--product-foreground)]/55">
            Workouts this week
          </div>
        </div>
      </div>

      <div className="card">
        <div className="text-[13.5px] font-semibold mb-1">
          Today's meal plan
        </div>
        <p className="text-[12.5px] text-[var(--product-foreground)]/60">
          Jollof rice with grilled chicken (₦800), boiled plantain + egg (₦450),
          egusi soup (₦900).
        </p>
        <Button variant="secondary" className="mt-3 text-[12.5px]">
          Log a meal
        </Button>
      </div>
    </div>
  );
}
