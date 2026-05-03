import { TagPill } from "@/components/TagPill";
import Image from "next/image";

const EXPERIENCE = [
  {
    role: "Cloud Associate",
    company: "Niveus Solutions (NTT Data)",
    period: "Nov 2025 – Present",
    location: "Mangaluru, Karnataka",
    highlights: [
      "Developing & deploying production-grade microservices on GCP using Node.js, Express.js & FastAPI.",
      "Architecting real-time features with WebSockets.",
      "Leading React.js + Tailwind CSS frontend development.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "FastAPI", "GCP", "WebSockets"],
  },
  {
    role: "Cloud Explorer",
    company: "Niveus Solutions (NTT Data)",
    period: "May 2025 – Nov 2025",
    location: "Mangaluru, Karnataka",
    highlights: [
      "Shipped full-stack PERN applications for real client deployments on GCP.",
      "Delivered milestones consistently ahead of schedule.",
      "Earned Google Cloud ACE certification during this tenure.",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "Express.js", "GCP", "Cloud Functions"],
  },
  {
    role: "Software Engineer Intern",
    company: "Niveus Solutions (NTT Data)",
    period: "Nov 2024 – May 2025",
    location: "Mangaluru, Karnataka",
    highlights: [
      "Developed full-stack features using React, Node.js, Express.js & PostgreSQL.",
      "Integrated RESTful APIs with responsive React frontends.",
      "Gained production GCP deployment exposure.",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "Express.js", "GCP"],
  },
  {
    role: "RPA Intern",
    company: "EvoluteIQ",
    period: "Feb 2024 – Apr 2024",
    location: "Remote",
    highlights: [
      "Built automation bots for data extraction & process orchestration.",
      "Worked with UiPath and Automation Anywhere.",
    ],
    tech: ["UiPath", "Automation Anywhere", "RPA"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Work Experience</h2>
        <p className="mt-2 text-muted-foreground">My professional journey and the companies I've worked with.</p>
      </div>

      <div className="space-y-8">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="group relative flex flex-col gap-4 rounded-2xl border border-border/40 bg-card/20 p-6 transition-all hover:bg-card/40 sm:flex-row sm:gap-6"
          >
            {/* Logo placeholder - using a solid gradient block as fallback for company logo */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/20 to-violet-500/20 ring-1 ring-border">
              <span className="font-bold text-blue-500">{exp.company.charAt(0)}</span>
            </div>

            <div className="flex-1">
              <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="mt-1 text-sm text-muted-foreground sm:mt-0">{exp.period}</span>
              </div>
              <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="font-medium text-foreground/80">{exp.company}</span>
                <span className="mt-1 text-sm text-muted-foreground sm:mt-0">{exp.location}</span>
              </div>

              <ul className="mb-6 ml-4 list-outside list-disc space-y-2 text-muted-foreground">
                {exp.highlights.map((point, j) => (
                  <li key={j} className="pl-1 text-sm leading-relaxed">{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <TagPill key={tech} label={tech} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
