import { TagPill } from "@/components/TagPill";

const ARTICLES = [
  {
    title: "Understanding Microservices on GCP",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    description: "A deep dive into architecting, deploying, and scaling microservices using Google Cloud Platform tools like Cloud Run and Kubernetes Engine.",
    tags: ["Cloud", "Architecture"],
    link: "#",
  },
  {
    title: "Building Real-Time Systems with WebSockets",
    date: "Feb 22, 2026",
    readTime: "4 min read",
    description: "Lessons learned from implementing real-time bidirectional communication in production Node.js applications.",
    tags: ["Node.js", "WebSockets"],
    link: "#",
  },
  {
    title: "From Student to Cloud Engineer",
    date: "Jan 15, 2026",
    readTime: "3 min read",
    description: "My journey transitioning from leading a student open-source community to deploying enterprise applications.",
    tags: ["Career", "Community"],
    link: "#",
  },
];

export function Writing() {
  return (
    <section id="writing" className="py-16 md:py-24">
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Writing</h2>
          <p className="mt-2 text-muted-foreground">Notes and articles on cloud engineering, backend development, and my career journey.</p>
        </div>
      </div>

      <div className="space-y-6">
        {ARTICLES.map((article, i) => (
          <div
            key={i}
            className="group flex flex-col gap-4 rounded-xl border border-border/40 bg-card/20 p-6 transition-all hover:border-border/80 hover:bg-card/40 sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="flex-1">
              <div className="mb-2 text-xs font-medium text-muted-foreground">
                {article.date} · {article.readTime}
              </div>
              <h3 className="mb-2 text-xl font-bold group-hover:text-blue-400 transition-colors">{article.title}</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.description}
              </p>
            </div>
            
            <div className="mt-4 shrink-0 sm:mt-0 sm:self-center">
              <a
                href={article.link}
                className="inline-flex items-center text-sm font-medium text-foreground transition-colors group-hover:text-blue-400"
              >
                Read article →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View all writing →
        </a>
      </div>
    </section>
  );
}
