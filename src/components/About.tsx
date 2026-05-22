/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppTranslations } from "../types";
import { Download } from "lucide-react";

interface AboutProps {
  translations: AppTranslations;
}

export default function About({ translations }: AboutProps) {
  
  const handleDownloadCV = () => {
    const cvFileName = "Escobar_Santiago_Frontend_Developer.pdf";
    const downloadLink = document.createElement("a");

    downloadLink.href = `/${cvFileName}`;
    downloadLink.download = cvFileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  };

  return (
    <section
      id="about"
      className="relative mt-12 mb-16 sm:mt-16 sm:mb-20 lg:mt-20 lg:mb-24 border-b border-current/10 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 select-none"
    >
      {/* SECTION HEADER - Aligned exactly like Projects */}
      <div className="section-header">
        <div className="space-y-3">
          <span className="section-kicker">
            //  {translations.about.title}
          </span>
          <h2 className="section-title">
            {translations.about.subtitle}
          </h2>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="space-y-8 text-left">
        <div className="space-y-6 font-serif text-base sm:text-lg leading-relaxed text-foreground/80 max-w-4xl">
          <p>{translations.about.text1}</p>
          <p>{translations.about.text2}</p>
        </div>

        <div className="pt-4">
          <button
            onClick={handleDownloadCV}
            className="group inline-flex items-center gap-2.5 bg-foreground text-background border border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300 px-6 py-4 text-xs font-bold tracking-widest uppercase rounded-none cursor-pointer"
            id="download-cv-btn"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            <span>{translations.about.cvBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
