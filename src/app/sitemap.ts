import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/getDomainConfig";
import { getBlogPostsByRegion } from "@/content/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = headers().get("host") || "webflowarizona.com";
  const config = getDomainConfig();
  const posts = await getBlogPostsByRegion(config.region);

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://${host}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: `https://${host}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...(posts.length > 0
      ? [
          {
            url: `https://${host}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
          },
          ...blogEntries,
        ]
      : []),
  ];
}
