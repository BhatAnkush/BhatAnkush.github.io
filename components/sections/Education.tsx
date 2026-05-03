export function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Education</h2>
        <p className="mt-2 text-muted-foreground">My academic background and qualifications.</p>
      </div>

      <div className="rounded-2xl border border-border/40 bg-card/20 p-6 sm:p-8 transition-all hover:bg-card/40">
        <div className="mb-2 flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-xl font-bold md:text-2xl">B.E. in Information Science & Engineering</h3>
          <span className="mt-2 shrink-0 text-sm font-medium text-muted-foreground sm:mt-1">Dec 2020 – May 2024</span>
        </div>
        
        <div className="mb-6">
          <p className="text-lg font-medium text-foreground/80">Sahyadri College of Engineering & Management</p>
          <p className="text-sm text-muted-foreground">Mangaluru, Karnataka</p>
        </div>
        
        <p className="leading-relaxed text-muted-foreground">
          Graduated with Distinction. Coursework focused on core computer science fundamentals, data structures, algorithms, cloud computing, and software engineering principles. Active in student communities, serving as Vice President of the Newton School chapter and Community Lead for Sahyadri Open Source Community (SOSC).
        </p>
      </div>
    </section>
  );
}
