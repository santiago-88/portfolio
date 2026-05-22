/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Language, Theme, AppTranslations } from "../types";
import { Menu, X, Globe, Sun, Moon, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  currentTheme: Theme;
  toggleTheme: () => void;
  translations: AppTranslations;
}

export default function Navbar({
  currentLang,
  setLang,
  currentTheme,
  toggleTheme,
  translations,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: translations.nav.home, id: "home" },
    { label: translations.nav.about, id: "about" },
    { label: translations.nav.projects, id: "projects" },
    { label: translations.nav.contact, id: "contact" },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-current/10 bg-background/90 backdrop-blur-md select-none transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Monogram in Swiss Minimalist Style */}
        <button
          onClick={() => handleScroll("home")}
          className="group relative cursor-pointer flex items-center gap-1.5 focus:outline-none"
          id="logo-button"
        >
          <div className="relative flex h-8.5 w-8.5 items-center justify-center bg-foreground text-background font-mono text-sm font-black transition-transform duration-300 group-hover:scale-105">
            E
          </div>
          <div className="hidden sm:flex flex-col items-start leading-none text-left pl-1">
            <span className="font-sans font-black text-xs tracking-widest uppercase text-foreground">
              ELIAS SANTIAGO
            </span>
            <span className="font-mono text-[8px] tracking-wider text-muted font-bold">
              EDITION ©2026
            </span>
          </div>
        </button>

        {/* Right actions: Desktop navigation + Language + Theme */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="relative py-1 font-sans text-xs font-bold uppercase tracking-widest text-[#121212] dark:text-[#f5f5f0] hover:text-accent focus:outline-none cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="h-4 w-[1px] bg-current opacity-30"></div>

          {/* Quick Controls */}
          <div className="flex items-center gap-4">
            {/* Language Selection */}
            <div className="flex items-center border border-current p-0.5 rounded-none font-mono text-[10px]">
              <button
                onClick={() => setLang(Language.ES)}
                className={`px-1.5 py-0.5 font-bold transition-colors cursor-pointer ${
                  currentLang === Language.ES ? "bg-primary text-secondary" : "hover:bg-accent/10"
                }`}
                id="lang-es"
              >
                ES
              </button>
              <button
                onClick={() => setLang(Language.EN)}
                className={`px-1.5 py-0.5 font-bold transition-colors cursor-pointer ${
                  currentLang === Language.EN ? "bg-primary text-secondary" : "hover:bg-accent/10"
                }`}
                id="lang-en"
              >
                EN
              </button>
            </div>

            {/* Theme Toggle Button */}
          
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center border border-current hover:bg-accent/10 focus:outline-none cursor-pointer text-current"
            id="mobile-theme-btn"
          >
            {currentTheme === Theme.DARK ? <Sun className="h-[14px] w-[14px]" /> : <Moon className="h-[14px] w-[14px]" />}
          </button>
          <button
            onClick={() => {
              setLang(currentLang === Language.ES ? Language.EN : Language.ES);
            }}
            className="flex h-8 px-2 items-center justify-center border border-current font-mono text-[10px] font-bold hover:bg-accent/10 focus:outline-none cursor-pointer text-current"
            id="mobile-lang-btn"
          >
            <Globe className="h-[12px] w-[12px] mr-1" />
            {currentLang}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-8 items-center gap-1.5 border border-current bg-primary px-3 text-secondary hover:bg-accent hover:text-background transition-all focus:outline-none cursor-pointer"
            id="mobile-menu-btn"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span className="font-mono text-[10px] font-bold tracking-widest">
              {isOpen ? translations.nav.closeMenu : translations.nav.menuLabel}
            </span>
          </button>
        </div>
      </div>

      {/* Brutalist Art Deco Mega-Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 right-0 z-40 border-b-2 border-current bg-background p-6 outline-none shadow-2xl md:hidden"
            id="mobile-mega-menu"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <span className="font-mono text-[9px] tracking-widest text-accent uppercase font-bold">
                  — NAVIGACIÓN SECCIONAL
                </span>
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleScroll(item.id)}
                      className="group flex items-center justify-between border-b border-current/10 py-2.5 text-left font-sans text-lg font-black uppercase tracking-wider text-foreground hover:text-accent focus:outline-none cursor-pointer"
                      id={`mobile-nav-${item.id}`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
