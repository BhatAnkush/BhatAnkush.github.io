"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { ExternalLink, Cloud, Zap, Globe, Database } from "lucide-react";
// Inline SVGs for branded social icons not available in lucide-react
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
const PROJECTS = [
  {
    title: "Portfolio Chatbot (AI Assistant)",
    description:
      "An AI-powered chatbot embedded in this portfolio that answers questions about Ankush's skills, experience, and projects. Streams responses in real-time using Groq's LLaMA 3.3 70B model.",
    tech: ["Next.js 16", "React 19", "Groq SDK", "LLaMA 3.3", "Server Actions", "Streaming"],
    icon: Zap,
    gradient: "from-blue-500 to-violet-600",
    link: "/chat",
    isInternal: true,
    tag: "AI / Full-Stack",
  },
  {
    title: "PERN Stack Client Deployments",
    description:
      "Full-stack web applications built for real business clients at Niveus Solutions using the PERN stack (PostgreSQL, Express.js, React.js, Node.js), deployed on Google Cloud Platform.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "GCP", "Compute Engine"],
    icon: Cloud,
    gradient: "from-emerald-500 to-teal-600",
    tag: "Cloud / Full-Stack",
  },
  {
    title: "Microservices & Real-time Systems",
    description:
      "Production-grade microservices architected and deployed on GCP at Niveus Solutions, featuring real-time communication powered by WebSockets and REST API integrations.",
    tech: ["Node.js", "Express.js", "FastAPI", "WebSockets", "GCP", "Microservices"],
    icon: Globe,
    gradient: "from-amber-500 to-orange-600",
    tag: "Cloud / Backend",
  },
  {
    title: "RPA Automation Bots",
    description:
      "Robotic Process Automation bots built during internship at EvoluteIQ for data extraction and business process orchestration, using UiPath and Automation Anywhere platforms.",
    tech: ["UiPath", "Automation Anywhere", "RPA", "Business Automation"],
    icon: Database,
    gradient: "from-rose-500 to-pink-600",
    tag: "Automation",
  },
];

const OPEN_SOURCE_CONTRIBUTIONS = [
  {
    name: "SOSC — Community Events Platform",
    description: "Organized and led tech events, workshops, and hackathons for 200+ members at Sahyadri Open Source Community.",
    role: "Community Lead",
  },
  {
    name: "Newton School — Coding Culture Initiatives",
    description: "Drove student coding engagement and fostered collaborative software development as Vice President.",
    role: "Vice President",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <BlurFade delay={0.1} inView>
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3 block">
              Projects
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              What I&apos;ve built
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A mix of production client work at Niveus Solutions and personal projects — from cloud microservices
              to AI-powered chatbots.
            </p>
          </div>
        </BlurFade>

        {/* Projects Grid */}
        <BlurFade delay={0.2} inView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {PROJECTS.map((project, i) => {
              const Icon = project.icon;
              return (
                <BlurFade key={i} delay={0.1 * i} inView>
                  <div className="relative group h-full flex flex-col rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-0.5">
                    {/* Icon + tag */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                      >
                        <Icon size={20} className="text-white" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-accent border border-border rounded-full px-2.5 py-1">
                        {project.tag}
                      </span>
                    </div>

                    <h3 className="font-bold text-foreground text-base mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {project.link && (
                      <a
                        href={project.link}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors`}
                      >
                        {project.isInternal ? (
                          <>
                            <Zap size={12} /> Try the chatbot →
                          </>
                        ) : (
                          <>
                            <ExternalLink size={12} /> View project →
                          </>
                        )}
                      </a>
                    )}

                    <BorderBeam size={180} duration={12} colorFrom="#3b82f6" colorTo="#8b5cf6" />
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </BlurFade>

        {/* Open Source / Community */}
        <BlurFade delay={0.5} inView>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <GithubIcon size={18}/>
              <h2 className="text-xl font-bold text-foreground">Community &amp; Open Source</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OPEN_SOURCE_CONTRIBUTIONS.map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 overflow-hidden hover:border-blue-500/20 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                    {item.role}
                  </span>
                  <h3 className="font-semibold text-sm text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.6} inView>
          <div className="relative text-center rounded-2xl border border-blue-500/20 bg-blue-500/5 p-10 overflow-hidden">
            <h2 className="text-xl font-bold text-foreground mb-3">
              Want to know more about my work?
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Ask my AI assistant anything about my experience, tech stack, or projects.
            </p>
            <a
              href="/chat"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:scale-105"
            >
              <Zap size={15} />
              Chat with my AI
            </a>
            <BorderBeam size={300} duration={10} colorFrom="#3b82f6" colorTo="#8b5cf6" />
          </div>
        </BlurFade>
      </div>
      <SmoothCursor/>
    </div>
  );
}
