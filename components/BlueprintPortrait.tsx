"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";

// Reveals a blueprint version of the portrait only up to the cursor, with a scan line following it.
export function BlueprintPortrait({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const setReveal = (x: number, opacity: number, duration: string) => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--o", String(opacity));
    el.style.setProperty("--d", duration);
  };

  const follow = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    setReveal(x, 1, "120ms");
  };

  return (
    <div
      ref={ref}
      onPointerEnter={follow}
      onPointerMove={follow}
      onPointerLeave={() => setReveal(0, 0, "600ms")}
      className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-800"
    >
      <Image
        src="/Ankush.png"
        alt="Ankush Ananth Bhat"
        fill
        priority
        sizes="(max-width: 1024px) 460px, 36vw"
        className="object-cover object-center"
      />

      <div
        className="pointer-events-none absolute inset-0 transition-[clip-path] ease-out"
        style={{
          clipPath: "inset(0 calc(100% - var(--x, 0px)) 0 0)",
          transitionDuration: "var(--d, 600ms)",
        }}
      >
        <Image
          src="/Ankush.png"
          alt=""
          fill
          aria-hidden
          sizes="(max-width: 1024px) 460px, 36vw"
          className="object-cover object-center grayscale contrast-125 brightness-110"
        />
        <div className="absolute inset-0 bg-blue-600/80 mix-blend-color" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(147,197,253,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(147,197,253,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <span className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.22em] text-blue-200">
          Blueprint / build mode
        </span>
        <span className="absolute left-3 top-3 size-4 border-l border-t border-blue-200/80" />
        <span className="absolute bottom-24 left-3 size-4 border-b border-l border-blue-200/80" />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-blue-300 shadow-[0_0_18px_4px_rgba(96,165,250,0.8)] transition-[left,opacity] ease-out"
        style={{
          left: "var(--x, 0px)",
          opacity: "var(--o, 0)",
          transitionDuration: "var(--d, 600ms)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
      {children}
    </div>
  );
}
