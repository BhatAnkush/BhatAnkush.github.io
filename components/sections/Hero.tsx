import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Tile, TileInner } from "@/components/Tile";
import { TagPill } from "../TagPill";
import { ArrowUpRight, Download } from "lucide-react";

const TECH_STACK = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "GCP",
  "WebSockets",
  "Tailwind CSS",
];

export function Hero() {
  return (
    <Tile id="hero" surface="light" className="section-padding overflow-hidden">
      <TileInner>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:gap-20 lg:items-start">

          {/* ── Left col: all text ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">

            {/* Status pill */}
            <BlurFade delay={0} inView>
              <div className="mb-8 inline-flex items-center gap-2.5 self-start rounded-full border border-[var(--hairline)] bg-[var(--canvas)] px-3.5 py-1.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="t-caption text-[var(--ink-muted-80)]">Open to opportunities</span>
              </div>
            </BlurFade>

            {/* Role line */}
            <BlurFade delay={0.05} inView>
              <p className="mb-3 t-caption tracking-widest uppercase text-[var(--ink-muted-48)]">
                Software Engineer · Niveus Solutions (NTT Data)
              </p>
            </BlurFade>

            {/* Name — large editorial display */}
            <BlurFade delay={0.1} inView>
              <h1 className="t-hero-display text-[var(--ink)] leading-[0.95] mb-6">
                Ankush<br />
                <span className="text-[var(--ink-muted-48)]">Ananth</span><br />
                Bhat
              </h1>
            </BlurFade>

            {/* Lead copy */}
            <BlurFade delay={0.2} inView>
              <p className="t-body text-[var(--ink-muted-80)] max-w-lg leading-relaxed mb-8">
                I build full-stack web applications and AI-powered products —
                from React&nbsp;/&nbsp;Next.js frontends to Node.js backends,
                real-time systems, and LLM integrations deployed on GCP.
              </p>
            </BlurFade>

            {/* Tech pills */}
            <BlurFade delay={0.25} inView>
              <div className="flex flex-wrap gap-2 mb-10">
                {TECH_STACK.map((tech) => (
                  <TagPill key={tech} label={tech} />
                ))}
              </div>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.3} inView>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="navPill" asChild>
                  <a href="#contact" className="inline-flex items-center gap-1.5">
                    Get in touch
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
                <Button variant="secondaryPill" size="navPill" asChild>
                  <a
                    href="/Cover Letter/ankush-bhat.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    <Download className="size-3.5" />
                    Cover Letter
                  </a>
                </Button>
                <Button variant="secondaryPill" size="navPill" asChild>
                  <a
                    href="https://github.com/BhatAnkush"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    GitHub
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
              </div>
            </BlurFade>
          </div>

          {/* ── Right col: avatar ── */}
          <BlurFade delay={0.15} inView className="order-1 lg:order-2 flex justify-center lg:justify-end lg:pt-2">
            <div className="relative">
              {/* Subtle halo ring */}
              <div className="absolute -inset-3 rounded-full border border-[var(--hairline)] opacity-60" />
              <div className="absolute -inset-6 rounded-full border border-[var(--hairline)] opacity-30" />

              <div className="relative size-52 overflow-hidden rounded-full product-shadow sm:size-60 lg:size-72">
                <Image
                  src="/Ankush.png"
                  alt="Ankush Ananth Bhat"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating years badge */}
              <div className="absolute -bottom-3 -left-4 flex flex-col items-center justify-center rounded-2xl border border-[var(--hairline)] bg-[var(--canvas)] px-4 py-2.5 product-shadow">
                <span className="text-2xl font-bold leading-none text-[var(--ink)]">1+</span>
                <span className="t-caption text-[var(--ink-muted-48)] leading-snug">yrs exp</span>
              </div>

              {/* Floating cert badge */}
              <div className="absolute -top-2 -right-4 flex items-center gap-2 rounded-2xl border border-[var(--hairline)] bg-[var(--canvas)] px-3 py-2 product-shadow">
                <Image src="/gcp.png" alt="GCP" width={20} height={20} className="rounded-sm" />
                <span className="t-caption text-[var(--ink-muted-80)] text-xs">GCP Certified</span>
              </div>
            </div>
          </BlurFade>

        </div>
      </TileInner>
    </Tile>
  );
}