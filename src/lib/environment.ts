import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const ENV_VARS = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1),
    RESEND_FROM_EMAIL: z.string().min(1),
    RESEND_TO_EMAIL: z.string().min(1),
    NODE_ENV: z
      .string()
      .min(1)
      .refine((value) => ['development', 'production'].includes(value), {
        message: 'NODE_ENV must be either development or production',
      }),
  },
  client: {
    NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().min(1),
    NEXT_PUBLIC_NODE_ENV: z
      .string()
      .min(1)
      .refine((value) => ['development', 'production'].includes(value), {
        message: 'NODE_ENV must be either development or production',
      }),
  },
  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  },
});
