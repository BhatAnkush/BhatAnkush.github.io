import { Tile, TileInner } from "@/components/Tile";
import { getSortedPostsData } from "@/lib/posts";
import { HyperText } from "../ui/hyper-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowUpRight } from "lucide-react";

const CATEGORY_STYLES: Record<string, string> = {
  Frontend:
    "bg-blue-100/80 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/30",
  Backend:
    "bg-emerald-100/80 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function CategoryPill({ category }: { category: string }) {
  const style =
    CATEGORY_STYLES[category] ??
    "bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--ink)]";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${style}`}
    >
      {category}
    </span>
  );
}

export function Writing() {
  const posts = getSortedPostsData();
  const [featured, ...rest] = posts;

  return (
    <Tile id="writing" surface="parchment" className="section-padding">
      <TileInner>
        {/* Header */}
        <div className="mb-10">
          <HyperText>Writing</HyperText>
          <p className="mt-2 t-body text-[var(--body-muted)]">
            Notes and articles on tech and career.
          </p>
        </div>

        {/* Featured post — horizontal card */}
        {featured && (
          <BlurFade delay={0.1} inView>
            <a
              href={`/blog/${featured.slug}`}
              className="group glass-card rounded-[var(--radius-lg-token)] overflow-hidden flex flex-col md:flex-row mb-6 no-underline"
            >
              <div className="md:w-[44%] aspect-video md:aspect-auto overflow-hidden bg-[var(--canvas-parchment)] shrink-0">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <CategoryPill category={featured.category} />
                  <span className="text-xs text-[var(--body-muted)]">
                    {formatDate(featured.date)}
                  </span>
                </div>
                <h3 className="t-display-md leading-snug">{featured.title}</h3>
                <p className="t-body text-[var(--body-muted)] line-clamp-3">
                  {featured.excerpt}
                </p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-[var(--primary-action)] font-semibold text-sm transition-all group-hover:gap-3">
                  Read article
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          </BlurFade>
        )}

        {/* Remaining posts — 2-col card grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((post, i) => (
              <BlurFade key={post.slug} delay={0.2 + i * 0.1} inView>
                <a
                  href={`/blog/${post.slug}`}
                  className="group glass-card rounded-[var(--radius-lg-token)] overflow-hidden flex flex-col h-full no-underline"
                >
                  <div className="aspect-video overflow-hidden bg-[var(--canvas-parchment)]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6 gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <CategoryPill category={post.category} />
                      <span className="text-xs text-[var(--body-muted)]">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h3 className="t-tagline line-clamp-2">{post.title}</h3>
                    <p className="t-body text-[var(--body-muted)] line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-[var(--primary-action)] font-semibold text-sm transition-all group-hover:gap-3">
                      Read article
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        )}
      </TileInner>
    </Tile>
  );
}
