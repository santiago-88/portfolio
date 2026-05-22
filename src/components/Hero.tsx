/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { AppTranslations } from "../types";
import { ArrowDown, Mail } from "lucide-react";

interface HeroProps {
  translations: AppTranslations;
}

export default function Hero({ translations }: HeroProps) {
  const [reactIconOffset, setReactIconOffset] = useState(0);

  const handleExplore = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center px-6 sm:px-10 lg:px-16 overflow-x-hidden overflow-y-visible select-none"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-4rem] top-1/2 z-0 hidden -translate-y-1/2 opacity-[0.11] transition-transform duration-75 sm:block lg:right-[-2rem] lg:opacity-[0.16]"
        style={{ transform: `translate3d(0, calc(-30% + ${reactIconOffset}px), 0)` }}
      >
        <ReactAtomIcon className="react-atom-spin h-64 w-64 text-accent sm:h-80 sm:w-80 lg:h-[28rem] lg:w-[28rem]" />
      </div>

      {/* Dynamic Header row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full pb-8 border-b border-current/10 z-10 text-left">
        <div className="flex items-center gap-2 border border-current px-3 py-1 bg-background font-mono text-[9px] font-bold tracking-widest uppercase text-accent">
          <span className="availability-dot-pulse h-1.5 w-1.5 rounded-full bg-accent"></span>
          <span>{translations.hero.availableText}</span>
        </div>
      </div>

      {/* Middle row: Sophisticated, clean modern typography area */}
      <div className="my-16 text-left z-10 max-w-4xl">
        {/* Editorial Subline */}
        <p className="section-kicker">
          // {translations.hero.tagline}
        </p>

        {/* Refined subtle Headline */}
        <h1 className="font-sans font-black leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase select-none mb-6 text-foreground">
          Elias{" "}
          <span className="text-accent">
            Santiago
          </span>
        </h1>

        {/* Supporting description */}
        <div className="mt-6 flex flex-col md:flex-row md:items-start gap-8 justify-between">
          <p className="max-w-2xl font-serif text-base sm:text-lg leading-relaxed text-foreground/80">
            {translations.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-3.5 shrink-0 pt-1">
            <button
              onClick={handleExplore}
              className="group flex items-center gap-2 border border-foreground bg-foreground text-background hover:bg-accent hover:border-accent hover:scale-[1.01] active:translate-y-px transition-all px-5 py-3.5 cursor-pointer text-xs font-bold tracking-widest uppercase rounded-none"
              id="hero-explore-works"
            >
              <span>{translations.hero.exploreBtn}</span>
              <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={handleContact}
              className="group flex items-center gap-2 border border-current bg-transparent text-current hover:bg-foreground hover:text-background active:translate-y-px transition-all px-5 py-3.5 cursor-pointer text-xs font-bold tracking-widest uppercase rounded-none"
              id="hero-talk-btn"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{translations.hero.ctaBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReactAtomIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="-12 -12 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="0" cy="0" r="1.8" fill="currentColor" stroke="none" />
      <ellipse rx="10" ry="4.1" />
      <ellipse rx="10" ry="4.1" transform="rotate(60)" />
      <ellipse rx="10" ry="4.1" transform="rotate(120)" />
    </svg>
  );
}
