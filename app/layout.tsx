import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const FULL_NAME = "Leonardo Felipe de Oliveira";
const GITHUB_URL = "https://github.com/leoOliveira568";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/leonardo-felipe-de-oliveira-b088201a7/";

async function getBaseUrl(): Promise<URL> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  return new URL(protocol + "://" + host);
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();
  const imageUrl = new URL("/og-personal.png", baseUrl).toString();
  const title = "Leonardo Felipe de Oliveira — Portfólio de Dados";
  const description =
    "Portfólio de Leonardo Felipe de Oliveira: analista de dados e desenvolvedor web. Projetos, formação, certificados e aprendizados em dados, Python, SQL e desenvolvimento.";

  return {
    metadataBase: baseUrl,
    title: {
      default: title,
      template: "%s | Leonardo Felipe de Oliveira",
    },
    description,
    keywords: [
      "Leonardo Felipe de Oliveira",
      "Análise de Dados",
      "Data Analytics",
      "Ciência de Dados",
      "Python",
      "SQL",
      "Machine Learning",
      "React",
      "Next.js",
      "Portfólio",
    ],
    authors: [{ name: FULL_NAME }],
    creator: FULL_NAME,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: FULL_NAME,
      title,
      description,
      url: baseUrl,
      images: [
        {
          url: imageUrl,
          width: 1736,
          height: 907,
          alt: "Leonardo Felipe de Oliveira — portfólio de dados, desenvolvimento e projetos.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = await getBaseUrl();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FULL_NAME,
    url: baseUrl.toString(),
    jobTitle: "Analista de Dados e Desenvolvedor Web",
    description:
      "Analista de dados e desenvolvedor web, estudante de Análise e Desenvolvimento de Sistemas.",
    sameAs: [GITHUB_URL, LINKEDIN_URL],
    knowsAbout: [
      "Análise de Dados",
      "Python",
      "SQL",
      "Machine Learning",
      "Data Visualization",
      "React",
      "Next.js",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "IF Goiano" },
      { "@type": "CollegeOrUniversity", name: "Estácio" },
    ],
  };

  return (
    <html lang="pt-BR" className="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
