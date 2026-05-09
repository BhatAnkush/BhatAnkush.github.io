import { TagPill } from "@/components/TagPill";
import { Tile, TileInner } from "@/components/Tile";

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
    <Tile id="writing" surface="light" className="section-padding">
      <TileInner>
        <div className="mb-10">
          <h2 className="t-display-lg">Writing</h2>
          <p className="mt-2 t-body text-[var(--body-muted)]">
            Notes and articles on cloud engineering, backend development, and my
            career journey.
          </p>
        </div>

        <div>
          {ARTICLES.map((article, i) => (
            <article
              key={i}
              className="border-t border-[var(--hairline)] py-7 first:border-t-0 first:pt-0"
            >
              <p className="t-caption text-[var(--body-muted)]">
                {article.date} · {article.readTime}
              </p>
              <h3 className="mt-2 t-display-md">{article.title}</h3>
              <div className="my-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <TagPill key={tag} label={tag} surface="light" />
                ))}
              </div>
              <p className="t-body text-[var(--body-muted)]">{article.description}</p>
              <a href={article.link} className="mt-3 inline-block text-link t-body">
                Read article →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <a href="#" className="text-link t-body">
            View all writing →
          </a>
        </div>
      </TileInner>
    </Tile>
  );
}
