export interface Social {
  label: string
  url: string
  icon: string
}

export interface HeroData {
  name: string
  role: string
  tagline: string
  profileImage: string
  terminalCommands: string[]
  socials: Social[]
}

export interface SystemInfo {
  label: string
  value: string
  color?: string
}

export interface AboutData {
  description: string
  systemInfo: SystemInfo[]
  certifications: { title: string; issuer: string; icon: string }[]
}

export interface ServiceData {
  status: 'running' | 'pending' | 'deploying'
  title: string
  description: string
  stack: string[]
}

export interface ExperienceData {
  hash: string
  role: string
  company: string
  date: string
  tech: string
}

export interface SkillCategory {
  title: string
  icon: string
  skills: { name: string; level: number }[]
}

export interface ProjectData {
  image: string
  alt: string
  title: string
  description: string
  tags: string[]
  link: string
  status: 'deployed' | 'building' | 'staging'
}

export interface PortfolioData {
  hero: HeroData
  about: AboutData
  services: ServiceData[]
  experience: ExperienceData[]
  skills: SkillCategory[]
  projects: ProjectData[]
}
