"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import {
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  MapPin,
  Users,
} from "lucide-react";

const EXPERIENCE = [
  {
    role: "Cloud Associate",
    company: "Niveus Solutions (NTT Data)",
    period: "Nov 2025 – Present",
    type: "Full-time · Hybrid",
    highlights: [
      "Developing & deploying production-grade microservices on GCP using Node.js, Express.js & FastAPI.",
      "Architecting real-time features with WebSockets.",
      "Leading React.js + Tailwind CSS frontend development.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "FastAPI", "GCP", "WebSockets", "Microservices"],
    color: "from-blue-500 to-violet-500",
  },
  {
    role: "Cloud Explorer",
    company: "Niveus Solutions (NTT Data)",
    period: "May 2025 – Nov 2025",
    type: "Full-time · Hybrid",
    highlights: [
      "Shipped full-stack PERN applications for real client deployments on GCP.",
      "Delivered milestones consistently ahead of schedule.",
      "Earned Google Cloud ACE certification during this tenure.",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "Express.js", "GCP", "Compute Engine", "Cloud Functions"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    role: "Software Engineer Intern",
    company: "Niveus Solutions (NTT Data)",
    period: "Nov 2024 – May 2025",
    type: "Internship · On-site",
    highlights: [
      "Developed full-stack features using React, Node.js, Express.js & PostgreSQL.",
      "Integrated RESTful APIs with responsive React frontends.",
      "Gained production GCP deployment exposure.",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "Express.js", "GCP", "JavaScript"],
    color: "from-amber-500 to-orange-500",
  },
  {
    role: "RPA Intern",
    company: "EvoluteIQ",
    period: "Feb 2024 – Apr 2024",
    type: "Internship · Remote",
    highlights: [
      "Built automation bots for data extraction & process orchestration.",
      "Worked with UiPath and Automation Anywhere.",
    ],
    tech: ["UiPath", "Automation Anywhere", "RPA"],
    color: "from-rose-500 to-pink-500",
  },
];

const CERTIFICATIONS = [
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    period: "Jul 2025 – Jul 2028",
    primary: true,
  },
  { title: "9× Google Cloud Skill Badges", issuer: "Google", period: "Apr 2025", primary: false },
  { title: "Python Basic", issuer: "HackerRank", period: "Sep 2023", primary: false },
  { title: "Java Basic", issuer: "HackerRank", period: "Apr 2023", primary: false },
  { title: "Problem Solving Basic", issuer: "HackerRank", period: "Dec 2022", primary: false },
  { title: "C++ Programming for Beginners", issuer: "Udemy", period: "Apr 2023", primary: false },
];

const VOLUNTEERING = [
  {
    role: "Community Lead",
    org: "SOSC — Sahyadri Open Source Community",
    period: "Dec 2021 – Mar 2024",
    note: "Led 200+ member open-source student community; organized tech events, workshops & hackathons.",
  },
  {
    role: "Vice President",
    org: "Newton School",
    period: "Oct 2022 – Apr 2024",
    note: "Drove coding culture and student engagement at Sahyadri College chapter.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <BlurFade delay={0.1} inView>
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3 block">
              About Me
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              The person behind the code
            </h1>
          </div>
        </BlurFade>

        {/* Experience Timeline */}
        <BlurFade delay={0.2} inView>
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase size={18} className="text-blue-400" />
              <h2 className="text-xl font-bold text-foreground">Experience</h2>
            </div>
            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-linear-to-b from-blue-500/50 via-violet-500/30 to-transparent ml-1.75" />

              {EXPERIENCE.map((exp, i) => (
                <BlurFade key={i} delay={0.1 * i} inView>
                  <div className="relative flex gap-6 pl-8">
                    {/* Dot */}
                    <div
                      className={`absolute left-0 top-2 w-4 h-4 rounded-full bg-linear-to-br ${exp.color} shadow-lg`}
                    />
                    <div className="relative flex-1 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 overflow-hidden group hover:border-blue-500/30 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{exp.role}</h3>
                          <p className="text-sm text-muted-foreground">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-medium text-blue-400">{exp.period}</p>
                          <p className="text-xs text-muted-foreground">{exp.type}</p>
                        </div>
                      </div>
                      <ul className="space-y-1 mb-4">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-blue-500 mt-0.5">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <BorderBeam size={150} duration={10} colorFrom="#3b82f6" colorTo="#8b5cf6" />
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </section>
        </BlurFade>

        {/* Education */}
        <BlurFade delay={0.3} inView>
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap size={18} className="text-blue-400" />
              <h2 className="text-xl font-bold text-foreground">Education</h2>
            </div>
            <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 overflow-hidden hover:border-blue-500/30 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-foreground">
                    B.E. in Information Science &amp; Engineering
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sahyadri College of Engineering &amp; Management, Mangaluru
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-emerald-400">Distinction</p>
                  <p className="text-xs text-muted-foreground">Dec 2020 – May 2024</p>
                </div>
              </div>
              <BorderBeam size={200} duration={14} colorFrom="#10b981" colorTo="#3b82f6" />
            </div>
          </section>
        </BlurFade>

        {/* Certifications */}
        <BlurFade delay={0.4} inView>
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Award size={18} className="text-blue-400" />
              <h2 className="text-xl font-bold text-foreground">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl border p-4 overflow-hidden transition-colors ${
                    cert.primary
                      ? "border-blue-500/40 bg-blue-500/5"
                      : "border-border bg-card/60 hover:border-blue-500/20"
                  }`}
                >
                  {cert.primary && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/30 rounded-full px-2 py-0.5">
                      Primary
                    </span>
                  )}
                  <p className="font-medium text-sm text-foreground mb-1 pr-16">{cert.title}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-blue-400/80 mt-1">{cert.period}</p>
                </div>
              ))}
            </div>
          </section>
        </BlurFade>

        {/* Volunteering */}
        <BlurFade delay={0.5} inView>
          <section>
            <div className="flex items-center gap-2 mb-8">
              <Heart size={18} className="text-rose-400" />
              <h2 className="text-xl font-bold text-foreground">Volunteering &amp; Leadership</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VOLUNTEERING.map((v, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 overflow-hidden hover:border-rose-500/20 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Users size={14} className="text-rose-400" />
                    <h3 className="font-semibold text-sm text-foreground">{v.role}</h3>
                  </div>
                  <p className="text-xs text-blue-400 mb-1">{v.org}</p>
                  <p className="text-xs text-muted-foreground mb-2">{v.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.note}</p>
                </div>
              ))}
            </div>
          </section>
        </BlurFade>
      </div>
      <SmoothCursor/>
    </div>
  );
}
