"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IconTagPillProps {
  label: string;
  icon?: ReactNode;
  className?: string;
  surface?: "light" | "dark";
}

export function IconTagPill({
  label,
  icon,
  className,
  surface = "light",
}: IconTagPillProps) {
  return (
    <span
      className={cn(
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-(--radius-pill-token) border px-4 py-1.5 t-caption transition-all duration-300",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-none before:bg-leniar-to-r before:from-transparent before:via-white/10 before:to-transparent hover:before:animate-[shimmer_600ms_ease-in-out]",
        surface === "light"
          ? "border-[var(--hairline)] bg-[var(--canvas)] text-[var(--ink)] hover:border-[var(--ink-muted-48)] hover:shadow-sm"
          : "border-[rgba(255,255,255,0.08)] bg-[var(--surface-tile-3)] text-[var(--on-dark-muted)] hover:border-[rgba(255,255,255,0.2)]",
        className,
      )}
    >
      {icon}
      {label}
    </span>
  );
}
