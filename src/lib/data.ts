import { Binary, BookOpenCheck, GraduationCap } from "lucide-react";
import React from "react";

export const contactInformation = {
  personalEmail: "ecouto93@gmail.com",
  businessEmail: "contacts@eduardocouto.dev",
};

export const links = [
  {
    name: "Home",
    hash: "#home",
    href: "/",
  },
  {
    name: "About",
    hash: "#about",
    href: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
    href: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
    href: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
    href: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
    href: "/contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Informatics Engineering Degree",
    location: "Porto, Portugal",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a full-stack developer.",
    icon: React.createElement(GraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Porto, Portugal",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(BookOpenCheck),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Porto, Portugal",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(Binary),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    //imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    //imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    //imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
