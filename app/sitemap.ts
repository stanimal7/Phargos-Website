import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://phargos.ai";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/demo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/platform/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/platform/integrations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/industries/hardwood-distribution`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/building-products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about/story`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
