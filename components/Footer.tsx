import { GithubIcon } from "./Icons/GithubIcon";
import { LinkedinIcon } from "./Icons/LinkedinIcon";

export function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[var(--canvas-parchment)] py-14 dark:bg-[var(--surface-tile-3)]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="t-caption-strong mb-2">Connect</h3>
          <div className="t-dense-link">
            <a
              href="https://github.com/bhatankush"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ankushab"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h3 className="t-caption-strong mb-2">Resources</h3>
          <div className="t-dense-link">
            <a href="/resume/ankush-bhat.pdf" target="_blank" rel="noopener noreferrer" className="block hover:underline">
              Resume
            </a>
            <a href="https://github.com/bhatankush" target="_blank" rel="noopener noreferrer" className="block hover:underline">
              Projects
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[1440px] items-center justify-between px-5 sm:px-6">
        <p className="t-fine-print text-[var(--ink-muted-48)]">
          © {new Date().getFullYear()} Ankush Ananth Bhat.
        </p>
        <div className="flex items-center gap-4 text-[var(--ink-muted-80)]">
          <a href="https://github.com/bhatankush" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ankushab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
