import LandingPageContactSection from "@/components/features/landingPage/contactSection";
import LandingPageHero from "@/components/features/landingPage/hero";
import LandingPageProfessionalExperience from "@/components/features/landingPage/professionalExperience";
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
