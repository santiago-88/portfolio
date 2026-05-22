/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Language, Theme } from "./types";
import { translations } from "./data/translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import { ArrowUp, Star } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState<Language>(Language.ES);
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize lang and theme preferences on launch
  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang");
    const savedTheme = localStorage.getItem("portfolio_theme");

    if (savedLang === Language.EN || savedLang === Language.ES) {
      setLang(savedLang);
    }

    if (savedTheme === Theme.DARK || savedTheme === Theme.LIGHT) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Default to Light theme as specified in the Mood guidelines
      setTheme(Theme.LIGHT);
      applyTheme(Theme.LIGHT);
    }

    const handleScrollVisibility = () => {
      setShowScrollTop(window.pageYOffset > 500);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const applyTheme = (targetTheme: Theme) => {
    if (targetTheme === Theme.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem("portfolio_theme", nextTheme);
  };

  const handleSetLang = (targetLang: Language) => {
    setLang(targetLang);
    localStorage.setItem("portfolio_lang", targetLang);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const activeTranslations = translations[lang];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans flex flex-col justify-between">
      
      {/* Dynamic Header navbar */}
      <Navbar
        currentLang={lang}
        setLang={handleSetLang}
        currentTheme={theme}
        toggleTheme={toggleTheme}
        translations={activeTranslations}
      />

      {/* Main Single Page Sections Scroll Containers */}
      <main className="mx-auto w-full max-w-7xl flex-grow border-x border-current/10 bg-background self-stretch">
        
        {/* HERO BANNER SECTION */}
        <Hero translations={activeTranslations} />

        {/* DETAILS STORY SECTION */}
        <About translations={activeTranslations} />

        {/* WORKS METRIC GRID SECTION */}
        <ProjectList translations={activeTranslations} />

        {/* TELEMETRY TELEGRAM CONTACT SECTION */}
        <Contact translations={activeTranslations} />

      </main>

      {/* Elegant Brutalist Editorial Footer */}
      <footer className="w-full border-t border-current/10 bg-background p-6 select-none mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
          
          <div className="space-y-1.5 align-left">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-accent fill-accent" />
              <span className="font-sans font-black text-sm tracking-wider uppercase">
                ELIAS SANTIAGO ESCOBAR OCAMPO
              </span>
            </div>
            <p className="font-mono text-[9px] text-muted tracking-widest font-semibold uppercase leading-none">
              DISEÑO DE AUTOR EDITORIAL ©2026 / ALL CHANNELS REGISTERED
            </p>
          </div>

          <div className="font-mono text-[9px] text-muted flex flex-col gap-1 text-left md:text-right">
            <span>BUILT WITH REACT + TYPESCRIPT + TAILWIND v4 + FIREBASE</span>
          </div>

        </div>
      </footer>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center border border-foreground bg-background text-foreground hover:bg-foreground hover:text-background active:scale-95 transition-all shadow-md cursor-pointer"
          aria-label="Scroll to top"
          id="scroll-to-top-btn"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

    </div>
  );
}
