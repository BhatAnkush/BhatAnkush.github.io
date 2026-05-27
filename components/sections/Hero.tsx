import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Tile, TileInner } from "@/components/Tile";
import { TagPill } from "../TagPill";

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
    <Tile id="hero" surface="light" className="section-padding">
      <TileInner className="text-center">
        {/* Status badge */}
        <BlurFade delay={0} inView>
          <div
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full 
                          border border-border bg-surface-subtle"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full 
                               rounded-full bg-green-400 opacity-75"
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs text-body-muted">
              Open to opportunities
            </span>
          </div>
        </BlurFade>

        {/* Caption */}
        <BlurFade delay={0.05} inView>
          <p className="mb-6 t-caption text-body-muted">
            Software Engineer · Niveus Solutions (NTT Data)
          </p>
        </BlurFade>

        {/* Avatar */}
        <BlurFade delay={0.15} inView>
          <div className="mx-auto mb-10 size-36 overflow-hidden rounded-full product-shadow sm:size-44 md:size-52">
            <div className="relative h-full w-full">
              <Image
                src="/Ankush.png"
                alt="Ankush Ananth Bhat"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </BlurFade>

        {/* Headline */}
        <BlurFade delay={0.2} inView>
          <h1 className="mx-auto max-w-4xl t-hero-display text-ink">
            Hi, I&apos;m Ankush Ananth Bhat
          </h1>
        </BlurFade>

        {/* Lead */}
        <BlurFade delay={0.3} inView>
          <p className="mx-auto mt-6 max-w-3xl t-lead text-body-muted">
            I build full-stack web applications and AI-powered products — from
            React / Next.js frontends to Node.js backends, real-time systems,
            and LLM integrations deployed on GCP.
          </p>
        </BlurFade>

        {/* Tech stack pills */}
        <BlurFade delay={0.35} inView>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {TECH_STACK.map((tech) => (
              <TagPill key={tech} label={tech} />
            ))}
          </div>
        </BlurFade>

        {/* CTAs */}
        <BlurFade delay={0.4} inView>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button variant="primary" size="navPill" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="secondaryPill" size="navPill" asChild>
              <a
                href="/Cover Letter/ankush-bhat.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Cover Letter
              </a>
            </Button>
            <Button variant="secondaryPill" size="navPill" asChild>
              <a
                href="https://github.com/BhatAnkush"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </BlurFade>
      </TileInner>
    </Tile>
  );
}
