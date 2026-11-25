import Image from "next/image";
import { BlueprintPortrait } from "@/components/BlueprintPortrait";
import { AnimateIcon } from "@animate-ui/react/icons";
import { Download } from "@/components/animate-ui/icons/download";
import { ExternalLink } from "@/components/animate-ui/icons/external-link";
import { MapPin } from "@/components/animate-ui/icons/map-pin";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Tile, TileInner } from "@/components/Tile";
import { Particles } from "@/components/ui/particles";

const CAREER_START = new Date("2024-11-06");

function getYearsExp(): string {
  const months =
    (new Date().getFullYear() - CAREER_START.getFullYear()) * 12 +
    (new Date().getMonth() - CAREER_START.getMonth());

  if (months < 12) return `${months}mo`;

  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem >= 6 ? `${years}.5+` : `${years}+`;
}

const CAPABILITIES = [
  "Product engineering",
  "Cloud architecture",
  "AI-powered systems",
];

export function Hero() {
  return (
    <Tile
      id="hero"
      surface="light"
      className="relative isolate flex min-h-[calc(100vh-96px)] items-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15, 23, 42, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[720px] w-[720px] rounded-full bg-blue-500/15 blur-[110px]"
        aria-hidden
      />
      <Particles
        className="pointer-events-none absolute inset-0"
        quantity={45}
        ease={90}
        color="#0066cc"
        size={0.45}
      />

      <TileInner className="relative w-full py-14 lg:py-20" wide>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.72fr)] lg:gap-20">
          <div className="order-2 max-w-3xl lg:order-1">
            <BlurFade delay={0} initial={false}>
              <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-white/70 px-3.5 py-2 text-xs font-semibold tracking-wide text-[var(--ink)] shadow-sm backdrop-blur dark:bg-white/[0.06]">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  Open to engineering opportunities
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-muted-48)]">
                  <MapPin size={13} animateOnHover animation="path" />
                  Mangaluru · India
                </span>
              </div>
            </BlurFade>

            <BlurFade delay={0.06} initial={false}>
              <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                Cloud &amp; AI Engineer / Niveus Solutions
              </p>
              <h1 className="text-[clamp(3.4rem,7.2vw,7rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-[var(--ink)]">
                Ankush
                <span className="block text-blue-600 dark:text-blue-400">
                  Ananth Bhat.
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.14} initial={false}>
              <div className="mt-8 grid gap-6 border-y border-[var(--hairline)] py-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-[650px] text-lg leading-relaxed text-[var(--ink-muted-80)] sm:text-xl">
                  I build dependable full-stack products and production AI
                  systems on Google Cloud—turning complex infrastructure into
                  fast, useful experiences.
                </p>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted-48)]">
                  React · Node · GCP · AI
                </span>
              </div>
            </BlurFade>

            <BlurFade delay={0.22} initial={false}>
              <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                {CAPABILITIES.map((capability, index) => (
                  <li
                    key={capability}
                    className="flex items-center gap-2 text-sm font-medium text-[var(--ink-muted-80)]"
                  >
                    <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400">
                      0{index + 1}
                    </span>
                    {capability}
                  </li>
                ))}
              </ul>
            </BlurFade>

            <BlurFade delay={0.28} initial={false}>
              <div className="mt-9 flex flex-wrap gap-3">
                <AnimateIcon animateOnHover animation="path" className="inline-flex">
                  <Button
                    variant="primary"
                    size="lg"
                    className="h-12 rounded-full px-6 shadow-lg shadow-blue-600/15 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    asChild
                  >
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2"
                    >
                      Explore selected work
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </AnimateIcon>
                <AnimateIcon animateOnHover animation="path" className="inline-flex">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-full px-6"
                    asChild
                  >
                    <a
                      href="/Resume/ankush-ananth-bhat.pdf"
                      download
                      className="inline-flex items-center gap-2"
                    >
                      <Download size={16} />
                      Download Resume
                    </a>
                  </Button>
                </AnimateIcon>
              </div>
            </BlurFade>

            <BlurFade delay={0.34} initial={false}>
              <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-[var(--hairline)] border-l-2 border-blue-600">
                {[
                  { value: getYearsExp(), label: "Industry experience" },
                  { value: "10+", label: "Projects shipped" },
                  { value: "04", label: "Google Cloud certs" },
                ].map(({ value, label }) => (
                  <div key={label} className="px-4 sm:px-6 first:pl-5">
                    <span className="block text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
                      {value}
                    </span>
                    <span className="mt-1 block text-[11px] leading-tight text-[var(--ink-muted-48)]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          <BlurFade
            delay={0.12}
            initial={false}
            className="order-1 mx-auto w-full max-w-[460px] lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-slate-950 p-2 shadow-[0_32px_80px_rgba(15,23,42,0.24)] dark:border-white/10">
                <div className="flex items-center justify-between px-4 py-3 text-white/55">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                    Profile / 2026
                  </span>
                  <div className="flex gap-1.5" aria-hidden>
                    <span className="size-1.5 rounded-full bg-red-400" />
                    <span className="size-1.5 rounded-full bg-amber-300" />
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                  </div>
                </div>
                <BlueprintPortrait>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300">
                      Currently building at
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex size-11 items-center justify-center rounded-xl bg-white p-2">
                          <Image
                            src="/niveusu.png"
                            alt="Niveus Solutions"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </span>
                        <div>
                          <p className="text-sm font-semibold">
                            Niveus Solutions
                          </p>
                          <p className="text-xs text-white/60">
                            an NTT DATA company
                          </p>
                        </div>
                      </div>
                      <ExternalLink
                        size={20}
                        animateOnHover
                        animation="path"
                        className="text-white/60"
                      />
                    </div>
                  </div>
                </BlueprintPortrait>
                <div className="flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-white">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-white p-1.5">
                      <Image
                        src="/gcp.png"
                        alt=""
                        width={26}
                        height={26}
                        className="object-contain"
                      />
                    </span>
                    <div>
                      <p className="text-sm font-bold">4× certified</p>
                      <p className="text-[11px] text-white/50">
                        Google Cloud credentials
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </TileInner>
    </Tile>
  );
}
