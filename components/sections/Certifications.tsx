import Image from "next/image";
import { AnimateIcon } from "@animate-ui/react/icons";
import { BadgeCheck } from "@/components/animate-ui/icons/badge-check";
import { ExternalLink } from "@/components/animate-ui/icons/external-link";
import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";

const CERTIFICATIONS = [
  {
    title: "Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    date: "NOV 2026",
    image: "/certifications/professional-machine-learning-engineer.png",
    verifyLink:
      "https://www.credly.com/badges/2e46e238-4f4a-4606-9ac7-0d62617ebcd2",
    focus: "Designing, building, and productionizing ML systems",
  },
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "JUL 2025",
    image: "/certifications/associate-cloud-engineer.png",
    verifyLink:
      "https://www.credly.com/badges/48ac672d-cb2b-44cc-b67a-d72a9c697b3c",
    focus: "Deploying, monitoring, and maintaining cloud solutions",
  },
  {
    title: "Gemini Enterprise Agent Development",
    issuer: "Google Cloud Partner Specialist",
    date: "JUL 2026",
    image: "/certifications/gemini-agent-development.png",
    verifyLink:
      "https://www.credly.com/badges/5bb30ee4-09fa-44ab-bde4-fa522cd8b8a5",
    focus: "Building agentic workflows for enterprise environments",
  },
  {
    title: "Gemini Enterprise Deployment",
    issuer: "Google Cloud Partner Specialist",
    date: "JUL 2026",
    image: "/certifications/gemini-enterprise-deployment.png",
    verifyLink:
      "https://www.credly.com/badges/4fda722a-49c9-413e-8d40-b716d504a3a3",
    focus: "Integrating and governing Gemini across organizations",
  },
];

export function Certifications() {
  return (
    <Tile
      id="certifications"
      surface="dark"
      className="section-padding relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 0)",
          backgroundSize: "24px 24px",
          maskImage:
            "linear-gradient(to right, transparent, black 35%, transparent)",
        }}
      />

      <TileInner className="relative">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-400">
              <BadgeCheck size={15} animateOnView animation="path" />
              Verified expertise · 04 credentials
            </div>
            <HyperText>Certifications</HyperText>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-[var(--on-dark-muted)] lg:justify-self-end">
            A working certification stack across cloud operations, enterprise
            AI, agent development, and production machine learning.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {CERTIFICATIONS.map((cert, index) => (
            <article
              key={cert.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.075] sm:p-7"
            >
              <div className="absolute right-5 top-4 font-mono text-4xl font-semibold tracking-tighter text-white/[0.045] sm:text-5xl">
                0{index + 1}
              </div>

              <div className="relative grid items-center gap-6 sm:grid-cols-[150px_1fr]">
                <div className="relative mx-auto flex aspect-square w-full max-w-[150px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.96] p-4 shadow-2xl transition-transform duration-300 group-hover:rotate-[-2deg] group-hover:scale-[1.03]">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} badge`}
                    width={130}
                    height={130}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-300">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-[10px] text-white/40">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="max-w-sm text-xl font-semibold leading-tight tracking-tight text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {cert.focus}
                  </p>

                  <AnimateIcon animateOnHover animation="path" className="inline-flex">
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                    >
                      View credential
                      <ExternalLink size={14} />
                    </a>
                  </AnimateIcon>
                </div>
              </div>
            </article>
          ))}
        </div>
      </TileInner>
    </Tile>
  );
}
