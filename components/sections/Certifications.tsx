import { ExternalLink } from "lucide-react";
import { Tile, TileInner } from "@/components/Tile";

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
    <Tile id="certifications" surface="parchment" className="section-padding">
      <TileInner wide>
        <div className="mb-10">
          <h2 className="t-display-lg">Certifications</h2>
          <p className="mt-2 t-body text-[var(--body-muted)]">
            My cloud and programming certifications validating expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <article
              key={i}
              className="rounded-[var(--radius-lg-token)] border border-[var(--hairline)] bg-[var(--canvas)] p-6"
            >
              <span className="t-caption text-[var(--body-muted)]">{cert.date}</span>
              <h3 className="mt-2 t-tagline">{cert.title}</h3>
              <p className="mb-5 mt-1 t-caption text-[var(--ink-muted-80)]">{cert.issuer}</p>

              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex items-center gap-1.5 t-caption"
              >
                Verify credential <ExternalLink size={12} />
              </a>
            </article>
          ))}
        </div>
      </TileInner>
    </Tile>
  );
}
