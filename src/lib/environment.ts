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
  const parsedEnvironmentVariables = environmentVariablesSchema.safeParse(process.env);

  if (!parsedEnvironmentVariables.success) {
    throw new Error(parsedEnvironmentVariables.error.message);
  }

  return parsedEnvironmentVariables.data;
};
