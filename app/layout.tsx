import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { ThemeScript } from "@/components/theme-script";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankush Ananth Bhat — Cloud & Full-Stack Engineer",
  description:
    "Portfolio of Ankush Ananth Bhat — GCP-Certified Cloud Associate at Niveus Solutions (NTT Data). Full-stack developer skilled in React, Node.js, and Google Cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased font-sans",
        inter.variable,
        geistMono.variable,
      )}
    >
      <head>
        <ThemeScript />
      </head>
      <body
        className={cn(
          "min-h-full flex flex-col bg-background text-foreground",
          inter.className,
        )}
      >
        <Navbar />
        <main className="flex-1 pt-[96px]">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <SmoothCursor />
      </body>
    </html>
  );
}
