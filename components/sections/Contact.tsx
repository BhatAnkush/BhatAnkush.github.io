import { Download } from "@/components/animate-ui/icons/download";
import { AnimateIcon } from "@animate-ui/react/icons";
import { Mail } from "@/components/animate-ui/icons/mail";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { GithubIcon } from "../Icons/GithubIcon";
import { Button } from "@/components/ui/button";
import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";

export function Contact() {
  return (
    <Tile id="contact" surface="light" className="section-padding">
      <TileInner>
        <div className="mb-8">
          <HyperText>Get in touch.</HyperText>
          <p className="mt-2 t-lead text-[var(--body-muted)]">
            Feel free to reach out if you&apos;re looking for a developer, have
            a question, or just want to connect.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <AnimateIcon animateOnHover animation="path" className="inline-flex">
            <Button variant="primary" size="navPill" asChild>
              <a
                href="mailto:ankushbhataab@gmail.com"
                className="inline-flex items-center gap-2"
              >
                <Mail size={16} />
                Email me
              </a>
            </Button>
          </AnimateIcon>
          <AnimateIcon animateOnHover animation="path" className="inline-flex">
            <Button variant="secondaryPill" size="navPill" asChild>
              <a
                href="/Resume/ankush-ananth-bhat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </a>
            </Button>
          </AnimateIcon>
        </div>

        <div>
          <AnimateIcon animateOnHover animation="path" className="block">
            <a
              href="mailto:ankushbhataab@gmail.com"
              className="flex items-center gap-4 border-t border-[var(--hairline)] py-4"
            >
              <Mail size={20} className="text-[var(--primary-action)]" />
              <div>
                <p className="t-body-strong">Email</p>
                <p className="t-caption text-[var(--body-muted)]">
                  ankushbhataab@gmail.com
                </p>
              </div>
            </a>
          </AnimateIcon>

          <a
            href="https://www.linkedin.com/in/ankushab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border-t border-[var(--hairline)] py-4"
          >
            <span className="text-[var(--primary-action)]">
              <LinkedinIcon size={20} />
            </span>
            <div>
              <p className="t-body-strong">LinkedIn</p>
              <p className="t-caption text-[var(--body-muted)]">
                linkedin.com/in/ankushab
              </p>
            </div>
          </a>

          <a
            href="https://github.com/bhatankush"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border-t border-b border-[var(--hairline)] py-4"
          >
            <span className="text-[var(--primary-action)]">
              <GithubIcon size={20} />
            </span>
            <div>
              <p className="t-body-strong">GitHub</p>
              <p className="t-caption text-[var(--body-muted)]">
                github.com/bhatankush
              </p>
            </div>
          </a>
        </div>
      </TileInner>
    </Tile>
  );
}
