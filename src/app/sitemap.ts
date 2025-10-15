import type { MetadataRoute } from "next";
import { blogPosts } from "@/utils/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.smilexpertsdental.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1.0,
      lastModified: new Date()
    },
    {
      url: `${siteUrl}/blog/`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: new Date()
    },
    // Key marketing pages
    { url: `${siteUrl}/locations/`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${siteUrl}/home/about-us/`, changeFrequency: "yearly", priority: 0.6, lastModified: new Date() },
    { url: `${siteUrl}/home/new-patients/`, changeFrequency: "yearly", priority: 0.6, lastModified: new Date() },
    { url: `${siteUrl}/home/privacy-policy/`, changeFrequency: "yearly", priority: 0.2, lastModified: new Date() },
    { url: `${siteUrl}/home/clinic-services/`, changeFrequency: "monthly", priority: 0.7, lastModified: new Date() },
    { url: `${siteUrl}/appointment/`, changeFrequency: "monthly", priority: 0.6, lastModified: new Date() },
    // Service detail pages (DC)
    { url: `${siteUrl}/general-dentistry-washington-dc/`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${siteUrl}/cosmetic-dentistry-washington-dc/`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${siteUrl}/teeth-whitening-washington-dc/`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${siteUrl}/dental-veneers-washington-dc/`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${siteUrl}/root-canal-washington-dc/`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${siteUrl}/dental-fillings-washington-dc/`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${siteUrl}/tooth-colored-fillings-washington-dc/`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${siteUrl}/comprehensive-dental-care-washington-dc/`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${siteUrl}/affordable-dentures-washington-dc/`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() }
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: new Date(post.date)
  }));

  return [...staticRoutes, ...blogRoutes];
}
