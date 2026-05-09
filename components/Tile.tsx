import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const tileSurfaces = {
  light: "bg-[var(--canvas)] text-[var(--ink)]",
  parchment: "bg-[var(--canvas-parchment)] text-[var(--ink)]",
  dark: "bg-[var(--surface-tile-1)] text-[var(--on-dark)]",
  dark2: "bg-[var(--surface-tile-2)] text-[var(--on-dark)]",
  dark3: "bg-[var(--surface-tile-3)] text-[var(--on-dark)]",
} as const;

export type TileSurface = keyof typeof tileSurfaces;

export function Tile({
  surface,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"section"> & { surface: TileSurface }) {
  return (
    <section
      className={cn("w-full", tileSurfaces[surface], className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function TileInner({
  className,
  wide,
  children,
  ...props
}: ComponentPropsWithoutRef<"div"> & { wide?: boolean }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6",
        wide ? "max-w-[1440px]" : "max-w-[980px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
