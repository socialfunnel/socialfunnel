"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

// LinkedIn posts data - same as in main blog page
const linkedInPosts = [
  {
    id: 1,
    title: "Latest Marketing Insights",
    iframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7189186812152537088?collapsed=1" height="590" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    category: "Marketing Automation",
    featured: true,
  },
  {
    id: 2,
    title: "Business Growth Strategies",
    iframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7326526145561018368?collapsed=1" height="670" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    category: "Business Growth",
    featured: false,
  },
  {
    id: 3,
    title: "Lead Generation Insights",
    iframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7325134242856751104" height="1024" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    category: "Lead Generation",
    featured: false,
  },
  {
    id: 4,
    title: "Digital Strategy Deep Dive",
    iframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7267494921920483329" height="2076" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    category: "Digital Strategy",
    featured: false,
  },
  {
    id: 5,
    title: "Case Study Analysis",
    iframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7259076968623562752" height="1174" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    category: "Case Studies",
    featured: false,
  },
  {
    id: 6,
    title: "Marketing Automation Tips",
    iframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7247154515785773056" height="1213" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
    category: "Marketing Automation",
    featured: false,
  },
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // For now, we'll use the ID as the slug (1, 2, 3, etc.)
  const postId = parseInt(params.slug);
  const post = linkedInPosts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <main className="overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <section className="pt-24 pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <Button asChild variant="ghost" className="mb-8 group">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Post Content */}
      <article className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Category */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
                <Tag className="h-4 w-4" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8">
              {post.title}
            </h1>

            {/* LinkedIn Embed */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="flex justify-center">
                <div
                  className="w-full max-w-[504px] mx-auto rounded-2xl overflow-hidden shadow-lg"
                  dangerouslySetInnerHTML={{ __html: post.iframe }}
                />
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 pt-16 border-t border-border/50"
          >
            <h2 className="text-2xl font-serif font-bold mb-8">
              Related Posts
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {linkedInPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="mb-3">
                      <span className="px-2 py-1 bg-secondary/90 text-secondary-foreground text-xs font-semibold rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
