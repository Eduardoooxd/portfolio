import { projectsData } from '@/lib/data';
import ProjectShowcase from './project-showcase';
import SectionHeading from './section-heading';

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col gap-4 sm:gap-8">
        {projectsData.map((project) => (
          <ProjectShowcase key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
