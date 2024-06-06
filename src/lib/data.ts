import antiRecursoImage from '@/public/antirecurso.webp';
import aquapharmaImage from '@/public/aquapharma.webp';
import delfimMaiaImage from '@/public/delfim_maia.webp';
import orunImage from '@/public/orun.webp';
import { Binary, BookOpenCheck, GraduationCap } from 'lucide-react';
import { Metadata } from 'next';
import { StaticImageData } from 'next/image';
import React from 'react';

export const contactInformation = {
  personalEmail: 'ecouto93@gmail.com',
  businessEmail: 'contacts@eduardocouto.dev',
  linkedin: 'https://www.linkedin.com/in/eduardo-ribeiro-couto/',
  github: 'https://github.com/Eduardoooxd',
} as const;

export const WEBSITE_METADATA: Metadata = {
  title: 'Eduardo Couto | Personal Portfolio',
  description:
    'I am a versatile full-stack software developer with a passion for creating innovative and user-friendly applications. With over 2 years of experience, I have honed my skills in Java, Typescript, React, Node.js, and various backend technologies. I am dedicated to delivering high-quality, scalable, and maintainable solutions that solve real-world problems.',
  applicationName: 'Eduardo Couto Personal Portfolio',
  creator: 'Eduardo Couto',
  authors: [
    {
      name: 'Eduardo Couto',
      url: 'https://www.linkedin.com/in/eduardo-ribeiro-couto/',
    },
  ],

  generator:
    'Next.js, Tailwind CSS, TypeScript, ESLint, Prettier, Jest, React Testing Library, and Husky',
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
    href: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
    href: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
    href: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
    href: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
    href: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated Informatics Engineering Degree',
    location: 'Porto, Portugal',
    description:
      'I graduated after 3 years of studying. I immediately found a job as a full-stack developer.',
    icon: React.createElement(GraduationCap),
    date: '2022',
  },
  {
    title: 'Front-End Developer',
    location: 'Porto, Portugal',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(BookOpenCheck),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Porto, Portugal',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(Binary),
    date: '2021 - present',
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
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MySQL', 'Tailwind', 'Prisma'],
    imageUrl: aquapharmaImage,
    href: 'https://aquapharma.net',
  },
  {
    title: 'Delfim Maia',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MySQL', 'Tailwind', 'Prisma'],
    imageUrl: delfimMaiaImage,
    href: 'https://www.delfimmaia.pt',
  },
  {
    title: 'AntiRecurso',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MySQL', 'Tailwind', 'Prisma'],
    imageUrl: antiRecursoImage,
    href: 'https://antirecurso.nei-isep.org',
  },
  {
    title: 'Orun',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: orunImage,
    href: 'https://orun-clothes-shop-eduardoooxd.vercel.app/pt',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;
