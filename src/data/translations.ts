/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppTranslations } from "../types";

export const translations: Record<"ES" | "EN", AppTranslations> = {
  ES: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      menuLabel: "MENÚ",
      closeMenu: "CERRAR",
      studioQuote: "LA FORMA SIGUE A LA FUNCIÓN, PERO EL ARTE RIGE EL ESPACIO.",
    },
    hero: {
      badge: "ELIAS SANTIAGO ESCOBAR OCAMPO",
      tagline: "DESARROLLADOR FULLSTACK",
      subtitle:
        "Desarrollador Full Stack — APIs, Bases de datos, Aplicaciones web y móviles.",
      exploreBtn: "Explorar proyectos",
      ctaBtn: "Hablemos hoy",
      availableText: "DISPONIBLE PARA PROYECTOS EXCEPCIONALES",
      localTimeText: "SANTIAGO ESCOBAR — TIEMPO LOCAL",
      metricsTitle: "MÉTRICAS DE RENDIMIENTO",
    },
    about: {
      title: "SOBRE MÍ",
      subtitle: "Un poco sobre mí.",
      text1:
        "¡Hola! Soy Santiago. Desarrollo aplicaciones web y móviles con un enfoque principal en Front-End, utilizando el ecosistema de React, Next.js y Redux.",
      text2:
        "Diseño la experiencia de usuario (UI/UX) teniendo siempre en mente la arquitectura completa del software. Me apasiona transformar requerimientos comerciales en productos digitales eficientes, escalables y listos para producción.",
      timelineTitle: "TRAYECTORIA SELECCIONADA",
      skillsTitle: "ARMAMENTO TÉCNICO",
      cvBtn: "Descargar CV",
    },
    projects: {
      title: "PROYECTOS",
      subtitle: "Sitios webs para clientes.",
      viewCaseStudy: "Estudiar Caso Detallado",
      likesText: "Recomendaciones del Gremio",
      likeBtn: "Recomendar Proyecto",
      closeCaseStudy: "Cerrar Caso de Estudio",
      objectivesLabel: "Objetivo General",
      challengeLabel: "Desequilibrio & Desafío",
      solutionLabel: "La Fórmula Funcional",
      resultsLabel: "Hitos y Métricas Logradas",
      exploreLiveDemo: "Visitar",
      visitRepo: "Examinar Repositorio",
      chicoSportFishingSummary:
        "Diseño y desarrollo de una landing page moderna para una empresa de excursiones de pesca, enfocada en transmitir aventura, naturaleza y experiencia premium. El sitio incluye secciones informativas, galería visual, contacto y una interfaz responsive optimizada para todos los dispositivos.",
      coderflowSummary:
        "Diseño y desarrollo de una experiencia web moderna con estética visual inmersiva y enfoque minimalista. El sitio combina animaciones suaves, diseño responsive y una interfaz limpia orientada a destacar contenido visual, navegación intuitiva y presencia digital profesional.",
      webChapasSummary:
        "Desarrollo de una landing page interactiva con enfoque visual moderno y navegación fluida. El proyecto prioriza una experiencia inmersiva mediante animaciones, diseño responsive y una identidad estética limpia orientada a destacar marca, contenido y presencia digital.",
      chicoSportFishingCategory: "Excursiones de pesca deportiva y turismo",
      coderflowCategory:
        "Plataforma moderna orientada a desarrollo web y soluciones digitales",
      webChapasCategory:
        "Sitio web gastronómico con enfoque moderno y visual atractivo",
    },
    contact: {
      title: "CONTACTO",
      subtitle: "Hablemos de tu próximo proyecto",
      desc: "Su comunicación se transmitirá directamente a mi terminal a través de Firebase Firestore seguro.",
      formName: "Su Honorable Nombre",
      formEmail: "Dirección de Correo",
      formSubject: "Asunto del Despacho",
      formMessage: "Su Mensaje",
      sendBtn: "Transmitir Telegrama",
      sendingBtn: "Transmitiendo...",
      successMsg:
        "Mensaje sellado y transmitido con éxito. Responderé dentro de las próximas 24 horas hábiles.",
      socialsTitle: "DESPACHOS EXTERNOS (REDES)",
      firebaseStatusLabel: "Capa de Datos",
      firebaseConnected: "FIREBASE ONLINE (MODO PREMIUM PERSISTENTE)",
      firebaseEmulated: "PERSISTENCIA LOCAL (EMULACIÓN WEB EN JUEGO)",
      firebaseActionBtn: "Habilitar Firebase",
    },
  },
  EN: {
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      contact: "Contact",
      menuLabel: "MENU",
      closeMenu: "CLOSE",
      studioQuote: "FORM FOLLOWS FUNCTION, BUT ART GOVERNS THE SPACE.",
    },
    hero: {
      badge: "ELIAS SANTIAGO ESCOBAR OCAMPO",
      tagline: "FRONTEND ENGINEER",
      subtitle: "Developer Full Stack — APIs, Databases & Web Applications",
      exploreBtn: "Explore Works",
      ctaBtn: "Let's Converse",
      availableText: "AVAILABLE FOR EXCEPTIONAL PROJECTS",
      localTimeText: "BUENOS AIRES, LOCAL TIME",
      metricsTitle: "PERFORMANCE METRICS",
    },
    about: {
      title: "About Me",
      subtitle: "Software architecture as editorial expression.",
      text1:
        "Hello, I am Elias Santiago Escobar Ocampo. I view websites not as mere repositories of generically ordered data, but as visual musical scores or haute couture editorial exhibits.",
      text2:
        "With over 6 years of leading interface development, I combine the engineering solidity of architectures in React, TypeScript, and Firebase with the aesthetic boldness of interactive layouts inspired by European design journals.",
      timelineTitle: "SELECTED TIMELINE",
      skillsTitle: "TECHNICAL WEAPONRY",
      cvBtn: "Download CV",
    },
    projects: {
      title: "PORTFOLIO",
      subtitle: "websites for clients.",
      viewCaseStudy: "Study Detailed Case",
      likesText: "Guild Approvals",
      likeBtn: "Appreciate Project",
      closeCaseStudy: "Close Case Study",
      objectivesLabel: "General Objective",
      challengeLabel: "Imbalance & Challenge",
      solutionLabel: "The Functional Solution",
      resultsLabel: "Achieved Milestones & Metrics",
      exploreLiveDemo: "Visit website",
      visitRepo: "Examine Repository",
      chicoSportFishingSummary:
        "Design and development of a modern landing page for a fishing excursion company, focused on conveying adventure, nature, and a premium experience. The site includes informational sections, a visual gallery, contact options, and a responsive interface optimized for every device.",
      coderflowSummary:
        "Design and development of a modern web experience with immersive visual aesthetics and a minimalist approach. The site combines smooth animations, responsive design, and a clean interface built to highlight visual content, intuitive navigation, and a professional digital presence.",
      webChapasSummary:
        "Development of an interactive landing page with a modern visual approach and fluid navigation. The project prioritizes an immersive experience through animations, responsive design, and a clean visual identity focused on highlighting the brand, content, and digital presence.",
      chicoSportFishingCategory: "Sport fishing excursions and tourism",
      coderflowCategory:
        "Modern platform focused on web development and digital solutions",
      webChapasCategory:
        "Gastronomic website with a modern approach and attractive visuals",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk about your next project",
      desc: "Your communication will transition directly to my terminal via secure Firebase Firestore.",
      formName: "Your Honorable Name",
      formEmail: "Email Address",
      formSubject: "Despatch Subject",
      formMessage: "Your Message",
      sendBtn: "Transmit Telegram",
      sendingBtn: "Transmitting...",
      successMsg:
        "Message sealed and successfully transmitted. I will respond within 24 business hours.",
      socialsTitle: "EXTERNAL RELATIONS (SOCIALS)",
      firebaseStatusLabel: "Data Plane Status",
      firebaseConnected: "FIREBASE ONLINE (PREMIUM PERSISTENT MODE)",
      firebaseEmulated: "LOCAL PERSISTENCE (WEB EMULATION IN PLAY)",
      firebaseActionBtn: "Enable Firebase",
    },
  },
};

export const skillsData = [
  {
    title: "Vanguardia Frontend",
    items: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Next.js", "Redux Toolkit", "Vanilla WebGL"]
  },
  {
    title: "Arquitectura Cloud",
    items: ["Firebase", "Google Cloud", "Firestore Database", "Cloud Functions", "CI/CD Actions", "OAuth integration"]
  },
  {
    title: "Sistemas de Diseño & Arte",
    items: ["Diseño Editorial Brutalista", "Interacciones Motion", "Figma Prototyping", "Tipografía Geométrica", "Accesibilidad WCAG AA", "Estrategia UI/UX"]
  }
];

export const timelineData = [
  {
    year: "2024 — Presente",
    role: "Arquitecto Senior de Interfaces",
    company: "Studio Vanguardia Latam",
    description: "Dirección técnica de plataformas e-commerce e interacciones asíncronas para holdings de lujo y retail personalizado."
  },
  {
    year: "2022 — 2024",
    role: "Desarrollador de Software (UI/UX)",
    company: "Hexagon Analytics",
    description: "Reconstrucción completa de sistemas interactivos de trading y análisis masivo con WebGL y optimizaciones extremas de carga web."
  },
  {
    year: "2020 — 2022",
    role: "Desarrollador React & Firebase Consultor",
    company: "Neo-Deco Digital",
    description: "Implementación ágil de arquitecturas serverless persistentes conectadas a flujos en tiempo real con notificaciones push."
  }
];
