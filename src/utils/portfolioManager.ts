import portfolioData from "@/data/portfolio.json";

export interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[];
  image: string;
  technologies: string[];
  year: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  profileImage: string;
  resumeLink: string;
  contact: {
    email: string;
    whatsapp: string;
    location: string;
  };
}

export interface PortfolioData {
  projects: Project[];
  personalInfo: PersonalInfo;
}

/**
 * Portfolio Manager - Simple CMS functionality
 * 
 * This utility provides functions to manage portfolio content.
 * To add new projects or update information, edit the portfolio.json file.
 */

export class PortfolioManager {
  private static data: PortfolioData = portfolioData as PortfolioData;

  /**
   * Get all projects
   */
  static getAllProjects(): Project[] {
    return this.data.projects;
  }

  /**
   * Get projects by category
   */
  static getProjectsByCategory(category: string): Project[] {
    if (category === "All") return this.data.projects;
    return this.data.projects.filter(project => project.categories.includes(category));
  }

  /**
   * Get unique categories
   */
  static getCategories(): string[] {
    const categories = Array.from(new Set(this.data.projects.flatMap(p => p.categories)));
    return ["All", ...categories];
  }

  /**
   * Get project by ID
   */
  static getProjectById(id: string): Project | undefined {
    return this.data.projects.find(project => project.id === id);
  }

  /**
   * Get personal information
   */
  static getPersonalInfo(): PersonalInfo {
    return this.data.personalInfo;
  }

  /**
   * Get recent projects (last 3)
   */
  static getRecentProjects(): Project[] {
    return this.data.projects
      .sort((a, b) => parseInt(b.year) - parseInt(a.year))
      .slice(0, 3);
  }
}

export default PortfolioManager;