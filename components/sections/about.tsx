import { TagPill } from "@/components/TagPill";
import Image from "next/image";

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
    <section id="about" className="py-16 md:py-24">
      <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">About Me</h2>

      <div className="mb-10 text-lg leading-relaxed text-muted-foreground space-y-4">
        <p>
          I'm a Cloud Associate at Niveus Solutions (NTT Data), specializing in building scalable cloud-native applications and microservices on Google Cloud Platform. I hold a B.E. in Information Science & Engineering from Sahyadri College of Engineering & Management and have earned the Google Cloud Associate Cloud Engineer certification alongside 9 skill badges.
        </p>
        <p>
          Beyond my daily engineering work, I'm passionate about open-source communities and continuous learning. I previously led a 200+ member open-source student community and drove coding culture initiatives as Vice President of the Newton School chapter, fostering collaborative software development.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="mb-4 text-xl font-semibold">My Skills</h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <TagPill key={skill} label={skill} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-xl font-semibold">Tech Stack</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-border/80 hover:bg-card"
            >
              <div className="relative mb-3 h-10 w-10 transition-transform group-hover:scale-110">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
