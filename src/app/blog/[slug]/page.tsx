import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Tag, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Markdoc from "@markdoc/markdoc";
import { Metadata } from "next";
import { markdocConfig } from "@/lib/markdoc-config";
import { CaseStudyBox, Heading } from "@/components/markdoc-components";
import { authors } from "@/lib/author";
import { reader } from "@/utils/reader";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await (await reader()).collections.posts.read(slug);

  if (!post) {
    return {
      title: "Post Not Found | SocialFunnel Blog",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post.seo?.title || post.title;
  const description = post.seo?.description || post.excerpt;
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toISOString()
    : new Date().toISOString();

  return {
    title: `${title} | SocialFunnel Blog`,
    description,
    keywords: `${post.category}, marketing, lead generation, business growth`,
    authors: [{ name: authors[post.author as keyof typeof authors].name }],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: publishedDate,
      authors: [authors[post.author as keyof typeof authors].name],
      images: post.image
        ? [
            {
              url: post.image,
              width: 800,
              height: 600,
              alt: title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await (await reader()).collections.posts.read(slug);

  if (!post) {
    notFound();
  }

  const { node } = await post.content();
  const errors = Markdoc.validate(node, markdocConfig);
  if (errors.length) {
    console.warn("Content validation warnings:", errors);
  }
  const renderable = Markdoc.transform(node, markdocConfig);

  // Get related posts (same category, excluding current post)
  const allPosts = await (await reader()).collections.posts.all();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.entry.category === post.category)
    .slice(0, 3);

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
          <div className="mb-12">
            {/* Category */}
            <div className="mb-6 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
                <Tag className="h-4 w-4" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8 text-center">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Image
                  src={authors[post.author as keyof typeof authors].avatar}
                  alt={authors[post.author as keyof typeof authors].name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">
                    {authors[post.author as keyof typeof authors].name}
                  </p>
                  <p className="text-xs">
                    {authors[post.author as keyof typeof authors].bio}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Date not available"}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="mb-12 overflow-hidden rounded-3xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={500}
                  className="w-full h-96 object-cover"
                />
              </div>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <div className="mb-8 p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
                <p className="text-lg text-muted-foreground italic text-center">
                  {post.excerpt}
                </p>
              </div>
            )}
          </div>

          {/* Post Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            {Markdoc.renderers.react(renderable, React, {
              components: {
                CaseStudyBox,
                Heading,
              },
            })}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-16 border-t border-border/50">
              <h2 className="text-2xl font-serif font-bold mb-8">
                Related Posts
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/30"
                  >
                    {relatedPost.entry.image && (
                      <div className="mb-4 overflow-hidden rounded-xl">
                        <Image
                          src={relatedPost.entry.image}
                          alt={relatedPost.entry.title}
                          width={300}
                          height={200}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="mb-3">
                      <span className="px-2 py-1 bg-secondary/90 text-secondary-foreground text-xs font-semibold rounded-full">
                        {relatedPost.entry.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold group-hover:text-primary transition-colors mb-2">
                      {relatedPost.entry.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.entry.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
