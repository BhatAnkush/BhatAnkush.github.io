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
    <section id="awards" className="py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Awards & Achievements</h2>
        <p className="mt-2 text-muted-foreground">Recognition for my work and contributions.</p>
      </div>

      <div className="space-y-4">
        {AWARDS.map((award, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-xl border border-border/40 bg-card/20 p-5 transition-all hover:bg-card/40 sm:flex-row sm:items-center sm:p-6"
          >
            <div className="shrink-0">
              <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
                {award.badge}
              </span>
            </div>
            
            <div>
              <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <h3 className="font-bold text-lg">{award.title}</h3>
                <span className="hidden text-muted-foreground sm:inline">•</span>
                <span className="text-sm font-medium text-foreground/80">{award.event}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
