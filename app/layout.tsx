import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
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
  const baseUrl = new URL(protocol + "://" + host);
  const imageUrl = new URL("/og-personal.png", baseUrl).toString();
  const title = "Leonardo — Portfólio de Dados";
  const description =
    "Conheça a trajetória, os projetos, certificados e aprendizados de Leonardo nas áreas de dados e desenvolvimento.";

  return {
    metadataBase: baseUrl,
    title: {
      default: title,
      template: "%s | Leonardo",
    },
    description,
    keywords: [
      "Engenharia de Dados",
      "Python",
      "SQL",
      "React",
      "Node.js",
      "Data Analytics",
      "Portfólio",
    ],
    authors: [{ name: "Leonardo" }],
    creator: "Leonardo",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Leonardo",
      title,
      description,
      url: baseUrl,
      images: [
        {
          url: imageUrl,
          width: 1736,
          height: 907,
          alt: "Leonardo — portfólio de dados, desenvolvimento e projetos.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body>{children}</body>
    </html>
  );
}
