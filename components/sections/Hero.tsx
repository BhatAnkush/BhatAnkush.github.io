"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon } from "../Icons/GithubIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { redirect } from "next/navigation";

export function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-20 text-center">

      {/* Profile Image with BorderBeam and Status Badge */}
      <BlurFade delay={0.1} inView>
        <div className="relative mb-8 inline-block mt-10 md:mt-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-blue-500/20 bg-muted/50 p-1 md:h-48 md:w-48 shadow-2xl">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/Ankush.jpg"
                alt="Ankush Ananth Bhat"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
            </div>
            <BorderBeam size={100} duration={10} colorFrom="#3b82f6" colorTo="#8b5cf6" />
          </div>
          {/* Fun little floating badge */}
          <div className="absolute -bottom-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-blue-500 text-2xl shadow-lg transition-transform hover:scale-110 hover:rotate-12">
            ☁️
          </div>
        </div>
      </BlurFade>

      {/* Role Badge */}
      <BlurFade delay={0.2} inView>
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 mb-6 tracking-wide uppercase shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          Cloud Associate · Niveus Solutions
        </span>
      </BlurFade>

      {/* Name with Gradient */}
      <BlurFade delay={0.3} inView>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none mb-6">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-blue-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-sm pb-2">
            Ankush Ananth Bhat
          </span>
        </h1>
      </BlurFade>

      {/* Bio / Description */}
      <BlurFade delay={0.4} inView>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 font-medium">
          Building scalable cloud-native applications, real-time microservices, and AI-powered tools on <span className="text-foreground">Google Cloud Platform</span>.
        </p>
      </BlurFade>

      {/* Social Links Grid */}
      <BlurFade delay={0.5} inView>
        <div className="flex flex-wrap gap-5 justify-center">
          <a
            href="https://github.com/bhatankush"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card/50 text-muted-foreground transition-all duration-300 hover:border-neutral-900/50 hover:bg-neutral-900/10 hover:text-neutral-900 hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:-translate-y-1"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ankushab"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card/50 text-muted-foreground transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-1"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href="mailto:ankushbhat@example.com"
            className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card/50 text-muted-foreground transition-all duration-300 hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-rose-500 hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] hover:-translate-y-1"
          >
            <Mail size={24} className="transition-transform group-hover:scale-110" />
          </a>
        </div>
      </BlurFade>
      <BlurFade delay={0.6} inView>
        <div className="mt-20 flex justify-center animate-bounce">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const elem = document.getElementById("about");
              if (elem) {
                const top = elem.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
                window.history.pushState(null, "", "#about");
              }
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={32} className="hover:cursor-pointer" />
          </a>
        </div>
      </BlurFade>
    </section>
  );
}