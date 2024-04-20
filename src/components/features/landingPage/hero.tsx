import { Button } from "@/components/shared/button";
import Link from "next/link";

export default function LandingPageHero() {
  return (
    <section className="grid items-center lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_550px] gap-4 min-dh-screen-without-nav">
      <div className="flex flex-col justify-center gap-4">
        <article className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Hello 👋, <br /> I'm Eduardo Couto
          </h2>
          <p className="max-w-[600px] text-gray-500 text-base lg:text-xl dark:text-gray-400">
            I am a versatile full-stack software developer with a passion for
            creating innovative and user-friendly applications. With over 2
            years of experience, I have honed my skills in TyoeScript, React,
            Node.js, and various backend technologies. I am dedicated to
            delivering high-quality, scalable, and maintainable solutions that
            solve real-world problems.
          </p>
        </article>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild className="px-8">
            <Link className="" href="#">
              View Resume
            </Link>
          </Button>

          <Button asChild variant="link">
            <Link className="" href="#">
              Hire Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
