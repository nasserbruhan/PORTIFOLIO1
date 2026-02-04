import React from 'react';
import { Project, SkillCategory } from './types';
import { 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  Cloud, 
  BrainCircuit, 
  Stethoscope, 
  Package 
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    title: "AI Psychologist",
    description: "Context-aware mental health chatbot using NLP for anxiety assessment.",
    longDescription: "A sophisticated chatbot designed to provide initial mental health support. Built with a focus on conversational context and memory, it handles REST API interactions to process user sentiment and provide empathetic responses.",
    keyFeatures: [
      "Natural Language Processing for sentiment analysis",
      "Context-aware conversation memory",
      "RESTful API architecture for backend communication",
      "Responsive React-based chat interface",
      "Secure data handling for user privacy"
    ],
    tags: ["Python", "Flask", "NLP", "REST API", "React"],
    image: "https://images.unsplash.com/photo-1675557009875-436f09789918?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/nasserbruhan"
  },
  {
    title: "Clinic Management System",
    description: "Backend-driven system for patient and appointment management.",
    longDescription: "A robust healthcare solution focusing on backend reliability. Implements secure CRUD operations, complex SQL relationships for patient records, and a clean interface for medical staff.",
    keyFeatures: [
      "Role-based access control for medical staff",
      "Complex SQL database schema with relational integrity",
      "Automated appointment scheduling and reminders",
      "Comprehensive patient record management",
      "Secure authentication using modern standards"
    ],
    tags: ["C#", "ASP.NET", "PostgreSQL", "JavaScript"],
    image: "https://images.unsplash.com/photo-1504813184591-01592fd03cfd?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/nasserbruhan"
  },
  {
    title: "Real-Time Inventory System",
    description: "Scalable backend architecture for real-time stock tracking.",
    longDescription: "My university final year project focusing on system design. It features real-time updates using WebSockets and optimized database queries to handle large inventories efficiently.",
    keyFeatures: [
      "Low-latency real-time updates via Socket.io",
      "Optimized MySQL queries for high-volume inventory",
      "Containerized deployment using Docker",
      "Interactive dashboard for real-time stock visualization",
      "Scalable backend architecture designed for performance"
    ],
    tags: ["JavaScript", "Node.js", "MySQL", "Docker", "Socket.io"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/nasserbruhan"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["JavaScript", "TypeScript", "C#", "Python", "SQL"]
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["RESTful APIs", "Flask", "ASP.NET (Basic)", "Node.js", "CRUD Design"]
  },
  {
    title: "Database",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "Relational Modeling", "Optimization"]
  },
  {
    title: "Frontend & Tools",
    icon: "tool",
    skills: ["React", "Tailwind CSS", "Git/GitHub", "Docker (Basic)", "AWS Fundamentals"]
  }
];

export const CONTACT_INFO = {
  email: "96nasser32@gmail.com",
  github: "https://github.com/nasserbruhan",
  linkedin: "https://www.linkedin.com/in/ntege-nasser-56b2351a9",
  location: "Kampala, Uganda / Remote",
  availability: "Fully Remote"
};