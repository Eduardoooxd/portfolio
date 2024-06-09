import AboutMe from '@/components/about-me';
import ContactSection from '@/components/contact-section';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="flex h-full w-full grow flex-col items-center justify-center gap-12 px-4 py-8 sm:gap-40 sm:pt-36">
      <div className="bg-background-workout absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>

      <div className="bg-background-workout absolute -top-4 left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

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
