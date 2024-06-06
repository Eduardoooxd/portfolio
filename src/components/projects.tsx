'use client';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import ProjectShowcase from './project-showcase';
import SectionHeading from './section-heading';

export default function Projects() {
  const { ref } = useSectionInView({
    sectionName: 'Projects',
    useInViewThreshold: 0.5,
  });

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col gap-4 sm:gap-8">
        {projectsData.map((project) => (
          <ProjectShowcase key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
