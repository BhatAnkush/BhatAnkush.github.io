"use client";

import { cn } from "@/lib/utils";

interface TagPillProps {
  label: string;
  className?: string;
}

export function TagPill({ label, className }: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-[#333] bg-[#1f1f1f] px-3 py-1 text-xs text-[#ccc] transition-colors hover:border-[#555] hover:text-white",
        className
      )}
    >
      {label}
    </span>
  );
}
