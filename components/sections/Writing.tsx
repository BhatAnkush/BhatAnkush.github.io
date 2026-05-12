import { TagPill } from "@/components/TagPill";
import { Tile, TileInner } from "@/components/Tile";
import { getSortedPostsData } from "@/lib/posts";
import { HyperText } from "../ui/hyper-text";

export function Writing() {
  const posts = getSortedPostsData().slice(0, 3);

  return (
    <Tile id="writing" surface="light" className="section-padding">
      <TileInner>
        <div className="mb-10">
          <HyperText>Writing</HyperText>
          <p className="mt-2 t-body text-[var(--body-muted)]">
            Notes and articles on cloud engineering, backend development, and my
            career journey.
          </p>
        </div>

        <div>
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-t border-[var(--hairline)] py-7 first:border-t-0 first:pt-0"
            >
              <p className="t-caption text-[var(--body-muted)]">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
              <h3 className="mt-2 t-display-md">{post.title}</h3>
              <div className="my-4 flex flex-wrap gap-2">
                <TagPill label={post.category} surface="light" />
              </div>
              <p className="t-body text-[var(--body-muted)]">{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="mt-3 inline-block text-link t-body">
                Read article →
              </a>
            </article>
          ))}
        </div>
      </TileInner>
    </Tile>
  );
}
