import Image from "next/image";
import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";
import { GlareHover } from "../ui/glare-hover";
import { IconTagPill } from "@/components/IconTagPill";
import { AnimateIcon } from "@animate-ui/react/icons";
import { BadgeCheck } from "@/components/animate-ui/icons/badge-check";
import { Bot } from "@/components/animate-ui/icons/bot";
import { GraduationCap } from "@/components/animate-ui/icons/graduation-cap";
import { Layers } from "@/components/animate-ui/icons/layers";
import { Sparkles } from "@/components/animate-ui/icons/sparkles";
import { Users } from "@/components/animate-ui/icons/users";

const iconProps = { size: 15, "aria-hidden": true, className: "shrink-0" } as const;

const SKILLS = [
  { label: "Google Cloud Platform", icon: <Sparkles {...iconProps} /> },
  { label: "Microservices", icon: <Layers {...iconProps} /> },
  { label: "Node.js & Express.js", icon: <Bot {...iconProps} /> },
  { label: "React", icon: <Layers {...iconProps} /> },
  { label: "REST APIs", icon: <Layers {...iconProps} /> },
  { label: "Machine Learning", icon: <Bot {...iconProps} /> },
  { label: "Gemini Enterprise", icon: <Sparkles {...iconProps} /> },
];

const TECH_STACK = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "GCP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export function About() {
  return (
    <Tile id="about" surface="parchment" className="section-padding">
      <TileInner>
        <div className="mb-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Cloud &amp; Full-Stack Engineer
            </p>
            <HyperText>About Me</HyperText>
          </div>
          <AnimateIcon animateOnHover animation="path" className="flex items-center gap-4 rounded-2xl border border-[var(--hairline)] bg-white/60 p-4 dark:bg-white/[0.05]">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <BadgeCheck size={24} />
            </span>
            <div>
              <p className="text-2xl font-semibold tracking-tight">4×</p>
              <p className="text-sm text-body-muted">
                Google Cloud certified
              </p>
            </div>
          </AnimateIcon>
        </div>

        <div className="mb-12 grid gap-8 border-y border-[var(--hairline)] py-8 lg:grid-cols-[1.15fr_0.85fr]">
          <p className="text-xl leading-relaxed tracking-[-0.02em] text-[var(--ink)] sm:text-2xl">
            I build cloud-native web applications that turn real business
            challenges into reliable, high-performance solutions.
          </p>
          <p className="leading-relaxed text-body-muted">
            At Niveus Solutions, an NTT DATA company, I work across the full
            stack—from responsive React front ends to Node.js microservices
            deployed on Google Cloud. My current focus is building scalable,
            AI-ready applications with machine learning and Gemini Enterprise.
          </p>
        </div>

        <div className="mb-14 grid gap-4 md:grid-cols-3">
          <AnimateIcon animateOnHover animation="path" className="block rounded-2xl border border-[var(--hairline)] bg-white/55 p-6 dark:bg-white/[0.05]">
            <BadgeCheck
              size={24}
              className="mb-5 text-blue-600 dark:text-blue-400"
            />
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-body-muted">
              Certifications
            </p>
            <p className="font-semibold">ML Engineer · Associate Cloud Engineer</p>
            <p className="mt-2 text-sm leading-relaxed text-body-muted">
              Gemini Enterprise Deployment and Agent Development specialist
              credentials.
            </p>
          </AnimateIcon>
          <AnimateIcon animateOnHover animation="path" className="block rounded-2xl border border-[var(--hairline)] bg-white/55 p-6 dark:bg-white/[0.05]">
            <GraduationCap
              size={24}
              className="mb-5 text-blue-600 dark:text-blue-400"
            />
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-body-muted">
              Education
            </p>
            <p className="font-semibold">
              B.E. in Information Science, with Distinction
            </p>
            <p className="mt-2 text-sm leading-relaxed text-body-muted">
              Sahyadri College of Engineering &amp; Management
            </p>
          </AnimateIcon>
          <AnimateIcon animateOnHover animation="path" className="block rounded-2xl border border-[var(--hairline)] bg-white/55 p-6 dark:bg-white/[0.05]">
            <Users
              size={24}
              className="mb-5 text-blue-600 dark:text-blue-400"
            />
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-body-muted">
              Community leadership
            </p>
            <p className="font-semibold">Community Lead · SOSC</p>
            <p className="mt-2 text-sm leading-relaxed text-body-muted">
              Vice President at Newton School, supporting developers through
              mentorship and technical events.
            </p>
          </AnimateIcon>
        </div>

        <div className="mb-12">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h3 className="t-tagline">Core capabilities</h3>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-body-muted sm:block">
              Cloud · Product · AI
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <IconTagPill
                key={skill.label}
                label={skill.label}
                icon={skill.icon}
                surface="light"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-end justify-between gap-4">
            <h3 className="t-tagline">Technologies I work with</h3>
            <p className="hidden text-sm text-body-muted sm:block">
              Selected production stack
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {TECH_STACK.map((tech) => (
              <GlareHover
                key={tech.name}
                width="100%"
                background="var(--canvas)"
                color="#ffffff"
                opacity={0.25}
                angle={-45}
                duration={650}
                className="rounded-[var(--radius-lg-token)]"
              >
                <div className="bg-[var(--canvas)] dark:bg-white/[0.10] border border-[var(--hairline)] dark:border-white/[0.12] rounded-[var(--radius-lg-token)] p-6 w-full">
                  <div className="mx-auto mb-4 flex aspect-square max-w-[72px] items-center justify-center rounded-[var(--radius-sm-token)] bg-[var(--canvas-parchment)] dark:bg-white/[0.15]">
                    <div className="relative h-10 w-10">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="block text-center t-caption text-[var(--ink)]">
                    {tech.name}
                  </span>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </TileInner>
    </Tile>
  );
}
