"use client";

import Image from "next/image";
import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";
import { Marquee } from "../ui/marquee";

const COMMUNITIES = [
  {
    name: "Mozilla Club",
    logo: "/communities/mozilla.svg",
    href: "https://www.mozilla.org/",
  },
  {
    name: "Newton School Coding Club",
    logo: "/communities/nscc.svg",
    href: "https://www.newtonschool.co",
  },
  {
    name: "GDGOC SCEM",
    logo: "/communities/gdgoc.webp",
    href: "https://gdg.community.dev/gdg-on-campus-sahyadri-college-of-engineering-management-mangaluru-india/",
  },
  {
    name: "Sahyadri Open Source Community",
    logo: "/communities/sosc.svg",
    href: "https://sosc.org.in",
  },
];

function CommunityCard({
  name,
  logo,
  href,
}: {
  name: string;
  logo: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 px-8 py-6 w-48 shrink-0 cursor-pointer"
    >
      {/* Logo — grayscale by default, full color on hover */}
      <div className="relative h-20 w-20 transition-all duration-400">
        {/* Grayscale layer (fades out on hover) */}
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain grayscale opacity-40 transition-all duration-400 group-hover:opacity-0"
        />
        {/* Color layer (fades in on hover) */}
        <Image
          src={logo}
          alt=""
          fill
          aria-hidden
          className="object-contain opacity-0 transition-all duration-400 group-hover:opacity-100 group-hover:scale-110"
        />
      </div>

      {/* Name — muted, sharpens on hover */}
      <span className="text-center text-xs font-medium text-[var(--ink-muted-48)] transition-colors duration-400 group-hover:text-[var(--ink)] leading-snug">
        {name}
      </span>
    </a>
  );
}

export function Communities() {
  return (
    <Tile id="communities" surface="parchment" className="section-padding">
      <TileInner>
        <HyperText>Communities</HyperText>

        <p className="mb-10 t-body text-body-muted max-w-xl">
          Communities and clubs I&apos;ve been part of — building, learning, and
          contributing alongside fellow developers and open-source enthusiasts.
        </p>

        <div className="relative">
          {/* Fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-[var(--canvas-parchment)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-[var(--canvas-parchment)] to-transparent" />

          <Marquee pauseOnHover className="py-6 [--duration:20s] [--gap:0rem]">
            {COMMUNITIES.map((community) => (
              <CommunityCard key={community.name} {...community} />
            ))}
          </Marquee>
        </div>
      </TileInner>
    </Tile>
  );
}
