export interface Project {
  title: string;
  description: string;
  longDescription: string;
  keyFeatures?: string[];
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export enum Section {
  Hero = 'home',
  About = 'about',
  Skills = 'skills',
  Projects = 'projects',
  Contact = 'contact'
}