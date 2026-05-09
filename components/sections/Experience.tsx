import { TagPill } from "@/components/TagPill";
import { Tile, TileInner } from "@/components/Tile";

const EXPERIENCE = [
  {
    role: "Cloud Associate",
    company: "Niveus Solutions (NTT Data)",
    logo: "/niveus.png",
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
    logo: "/niveus.png",
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
    logo: "/niveus.png",
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
    logo: "/evoluteiq.jpg",
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
    <Tile id="experience" surface="dark" className="section-padding">
      <TileInner>
        <div className="mb-10">
          <h2 className="t-display-lg">Work Experience</h2>
          <p className="mt-2 t-body text-[var(--on-dark-muted)]">
            My professional journey and the companies I&apos;ve worked with.
          </p>
        </div>

        <div>
          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              className="border-t border-[rgba(255,255,255,0.08)] py-8 first:border-t-0 first:pt-0"
            >
              <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="t-tagline text-[var(--on-dark)]">{exp.role}</h3>
                <span className="t-caption text-[var(--on-dark-muted)]">{exp.period}</span>
              </div>
              <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <img src={exp.logo} alt={exp.company} className="size-10 shrink-0 rounded-lg object-contain" />
                  <span className="t-body text-[var(--on-dark)]">{exp.company}</span>
                </div>
                <span className="t-caption text-[var(--on-dark-muted)]">{exp.location}</span>
              </div>
              <ul className="mb-5 ml-5 list-disc space-y-2 t-caption text-[var(--on-dark-muted)]">
                {exp.highlights.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <TagPill key={tech} label={tech} surface="dark" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </TileInner>
    </Tile>
  );
}
