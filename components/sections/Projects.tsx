import { TagPill } from "@/components/TagPill";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../Icons/GithubIcon";
import { Tile, TileInner } from "@/components/Tile";

const PROJECTS = [
  {
    title: "Portfolio Chatbot (AI Assistant)",
    description:
      "An AI-powered chatbot embedded in this portfolio that answers questions about my skills, experience, and projects. Streams responses in real-time using Groq's LLaMA 3.3 70B model.",
    tech: ["Next.js", "React", "Groq SDK", "LLaMA 3.3", "AI"],
    github: "https://github.com/bhatankush/portfolio-chat",
    live: "/chat",
  },
  {
    title: "PERN Stack Client Deployments",
    description:
      "Full-stack web applications built for real business clients at Niveus Solutions using the PERN stack (PostgreSQL, Express.js, React.js, Node.js), deployed on Google Cloud Platform.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "GCP"],
    github: "", // private repo
    live: "",
  },
  {
    title: "Microservices & Real-time Systems",
    description:
      "Production-grade microservices architected and deployed on GCP at Niveus Solutions, featuring real-time communication powered by WebSockets and REST API integrations.",
    tech: ["Node.js", "Express.js", "FastAPI", "WebSockets", "Microservices"],
    github: "",
    live: "",
  },
  {
    title: "RPA Automation Bots",
    description:
      "Robotic Process Automation bots built during internship at EvoluteIQ for data extraction and business process orchestration, using UiPath and Automation Anywhere platforms.",
    tech: ["UiPath", "Automation Anywhere", "RPA"],
    github: "",
    live: "",
  },
];

export function Projects() {
  return (
    <Tile id="projects" surface="light" className="section-padding">
      <TileInner wide>
        <div className="mb-10">
          <h2 className="t-display-lg">Featured Projects</h2>
          <p className="mt-2 t-body text-[var(--body-muted)]">
            Here are some of my recent projects. Check out my GitHub for more.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <article
              key={i}
              className="rounded-[var(--radius-lg-token)] border border-[var(--hairline)] bg-[var(--canvas)] p-6"
            >
              <div className="mb-5 flex aspect-square max-h-[220px] w-full items-center justify-center rounded-[var(--radius-lg-token)] bg-[var(--canvas-parchment)]">
                <span className="t-display-lg text-[var(--ink)]">
                  {project.title.charAt(0)}
                </span>
              </div>

              <h3 className="mb-2 t-tagline">{project.title}</h3>
              <p className="mb-6 t-caption text-[var(--body-muted)]">{project.description}</p>

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
                  <a href={project.live} className="text-link inline-flex items-center gap-1.5">
                    <ExternalLink size={16} /> Live
                  </a>
                )}
                {!project.github && !project.live && (
                  <span className="text-[var(--ink-muted-48)]">Private / Enterprise</span>
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
