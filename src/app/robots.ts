import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://dse-hong-kong.koydo.app/sitemap.xml",
    host: "https://dse-hong-kong.koydo.app",
  };
}
