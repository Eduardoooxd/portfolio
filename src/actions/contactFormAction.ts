"use server";

import { ContactFormSchema } from "@/domain/contactForm";
import { environmentVariables } from "@/lib/environment";
import { Resend } from "resend";

const resend = new Resend(environmentVariables().RESEND_API_KEY);

export async function contactFormAction(formData: unknown) {
  const parsedFormData = ContactFormSchema.safeParse(formData);

  if (!parsedFormData.success) {
    return {
      error: parsedFormData.error.flatten().fieldErrors,
    };
  }

  const { data } = parsedFormData;
  /*
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ecouto93@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  }); */

  return {
    message: "Successful sent email",
  };
}
