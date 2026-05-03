import { GithubIcon } from "./Icons/GithubIcon";
import { LinkedinIcon } from "./Icons/LinkedinIcon";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border/40 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ankush Ananth Bhat. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://github.com/bhatankush"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ankushab"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
