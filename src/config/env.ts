import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default(process.env.NODE_ENV ?? "development"),
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default("Admin Web Portal"),
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(1).optional(),
  IAM_API_URL: z.string().url(),
  IAM_TOKEN_AUDIENCE: z.string().min(1),
  IAM_DEFAULT_TENANT_ID: z.string().min(1).default("primary"),
  LOG_LEVEL: z.enum(["trace", "debug", "info", "warn", "error", "fatal"]).default("info"),
  SENTRY_DSN: z.string().url().or(z.literal("")).optional().default(""),
});

const parsed = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  IAM_API_URL: process.env.IAM_API_URL,
  IAM_TOKEN_AUDIENCE: process.env.IAM_TOKEN_AUDIENCE,
  IAM_DEFAULT_TENANT_ID: process.env.IAM_DEFAULT_TENANT_ID,
  LOG_LEVEL: process.env.LOG_LEVEL,
  SENTRY_DSN: process.env.SENTRY_DSN,
});

if (!parsed.success) {
  console.error("❌ Invalid environment configuration:", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid environment configuration");
}

const result = parsed.data;

const resolvedSecret =
  result.NEXTAUTH_SECRET ??
  (result.NODE_ENV === "development" || result.NODE_ENV === "test"
    ? "local-development-secret"
    : undefined);

if (!resolvedSecret) {
  throw new Error("NEXTAUTH_SECRET must be defined when NODE_ENV=production");
}

export const env = {
  ...result,
  NEXTAUTH_SECRET: resolvedSecret,
};

export const publicEnv = {
  NEXT_PUBLIC_APP_NAME: env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_API_URL: env.NEXT_PUBLIC_API_URL,
};

export const isDev = env.NODE_ENV === "development";
export const isTest = env.NODE_ENV === "test";
export const isProd = env.NODE_ENV === "production";
