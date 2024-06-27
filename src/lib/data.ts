import { Experience } from '@/domain/experience';
import antiRecursoImage from '@/public/antirecurso.webp';
import aquapharmaImage from '@/public/aquapharma.webp';
import delfimMaiaImage from '@/public/delfim_maia.webp';
import orunImage from '@/public/orun.webp';
import { BookOpenCheck, GraduationCap, Laptop2, PersonStanding } from 'lucide-react';
import { Metadata } from 'next';
import { StaticImageData } from 'next/image';
import React from 'react';

export const contactInformation = {
  personalEmail: 'ecouto93@gmail.com',
  businessEmail: 'contacts@eduardocouto.dev',
  linkedin: 'https://www.linkedin.com/in/eduardo-ribeiro-couto/',
  github: 'https://github.com/Eduardoooxd',
} as const;

export const baseUrl = 'https://eduardocouto.dev/';

export const WEBSITE_METADATA: Metadata = {
  title: {
    template: '%s | Eduardo Couto',
    default: 'Eduardo Couto',
  },
  description:
    'I am a versatile full-stack software developer with over 2 years of experience, I have honed my skills in Java, Typescript, AWS, React, Terraform, Node.js, and various backend technologies. I am dedicated to delivering high-quality, scalable, and maintainable solutions that solve real-world problems.',
  applicationName: 'Eduardo Couto Personal Portfolio',
  creator: 'Eduardo Couto',
  authors: [
    {
      name: 'Eduardo Couto',
      url: 'https://www.linkedin.com/in/eduardo-ribeiro-couto/',
    },
  ],
  metadataBase: new URL(baseUrl),
  generator: 'Next.js, Tailwind CSS, TypeScript, ESLint, Prettier, Jest, and Husky',
};

export const links = [
  {
    name: 'Home',
    hash: '#home',
    href: '/',
  },
  {
    name: 'About',
    hash: '#about',
    href: '/#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
    href: '/#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
    href: '/#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
    href: '/#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
    href: '/#contact',
  },
] as const;

export const experiencesData: Experience[] = [
  {
    title: 'Full-Stack Software Developer',
    location: 'Porto, Portugal 🇵🇹',
    company: {
      name: 'Critical Techworks',
      website: 'https://www.criticaltechworks.com',
    },
    description:
      'Delivering high-value features, optimizing codebases, and maintaining multiple microservices. Led the migration of multiple Java microservices to Quarkus, developed a high-availability notification system, and enhanced infrastructure using AWS and Terraform.',
    icon: React.createElement(Laptop2),
    date: 'Sep 2022 - Present',
    skills: ['Java', 'Angular', 'AWS', 'Terraform', 'GitHub Actions'],
  },
  {
    title: 'Freelancer Developer',
    location: 'Porto, Portugal 🇵🇹',
    description:
      'Providing full-stack development services using React, Next.js, TypeScript, Tailwind, Prisma, and Content Management Systems. Successfully completed various projects including e-commerce integrations with Stripe and Shopify.',
    icon: React.createElement(Laptop2),
    date: '2020 - Present',
    skills: ['React', 'Next.js', 'TypeScript', 'Stripe', 'Shopify'],
  },
  {
    title: 'Software Developer Intern',
    location: 'Porto, Portugal 🇵🇹',
    company: {
      name: 'Critical Techworks',
      website: 'https://www.criticaltechworks.com',
    },
    description:
      'Optimized front-end performance with Angular techniques and improved backend response times. Developed stress tests and leveraged Lighthouse reports for performance validation.',
    icon: React.createElement(BookOpenCheck),
    date: 'Feb 2022 - Sep 2022',
    skills: ['Java', 'Angular', 'EclipseLink'],
  },
  {
    title: 'IT Department Coordinator',
    location: 'Porto, Portugal 🇵🇹',
    company: {
      name: 'NEI-ISEP',
      website: 'https://www.nei-isep.org',
    },
    description:
      'Led the IT department, managed development team, and upgraded tech stack. Provided mentorship and streamlined workflows to enhance project efficiency.',
    icon: React.createElement(PersonStanding),
    date: '2022',
    skills: ['React', 'Next.js', 'TypeScript', 'WordPress'],
  },
  {
    title: 'Graduated Informatics Engineering Degree',
    location: 'Porto, Portugal 🇵🇹',
    company: {
      name: 'ISEP',
      website: 'https://isep.ipp.pt',
    },
    description:
      'Studied topics like software engineering, databases, algorithms, and computer networks. Developed a final project about a Social Network using Java, C# and React.',
    icon: React.createElement(GraduationCap),
    date: '2022',
    skills: ['Java', 'React', 'C#', 'C'],
  },
] as const;

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  href: string;
}

export const projectsData: Project[] = [
  {
    title: 'Aquapharma',
    description:
      'Implemented and deployed a responsive website using NextJs and Tailwind to showcase a health company portfolio and facilitate user contact submissions.',
    tags: ['React', 'Next.js', 'Tailwind'],
    imageUrl: aquapharmaImage,
    href: 'https://aquapharma.net',
  },
  {
    title: 'Delfim Maia',
    description:
      'Freelancing Project for a Lawyer Company. Website provides i18n and CMS for the client.',
    tags: ['Astro', 'React', 'Builder.io', 'Tailwind'],
    imageUrl: delfimMaiaImage,
    href: 'https://www.delfimmaia.pt',
  },
  {
    title: 'AntiRecurso',
    description:
      'Open source learning platform. Responsible for graphical representation of the students grades and dark mode support.',
    tags: ['React', 'Next.js', 'Tailwind', 'Prisma', 'PostgreSQL'],
    imageUrl: antiRecursoImage,
    href: 'https://antirecurso.nei-isep.org',
  },
  {
    title: 'Orun',
    description:
      'E-Commerce Website integrated with Shopify and i18n support. It has features like payments and newsletter.',
    tags: ['React', 'Next.js', 'Shopify', 'GraphQL', 'Builder.io', 'MailChimp'],
    imageUrl: orunImage,
    href: 'https://orun-clothes-shop-eduardoooxd.vercel.app/pt',
  },
] as const;

export const skillsData = [
  'TypeScript',
  'Java',
  'AWS',
  'Quarkus',
  'Terraform',
  'Python',
  'PostgreSQL',
  'Kubernetes',
  'GitHub Actions',
  'Node.js',
  'Express',
  'JUnit',
  'Jest',
  'Cypress',
  'React',
  'Next.js',
  'JavaScript',
  'Tailwind',
  'Angular',
  'PostgreSQL',
] as const;
