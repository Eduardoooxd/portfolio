'use client';

import { contactInformation } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import EduardoImage from '@/public/eduardo_couto.jpg';
import { motion } from 'framer-motion';
import { ArrowDownToLine, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './shared/button';

export default function Hero() {
  const { ref } = useSectionInView({
    sectionName: 'Home',
    useInViewThreshold: 0.5,
  });

  const begginingYearOfCarrer = 2022;
  const carrerYears = new Date().getFullYear() - begginingYearOfCarrer;
  const { linkedin, github } = contactInformation;

  return (
    <section
      id="home"
      ref={ref}
      className="min-dh-screen-without-nav flex scroll-mt-[9999px] flex-col justify-evenly gap-2 sm:min-h-[initial] sm:justify-normal sm:gap-8"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={EduardoImage}
              alt="Eduardo Couto Portrait"
              quality={90}
              priority
              className="h-24 w-24 rounded-full border-2 border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mx-auto max-w-3xl px-4 text-center text-2xl font-medium !leading-10 sm:text-4xl"
        initial={{
          opacity: 0,
          y: 150,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <span className="font-bold">Hello, I'm Eduardo.</span> I'm a{' '}
        <span className="font-bold">full-stack developer</span> with{' '}
        <span className="font-bold">{carrerYears} years </span> of experience. I enjoy building
        <span className="italic">websites & applications</span>. My main focus is with{' '}
        <span className="underline">Java and React (Next.js).</span>
      </motion.h1>

      <motion.div
        className="flex flex-col gap-4 text-lg font-medium sm:flex-row sm:justify-center"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
      >
        <Button
          className="group rounded-full bg-gray-950 shadow-lg transition hover:scale-105 hover:underline hover:underline-offset-2 focus:scale-105 active:scale-100"
          asChild
        >
          <Link className="flex items-center gap-1" href="/contact">
            Contact me here
            <ArrowUpRight />
          </Link>
        </Button>

        <Button
          variant="secondary"
          className="rounded-full shadow-lg transition hover:scale-105 hover:underline hover:underline-offset-2 focus:scale-105 active:scale-100"
          asChild
        >
          <a className="flex items-center gap-1" href="/eduardo_couto_resume.pdf" download>
            Download CV
            <ArrowDownToLine size={20} />
          </a>
        </Button>

        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            className="rounded-full shadow-lg transition hover:scale-105 hover:underline hover:underline-offset-2 focus:scale-105 active:scale-100"
            asChild
          >
            <a target="_blank" href={linkedin}>
              <Linkedin size={20} />
            </a>
          </Button>

          <Button
            variant="secondary"
            className="rounded-full shadow-lg transition hover:scale-105 hover:underline hover:underline-offset-2 focus:scale-105 active:scale-100"
            asChild
          >
            <a target="_blank" href={github}>
              <Github size={20} />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
