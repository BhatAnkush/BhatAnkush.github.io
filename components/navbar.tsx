"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#awards", label: "Awards" },
  { href: "#certifications", label: "Certifications" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" } // Adjust to trigger when section is in top view
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      // Offset for the fixed navbar (~64px) + a little padding
      const top = elem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
      // Also update URL hash without jumping
      window.history.pushState(null, "", href);
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 font-bold text-lg tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          <span className="text-blue-500">Ankush</span>
          <span className="text-muted-foreground">Bhat</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 flex-wrap justify-center">
          {NAV_LINKS.map(({ href, label }) => {
            const active = activeSection === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleScroll(e, href)}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                    active
                      ? "bg-blue-500/10 text-blue-500"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/resume/ankush-bhat.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 rounded-lg border border-border bg-card hover:bg-accent px-4 py-2 text-sm font-medium text-foreground transition-all"
          >
            <Download size={14} />
            Resume
          </a>

          <AnimatedThemeToggler
            variant="circle"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 cursor-pointer"
          />
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map(({ href, label }) => {
            const active = activeSection === href;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer",
                  active
                    ? "bg-blue-500/10 text-blue-500"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {label}
              </a>
            );
          })}
          <a
            href="/resume/ankush-bhat.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-4 py-3 mt-2 rounded-lg border border-border text-sm font-medium hover:bg-accent transition-all cursor-pointer"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}

