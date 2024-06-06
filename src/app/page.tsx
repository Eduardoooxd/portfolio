import AboutMe from '@/components/about-me';
import ContactSection from '@/components/contact-section';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="body-background-texture flex h-full w-full grow flex-col items-center justify-center gap-12 px-4 py-[4.5rem] sm:gap-40 sm:pt-36">
      <Hero />
      <SectionDivider />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <ContactSection />
    </main>
  );
}
