import { z } from "zod";

const environmentVariablesSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
});

export const environmentVariables = () => {
  const parsedEnvironmentVariables = environmentVariablesSchema.safeParse(
    process.env
  );

  if (!parsedEnvironmentVariables.success) {
    throw new Error(parsedEnvironmentVariables.error.errors.join(", "));
  }

  return parsedEnvironmentVariables.data;
};
