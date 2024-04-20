import LandingPageHero from "@/components/features/landingPage/hero";
import Container from "@/components/shared/container";

export default function Home() {
  return (
    <main className="flex justify-center items-center grow w-full h-full">
      <Container className="py-0">
        <LandingPageHero />
      </Container>
    </main>
  );
}
