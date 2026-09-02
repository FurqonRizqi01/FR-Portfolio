const deploymentUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (deploymentUrl ? `https://${deploymentUrl}` : "https://fr-portfolio.vercel.app")
).replace(/\/$/, "");
