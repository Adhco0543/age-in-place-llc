import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
};

const imageByPath: Record<string, string> = {
  "/": "/images/home-living-v1.webp",
  "/services": "/images/home-living-v1.webp",
  "/grab-bar-installation": "/images/home-bathroom-v1.webp",
  "/services/accessible-bathrooms": "/images/home-bathroom-v1.webp",
  "/services/wheelchair-ramps": "/images/home-entry-v1.webp",
  "/services/handrails": "/images/home-entry-v1.webp",
  "/services/home-safety-assessments": "/images/home-living-v1.webp",
  "/services/kitchen-accessibility": "/images/home-living-v1.webp",
  "/about": "/images/home-living-v1.webp",
  "/contact": "/images/home-living-v1.webp",
  "/reviews": "/images/home-living-v1.webp",
};

const imageAltByPath: Record<string, string> = {
  "/images/home-living-v1.webp":
    "AI-generated living room and kitchen design illustration for inspiration, not a completed project.",
  "/images/home-bathroom-v1.webp":
    "AI-generated accessible bathroom design illustration for inspiration, not a completed project.",
  "/images/home-entry-v1.webp":
    "AI-generated accessible home entrance design illustration for inspiration, not a completed project.",
};

export function createPageMetadata({
  path,
  title,
  description,
}: PageMetadataInput): Metadata {
  const image = imageByPath[path] ?? imageByPath["/"];
  const imageAlt = imageAltByPath[image];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
  };
}
