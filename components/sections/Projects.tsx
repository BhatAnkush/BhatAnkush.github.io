import { TagPill } from "@/components/TagPill";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "../Icons/GithubIcon";

const PROJECTS = [
  {
    title: "Portfolio Chatbot (AI Assistant)",
    description:
      "An AI-powered chatbot embedded in this portfolio that answers questions about my skills, experience, and projects. Streams responses in real-time using Groq's LLaMA 3.3 70B model.",
    tech: ["Next.js", "React", "Groq SDK", "LLaMA 3.3", "AI"],
    github: "https://github.com/bhatankush/portfolio-chat",
    live: "/chat",
    // Fallback gradient if image fails or isn't provided
    gradient: "from-blue-500/20 to-violet-600/20",
  },
  {
    title: "PERN Stack Client Deployments",
    description:
      "Full-stack web applications built for real business clients at Niveus Solutions using the PERN stack (PostgreSQL, Express.js, React.js, Node.js), deployed on Google Cloud Platform.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "GCP"],
    github: "", // private repo
    live: "",
    gradient: "from-emerald-500/20 to-teal-600/20",
  },
  {
    title: "Microservices & Real-time Systems",
    description:
      "Production-grade microservices architected and deployed on GCP at Niveus Solutions, featuring real-time communication powered by WebSockets and REST API integrations.",
    tech: ["Node.js", "Express.js", "FastAPI", "WebSockets", "Microservices"],
    github: "",
    live: "",
    gradient: "from-amber-500/20 to-orange-600/20",
  },
  {
    title: "RPA Automation Bots",
    description:
      "Robotic Process Automation bots built during internship at EvoluteIQ for data extraction and business process orchestration, using UiPath and Automation Anywhere platforms.",
    tech: ["UiPath", "Automation Anywhere", "RPA"],
    github: "",
    live: "",
    gradient: "from-rose-500/20 to-pink-600/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Projects</h2>
          <p className="mt-2 text-muted-foreground">Here are some of my recent projects. Check out my GitHub for more.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/20 transition-all hover:-translate-y-1 hover:border-border/80 hover:shadow-xl hover:shadow-black/20"
          >
            {/* Project Cover - using gradient as placeholder for now */}
            <div className={`h-48 w-full bg-linear-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <span className="text-4xl font-bold">{project.title.charAt(0)}</span>
                </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <TagPill key={tech} label={tech} />
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <GithubIcon size={16} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
                {!project.github && !project.live && (
                  <span className="text-sm text-muted-foreground/50">Private / Enterprise</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/bhatankush"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View more on GitHub →
        </a>
      </div>
    </section>
  );
}
