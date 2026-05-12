import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";

export function Education() {
  return (
    <Tile id="education" surface="parchment" className="section-padding">
      <TileInner>
        <div className="mb-10">
          <HyperText>Education</HyperText>
          <p className="mt-2 t-body text-[var(--body-muted)]">
            My academic background and qualifications.
          </p>
        </div>

        <div className="border-t border-[var(--hairline)] py-8">
          <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="t-tagline">B.E. in Information Science & Engineering</h3>
            <span className="t-caption text-[var(--body-muted)]">Dec 2020 – May 2024</span>
          </div>

          <div className="mb-6 flex items-start gap-4">
            <img src="/sahyadri.jpg" alt="Sahyadri College" className="size-16 shrink-0 rounded-lg object-contain" />
            <div>
              <p className="t-body-strong">Sahyadri College of Engineering & Management</p>
              <p className="t-caption text-[var(--body-muted)]">Mangaluru, Karnataka</p>
            </div>
          </div>

          <p className="t-body text-[var(--body-muted)]">
            Graduated with Distinction. Coursework focused on core computer science
            fundamentals, data structures, algorithms, cloud computing, and
            software engineering principles. Active in student communities, serving
            as Vice President of the Newton School chapter and Community Lead for
            Sahyadri Open Source Community (SOSC).
          </p>
        </div>
      </TileInner>
    </Tile>
  );
}
