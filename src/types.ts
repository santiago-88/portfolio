/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Language {
  ES = "ES",
  EN = "EN"
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark"
}

export interface Metric {
  label: string;
  value: string;
}

export interface CaseStudyData {
  objective: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: Metric[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  image: string;
  tagline: string;
  tags: string[];
  color: string; // Theme color (Art Deco color codes)
  textColor: string; // Text color overlay (e.g. text-white or text-black)
  accentColor: string;
  caseStudy: CaseStudyData;
  demoUrl?: string;
  repository?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  userId?: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface AppTranslations {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    menuLabel: string;
    closeMenu: string;
    studioQuote: string;
  };
  hero: {
    badge: string;
    tagline: string;
    subtitle: string;
    exploreBtn: string;
    ctaBtn: string;
    availableText: string;
    localTimeText: string;
    metricsTitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    text1: string;
    text2: string;
    timelineTitle: string;
    skillsTitle: string;
    cvBtn: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    likesText: string;
    likeBtn: string;
    closeCaseStudy: string;
    objectivesLabel: string;
    challengeLabel: string;
    solutionLabel: string;
    resultsLabel: string;
    exploreLiveDemo: string;
    visitRepo: string;
    chicoSportFishingSummary: string;
    coderflowSummary: string;
    webChapasSummary: string;
    chicoSportFishingCategory: string;
    coderflowCategory: string;
    webChapasCategory: string;
  };
  contact: {
    title: string;
    subtitle: string;
    desc: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    sendBtn: string;
    sendingBtn: string;
    successMsg: string;
    socialsTitle: string;
    firebaseStatusLabel: string;
    firebaseConnected: string;
    firebaseEmulated: string;
    firebaseActionBtn: string;
  };
}
