import type { CSSProperties } from "react";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { heroTiles, trustBadges } from "@/lib/landing-content";

const badgeToneClasses: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  error: "bg-error/10 text-error",
  secondary: "bg-secondary/10 text-secondary",
};

export function Hero() {
  return (
    <section className="relative min-h-[860px] overflow-hidden pt-20 pb-32 bg-surface">
      {/* Floating notification tiles (desktop only) */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden xl:block">
        {heroTiles.map((tile) => (
          <div
            key={tile.title}
            style={tile.position as CSSProperties}
            className="hero-tile absolute w-56"
          >
            <Link
              href={tile.href}
              aria-label={`Explore ${tile.title}`}
              className="group glass-card pointer-events-auto block w-full rounded-xl bg-white p-4 text-left shadow-[0_4px_20px_rgba(15,23,42,0.05)] ring-1 ring-transparent transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.08] hover:border-primary/50 hover:bg-white hover:ring-2 hover:ring-primary/30 hover:shadow-[0_22px_56px_rgba(15,23,42,0.18)] focus-visible:-translate-y-2 focus-visible:scale-[1.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/70"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  {tile.category}
                </span>
                <span
                  className={`${badgeToneClasses[tile.badge.tone]} px-2 py-0.5 rounded-full text-[10px] font-bold`}
                >
                  {tile.badge.label}
                </span>
              </div>
              <p className="font-headline-sm text-headline-sm text-on-surface mb-1">
                {tile.title}
              </p>
              <p className="text-label-sm text-outline-variant font-label-sm">
                {tile.subtitle}
              </p>
              <span className="mt-3 block max-h-0 overflow-hidden text-[11px] font-bold text-primary opacity-0 transition-all duration-200 group-hover:max-h-5 group-hover:opacity-100 group-focus-visible:max-h-5 group-focus-visible:opacity-100">
                View details
              </span>
            </Link>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        {/* Headline + search */}
        <div className="max-w-2xl mx-auto mb-12 pt-16">
          <h1 className="font-display-lg text-display-lg md:text-[64px] font-black tracking-tighter mb-6">
            Job sahi, <br />
            <span className="text-primary">Milegi yahi!</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
            India&apos;s first AI-powered platform for central and state
            government jobs. Real-time updates, personalized eligibility, and
            simplified applications.
          </p>

          <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row gap-2 border border-outline-variant max-w-xl mx-auto">
            <div className="flex-1 flex items-center px-4 gap-3">
              <Icon name="search" className="text-outline" />
              <input
                className="w-full border-none focus:ring-0 font-body-md text-body-md bg-transparent h-12"
                placeholder="Search UPSC, Banking, SSC..."
                type="text"
              />
            </div>
            <Link
              href="/jobs"
              className="bg-primary text-on-primary px-8 py-3 rounded-xl font-label-md text-label-md font-bold hover:opacity-90 transition-all"
            >
              Search Jobs
            </Link>
          </div>
        </div>

        {/* Trust badges */}
        <div className="pt-24 border-t border-outline-variant/30">
          <p className="font-label-md text-label-md text-outline uppercase tracking-[0.2em] mb-12">
            Trusted by Candidates Nationwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="font-black text-headline-md tracking-tighter"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
