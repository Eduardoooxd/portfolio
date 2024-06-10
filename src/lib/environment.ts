import { z } from 'zod';

const environmentVariablesSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM_EMAIL: z.string().min(1),
  RESEND_TO_EMAIL: z.string().min(1),
  NODE_ENV: z
    .string()
    .min(1)
    .refine((value) => ['development', 'production'].includes(value), {
      message: 'NODE_ENV must be either development or production',
    }),
});

export const environmentVariables = () => {
  if (typeof window !== 'undefined') {
    // Come up with your own helpful error :)
    throw new Error('Environment should not be imported on the frontend!');
  }

  const parsedEnvironmentVariables = environmentVariablesSchema.safeParse(process.env);

  if (!parsedEnvironmentVariables.success) {
    throw new Error(parsedEnvironmentVariables.error.message);
  }

  return parsedEnvironmentVariables.data;
};

const publicEnvironmentVariablesSchema = z.object({
  NEXT_PUBLIC_POSTHOG_KEY: z.any(),
  NEXT_PUBLIC_POSTHOG_HOST: z.any(),
  NEXT_PUBLIC_NODE_ENV: z
    .string()
    .min(1)
    .refine((value) => ['development', 'production'].includes(value), {
      message: 'NODE_ENV must be either development or production',
    }),
});

export const publicEnvironmentVariables = () => {
  const parsedEnvironmentVariables = publicEnvironmentVariablesSchema.safeParse(process.env);

  if (!parsedEnvironmentVariables.success) {
    throw new Error(parsedEnvironmentVariables.error.message);
  }

  return parsedEnvironmentVariables.data;
};
