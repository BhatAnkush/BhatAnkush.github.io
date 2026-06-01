import Image from "next/image";
import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";
import { GlareHover } from "../ui/glare-hover";
import { IconTagPill } from "@/components/IconTagPill";
import { Layers, Cloud, Bot, Database } from "lucide-react";

const SKILLS = [
  {
    label: "Full Stack Development",
    icon: <Layers size={15} aria-hidden="true" className="shrink-0" />,
  },
  {
    label: "Cloud Engineering",
    icon: <Cloud size={15} aria-hidden="true" className="shrink-0" />,
  },
  {
    label: "AI Integration",
    icon: <Bot size={15} aria-hidden="true" className="shrink-0" />,
  },
  {
    label: "Database Design",
    icon: <Database size={15} aria-hidden="true" className="shrink-0" />,
  },
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
        <HyperText>About Me</HyperText>

        <div className="mb-10 space-y-4 text-body-muted t-body">
          <p>
            I&apos;m a Full Stack Engineer at Niveus Solutions (NTT Data),
            building production web applications and cloud-native systems on
            Google Cloud Platform. I specialize in React / Next.js frontends,
            Node.js backends, and LLM-powered products — from real-time
            WebSocket features to AI pipelines integrating large language
            models. I hold a B.E. in Information Science &amp; Engineering and
            the Google Cloud Associate Cloud Engineer certification.
          </p>
          <p>
            Outside of work, I build side projects that explore the intersection
            of AI and the web — most recently TruthLayer, an AI-powered news
            analysis tool. I&apos;m also passionate about open-source
            communities, having led a 200+ member student community and served
            as Vice President of the Newton School coding chapter.
          </p>
        </div>

        {/* Skill pills with icons */}
        <div className="mb-12">
          <h3 className="mb-4 t-tagline">My Skills</h3>
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
          <h3 className="mb-6 t-tagline">Tech Stack</h3>
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
