/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, AppTranslations } from "../types";
import { X, ArrowUpRight, Github, Target, AlertTriangle, Lightbulb, CheckSquare, BarChart } from "lucide-react";
import { motion } from "motion/react";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
  translations: AppTranslations;
}

export default function CaseStudyModal({
  project,
  onClose,
  translations,
}: CaseStudyModalProps) {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-sm select-none"
      id="case-study-overlay"
    >
      <motion.div
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        className="relative w-full max-w-5xl h-[85vh] overflow-y-auto border-2 border-current bg-[#f5f5f0] text-[#121212] dark:bg-[#121212] dark:text-[#f5f5f0] p-6 sm:p-8 md:p-10 flex flex-col justify-between"
        id="case-study-container"
      >
        {/* Modal Close Floating Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 border border-current p-2 hover:bg-accent hover:text-background transition-colors focus:outline-none cursor-pointer"
          aria-label={translations.projects.closeCaseStudy}
          id="close-case-study-btn"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content Container */}
        <div>
          {/* Header Row */}
          <div className="border-b border-current/30 pb-6 mb-8 text-left">
            <span className="font-mono text-xs font-bold text-accent tracking-[0.3em] uppercase block mb-2">
              — CASE STUDY ANALYSIS / CLASS OF {project.year}
            </span>
            <h3 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-none">
              {project.title}
            </h3>
            <p className="font-serif italic text-lg sm:text-xl text-muted text-foreground/80 mt-2">
              {project.category}
            </p>
          </div>

          {/* Grid Layout: Text details vs Metrics visualizer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            
            {/* Left columns (Text narrative - 7 columns) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Objectives */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 border-b border-current/10 pb-1.5">
                  <Target className="h-4 w-4 text-accent" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                    {translations.projects.objectivesLabel}
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base leading-relaxed text-foreground/90">
                  {project.caseStudy.objective}
                </p>
              </div>

              {/* Challenge */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 border-b border-current/10 pb-1.5">
                  <AlertTriangle className="h-4 w-4 text-accent" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                    {translations.projects.challengeLabel}
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base leading-relaxed text-foreground/90">
                  {project.caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 border-b border-current/10 pb-1.5">
                  <Lightbulb className="h-4 w-4 text-accent" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                    {translations.projects.solutionLabel}
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base leading-relaxed text-foreground/90">
                  {project.caseStudy.solution}
                </p>
              </div>

              {/* Results bullet checklist */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-current/10 pb-1.5">
                  <CheckSquare className="h-4 w-4 text-accent" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                    {translations.projects.resultsLabel}
                  </span>
                </div>
                <ul className="space-y-2 font-sans text-sm sm:text-base text-foreground/90">
                  {project.caseStudy.results.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right columns (Dynamic performance visualizer - 5 columns) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-current p-5 bg-background relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4 border-b border-current/20 pb-2">
                  <BarChart className="h-4 w-4 text-accent" />
                  <span className="font-mono text-[10px] font-bold tracking-widest text-accent uppercase">
                    METRIC TELEMETRICS
                  </span>
                </div>

                {/* Animated progress indicators representing high performance results */}
                <div className="space-y-6">
                  {project.caseStudy.metrics.map((met, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-baseline font-mono text-xs font-semibold">
                          <span className="text-muted tracking-wider">{met.label}</span>
                          <span className="text-accent text-lg font-black">{met.value}</span>
                        </div>
                        
                        {/* Custom Brutalist progress bar */}
                        <div className="h-4 w-full border border-current bg-background-muted p-0.5 relative">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: idx === 0 ? "85%" : idx === 1 ? "70%" : "95%" }}
                            transition={{ duration: 1, delay: 0.1 * idx, ease: "easeOut" }}
                            className="h-full bg-accent"
                          ></motion.div>
                        </div>
                      </div>
                  ))}
                </div>

                {/* Simulated Grid Ticker */}
                <div className="border border-current/20 mt-6 p-3 bg-background-muted font-mono text-[9px] text-[#121212]/70 dark:text-[#f5f5f0]/70 flex flex-col space-y-1 text-left">
                  <span>AUDIT STATUS: PASSED SECURE CHANNELS</span>
                  <span>TIME TO SECURE PORTAL: ACTIVE</span>
                  <span>REACTION DELTA RATIO: OPTIMIZED</span>
                </div>
              </div>

              {/* Action buttons inside study */}
              <div className="flex flex-col gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-full items-center justify-center gap-2 border border-foreground bg-foreground text-background hover:bg-accent hover:border-accent hover:text-background transition-all text-xs font-bold tracking-widest uppercase cursor-pointer text-center"
                  id={`launch-demo-${project.id}`}
                >
                  <span>{translations.projects.exploreLiveDemo}</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-full items-center justify-center gap-2 border border-current bg-transparent text-current hover:bg-current hover:text-background transition-colors text-xs font-bold tracking-widest uppercase cursor-pointer text-center"
                  id={`launch-repo-${project.id}`}
                >
                  <Github className="h-4 w-4" />
                  <span>{translations.projects.visitRepo}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Footer info line inside study */}
        <div className="border-t border-current/10 pt-4 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[9px] text-muted text-left w-full">
          <span>PORTFOLIO CASE REPORT / ID: CS-{project.id.toUpperCase()}-2026</span>
          <button
            onClick={onClose}
            className="text-accent underline font-bold tracking-wider hover:text-foreground cursor-pointer"
            id={`bottom-close-${project.id}`}
          >
            {translations.projects.closeCaseStudy}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
