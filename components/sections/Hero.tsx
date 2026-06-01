import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Tile, TileInner } from "@/components/Tile";
import { Particles } from "@/components/ui/particles";
import { ArrowUpRight, Download, Layers, Cloud, Bot } from "lucide-react";

// Earliest professional start date (Software Engineering Intern, Nov 2024)
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

const STATS_STATIC = [
  { value: "10+", label: "Projects Deployed" },
  { value: "GCP ACE", label: "Certified" },
];

const SPECIALIZATIONS = [
  {
    Icon: Layers,
    title: "Full Stack Development",
    description: "React · Node.js · Express · PostgreSQL",
  },
  {
    Icon: Cloud,
    title: "Cloud Architecture",
    description: "GCP Scalability & Deployment",
  },
  {
    Icon: Bot,
    title: "AI Integration",
    description: "LLM Pipelines & Real-time Systems",
  },
];

export function Hero() {
  return (
    <Tile
      id="hero"
      surface="light"
      className="relative overflow-hidden flex items-center min-h-[calc(100vh-52px)]"
    >
      {/* Particles background */}
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={70}
        ease={80}
        color="#0066cc"
        size={0.5}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -top-32 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,102,204,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(41,151,255,0.06) 0%, transparent 65%)",
          }}
        />
      </div>

      <TileInner className="py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_380px] lg:gap-24 lg:items-center">
          {/* ── Left col ── */}
          <div className="flex flex-col order-2 lg:order-1">
            {/* Availability pill */}
            <BlurFade delay={0} inView>
              <div className="mb-6 inline-flex items-center gap-2.5 self-start rounded-full border border-[var(--hairline)] bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm px-4 py-1.5 shadow-sm">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="t-caption font-semibold text-[var(--ink)]">
                  Actively Seeking New Opportunities
                </span>
              </div>
            </BlurFade>

            {/* Role */}
            <BlurFade delay={0.05} inView>
              <p className="mb-4 t-caption tracking-[0.15em] uppercase font-bold text-blue-600 dark:text-blue-400">
                Software Engineer
              </p>
            </BlurFade>

            {/* Name */}
            <BlurFade delay={0.1} inView>
              <h1 className="t-hero-display leading-[0.92] mb-6 tracking-tight font-extrabold">
                <span
                  className="block"
                  style={{
                    background:
                      "linear-gradient(135deg, #0066cc 0%, #2997ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Ankush Ananth
                </span>
                <span className="block text-[var(--ink)] mt-2">Bhat</span>
              </h1>
            </BlurFade>

            {/* Bio - HR Focused */}
            <BlurFade delay={0.18} inView>
              <p className="t-body text-[var(--ink-muted-80)] max-w-[500px] leading-relaxed mb-8 text-lg">
                Crafting seamless user experiences and robust, scalable
                backends. I specialize in building high-performance web
                applications from the ground up using React, Node.js, and Google
                Cloud Platform.
              </p>
            </BlurFade>

            {/* Specialisation cards - Streamlined for quick scanning */}
            <BlurFade delay={0.26} inView>
              <div className="mb-10 flex flex-col sm:flex-row flex-wrap gap-3">
                {SPECIALIZATIONS.map(({ Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex-1 min-w-[200px] flex items-start gap-3 rounded-xl bg-white dark:bg-white/[0.08] border border-[var(--hairline)] shadow-sm px-4 py-3 transition-transform hover:-translate-y-1"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">
                        {title}
                      </p>
                      <p className="text-xs text-[var(--ink-muted-80)] mt-1">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>

            {/* CTAs - Prominent Resume Button */}
            <BlurFade delay={0.32} inView>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-full shadow-md hover:shadow-lg transition-all"
                  asChild
                >
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2"
                  >
                    View My Work
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  asChild
                >
                  <a
                    href="/Cover Letter/ankush-ananth-bhat.pdf"
                    download
                    className="inline-flex items-center gap-2"
                  >
                    <Download className="size-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </BlurFade>

            {/* Stats */}
            <BlurFade delay={0.38} inView>
              <div className="mt-12 flex gap-10 border-t border-[var(--hairline)] pt-8">
                {[
                  { value: getYearsExp(), label: "Years Experience" },
                  ...STATS_STATIC,
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="text-3xl font-extrabold text-[var(--ink)]">
                      {value}
                    </span>
                    <span className="text-sm font-medium text-[var(--ink-muted-48)] uppercase tracking-wider">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* ── Right col: avatar cluster ── */}
          <BlurFade
            delay={0.14}
            inView
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[320px] lg:w-[380px]">
              <div
                className="absolute inset-0 rounded-full opacity-20 blur-2xl"
                style={{
                  background: "linear-gradient(135deg, #0066cc, #2997ff)",
                }}
                aria-hidden
              />
              <div className="absolute inset-0 rounded-full border border-[var(--hairline)] opacity-50 scale-[1.06]" />
              <div className="absolute inset-0 rounded-full border border-[var(--hairline)] opacity-25 scale-[1.14]" />

              <div
                className="relative mx-auto w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full p-[3px]"
                style={{
                  background:
                    "linear-gradient(135deg, #0066cc 0%, rgba(0,102,204,0.20) 50%, #2997ff 100%)",
                }}
              >
                <div className="relative size-full overflow-hidden rounded-full shadow-2xl">
                  <Image
                    src="/Ankush.png"
                    alt="Ankush Bhat"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating badge — Niveus - Updated to Software Engineer */}
              <div className="absolute bottom-6 -left-4 sm:-left-8 flex items-center gap-3 rounded-2xl border border-[var(--hairline)] bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                  <Image
                    src="/niveusu.png"
                    alt="Niveus Solutions"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-900">
                    Niveus Solutions
                  </span>
                  <span className="text-[11px] font-medium text-gray-500">
                    Software Engineer
                  </span>
                </div>
              </div>

              {/* Floating badge — GCP */}
              <div className="absolute top-8 -right-8 sm:-right-8 flex items-center gap-3 rounded-2xl border border-[var(--hairline)] bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
                <Image
                  src="/gcp.png"
                  alt="GCP"
                  width={24}
                  height={24}
                  className="rounded-sm"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-900">
                    GCP Certified
                  </span>
                  <span className="text-[11px] font-medium text-gray-500">
                    Cloud Engineer
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
