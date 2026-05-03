import { Mail, Download } from "lucide-react";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { GithubIcon } from "../Icons/GithubIcon";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Get In Touch</h2>
        <p className="mt-2 text-muted-foreground">Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col justify-center">
          <h3 className="mb-2 text-xl font-bold">Contact Information</h3>
          <p className="mb-8 text-muted-foreground">Connect with me through any of these platforms.</p>
          
          <a
            href="/resume/ankush-bhat.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-200 hover:scale-105"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:ankushabhat2002@gmail.com"
            className="group flex items-center gap-4 rounded-xl border border-border/40 bg-card/20 p-4 transition-all hover:border-border/80 hover:bg-card/40"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
              <Mail size={24} />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">ankushabhat2002@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ankushab"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border/40 bg-card/20 p-4 transition-all hover:border-border/80 hover:bg-card/40"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
              <LinkedinIcon size={24} />
            </div>
            <div>
              <p className="font-semibold">LinkedIn</p>
              <p className="text-sm text-muted-foreground">linkedin.com/in/ankushab</p>
            </div>
          </a>

          <a
            href="https://github.com/bhatankush"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border/40 bg-card/20 p-4 transition-all hover:border-border/80 hover:bg-card/40"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
              <GithubIcon size={24} />
            </div>
            <div>
              <p className="font-semibold">GitHub</p>
              <p className="text-sm text-muted-foreground">github.com/bhatankush</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
