import { TagPill } from "@/components/TagPill";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../Icons/GithubIcon";
import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";
import { Lens } from "../ui/lens";

const PROJECTS = [
  {
    title: "TruthLayer – AI-Powered News Analyser",
    image: "/project/truthlayer.png",
    description:
      "A full-stack AI application that analyses any news article URL into an interactive React Flow evidence board — classifying claims as facts, opinions, fallacies, or missing context — with SSE streaming, 15,000+ word article support, and cross-source contradiction detection powered by Llama 3.3 70B.",
    tech: ["Next.js 14", "TypeScript", "Groq API", "React Flow", "Clerk", "Neon PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/BhatAnkush/truthlayer",
    live: "https://truthlayer-eight-dusky.vercel.app",
  },
  {
    title: "Quizzy – Dynamic Quiz Engine",
    image: "/project/quizzy.png",
    description:
      "A full-featured quiz application with a built-in GCP certification module and a custom quiz engine that parses and validates user-uploaded JSON files for schema integrity. Features auto-save, cross-session progress tracking, and a synchronized 60-minute countdown timer.",
    tech: ["React 19", "Vite", "JavaScript", "Context API", "Local Storage", "Tailwind CSS"],
    github: "https://github.com/BhatAnkush/Quizzy",
    live: "https://quizzy-jxta.onrender.com/",
  },
  {
    title: "Bronze Solar – Corporate Website",
    image: "/project/bronzesolar.png",
    description:
      "End-to-end development of a corporate website for Bronze Solar Panels Industries LLC, a UAE-based solar manufacturer with 600MW annual capacity. Fully responsive and SEO-optimized.",
    tech: ["React.js", "JavaScript", "CSS"],
    github: "",
    live: "https://bronzesolar.com/",
  },
];

export function Projects() {
  return (
    <Tile id="projects" surface="light" className="section-padding">
      <TileInner wide>
        <div className="mb-10">
          <HyperText>Featured Projects</HyperText>
          <p className="mt-2 t-body text-body-muted">
            Here are some of my recent projects. Check out my GitHub for more.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <article
              key={i}
              className="roundedradius-lg-token border border-[var(--hairline)] bg-[var(--canvas)] p-6"
            >
              <div className="mb-5 w-full overflow-hidden rounded-[var(--radius-lg-token)] bg-[var(--canvas-parchment)]">
                <Lens
                  zoomFactor={2}
                  lensSize={150}
                  isStatic={false}
                  ariaLabel="Zoom Area"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[220px] w-full object-cover"
                  />
                </Lens>
              </div>

              <h3 className="mb-2 t-tagline">{project.title}</h3>
              <p className="mb-6 t-caption text-[var(--body-muted)]">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <TagPill key={tech} label={tech} surface="light" />
                ))}
              </div>

              <div className="flex items-center gap-4 border-t border-[var(--hairline)] pt-4 t-caption">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link inline-flex items-center gap-1.5"
                  >
                    <GithubIcon size={16} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link inline-flex items-center gap-1.5"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
                {!project.github && !project.live && (
                  <span className="text-[var(--ink-muted-48)]">
                    Private / Enterprise
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/bhatankush"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link t-body"
          >
            View more on GitHub →
          </a>
        </div>
      </TileInner>
    </Tile>
  );
}