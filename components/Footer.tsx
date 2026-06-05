import { Mail, FileText, ArrowUpRight, BookMarked } from "lucide-react";
import { GithubIcon } from "./Icons/GithubIcon";
import { LinkedinIcon } from "./Icons/LinkedinIcon";

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--tile-parchment)] backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6">
        {/* Top Section: Asymmetric Grid */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:gap-8 lg:py-20">
          {/* Brand & Status (Takes up more space on the left) */}
          <div className="flex flex-col items-start md:col-span-6 lg:col-span-5">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--ink)] dark:text-[var(--on-dark)]">
              Ankush Ananth Bhat
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--body-muted)] dark:text-[var(--on-dark-muted)]">
              Software developer focused on building thoughtful,
              high-performance digital experiences. Always open to discussing
              new projects and creative collaborations.
            </p>

            {/* Refined Status Badge */}
            <div className="mt-8 flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 transition-colors hover:bg-emerald-500/15">
              <div className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Links Section (Right aligned on desktop) */}
          <nav className="grid grid-cols-2 gap-8 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
            {/* Connect Column */}
            <div className="flex flex-col space-y-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted-48)] dark:text-[var(--on-dark-muted)]">
                Connect
              </h3>
              <ul className="flex flex-col space-y-3">
                {[
                  {
                    label: "GitHub",
                    href: "https://github.com/bhatankush",
                    Icon: GithubIcon,
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/ankushab",
                    Icon: LinkedinIcon,
                  },
                  {
                    label: "Email",
                    href: "mailto:ankushbhataab@gmail.com",
                    Icon: Mail,
                  },
                ].map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-fit items-center gap-2 text-sm text-[var(--ink-muted-80)] transition-all hover:text-[var(--ink)] dark:text-[var(--body-muted)] dark:hover:text-[var(--on-dark)]"
                    >
                      <Icon className="size-4 shrink-0 opacity-70 transition-opacity group-hover:opacity-100" />
                      <span>{label}</span>
                      <ArrowUpRight className="size-3.5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col space-y-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted-48)] dark:text-[var(--on-dark-muted)]">
                Resources
              </h3>
              <ul className="flex flex-col space-y-3">
                {[
                  {
                    label: "Cover Letter",
                    href: "/Cover Letter/ankush-ananth-bhat.pdf",
                    Icon: FileText,
                  },
                  {
                    label: "View Projects",
                    href: "https://github.com/BhatAnkush?tab=repositories",
                    Icon: BookMarked,
                  },
                ].map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-fit items-center gap-2 text-sm text-[var(--ink-muted-80)] transition-all hover:text-[var(--ink)] dark:text-[var(--body-muted)] dark:hover:text-[var(--on-dark)]"
                    >
                      <Icon className="size-4 shrink-0 opacity-70 transition-opacity group-hover:opacity-100" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom Bar: Copyright & Quick Socials */}
        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-[var(--hairline)] py-6 sm:flex-row">
          <p className="text-xs text-[var(--ink-muted-48)] dark:text-[var(--on-dark-muted)]">
            © {new Date().getFullYear()} Ankush Ananth Bhat. All rights
            reserved.
          </p>

          <div className="flex items-center gap-1.5">
            {[
              {
                href: "https://github.com/bhatankush",
                label: "GitHub",
                Icon: GithubIcon,
              },
              {
                href: "https://www.linkedin.com/in/ankushab",
                label: "LinkedIn",
                Icon: LinkedinIcon,
              },
              {
                href: "mailto:ankushbhataab@gmail.com",
                label: "Email",
                Icon: Mail,
              },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex size-9 items-center justify-center rounded-md text-[var(--ink-muted-80)] transition-all hover:bg-[var(--surface-tile-2)] hover:text-[var(--ink)] dark:text-[var(--body-muted)] dark:hover:bg-white/5 dark:hover:text-[var(--on-dark)]"
              >
                <Icon className="size-4.5 transition-transform duration-200 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
