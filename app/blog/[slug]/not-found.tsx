import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { Tile, TileInner } from "@/components/Tile";

export default function NotFound() {
  return (
    <main className="w-full">
      <Navbar />
      <Tile id="not-found" surface="parchment" className="section-padding">
        <TileInner>
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <p className="t-display-lg text-[var(--primary-action)] mb-4">404</p>
            <h2 className="t-display-md text-[var(--ink)] dark:text-[var(--on-dark)] mb-3">
              Blog Post Not Found
            </h2>
            <p className="t-body text-[var(--body-muted)] dark:text-[var(--on-dark-muted)] mb-8 max-w-md">
              The article you're looking for doesn't exist or may have been moved.
            </p>
            <Link
              href="/#writing"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary-action)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              ← Back to Writing
            </Link>
          </div>
        </TileInner>
      </Tile>
      <Footer />
    </main>
  );
}
