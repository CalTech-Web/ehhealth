import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ehhealth.org";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about-eh`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/birth-and-beyond`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact-us`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy-and-tos`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
