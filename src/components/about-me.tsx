'use client';
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './section-heading';

export default function AboutMe() {
  const { setActive } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView) {
      setActive('About');
    }
  }, [inView, setActive]);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-3xl scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{
        opacity: 0,
        y: 150,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.225,
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
        After graduating with a degree in{' '}
        <span className="font-medium">Informatics Engineering</span>, I decided to pursue my passion
        for software development. I have gained extensive experience in{' '}
        <span className="font-medium">full-stack development</span> through various roles and
        projects. <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the feeling of finally
        figuring out a solution to a complex problem. My core stack includes{' '}
        <span className="font-medium">Java, React, Angular, Quarkus, and Postgres</span>. I am also
        proficient in AWS, Terraform, and Kubernetes. I am always looking to learn new technologies
        and continuously improve my skills. I am currently open to{' '}
        <span className="font-medium">collaboration and new projects</span> in the field of software
        development.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games (League of
        Legends, R6, others...), listening to music, watching movies, and passing time with my
        family. I also enjoy <span className="font-medium">learning new things</span>. I am
        currently researching <span className="font-medium">finance and fashion design</span>.
      </p>
    </motion.section>
  );
}
