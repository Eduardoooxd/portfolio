'use client';

import { useSectionInView } from '@/lib/hooks';
import ContactSectionForm from './contact-section-form';
import SectionHeading from './section-heading';

export default function ContactSection() {
  const { ref } = useSectionInView({
    sectionName: 'Contact',
  });

  return (
    <section ref={ref} id="contact" className="w-[min(100%,38rem)] scroll-mt-28">
      <SectionHeading>Contact Me</SectionHeading>
      <div className="flex flex-col gap-4">
        <p className="sm:text-center">
          Contact me directly at {''}
          <a target="_blank" href="mailto:contacts@eduardocouto.dev" className="underline">
            contacts@eduardocouto.dev
          </a>
          {''} or through the form below.
        </p>

        <ContactSectionForm />
      </div>
    </section>
  );
}
