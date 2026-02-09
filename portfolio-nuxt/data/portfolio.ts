import type { PortfolioData } from '~/types/portfolio'

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Getuar Kelmendi',
    firstName: 'Getuar',
    role: 'DevOps Engineer',
    tagline: 'Automating infrastructure, building pipelines, and shipping code at scale',
    description:
      'Hi, I am Getuar! I am a DevOps engineer and highly talented infrastructure architect with over 3 years of experience in the field.',
    profileImage: '/assets/getuar.png',
    stats: [
      { value: '3+', label: 'Years of experience' },
      { value: '200+', label: 'Successful projects' },
      { value: '98%', label: 'Satisfied clients' },
    ],
    socials: [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/getuar-kelmendi/',
        icon: '/assets/linkedin.png',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/Geti0',
        icon: '/assets/github.png',
      },
    ],
  },

  about: {
    description:
      'A DevOps Engineer based in Pristina, passionate about creating immersive cloud experiences. From crafting reliable infrastructure to dynamic CI/CD pipelines and container orchestrations.',
    certifications: [
      {
        title: 'Computer & Software Engineering',
        issuer: 'University of Pristina - Bachelor Degree',
      },
      {
        title: 'Cloud Excellence Program',
        issuer: 'Cloud Training Certification',
      },
      {
        title: 'Full-Stack Development',
        issuer: 'Shkolla Digjitale',
      },
    ],
  },

  services: [
    {
      number: '01',
      title: 'CLOUD INFRASTRUCTURE & AWS',
      description:
        'Designing custom, scalable cloud architectures with seamless Infrastructure as Code and powerful AWS deployment.',
      stack: ['AWS', 'Azure', 'Terraform', 'CloudFormation'],
    },
    {
      number: '02',
      title: 'CI/CD & DEVELOPMENT',
      description:
        'Building seamless, high-performing deployment pipelines that unite development and operations scalably.',
      stack: ['GitHub Actions', 'Jenkins', 'ArgoCD', 'GitLab CI'],
    },
    {
      number: '03',
      title: 'CONTAINER ORCHESTRATION',
      description:
        'Containerizing applications with Docker and orchestrating at scale with Kubernetes, Helm charts, and service meshes.',
      stack: ['Docker', 'Kubernetes', 'Helm', 'Istio'],
    },
    {
      number: '04',
      title: 'MONITORING & OBSERVABILITY',
      description:
        'Building comprehensive monitoring dashboards and alerting systems for production reliability and uptime.',
      stack: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
    },
  ],

  experience: [
    {
      role: 'DevOps Engineer',
      company: 'Starlabs',
      date: '2024 - present',
      tech: 'AWS \u2022 Docker \u2022 Kubernetes \u2022 Terraform \u2022 CI/CD',
    },
    {
      role: 'Software Developer',
      company: 'Besa Solutions',
      date: '2023 - 2024',
      tech: 'PHP Laravel \u2022 Vue.js \u2022 MySQL \u2022 Docker',
    },
    {
      role: 'Cloud Excellence Trainee',
      company: 'Training Program',
      date: '2023',
      tech: 'AWS \u2022 Linux \u2022 Networking \u2022 Cloud Architecture',
    },
  ],

  skills: [
    {
      title: 'Cloud & Infrastructure',
      icon: '\u2601',
      skills: [
        { name: 'AWS (EC2, S3, EKS, Lambda)', level: 85 },
        { name: 'Terraform', level: 80 },
        { name: 'Ansible', level: 75 },
        { name: 'Linux Administration', level: 90 },
        { name: 'Networking', level: 70 },
      ],
    },
    {
      title: 'Containers & Orchestration',
      icon: '\uD83D\uDC33',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Helm', level: 75 },
        { name: 'Docker Compose', level: 90 },
        { name: 'Container Security', level: 70 },
      ],
    },
    {
      title: 'CI/CD & Monitoring',
      icon: '\u2699',
      skills: [
        { name: 'GitHub Actions', level: 85 },
        { name: 'Jenkins', level: 75 },
        { name: 'Prometheus / Grafana', level: 70 },
        { name: 'Bash Scripting', level: 85 },
        { name: 'Python', level: 75 },
      ],
    },
  ],

  projects: [
    {
      image: '/assets/airbnb1.png',
      alt: 'K8s Microservices Platform',
      title: 'K8S MICROSERVICES',
      category: 'INFRASTRUCTURE',
      year: '2025',
      tags: ['Kubernetes', 'Helm', 'Prometheus', 'Istio'],
      link: 'https://github.com/',
    },
    {
      image: '/assets/sms1.png',
      alt: 'CI/CD Pipeline Automation',
      title: 'PIPELINE AUTOMATION',
      category: 'CI/CD',
      year: '2024',
      tags: ['GitHub Actions', 'Docker', 'ArgoCD', 'Trivy'],
      link: 'https://github.com/Geti0/Student_Management_System.git',
    },
    {
      image: '/assets/todo1.png',
      alt: 'Infrastructure as Code',
      title: 'AWS IaC PLATFORM',
      category: 'CLOUD',
      year: '2024',
      tags: ['Terraform', 'AWS', 'CloudFormation', 'Python'],
      link: 'https://github.com/Geti0/ToDo-List-App.git',
    },
  ],

  testimonials: [
    {
      quote:
        '\u201CThe infrastructure exceeded our expectations in every way \u2014 visually striking and incredibly reliable. Their DevOps sense is unmatched, and the process was smooth finish. We\u2019re constantly getting compliments. Couldn\u2019t be happier with the outcome.\u201D',
      name: 'Alex Johnson',
      role: 'CTO, TechStart Inc.',
      image: '/assets/getuar.png',
      socials: [],
    },
  ],

  articles: [
    {
      date: 'February 5, 2025',
      readTime: '5 min read',
      title: 'What We\'re Building, Thinking, Exploring, and Creating Next',
      tags: ['DevOps', 'Cloud'],
    },
    {
      date: 'August 12, 2024',
      readTime: '3 min read',
      title: 'Studio Thoughts: Infrastructure Experiments, and Platform Evolution Insights',
      tags: ['Kubernetes', 'Infrastructure'],
    },
    {
      date: 'January 3, 2024',
      readTime: '4 min read',
      title: 'The Art of Building Reliable, Purposeful Cloud Infrastructure',
      tags: ['AWS', 'Terraform'],
    },
  ],
}
