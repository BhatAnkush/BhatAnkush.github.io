import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";
import { Certifications } from "@/components/sections/Certifications";
import { Writing } from "@/components/sections/Writing";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      {/* <Awards /> */}
      <Certifications />
      <Writing />
      <GitHubActivity />
      <Contact />
    </div>
  );
}
