import Container from "@/components/shared/container";
import { LinkedinIcon, MailIcon } from "lucide-react";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <main className="flex grow w-full h-full body-background-texture">
      <Container>
        <section className="flex flex-col items-center">
          <article className="grid grid-cols-1 sm:grid-cols-2 py-24">
            <div className="flex flex-col bg-white">
              <div className="">
                <h2 className="text-4xl">Contact me</h2>
              </div>
              <div className="text-xs flex gap-1">
                <span>✉️</span>
                <p>Prefer email ? It's contacts@eduardocouto.dev</p>
              </div>
            </div>
            <div className="bg-white">
              <p className="text-sm text-balance">
                Use the form below to inquire about work. If we're a good fit,
                I’ll get back to you with a link to schedule our first call.
              </p>
            </div>
          </article>

          <hr className="mb-20" />

          <article className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Get in Touch
              </h3>

              <p className="text-base text-balance text-gray-500 dark:text-gray-400">
                Feel free to reach out to me using the form below or through any
                of the other contact methods.
              </p>

              <ul className="">
                <li className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <a
                    target="_blank"
                    href="mailto:contacts@eduardocouto.dev"
                    className="text-blue-500 hover:underline"
                  >
                    contacts@eduardocouto.dev
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <LinkedinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/eduardo-ribeiro-couto/"
                    className="text-blue-500 hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <ContactForm />
          </article>
        </section>
      </Container>
    </main>
  );
}
