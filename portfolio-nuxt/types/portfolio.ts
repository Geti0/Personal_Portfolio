export interface Social {
  label: string
  url: string
  icon: string
}

export interface HeroStat {
  value: string
  label: string
}

export interface HeroData {
  name: string
  firstName: string
  role: string
  tagline: string
  description: string
  profileImage: string
  stats: HeroStat[]
  socials: Social[]
}

export interface AboutData {
  description: string
  certifications: { title: string; issuer: string }[]
}

export interface ServiceData {
  number: string
  title: string
  description: string
  stack: string[]
}

export interface ExperienceData {
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
  category: string
  year: string
  tags: string[]
  link: string
}

export interface TestimonialData {
  quote: string
  name: string
  role: string
  image: string
  socials: { icon: string; url: string }[]
}

export interface ArticleData {
  date: string
  readTime: string
  title: string
  tags: string[]
}

export interface PortfolioData {
  hero: HeroData
  about: AboutData
  services: ServiceData[]
  experience: ExperienceData[]
  skills: SkillCategory[]
  projects: ProjectData[]
  testimonials: TestimonialData[]
  articles: ArticleData[]
}
