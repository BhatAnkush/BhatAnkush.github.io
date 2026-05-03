"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";
import { Certifications } from "@/components/sections/Certifications";
import { Writing } from "@/components/sections/Writing";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Contact } from "@/components/sections/Contact";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Particles } from "@/components/ui/particles";

export default function HomePage() {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const updateColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setColor(isDark ? "#ffffff" : "#000000");
    };

    updateColor();

    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particle background */}
      <Particles
        className="absolute inset-0 z-0 pointer-events-none"
        quantity={80}
        ease={80}
        color={color}
        refresh={false}
      />
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Awards />
        <Certifications />
        <Writing />
        <GitHubActivity />
        <Contact />
      </div>
      <SmoothCursor />
    </div>
  );
}