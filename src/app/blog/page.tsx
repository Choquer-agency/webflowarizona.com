import type { Metadata } from "next";
import Link from "next/link";
import { getDomainConfig } from "@/lib/getDomainConfig";
import { getBlogPostsByRegion } from "@/content/blog";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const config = getDomainConfig();
  const title = `Blog | ${config.locality} Webflow Agency`;
  const description = `Web design insights, Webflow tips, and digital marketing strategies for ${config.region} businesses. Expert advice from ${config.locality}'s premier Webflow agency.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://${config.domain}/blog`,
      siteName: `${config.locality} Webflow Agency`,
      type: "website",
    },
    alternates: {
      canonical: `https://${config.domain}/blog`,
    },
  };
}

export default async function BlogIndex() {
  const config = getDomainConfig();
  const posts = await getBlogPostsByRegion(config.region);

  return (
    <>
    <Nav locality={config.locality} />
    <main className="pt-32 pb-20" style={{ backgroundColor: "#FFF9F0" }}>
      <div className="u-container max-w-4xl">
        <p className="eyebrow text-brand mb-4">Blog</p>
        <h1 className="font-sans font-medium text-fluid-h2 leading-[1.1] text-dark mb-4">
          Insights from {config.locality}
        </h1>
        <p className="font-sans text-fluid-main text-dark opacity-60 leading-relaxed mb-16 max-w-[55ch]">
          Web design strategies, Webflow tips, and growth insights for {config.region} businesses.
        </p>

        {posts.length === 0 ? (
          <p className="font-sans text-fluid-main text-dark opacity-40">
            New articles coming soon. Check back shortly.
          </p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group p-8 rounded-sm bg-white transition-all hover:shadow-lg"
                style={{ transitionDuration: "0.3s" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-brand">
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-dark opacity-30">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="font-mono text-xs text-dark opacity-30">
                    {post.readingTime} min read
                  </span>
                </div>
                <h2 className="font-sans font-medium text-fluid-h4 leading-[1.2] text-dark mb-3 group-hover:text-brand transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-fluid-main text-dark opacity-60 leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-16">
          <Link
            href="/"
            className="font-sans text-fluid-main text-brand hover:opacity-70 transition-opacity"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </main>
    <Footer locality={config.locality} />
    </>
  );
}
