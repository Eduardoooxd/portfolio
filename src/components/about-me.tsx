'use client';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function AboutMe() {
  const { ref } = useSectionInView({
    sectionName: 'About',
    useInViewThreshold: 0.75,
  });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="max-w-3xl scroll-mt-8 text-center leading-8 sm:scroll-mt-28"
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
      <SectionHeading dataTestId="about-heading">About me</SectionHeading>
      <p className="mb-4">
        After graduating with a degree in <span className="font-bold">Informatics Engineering</span>
        , I decided to pursue my passion for software development. I have gained extensive
        experience in <span className="font-bold">full-stack development</span> through various
        roles and projects. <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the feeling of finally
        figuring out a solution to a complex problem.
      </p>

      <p className="mb-4">
        My core stack includes{' '}
        <span className="font-bold">Java, React, Angular, Quarkus, and Node.js</span>. I am also
        proficient in <span className="font-bold"> AWS, Terraform, and Kubernetes</span>. I am
        always looking to learn new technologies and continuously improve my skills.
      </p>

      <p>
        I am currently open to <span className="font-bold">collaboration and new projects</span> in
        the field of software development.
      </p>
    </motion.section>
  );
}
