"use client";

import Image from "next/image";
import { useRef } from "react";
import { Tile, TileInner } from "@/components/Tile";
import { HyperText } from "../ui/hyper-text";

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
    href: "https://developers.google.com/profile/badges/community/dsc/2022/core-member?u=ankushbhat",
  },
  {
    name: "Sahyadri Open Source Community",
    logo: "/communities/sosc.svg",
    href: "https://sosc.org.in",
  },
  {
    name: "IEEE Student Branch SCEM",
    logo: "/communities/ieee.png",
    href: "https://students.ieee.org/",
  },
];

function CommunityCard({
  name,
  logo,
  href,
  onPause,
  onResume,
}: {
  name: string;
  logo: string;
  href: string;
  onPause: () => void;
  onResume: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onPause}
      onMouseLeave={onResume}
      className="group flex flex-col items-center gap-2 px-10 shrink-0 cursor-pointer"
    >
      <div className="relative h-[96px] w-[96px]">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        />
      </div>
      <span className="whitespace-nowrap text-xs text-[var(--ink-muted-48)] transition-colors duration-300 group-hover:text-[var(--ink)]">
        {name}
      </span>
    </a>
  );
}

export function Communities() {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <Tile id="communities" surface="light" className="section-padding">
      <TileInner>
        <HyperText>Communities</HyperText>

        <p className="mb-10 t-body text-body-muted max-w-xl">
          Built, learned, and collaborated with open-source communities.
        </p>

        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-linear-to-r from-white/80 dark:from-[#0c1628]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-linear-to-l from-white/80 dark:from-[#0c1628]/80 to-transparent" />

          <div ref={trackRef} className="carousel-track flex w-max py-4">
            {/* Render twice for seamless loop */}
            {[...COMMUNITIES, ...COMMUNITIES].map((community, i) => (
              <CommunityCard
                key={`${community.name}-${i}`}
                {...community}
                onPause={pause}
                onResume={resume}
              />
            ))}
          </div>
        </div>
      </TileInner>
    </Tile>
  );
}
