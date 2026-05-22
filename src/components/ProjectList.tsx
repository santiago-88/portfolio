/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppTranslations } from "../types";
import { projectsData } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectListProps {
  translations: AppTranslations;
}

export default function ProjectList({ translations }: ProjectListProps) {
  const getProjectSummary = (projectId: string, fallbackSummary: string) => {
    if (projectId === "aether") return translations.projects.chicoSportFishingSummary;
    if (projectId === "metropolis") return translations.projects.coderflowSummary;
    if (projectId === "krypton") return translations.projects.webChapasSummary;
    return fallbackSummary;
  };

  const getProjectCategory = (projectId: string, fallbackCategory: string) => {
    if (projectId === "aether") return translations.projects.chicoSportFishingCategory;
    if (projectId === "metropolis") return translations.projects.coderflowCategory;
    if (projectId === "krypton") return translations.projects.webChapasCategory;
    return fallbackCategory;
  };

  return (
    <section
      id="projects"
      className="section-shell bg-background transition-colors duration-300"
    >
      {/* SECTION HEADER */}
      <div className="section-header">
        <div className="space-y-3">
          <span className="section-kicker">
            //  {translations.projects.title}
          </span>
          <h2 className="section-title">
            {translations.projects.subtitle}
          </h2>
        </div>
      </div>

      {/* THREE PROJECTS LIST (Editorial Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => (
          <div
            key={project.id}
            className="flex flex-col justify-between border border-current/10 bg-background-muted p-6 hover:scale-[1.01] hover:shadow-xl transition-all duration-300 relative group text-left"
            id={`project-card-${project.id}`}
          >
            {/* Card Ribbon / ID */}
            <div className="flex justify-between items-center border-b border-current/10 pb-3 mb-4">
              <span className="font-mono text-[9px] font-bold text-accent tracking-widest">
                PROJECT // 0{idx + 1}
              </span>
              <span className="font-mono text-[9px] font-black border border-current/20 px-1.5 py-0.5 text-muted">
                {project.year}
              </span>
            </div>

            {/* Cover Image mockup */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[16/10] w-full overflow-hidden mb-5 bg-background block"
              id={`project-image-link-${project.id}`}
              title={`${translations.projects.exploreLiveDemo}: ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover grayscale contrast-110 filter group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Visual hover banner overlay */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="font-mono text-[9px] font-black bg-background text-foreground border border-foreground/10 px-3 py-1.5 uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  {translations.projects.exploreLiveDemo} <ArrowUpRight className="h-3 w-3 text-accent" />
                </span>
              </div>
            </a>

            {/* Project main labels */}
            <div className="space-y-3 flex-grow">
              <h3 className="font-sans font-black text-xl uppercase tracking-tight text-foreground transition-colors">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent flex items-center gap-1.5 transition-colors"
                  id={`project-title-link-${project.id}`}
                >
                  {project.title}
                  <ArrowUpRight className="h-3.5 w-3.5 text-accent opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              </h3>
              
              <p className="font-mono text-[9px] font-bold text-accent tracking-wider uppercase leading-none">
                {getProjectCategory(project.id, project.category)}
              </p>

              <p className="font-serif text-sm text-foreground/85 leading-relaxed pt-2">
                {getProjectSummary(project.id, project.summary)}
              </p>

              {/* Technology list tags */}
              {/* <div className="flex flex-wrap gap-1.5 pt-4 mb-6">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="font-mono text-[9px] font-semibold bg-background border border-current/10 px-2 py-0.5 leading-none text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
            </div>            

          </div>
        ))}
      </div>
    </section>
  );
}
