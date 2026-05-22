/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "aether",
    title: "CHICO SPORT FISHING",
    category: "Excursiones de pesca deportiva y turismo",
    year: "X",
    tagline:
      "Experiencia editorial interactiva para marcas de diseño boutique.",
    summary:
      "Diseño y desarrollo de una landing page moderna para una empresa de excursiones de pesca, enfocada en transmitir aventura, naturaleza y experiencia premium. El sitio incluye secciones informativas, galería visual, contacto y una interfaz responsive optimizada para todos los dispositivos.",
    description:
      "AETHER redefine la adquisición digital de moda mediante una interfaz imborrable de alto contraste y microinteracciones coreografiadas de ópera espacial. El proyecto combina diseño fluido con carga optimizada bajo demanda.",
    image: "/images/Chico.png",
    color: "#c5a45b", // Warm Gold
    textColor: "text-[#121212]",
    accentColor: "#991b1b", // Deep Crimson
    tags: ["React 19", "TypeScript", "Tailwind v4", "3D Canvas", "Stripe API"],
    caseStudy: {
      objective:
        "Diseñar una experiencia inmersiva para el mercado de ultra-lujo que disminuya el rebote transaccional y aumente el tiempo útil en el expositor del producto un 40%.",
      challenge:
        "Resolver la fatiga ocular y funcional de las configuraciones de cuadrícula comunes, aportando una maquetación asimétrica brutalista sin romper las pautas internacionales de accesibilidad WCAG AA.",
      solution:
        "Inyección de variables cromáticas Art Deco áureas, desarrollo de un carrusel asimétrico con física de amortiguación (momentum scroll) y un visor de zoom hiperpreciso que renderiza texturas en calidad UHD.",
      results: [
        "Incremento del 52% en el valor promedio del carrito gracias al sistema de recomendación integrado.",
        "Reducción del tiempo de carga interactivo (Time to Interactive) a solo 1.2 segundos con optimizaciones de carga asíncrona.",
        "Mención especial en foros de diseño digital por la fusión tipográfica y fluidez de interacción.",
      ],
      metrics: [
        { label: "Conversión", value: "+34%" },
        { label: "Tiempo de Retención", value: "4:20 min" },
        { label: "Carga Inicial", value: "0.8s" },
      ],
    },
    demoUrl:
      "https://servicit.github.io/chico-fishing-web/assets/es/index.html",
    repository: "https://github.com/elias-santiago/aether-luxe",
  },
  {
    id: "metropolis",
    title: "Coderflow",
    category:
      "Plataforma moderna orientada a desarrollo web y soluciones digitales",
    year: "X",
    tagline: "Visualizador masivo de tráfico urbano y sensores en tiempo real.",
    summary:
      "Diseño y desarrollo de una experiencia web moderna con estética visual inmersiva y enfoque minimalista. El sitio combina animaciones suaves, diseño responsive y una interfaz limpia orientada a destacar contenido visual, navegación intuitiva y presencia digital profesional.",
    description:
      "Desarrollado para resolver la sincronización caótica de vehículos en urbes metropolitanas, este tablero combina capas interactivas vectoriales sobre mapas vectoriales de alto contraste Art Déco (Emerald & Brass).",
    image: "/images/Coderflow.png",
    color: "#064e4b", // Emerald Green
    textColor: "text-[#f5f5f0]",
    accentColor: "#d4af37", // Bright Gold
    tags: ["Mapbox GL", "Web Workers", "WebSockets", "GeoJSON", "Tailwind"],
    caseStudy: {
      objective:
        "Consolidar más de 250,000 coordenadas activas por minuto en un lienzo web responsivo de alto rendimiento capaz de ejecutarse en dispositivos móviles comunes de campo.",
      challenge:
        "Los renderizadores SVG comunes colapsaban con fugas de memoria al mapear trayectorias históricas dinámicas. Las consultas geográficas requerían control de desbordamiento de hilos del procesador.",
      solution:
        "Adoptamos Mapbox GL y WebGL combinados con Web Workers para decodificar flujos JSON en segundo plano de manera asíncrona. La paleta cromática utiliza verdes opacos y relieves dorados imitando planos arquitectónicos antiguos de los años 30.",
      results: [
        "Cero caídas de cuadros por segundo (60 FPS constante) con un consumo de CPU un 65% menor en la terminal.",
        "Integración unificada de alertas meteorológicas con posicionamiento satelital de vehículos.",
        "Reducción en un 18% del consumo de combustible corporativo en rutas piloto mapeadas.",
      ],
      metrics: [
        { label: "Fotogramas FPS", value: "60 FPS" },
        { label: "Latencia Stream", value: "<80ms" },
        { label: "Datos Sincronía", value: "250k/min" },
      ],
    },
    demoUrl: "https://throbbing-tree-99ab.escobarsantiago-ocampo.workers.dev/",
    repository: "https://github.com/elias-santiago/metropolis-transit",
  },
  {
    id: "krypton",
    title: "WEB CHAPAS",
    category: "Sitio web gastronómico con enfoque moderno y visual atractivo",
    year: "X",
    tagline:
      "Consola de operaciones financiera táctica inspirada en teletipos vintage.",
    summary:
      "Desarrollo de una landing page interactiva con enfoque visual moderno y navegación fluida. El proyecto prioriza una experiencia inmersiva mediante animaciones, diseño responsive y una identidad estética limpia orientada a destacar marca, contenido y presencia digital.",
    description:
      "KRYPTON elimina las distracciones de las plataformas web modernas para ofrecer un panel de visualización cruda, directo al grano, que canaliza cotizaciones de múltiples protocolos blockchain con alertas de umbral.",
    image: "/images/Chapas.png",
    color: "#991b1b", // Charcoal Matte-Crimson
    textColor: "text-[#f5f5f0]",
    accentColor: "#ffffff", // Pure White
    tags: ["Rust WASM", "Tailwind v4", "SVG Charts", "Web3 Auth", "Solidity"],
    caseStudy: {
      objective:
        "Proveer una herramienta de visualización instantánea libre de retrasos de interfaz (latency-free UI) para arbitraje rápido en protocolos de liquidez.",
      challenge:
        "El ruido de las interfaces Web3 habituales satura al usuario profesional. Los gráficos tradicionales consumen espacio valioso ralentizando la detección ocular de cambios fraccionarios en decimales.",
      solution:
        "Inspirada en las terminales de teletipo bursátil de inicios del siglo XX y el brutalismo polaco. Implementación de una arquitectura de estado atómica y componentes de gráficos en SVG crudo con trazado personalizado ultraliviano.",
      results: [
        "Velocidad de reacción del operador reducida en 420 milisegundos gracias a la jerarquía tipográfica purificada.",
        "Tamaño de paquete de la aplicación comprimido a tan solo 45KB mediante descarte extremo de dependencias.",
        "Operaciones integradas nativas con firmas de billeteras virtuales ágiles y seguras.",
      ],
      metrics: [
        { label: "Tamaño Bundle", value: "45 KB" },
        { label: "Tasa de Refresco", value: "15ms" },
        { label: "Retorno Inversión", value: "9.2x" },
      ],
    },
    demoUrl: "https://resplendent-griffin-f52eed.netlify.app/",
    repository: "https://github.com/elias-santiago/krypton-terminal",
  },
];
