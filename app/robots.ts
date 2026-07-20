import type { MetadataRoute } from "next";

// Defina NEXT_PUBLIC_SITE_URL nas variáveis de ambiente do deploy
// (ex.: https://seudominio.com) para que o sitemap use a URL final.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: SITE_URL + "/sitemap.xml",
  };
}
