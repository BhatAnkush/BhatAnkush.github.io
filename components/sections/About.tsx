import { TagPill } from "@/components/TagPill";
import Image from "next/image";
import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";

const SKILLS = [
  "Cloud Engineering",
  "Web Development",
  "Database"
];

const TECH_STACK = [
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];
export function About() {
  return (
    <Tile id="about" surface="parchment" className="section-padding">
      <TileInner>
      <HyperText>About Me</HyperText>

        <div className="mb-10 space-y-4 text-[var(--body-muted)] t-body">
          <p>
            I&apos;m a Cloud Associate at Niveus Solutions (NTT Data), specializing in
            building scalable cloud-native applications and microservices on
            Google Cloud Platform. I hold a B.E. in Information Science &
            Engineering from Sahyadri College of Engineering & Management and
            have earned the Google Cloud Associate Cloud Engineer certification
            alongside 9 skill badges.
          </p>
          <p>
            Beyond my daily engineering work, I&apos;m passionate about open-source
            communities and continuous learning. I previously led a 200+ member
            open-source student community and drove coding culture initiatives
            as Vice President of the Newton School chapter, fostering
            collaborative software development.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="mb-4 t-tagline">My Skills</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <TagPill key={skill} label={skill} surface="light" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 t-tagline">Tech Stack</h3>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="rounded-[var(--radius-lg-token)] border border-[var(--hairline)] bg-[var(--canvas)] p-6"
              >
                <div className="mx-auto mb-4 flex aspect-square max-w-[72px] items-center justify-center rounded-[var(--radius-sm-token)] bg-[var(--canvas-parchment)]">
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
            ))}
          </div>
        </div>
      </TileInner>
    </Tile>
  );
}
