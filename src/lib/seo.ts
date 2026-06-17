import type { Metadata } from "next";

export const siteConfig = {
  name: "JobSarkar.ai",
  title: "JobSarkar.ai - Government Jobs Made Simple",
  description:
    "Discover Indian government jobs, understand eligibility, and track important exam deadlines with JobSarkar.ai.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jobsarkar.ai",
  locale: "en_IN",
};

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function buildMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  path = "/",
  image = "/og-image.png",
}: MetadataInput = {}): Metadata {
  const canonical = absoluteUrl(path);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

