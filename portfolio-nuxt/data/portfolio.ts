import type { PortfolioData } from '~/types/portfolio'

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Getuar Kelmendi',
    role: 'DevOps Engineer',
    tagline: 'Automating infrastructure, building pipelines, and shipping code at scale',
    profileImage: '/assets/getuar.png',
    terminalCommands: [
      'kubectl get pods --all-namespaces',
      'docker compose up -d --build',
      'terraform apply -auto-approve',
      'ansible-playbook deploy.yml',
      'helm upgrade --install app ./chart',
      'aws eks describe-cluster --name prod',
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
      'DevOps Engineer with a passion for automating everything. Experienced in designing and maintaining cloud infrastructure, CI/CD pipelines, and container orchestration platforms. I bridge the gap between development and operations, ensuring reliable, scalable, and secure deployments.',
    systemInfo: [
      { label: 'OS', value: 'Linux (Ubuntu/CentOS)', color: 'cyan' },
      { label: 'Uptime', value: '3+ years in DevOps', color: 'green' },
      { label: 'Cloud', value: 'AWS / Azure', color: 'amber' },
      { label: 'Containers', value: 'Docker / Kubernetes', color: 'cyan' },
      { label: 'IaC', value: 'Terraform / Ansible', color: 'green' },
      { label: 'CI/CD', value: 'GitHub Actions / Jenkins', color: 'amber' },
      { label: 'Monitoring', value: 'Prometheus / Grafana', color: 'cyan' },
      { label: 'Shell', value: 'Bash / Python', color: 'green' },
    ],
    certifications: [
      {
        title: 'Computer & Software Engineering',
        issuer: 'University of Pristina - Bachelor Degree',
        icon: '/assets/education.png',
      },
      {
        title: 'Cloud Excellence Program',
        issuer: 'Cloud Training Certification',
        icon: '/assets/education.png',
      },
      {
        title: 'Full-Stack Development',
        issuer: 'Shkolla Digjitale',
        icon: '/assets/education.png',
      },
    ],
  },

  services: [
    {
      status: 'running',
      title: 'Cloud Infrastructure',
      description:
        'Designing and managing scalable cloud architectures on AWS and Azure. Infrastructure as Code with Terraform and CloudFormation.',
      stack: ['AWS', 'Azure', 'Terraform', 'CloudFormation'],
    },
    {
      status: 'running',
      title: 'CI/CD Pipelines',
      description:
        'Building automated build, test, and deployment pipelines. Zero-downtime deployments with blue-green and canary strategies.',
      stack: ['GitHub Actions', 'Jenkins', 'ArgoCD', 'GitLab CI'],
    },
    {
      status: 'deploying',
      title: 'Container Orchestration',
      description:
        'Containerizing applications with Docker and orchestrating at scale with Kubernetes. Helm charts, service meshes, and auto-scaling.',
      stack: ['Docker', 'Kubernetes', 'Helm', 'Istio'],
    },
  ],

  experience: [
    {
      hash: 'a3f7c2d',
      role: 'DevOps Engineer',
      company: 'Starlabs',
      date: '2024-present',
      tech: 'AWS \u2022 Docker \u2022 Kubernetes \u2022 Terraform \u2022 CI/CD',
    },
    {
      hash: 'b8e1f4a',
      role: 'Software Developer',
      company: 'Besa Solutions',
      date: '2023-2024',
      tech: 'PHP Laravel \u2022 Vue.js \u2022 MySQL \u2022 Docker',
    },
    {
      hash: 'c5d9e3b',
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
      title: 'K8s Microservices Platform',
      description:
        'Production-grade Kubernetes platform with auto-scaling, service mesh, and monitoring dashboards.',
      tags: ['Kubernetes', 'Helm', 'Prometheus', 'Istio'],
      link: 'https://github.com/',
      status: 'deployed',
    },
    {
      image: '/assets/sms1.png',
      alt: 'CI/CD Pipeline Automation',
      title: 'CI/CD Pipeline Automation',
      description:
        'End-to-end pipeline with automated testing, security scanning, and blue-green deployments.',
      tags: ['GitHub Actions', 'Docker', 'ArgoCD', 'Trivy'],
      link: 'https://github.com/Geti0/Student_Management_System.git',
      status: 'deployed',
    },
    {
      image: '/assets/todo1.png',
      alt: 'Infrastructure as Code',
      title: 'AWS Infrastructure as Code',
      description:
        'Complete AWS infrastructure provisioning with Terraform modules, VPC, EKS clusters, and RDS.',
      tags: ['Terraform', 'AWS', 'CloudFormation', 'Python'],
      link: 'https://github.com/Geti0/ToDo-List-App.git',
      status: 'building',
    },
  ],
}
