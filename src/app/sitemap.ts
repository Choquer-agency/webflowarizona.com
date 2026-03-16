import { MetadataRoute } from "next";
import { getDomainConfig } from "@/lib/getDomainConfig";
import { getBlogPostsByRegion } from "@/content/blog";
import { getAllServiceSlugs } from "@/content/services";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const config = getDomainConfig();
  const domain = config.domain;
  const posts = await getBlogPostsByRegion(config.region);
  const serviceSlugs = getAllServiceSlugs();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://${domain}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `https://${domain}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `https://${domain}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...serviceEntries,
    ...(posts.length > 0
      ? [
          {
            url: `https://${domain}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
          },
          ...blogEntries,
        ]
      : []),
  ];
}
