import AboutMe from '@/components/about-me';
import Hero from '@/components/hero';
import SectionDivider from '@/components/section-divider';

export default function Home() {
  return (
    <main className="body-background-texture flex h-full w-full grow flex-col items-center justify-center px-4 pt-28 sm:pt-36">
      <Hero />
      <SectionDivider />
      <AboutMe />
    </main>
  );
}
