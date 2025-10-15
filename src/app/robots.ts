import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://www.smilexpertsdental.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/auth/",
          "/profile/"
        ]
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
