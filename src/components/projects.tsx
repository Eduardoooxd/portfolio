'use client';
import { useActiveSectionContext } from '@/context/active-section-context';
import { projectsData } from '@/lib/data';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectShowcase from './project-showcase';
import SectionHeading from './section-heading';

export default function Projects() {
  const { setActive } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActive('Projects');
    }
  }, [inView, setActive]);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col gap-4 sm:gap-8">
        {projectsData.map((project) => (
          <ProjectShowcase key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
