import { TagPill } from "@/components/TagPill";
import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";

const EXPERIENCE = [
  {
    role: "Cloud Associate",
    company: "Niveus Solutions (NTT Data)",
    logo: "/niveus.png",
    period: "Nov 2025 – Present",
    location: "Mangaluru, Karnataka",
    highlights: [
      "Design PostgreSQL schemas and data models upfront to simplify API design and reduce backend implementation time.",
      "Built real-time WebSocket communication layers enabling live collaborative features across multiple production applications.",
      "Engineered reusable React.js component libraries using Ant Design and PrimeReact, accelerating feature delivery across projects.",
      "Awarded Star of the Month twice across consecutive roles for consistent high-impact delivery.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "GCP", "WebSockets", "Ant Design", "PrimeReact"],
  },
  {
    role: "Cloud Explorer",
    company: "Niveus Solutions (NTT Data)",
    logo: "/niveus.png",
    period: "May 2025 – Nov 2025",
    location: "Mangaluru, Karnataka",
    highlights: [
      "Delivered end-to-end PERN stack web applications to production on GCP, directly supporting client workflows.",
      "Integrated Google Drive API for document management and implemented transaction audit logging for financial traceability.",
      "Earned Google Cloud Associate Cloud Engineer (ACE) certification through hands-on production GCP deployments.",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "Express.js", "GCP", "Google Drive API", "Cloud Functions"],
  },
  {
    role: "Software Engineering Intern",
    company: "Niveus Solutions (NTT Data)",
    logo: "/niveus.png",
    period: "Nov 2024 – May 2025",
    location: "Mangaluru, Karnataka",
    highlights: [
      "Built and debugged full-stack features in React.js, Node.js, Express.js and PostgreSQL for client-facing releases.",
      "Integrated RESTful APIs with responsive React frontends, improving data-flow reliability and reducing QA defects.",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "Express.js", "GCP"],
  },
];

export function Experience() {
  return (
    <Tile id="experience" surface="dark" className="section-padding">
      <TileInner>
        <div className="mb-10">
          <HyperText>Work Experience</HyperText>
          <p className="mt-2 t-body text-on-dark-muted">
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
                <h3 className="t-tagline text-on-dark">{exp.role}</h3>
                <span className="t-caption text-on-dark-muted">{exp.period}</span>
              </div>
              <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <img src={exp.logo} alt={exp.company} className="size-10 shrink-0 rounded-lg object-contain" />
                  <span className="t-body text-on-dark">{exp.company}</span>
                </div>
                <span className="t-caption text-on-dark-muted">{exp.location}</span>
              </div>
              <ul className="mb-5 ml-5 list-disc space-y-2 t-caption text-on-dark-muted">
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