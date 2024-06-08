import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

import { Tailwind } from '@react-email/tailwind';

interface ContactFormEmailProps {
  name: string;
  senderEmail: string;
  message: string;
}

export default function ContactFormEmail({ name, senderEmail, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>👋 New Message from Portfolio Site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md border-black bg-white px-10 py-4">
              <Heading className="leading-tight">👋 New Message from Portfolio Site</Heading>
              <Text>Sender email is: {senderEmail}</Text>
              <Text>Sender name is: {name}</Text>
              <Hr />
              <Text>Message from Contact Form:</Text>
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
