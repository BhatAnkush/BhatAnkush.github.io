import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Tile, TileInner } from "@/components/Tile";

export function Hero() {
  return (
    <Tile id="hero" surface="light" className="section-padding">
      <TileInner className="text-center">
        <BlurFade delay={0.05} inView>
          <p className="mb-6 t-caption text-[var(--body-muted)]">
            Cloud Associate · Niveus Solutions (NTT Data)
          </p>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <div className="mx-auto mb-10 size-36 overflow-hidden rounded-full product-shadow sm:size-44 md:size-52">
            <div className="relative h-full w-full">
              <Image
                src="/Ankush.png"
                alt="Ankush Ananth Bhat"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h1 className="mx-auto max-w-4xl t-hero-display text-[var(--ink)]">
            Hi, I&apos;m Ankush Ananth Bhat
          </h1>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <p className="mx-auto mt-6 max-w-3xl t-lead text-[var(--body-muted)]">
            Cloud and full-stack engineering on Google Cloud Platform.
          </p>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button variant="primary" size="navPill" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="secondaryPill" size="navPill" asChild>
              <a href="/resume/ankush-bhat.pdf" target="_blank" rel="noopener noreferrer">
                View resume
              </a>
            </Button>
          </div>
        </BlurFade>
      </TileInner>
    </Tile>
  );
}