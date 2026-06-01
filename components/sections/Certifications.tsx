import { ExternalLink } from "lucide-react";
import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";

const CERTIFICATIONS = [
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "Jul 2025",
    verifyLink:
      "https://www.credly.com/badges/48ac672d-cb2b-44cc-b67a-d72a9c697b3c", // Placeholder
  },
  {
    title: "Python Basic",
    issuer: "HackerRank",
    date: "Sep 2023",
    verifyLink: "https://www.hackerrank.com/certificates/iframe/3dea87d3e2d4", // Placeholder
  },
  {
    title: "Java Basic",
    issuer: "HackerRank",
    date: "Apr 2023",
    verifyLink: "https://www.hackerrank.com/certificates/acee6bec8ef2", // Placeholder
  },
  {
    title: "Problem Solving Basic",
    issuer: "HackerRank",
    date: "Dec 2022",
    verifyLink: "https://www.hackerrank.com/certificates/506f60ac0051", // Placeholder
  },
];

export function Certifications() {
  return (
    <Tile id="certifications" surface="dark" className="section-padding">
      <TileInner wide>
        <div className="mb-10">
          <HyperText>Certifications</HyperText>
          <p className="mt-2 t-body text-[var(--on-dark-muted)]">
            My cloud and programming certifications validating expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <article
              key={i}
              className="glass-card-dark rounded-[var(--radius-lg-token)] p-6"
            >
              <span className="t-caption text-[var(--on-dark-muted)]">
                {cert.date}
              </span>
              <h3 className="mt-2 t-tagline text-[var(--on-dark)]">
                {cert.title}
              </h3>
              <p className="mb-5 mt-1 t-caption text-[var(--on-dark-muted)]">
                {cert.issuer}
              </p>

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
