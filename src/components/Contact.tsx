/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppTranslations } from "../types";
import { Github, Linkedin, Mail } from "lucide-react";

interface ContactProps {
  translations: AppTranslations;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5.2 18.8 6.4 15.5a7.3 7.3 0 1 1 2.5 2.4z" />
      <path d="M9.5 8.7c.2-.4.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.2.7l-.4.5c.6 1 1.4 1.8 2.5 2.4l.5-.5c.2-.2.5-.3.8-.1l1.5.7c.3.1.4.3.4.6v.5c0 .3-.2.6-.5.7-.6.3-1.3.4-2 .2-2.8-.7-5.2-3.1-5.9-5.9-.2-.7-.1-1.3.2-1.9z" />
    </svg>
  );
}

const contactLinks = [
 
  {
    label: "Email",
    value: "escobarsantiago.ocampo@gmail.com",
    href: "mailto:escobarsantiago.ocampo@gmail.com",
    icon: Mail,
    id: "social-email-link",
  },
   {
    label: "LinkedIn",
    value: "linkedin.com/in/santiago-escobar9",
    href: "https://www.linkedin.com/in/santiago-escobar9/",
    icon: Linkedin,
    id: "social-linkedin-link",
  },
  {
    label: "WhatsApp",
    value: "Enviar mensaje",
    href: "https://wa.me/541130441799",
    icon: WhatsAppIcon,
    id: "social-whatsapp-link",
  },

  {
    label: "GitHub",
    value: "github.com/santiago-88",
    href: "https://github.com/santiago-88",
    icon: Github,
    id: "social-github-link",
  },
];

export default function Contact({ translations }: ContactProps) {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto space-y-12">
        <div className="mx-auto max-w-3xl space-y-3 border-b border-current/10 pb-8">
          <span className="section-kicker-centered">
            //  {translations.contact.title}
          </span>
          <h2 className="section-title-centered">
            {translations.contact.subtitle}
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {contactLinks.map(({ label, value, href, icon: Icon, id }) => (
            <a
              key={id}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex min-h-32 flex-col items-center justify-center gap-3 border border-current/10 bg-background-muted px-5 py-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-background"
              id={id}
            >
              <span className="flex h-11 w-11 items-center justify-center border border-current/15 bg-background text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                {label}
              </span>
              <span className="font-sans text-sm font-semibold text-foreground/80 break-all">
                {value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
