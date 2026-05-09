"use client";

import { cn } from "@/lib/utils";

interface TagPillProps {
  label: string;
  className?: string;
  surface?: "light" | "dark";
}

export function TagPill({ label, className, surface = "light" }: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-pill-token)] border px-3 py-1 t-caption",
        surface === "light"
          ? "border-[var(--hairline)] bg-[var(--canvas)] text-[var(--ink)]"
          : "border-[rgba(255,255,255,0.08)] bg-[var(--surface-tile-3)] text-[var(--on-dark-muted)]",
        className
      )}
    >
      {label}
    </span>
  );
}
