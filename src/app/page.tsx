import LandingPageContactSection from "@/components/features/LandingPage/contactSection";
import LandingPageHero from "@/components/features/LandingPage/hero";
import LandingPageProfessionalExperience from "@/components/features/LandingPage/professionalExperience";
import Container from "@/components/shared/container";

export default function Home() {
  return (
    <main className="flex justify-center items-center grow w-full h-full body-background-texture ">
      <Container className="py-0">
        <LandingPageHero />
        <LandingPageProfessionalExperience />
        <LandingPageContactSection />
      </Container>
    </main>
  );
}
