import { getAllPostSlugs, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Tile, TileInner } from "@/components/Tile";

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * generateStaticParams — tells Next.js which slugs to pre-render at build time.
 */
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * generateMetadata — injects per-post SEO meta tags.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return { title: "Post Not Found | Ankush Bhat" };
  }

  return {
    title: `${post.title} | Ankush Bhat Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

/**
 * The statically generated blog post page.
 */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="w-full">
      <Navbar />

      <Tile id="blog-post" surface="parchment" className="section-padding">
        <TileInner wide>
          {/* Hero Banner */}
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-[var(--primary-action)] px-3 py-1 text-sm font-medium text-white">
              {post.category}
            </span>
            <h1 className="t-display-lg mt-4 text-[var(--ink)] dark:text-[var(--on-dark)]">{post.title}</h1>
            <p className="mt-3 t-body text-[var(--body-muted)] dark:text-[var(--on-dark-muted)]">{post.excerpt}</p>
            {post.image && (
              <div className="relative mx-auto mt-6 h-[400px] w-full max-w-4xl overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Article */}
            <article className="lg:col-span-8">
              {/* Author & Date */}
              <div className="mb-10 flex items-center gap-3 border-b border-[var(--hairline)] pb-8">
                <img src="/Ankush.png" alt="Ankush" className="size-10 shrink-0 rounded-full" />
                <div>
                  <p className="t-body-strong text-[var(--ink)] dark:text-[var(--on-dark)]">{post.author}</p>
                  <p className="t-caption text-[var(--body-muted)] dark:text-[var(--on-dark-muted)]">{formattedDate}</p>
                </div>
              </div>

              {/* Markdown Content */}
              <div
                className="markdown-content max-w-none"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              {/* Back Link */}
              <div className="mt-16 border-t border-[var(--hairline)] pt-8">
                <Link
                  href="/#writing"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary-action)] transition-opacity hover:opacity-80"
                >
                  ← Back to Writing
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="rounded-xl bg-[var(--canvas-parchment)] dark:bg-[var(--surface-tile-2)] p-6">
                <h3 className="t-display-sm mb-4 text-[var(--ink)] dark:text-[var(--on-dark)]">About the Author</h3>
                <div className="flex items-center gap-3 mb-4">
                  <img src="/Ankush.png" alt="Ankush" className="size-12 shrink-0 rounded-full" />
                  <div>
                    <p className="t-body-strong text-[var(--ink)] dark:text-[var(--on-dark)]">{post.author}</p>
                  </div>
                </div>
                <p className="t-body text-[var(--body-muted)] dark:text-[var(--on-dark-muted)]">
                  Software developer sharing insights on technology, development, and more.
                </p>
              </div>
            </aside>
          </div>
        </TileInner>
      </Tile>
    </main>
  );
}
