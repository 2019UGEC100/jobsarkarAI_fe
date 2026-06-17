import type { CSSProperties } from "react";

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
      <div className="absolute inset-0 z-0 pointer-events-none hidden xl:block">
        {heroTiles.map((tile) => (
          <div
            key={tile.title}
            style={tile.position as CSSProperties}
            className="hero-tile absolute bg-white p-4 rounded-xl glass-card w-56 text-left"
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
            <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-label-md text-label-md font-bold hover:opacity-90 transition-all">
              Search Jobs
            </button>
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
