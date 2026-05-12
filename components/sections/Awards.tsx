import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";

const AWARDS = [
  {
    title: "GCP Associate Cloud Engineer",
    event: "Google Cloud Certification (2025)",
    description: "Successfully passed the ACE exam, validating ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform.",
    badge: "Certified",
  },
  {
    title: "Google Cloud Skill Badges",
    event: "Google Cloud Skills Boost (2025)",
    description: "Earned 9 distinct skill badges demonstrating practical knowledge of core GCP services and infrastructure.",
    badge: "9x Badges",
  },
  {
    title: "Community Leadership Excellence",
    event: "SOSC & Newton School (2021-2024)",
    description: "Recognized for driving technical community growth, organizing hackathons, and fostering open-source contributions among 200+ students.",
    badge: "Leadership",
  }
];

export function Awards() {
  return (
    <Tile id="awards" surface="dark2" className="section-padding">
      <TileInner>
        <div className="mb-10">
          <HyperText>Awards & Achievements</HyperText>
          <p className="mt-2 t-body text-[var(--on-dark-muted)]">
            Recognition for my work and contributions.
          </p>
        </div>

        <div>
          {AWARDS.map((award, i) => (
            <article
              key={i}
              className="border-t border-[rgba(255,255,255,0.08)] py-6 first:border-t-0 first:pt-0"
            >
              <div className="mb-3">
                <span className="inline-flex rounded-[var(--radius-pill-token)] bg-[var(--surface-tile-3)] px-3 py-1 t-caption text-[var(--on-dark)]">
                  {award.badge}
                </span>
              </div>
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <h3 className="t-tagline text-[var(--on-dark)]">{award.title}</h3>
                <span className="t-caption text-[var(--on-dark-muted)]">{award.event}</span>
              </div>
              <p className="t-body text-[var(--on-dark-muted)]">{award.description}</p>
            </article>
          ))}
        </div>
      </TileInner>
    </Tile>
  );
}
