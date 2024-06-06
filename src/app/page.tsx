import AboutMe from '@/components/about-me';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="body-background-texture flex h-full w-full grow flex-col items-center justify-center px-4 pt-[4.5rem] sm:pt-36">
      <Hero />
      <SectionDivider />
      <AboutMe />
      <Projects />
      <Skills />
    </main>
  );
}
