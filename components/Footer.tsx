import { GithubIcon } from "./Icons/GithubIcon";
import { LinkedinIcon } from "./Icons/LinkedinIcon";

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--tile-parchment)] backdrop-blur-xl">
      {/* Top section */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-5 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        {/* Brand column */}
        <div>
          <p className="t-title-md text-[var(--ink)] dark:text-[var(--on-dark)]">
            Ankush Bhat
          </p>
          <p className="mt-3 t-body text-[var(--body-muted)] dark:text-[var(--on-dark-muted)] max-w-sm leading-relaxed">
            Software developer building thoughtful products. Open to new
            opportunities and collaborations.
          </p>
          {/* "Open to work" badge */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#2997ff33] bg-[#2997ff14] px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2997ff]" />
            <span className="t-fine-print text-[#2997ff]">Open to work</span>
          </div>
        </div>

        {/* Connect column */}
        <div>
          <h3 className="t-fine-print mb-4 tracking-widest uppercase text-[var(--ink-muted-80)] dark:text-[var(--on-dark-muted)]">
            Connect
          </h3>
          <ul className="space-y-2">
            {[
              { label: "GitHub", href: "https://github.com/bhatankush" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ankushab",
              },
              { label: "Email", href: "mailto:ankushbhataab@gmail.com" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 t-body text-[var(--ink-muted-80)] dark:text-[var(--on-dark-muted)] transition hover:text-[var(--ink)] dark:hover:text-[var(--on-dark)]"
                >
                  {label}
                  <span className="opacity-40 transition group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources column */}
        <div>
          <h3 className="t-fine-print mb-4 tracking-widest uppercase text-[var(--ink-muted-80)] dark:text-[var(--on-dark-muted)]">
            Resources
          </h3>
          <ul className="space-y-2">
            {[
              { label: "Cover Letter", href: "/Cover Letter/ankush-ananth-bhat.pdf" },
              { label: "Projects", href: "https://github.com/bhatankush" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 t-body text-[var(--ink-muted-80)] dark:text-[var(--on-dark-muted)] transition hover:text-[var(--ink)] dark:hover:text-[var(--on-dark)]"
                >
                  {label}
                  <span className="opacity-40 transition group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--hairline)]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-5 sm:px-6">
          <p className="t-fine-print text-[var(--ink-muted-48)]">
            {new Date().getFullYear()} Ankush Ananth Bhat. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
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
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--hairline)] text-[var(--ink-muted-80)] transition hover:border-[var(--ink-muted-48)] hover:bg-[var(--surface-tile-2)] hover:text-[var(--ink)] dark:hover:text-[var(--on-dark)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
