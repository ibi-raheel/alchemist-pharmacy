import type { MetadataRoute } from "next";

const SITE_URL = "https://alchemistpharmacy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/branches", "/about", "/contact"];
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
