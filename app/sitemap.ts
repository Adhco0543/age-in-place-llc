import type { MetadataRoute } from "next";

const baseUrl = "https://www.ageinplacellc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{
    path: string;
    changeFrequency: "weekly" | "monthly";
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "monthly", priority: 0.95 },
    { path: "/grab-bar-installation", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/accessible-bathrooms", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/wheelchair-ramps", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/handrails", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/home-safety-assessments", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/kitchen-accessibility", changeFrequency: "monthly", priority: 0.85 },
    { path: "/about", changeFrequency: "monthly", priority: 0.75 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  ];

  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
