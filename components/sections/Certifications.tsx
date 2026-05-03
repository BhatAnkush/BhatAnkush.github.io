import { ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "Jul 2025",
    verifyLink: "https://google.com/certification", // Placeholder
  },
  {
    title: "Python Basic",
    issuer: "HackerRank",
    date: "Sep 2023",
    verifyLink: "https://hackerrank.com", // Placeholder
  },
  {
    title: "Java Basic",
    issuer: "HackerRank",
    date: "Apr 2023",
    verifyLink: "https://hackerrank.com", // Placeholder
  },
  {
    title: "Problem Solving Basic",
    issuer: "HackerRank",
    date: "Dec 2022",
    verifyLink: "https://hackerrank.com", // Placeholder
  },
  {
    title: "C++ Programming for Beginners",
    issuer: "Udemy",
    date: "Apr 2023",
    verifyLink: "https://udemy.com", // Placeholder
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Certifications</h2>
        <p className="mt-2 text-muted-foreground">My cloud and programming certifications validating expertise.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {CERTIFICATIONS.map((cert, i) => (
          <div
            key={i}
            className="group relative flex flex-col justify-between rounded-xl border border-border/40 bg-card/20 p-5 transition-all hover:-translate-y-1 hover:border-border/80 hover:bg-card/40"
          >
            <div className="mb-4">
              <span className="mb-3 inline-block text-xs font-medium text-muted-foreground">
                {cert.date}
              </span>
              <h3 className="mb-1 text-lg font-bold leading-tight">{cert.title}</h3>
              <p className="text-sm text-foreground/70">{cert.issuer}</p>
            </div>

            <a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground"
            >
              Verify credential <ExternalLink size={12} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
