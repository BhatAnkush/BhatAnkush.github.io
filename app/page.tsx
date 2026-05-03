"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  ExternalLink,
  Layers,
} from "lucide-react";

// Inline SVGs for branded social icons not available in lucide-react
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SKILLS = [
  "GCP", "React.js", "Node.js", "Express.js",
  "PostgreSQL", "FastAPI", "Microservices", "WebSockets",
  "Tailwind CSS", "JavaScript", "Python", "REST APIs",
];

const STATS = [
  { value: "18mo", label: "at Niveus Solutions", icon: Layers },
  { value: "2×", label: "Promoted", icon: ArrowRight },
  { value: "GCP", label: "ACE Certified", icon: Cloud },
  { value: "200+", label: "Community members led", icon: Code2 },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particle background */}
      <Particles
        className="absolute inset-0 z-0 pointer-events-none"
        quantity={80}
        ease={80}
        color="var(--particle-color, #3b82f6)"
        refresh={false}
      />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-6 text-center">
        <BlurFade delay={0.1} inView>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 mb-8 tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            Cloud Associate · Niveus Solutions (NTT Data)
          </span>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-none mb-4">
            <span className="text-foreground">Ankush</span>{" "}
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Ananth Bhat
            </span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="h-10 flex items-center justify-center mb-6">
            <TypingAnimation
              className="text-lg sm:text-xl text-muted-foreground font-medium"
              duration={40}
            >
              Full-Stack · Cloud-Native · GCP-Certified Engineer
            </TypingAnimation>
          </div>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <p className="max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed mb-10">
            Building scalable cloud-native applications and microservices on Google Cloud Platform.
            Passionate about engineering, open-source communities, and continuous learning.
          </p>
        </BlurFade>

        {/* CTA Buttons */}
        <BlurFade delay={0.5} inView>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link
              href="/chat"
              className="group relative flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:shadow-blue-500/40 hover:scale-105"
            >
              <Bot size={16} />
              Chat with my AI
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-xl border border-border bg-card hover:bg-accent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:scale-105"
            >
              <Code2 size={16} />
              View Projects
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-xl border border-border bg-card hover:bg-accent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:scale-105"
            >
              <Layers size={16} />
              About Me
            </Link>
          </div>
        </BlurFade>

        {/* Social Links */}
        <BlurFade delay={0.6} inView>
          <div className="flex gap-4 mb-16">
            <a
              href="https://github.com/bhatankush"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon size={18} /> GitHub
            </a>
            <span className="text-border">·</span>
            <a
              href="https://www.linkedin.com/in/ankushab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <span className="text-border">·</span>
            <a
              href="https://bhatankush.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink size={18} /> Portfolio
            </a>
          </div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.7} inView>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl w-full mb-16">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 text-center overflow-hidden group hover:border-blue-500/40 transition-colors"
              >
                <Icon size={18} className="text-blue-400 mb-1" />
                <span className="text-2xl font-bold text-foreground">{value}</span>
                <span className="text-xs text-muted-foreground leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Skills */}
        <BlurFade delay={0.8} inView>
          <div className="relative max-w-3xl w-full rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 overflow-hidden">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-blue-500/40 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            <BorderBeam size={200} duration={12} colorFrom="#3b82f6" colorTo="#8b5cf6" />
          </div>
        </BlurFade>
      </section>

      <SmoothCursor />
    </div>
  );
}