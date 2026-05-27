"use client";

import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#communities", label: "Communities" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

const NAV_OFFSET = 96;

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);

    // If the section exists on current page, scroll to it
    if (elem) {
      e.preventDefault();
      const top =
        elem.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
    // If section doesn't exist, navigate to homepage with hash
    else if (window.location.pathname !== "/") {
      e.preventDefault();
      window.location.href = "/" + href;
    }

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* global-nav — 44px black */}
      <div className="relative flex h-11 shrink-0 items-center justify-center bg-[var(--surface-black)] px-4 text-[var(--on-dark)]">
        <div className="pointer-events-none absolute inset-x-0 flex justify-center">
          <span className="t-nav-link truncate px-12 text-center font-normal text-[var(--on-dark)]">
            Ankush Ananth Bhat
          </span>
        </div>
        <div className="relative z-10 ml-auto flex items-center gap-2">
          <AnimatedThemeToggler
            variant="circle"
            className="flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-sm-token)] bg-[var(--ink)] text-[var(--on-dark)] dark:text-black btn-press btn-focus [&_svg]:size-[18px]"
          />
          <button
            type="button"
            className="flex min-[834px]:hidden size-9 shrink-0 items-center justify-center rounded-[var(--radius-sm-token)] bg-[var(--ink)] text-[var(--on-dark)] dark:text-black btn-press btn-focus"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* sub-nav-frosted — 52px */}
      <nav
        className="flex h-[52px] shrink-0 items-center justify-between border-b border-[rgba(0,0,0,0.08)] px-4 backdrop-blur-xl backdrop-saturate-180 sm:px-6 dark:border-[rgba(255,255,255,0.08)]"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--canvas-parchment) 80%, transparent)",
        }}
      >
        <span className="t-tagline shrink-0 text-[var(--ink)]">
          <img src="/favicon.svg" alt="favicon" />
        </span>

        <ul className="hidden min-[834px]:flex min-[834px]:flex-wrap min-[834px]:items-center min-[834px]:justify-end min-[834px]:gap-1 min-[834px]:pl-4">
          {NAV_LINKS.map(({ href, label }) => {
            const active = activeSection === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleScroll(e, href)}
                  className={cn(
                    "t-button-utility cursor-pointer rounded-[var(--radius-sm-token)] px-2.5 py-2 transition-colors",
                    active
                      ? "text-[var(--primary-action)]"
                      : "text-[var(--ink-muted-80)] hover:text-[var(--ink)] dark:text-[var(--body-muted)] dark:hover:text-[var(--on-dark)]",
                  )}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2 min-[834px]:ml-4">
          <a
            href="/Cover Letter/ankush-bhat.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="t-button-utility inline-flex items-center gap-1.5 rounded-full bg-[var(--ink)] px-4 py-1.5 text-xs text-[var(--on-dark)] dark:text-black transition-opacity hover:opacity-90"
          >
            <Download className="size-3.5" />
            Cover Letter
          </a>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="min-[834px]:hidden border-b border-[var(--hairline)] px-4 py-3 backdrop-blur-xl backdrop-saturate-180 max-h-[min(70vh,520px)] overflow-y-auto"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--canvas-parchment) 92%, transparent)",
          }}
        >
          <div className="flex flex-col gap-0.5">
            {NAV_LINKS.map(({ href, label }) => {
              const active = activeSection === href;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleScroll(e, href)}
                  className={cn(
                    "t-button-utility cursor-pointer rounded-[var(--radius-sm-token)] px-3 py-3",
                    active
                      ? "text-[var(--primary-action)]"
                      : "text-[var(--ink-muted-80)] dark:text-[var(--body-muted)]",
                  )}
                >
                  {label}
                </a>
              );
            })}
            <a
              href="/Cover Letter/ankush-bhat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="t-button-utility mt-2 flex cursor-pointer items-center gap-2 rounded-[var(--radius-sm-token)] border border-[var(--hairline)] px-3 py-3 text-[var(--ink)] dark:text-black"
            >
              <Download size={16} />
              Download Cover Letter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
