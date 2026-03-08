import type { PortfolioData } from '~/types/portfolio'

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Getuar Kelmendi',
    firstName: ' Getuar Kelmendi',
    role: 'DevOps Engineer',
    tagline: 'Automating infrastructure, building pipelines, and shipping code at scale',
    description:
      'I am a DevOps engineer and highly talented infrastructure architect with over 3 years of experience in the field.',
    profileImage: '/assets/getuar.png',
    stats: [
      { value: '2+', label: 'Years of experience' },
      { value: '10+', label: 'Successful projects' },
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
      stack: ['AWS', 'Terraform', 'Pulumi', 'GCP'],
      details: [
        'AWS (EC2, S3, ECS Fargate, Lambda, RDS, ElastiCache, CloudFront, Route 53) \u2014 full-stack cloud provisioning and management',
        'Terraform & Pulumi \u2014 Infrastructure as Code for reproducible, version-controlled environments across 18 ERP modules',
        'GCP \u2014 multi-cloud experience including large-scale GCP-to-AWS migrations',
        'VPC design, subnets, security groups, and IAM policies for secure networking',
        'CI/CD pipelines with GitHub Actions for automated infrastructure deployments',
        'Observability with CloudWatch, X-Ray distributed tracing, and security monitoring',
      ],
    },
    {
      number: '02',
      title: 'CI/CD & DEVOPS',
      description:
        'Building seamless, high-performing deployment pipelines that unite development and operations at scale.',
      stack: ['GitHub Actions', 'Docker', 'ECS Fargate', 'Terraform'],
      details: [
        'GitHub Actions \u2014 custom workflows for build, test, lint, and deploy automation across cloud infrastructure and application deployments',
        'Docker \u2014 containerization of applications for consistent, portable deployments to ECS Fargate',
        'ECS Fargate \u2014 serverless container orchestration replacing the need for managing Kubernetes clusters',
        'Terraform & Pulumi \u2014 IaC pipelines integrated into CI/CD for automated infrastructure provisioning',
        'Environment management \u2014 staging, production environment separation with automated promotion workflows',
        'Blue-green deployment strategies for zero-downtime releases on ECS and Lambda workloads',
      ],
    },
    {
      number: '03',
      title: 'CONTAINER ORCHESTRATION',
      description:
        'Containerizing and deploying applications at scale using managed AWS container services without the overhead of self-managed Kubernetes.',
      stack: ['Docker', 'ECS Fargate', 'ECR', 'Lambda'],
      details: [
        'Docker \u2014 multi-stage builds, optimized images, and Docker Compose for local development environments',
        'ECS Fargate \u2014 serverless container orchestration with auto-scaling, task definitions, and service management for production workloads',
        'ECR (Elastic Container Registry) \u2014 private container image storage, versioning, and vulnerability scanning',
        'Lambda \u2014 serverless function deployments for event-driven and lightweight workloads alongside containerized services',
        'Multi-region container deployments \u2014 high-availability architectures serving large-scale user bases.',
        'Container security \u2014 IAM task roles, least-privilege policies, and image scanning for runtime hardening',
      ],
    },
    {
      number: '04',
      title: 'MONITORING & OBSERVABILITY',
      description:
        'Building comprehensive monitoring, tracing, and alerting systems using native AWS observability tools for production reliability and uptime.',
      stack: ['CloudWatch', 'X-Ray', 'AWS SNS', 'CloudTrail'],
      details: [
        'CloudWatch \u2014 custom dashboards, metric filters, log groups, and alarms for infrastructure and application monitoring',
        'X-Ray \u2014 distributed tracing across microservices and Lambda functions for performance bottleneck identification',
        'CloudTrail \u2014 audit logging and security observability for compliance and incident investigation',
        'CloudWatch Alarms + SNS \u2014 alerting pipelines for automated incident notification and response',
        'Security observability \u2014 monitoring IAM activity, VPC Flow Logs, and GuardDuty findings for threat detection',
        'Cost observability \u2014 AWS Cost Explorer and billing alerts to track and optimize infrastructure spend',
      ],
    },
  ],

  experience: [
    {
      role: 'DevOps Engineer',
      company: 'Polymath Services',
      date: '2025 - (August - Present)',
      tech: 'AWS \u2022 Docker \u2022 Pulumi \u2022 Terraform \u2022 CI/CD \u2022 Airflow \u2022 Flink \u2022 Kafka',
    },
    {
      role: 'Software Developer',
      company: 'Besa Solutions',
      date: '2024 - 2025 (1.5 years)',
      tech: 'PHP Laravel \u2022 Vue.js \u2022 MySQL \u2022 Typescript \u2022 MySQL',
    },
    {
      role: 'Software Developer Intern',
      company: 'Starlabs',
      date: '2024 - (3 months)',
      tech: 'PHP \u2022 WordPress \u2022 Tailwind CSS \u2022 MySQL',
    },
  ],

  skills: [
    {
      title: 'Cloud & Infrastructure',
      icon: '\u2601',
      skills: [
        { name: 'AWS (EC2, S3, ECS Fargate, Lambda, RDS)', level: 90 },
        { name: 'Terraform', level: 85 },
        { name: 'Pulumi', level: 80 },
        { name: 'GCP', level: 70 },
        { name: 'VPC, IAM & Networking', level: 85 },
      ],
    },
    {
      title: 'Containers & CI/CD',
      icon: '\uD83D\uDC33',
      skills: [
        { name: 'Docker & Docker Compose', level: 90 },
        { name: 'ECS Fargate & ECR', level: 85 },
        { name: 'GitHub Actions', level: 90 },
        { name: 'Linux & Bash Scripting', level: 85 },
        { name: 'Apache Airflow & Kafka', level: 70 },
      ],
    },
    {
      title: 'Observability',
      icon: '\uD83D\uDCCA',
      skills: [
        { name: 'CloudWatch & Dashboards', level: 85 },
        { name: 'X-Ray Distributed Tracing', level: 80 },
        { name: 'CloudTrail & Audit Logging', level: 80 },
        { name: 'GuardDuty & VPC Flow Logs', level: 75 },
        { name: 'AWS SNS Alerting', level: 85 },
      ],
    },
    {
      title: 'Development',
      icon: '\uD83D\uDCBB',
      skills: [
        { name: 'PHP Laravel', level: 85 },
        { name: 'Vue.js & TypeScript', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'REST APIs', level: 75 },
        { name: 'Postman', level: 80 },
      ],
    },
  ],

  projects: [
    {
      image: '/assets/healthcare.jpeg',
      alt: 'HealthTech Analytics Platform',
      title: 'HEALTHTECH ANALYTICS',
      category: 'HEALTHCARE',
      year: '2025',
      tags: ['ECS Fargate', 'Terraform', 'CloudFront', 'DynamoDB'],
      description: 'A cloud-native, HIPAA-compliant healthcare analytics platform deployed on AWS ECS Fargate with full IaC automation via Terraform.',
      details: [
        'AWS ECS Fargate (2 tasks) behind an Application Load Balancer inside a VPC with 2 NAT Gateways for high-availability compute.',
        'Terraform IaC for the entire stack — VPC, ECS, ALB, DynamoDB, CloudFront, S3, ECR, IAM, KMS, and CodePipeline resources.',
        'CloudFront CDN serving the React frontend from S3 for near-zero latency worldwide delivery.',
        'DynamoDB with 5 tables (users, patients, appointments, metrics, audit_logs) and KMS encryption at rest for HIPAA compliance.',
        'AWS CodePipeline + CodeBuild CI/CD pipeline triggered from GitHub; Docker images built and pushed to ECR automatically.',
        'Cross-region disaster recovery to us-west-2, CloudWatch alarms, and AWS X-Ray distributed tracing for full observability.',
      ],
      link: ''
    },
    {
      image: '/assets/ticket.png',
      alt: 'Football Ticket Marketplace',
      title: 'TICKET MARKETPLACE',
      category: 'FULLSTACK',
      year: '2024',
      tags: ['ECS Fargate', 'React', 'Node.js', 'Terraform'],
      description: 'A full-stack football ticket marketplace built with React and Node.js, deployed on AWS ECS Fargate with PostgreSQL, Redis caching, and automated CI/CD pipelines.',
      details: [
        'React 18 frontend served via CloudFront CDN + WAF; Node.js/Express backend with PostgreSQL (RDS) for persistent ticket and user data.',
        'AWS ECS Fargate for containerised API and web services; multi-AZ deployment with ALB, Route53 DNS, and automated failover for high availability.',
        'ElastiCache Redis caching layer for frequently accessed ticket listings, reducing database load and improving API response times.',
        'Terraform IaC covering VPC (public/private/database subnets), ECS, RDS, ElastiCache, CloudFront, WAF, and IAM roles — full infrastructure in code.',
        'Three-stage AWS CodePipeline (Source → Build → Deploy) with separate pipelines for frontend and backend; Docker images pushed to ECR on each merge.',
        'Security hardening with WAF rules, HTTPS enforcement, Secrets Manager for credentials, security groups per tier, and encryption at rest on RDS and ElastiCache.',
      ],
      link: ''
    },
    {
      image: '/assets/crypto.png',
      alt: 'Cryptocurrency Wallet GCP to AWS Migration',
      title: 'WALLET MIGRATION',
      category: 'CLOUD MIGRATION',
      year: '2026',
      tags: ['Pulumi', 'EKS', 'Aurora', 'ElastiCache'],
      description: 'GCP to AWS infrastructure migration for Wallet\'s self-custodial crypto wallet serving 15M+ users across Solana, Ethereum, Bitcoin, Base, and Sui — $271K/month baseline migrated with Pulumi (TypeScript).',
      details: [
        'Pulumi TypeScript IaC covering 98 resource configurations: VPC (multi-AZ, public/private/DB subnets), EKS sandbox namespace, 12 EC2 instances, Aurora PostgreSQL, ElastiCache (37-node Redis), S3 (~194 TB), SQS (~100 queues), SNS, ECR, MWAA, and Athena.',
        'Wave 1 (weeks 5–12): containerised workloads from Cloud Run → EKS; replaced GCP SDK calls with AWS SDK across 51 microservices; Cloud Tasks → SQS push-to-pull; AWS Site-to-Site VPN for cross-cloud Spanner connectivity during transition.',
        'Wave 2 (weeks 13–16): Cloud Spanner → Aurora PostgreSQL with ~535 SQL execution point conversions (COMMIT_TIMESTAMP, UNNEST, Mutation API, FORCE_INDEX); ~250 TB data migration; VPN decommissioned post-cutover.',
        'CloudWatch observability: ~29.7 TB/month log ingestion, 404 metrics, 40 alarms; CloudTrail full API audit; EventBridge Scheduler replacing Cloud Scheduler; Athena replacing BigQuery for analytics.',
        'Security: least-privilege IAM per EKS task and EC2 instance, 49 secrets in Secrets Manager, 95 SSM parameters, NACLs + security groups, AES-256 at rest, TLS in transit, AWS Backup for ~1.8 TB EBS snapshots.',
        'AWS target cost $267,219/month vs $271K GCP baseline; Apache Airflow (Cloud Composer) → MWAA (up to 5 instances, 100 DAGs); all resources MAP-tagged for AWS Migration Acceleration Program compliance.',
      ],
      link: ''
    },
  ],

  testimonials: [
      {
        quote:
          '“The HealthTech Analytics platform transformed our healthcare data strategy. The AWS infrastructure was robust, secure, and fully automated. Compliance and observability were top-notch, and the delivery was seamless. Highly recommended for any healthtech project.”',
        name: 'Dr. Emily Carter',
        role: 'Product Owner, HealthTech Analytics',
        image: '/assets/healthcare.jpeg',
        socials: [],
      },
      {
        quote:
          '“Launching the Ticket Marketplace with this team was a game-changer. The cloud setup was fast, secure, and scalable. CI/CD pipelines made deployments effortless, and the system handled high traffic with zero downtime. Outstanding work!”',
        name: 'Michael Lee',
        role: 'CEO, Ticket Marketplace',
        image: '/assets/ticket.png',
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
