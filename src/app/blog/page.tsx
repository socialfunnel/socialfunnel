import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextEffect } from "@/components/ui/text-effect";
import { reader } from "@/utils/reader";
import {
  BlogAnimatedGroup,
  BlogMotionItem,
} from "@/components/blog-animations";
import { Metadata } from "next";
import { authors } from "@/lib/author";

export const metadata: Metadata = {
  title: "Marketing Insights & Strategy Blog | SocialFunnel",
  description:
    "Discover proven marketing strategies, case studies, and actionable insights to grow your high-ticket service business. Expert advice from our team at SocialFunnel.",
  keywords:
    "marketing blog, lead generation, business growth, marketing automation, digital strategy, case studies",
  openGraph: {
    title: "Marketing Insights That Drive Results | SocialFunnel Blog",
    description:
      "Get proven strategies, case studies, and actionable insights to grow your high-ticket service business.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Insights That Drive Results | SocialFunnel Blog",
    description:
      "Get proven strategies, case studies, and actionable insights to grow your high-ticket service business.",
  },
};

// Reader is now imported from utils

const categories = [
  "All Posts",
  "Lead Generation",
  "Marketing Automation",
  "Business Growth",
  "Digital Strategy",
];

type PostEntry = Awaited<
  ReturnType<Awaited<ReturnType<typeof reader>>["collections"]["posts"]["all"]>
>[0];

export default async function BlogPage() {
  let sortedPosts: PostEntry[] = [];
  let featuredPosts: PostEntry[] = [];

  try {
    // Read the "Posts" collection
    const posts = await (await reader()).collections.posts.all();

    // Sort posts by published date (newest first)
    sortedPosts = posts.sort((a, b) => {
      const dateA = a.entry.publishedAt
        ? new Date(a.entry.publishedAt)
        : new Date(0);
      const dateB = b.entry.publishedAt
        ? new Date(b.entry.publishedAt)
        : new Date(0);
      return dateB.getTime() - dateA.getTime();
    });

    // Get featured posts
    featuredPosts = sortedPosts.filter((post) => post.entry.featured);
  } catch (error) {
    console.error("Error loading blog posts:", error);
    // Arrays are already initialized as empty above
  }

  return (
    <main className="overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="pt-24 md:pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Insights & Strategies
            </div>

            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="font-serif mx-auto max-w-4xl text-balance text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Marketing Insights That Drive Results
            </TextEffect>

            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.3}
              as="p"
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Discover proven strategies, case studies, and actionable insights
              to grow your high-ticket service business. Learn from our
              team&apos;s experience working with businesses across Kenya and
              East Africa.
            </TextEffect>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <BlogMotionItem className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-12 h-12 text-base"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  size="default"
                  className="text-sm px-4 py-2 h-10"
                >
                  {category}
                </Button>
              ))}
            </div>
          </BlogMotionItem>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <BlogMotionItem className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Featured Posts
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredPosts.slice(0, 2).map((post) => (
                  <div
                    key={post.slug}
                    className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="flex flex-col h-full">
                      {post.entry.image && (
                        <div className="mb-4 overflow-hidden rounded-xl">
                          <Image
                            src={post.entry.image}
                            alt={post.entry.title}
                            width={400}
                            height={250}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <div className="mb-3">
                        <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          {post.entry.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.entry.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-2 text-sm flex-grow">
                        {post.entry.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Image
                            src={
                              authors[post.entry.author as keyof typeof authors]
                                .avatar
                            }
                            alt={
                              authors[post.entry.author as keyof typeof authors]
                                .name
                            }
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-xs font-semibold">
                              {
                                authors[
                                  post.entry.author as keyof typeof authors
                                ].name
                              }
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.entry.publishedAt
                              ? new Date(
                                  post.entry.publishedAt
                                ).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })
                              : "Date not available"}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.entry.readTime}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end mt-auto">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="h-7 px-3 text-xs"
                        >
                          <Link href={`/blog/${post.slug}`}>
                            Read More
                            <ArrowRight className="ml-1 h-2 w-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </BlogMotionItem>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <BlogMotionItem className="mb-12">
            <h2 className="text-2xl font-serif font-bold flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-secondary" />
              Latest Articles
            </h2>
          </BlogMotionItem>

          <BlogAnimatedGroup>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post) => (
                <BlogMotionItem key={post.slug}>
                  <div className="group bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/30 flex flex-col h-full">
                    {post.entry.image && (
                      <div className="mb-4 overflow-hidden rounded-2xl">
                        <Image
                          src={post.entry.image}
                          alt={post.entry.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="flex flex-col flex-grow">
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-semibold rounded-full">
                          {post.entry.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-serif font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                        {post.entry.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                        {post.entry.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2">
                          <Image
                            src={
                              authors[post.entry.author as keyof typeof authors]
                                .avatar
                            }
                            alt={
                              authors[post.entry.author as keyof typeof authors]
                                .name
                            }
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-xs font-medium">
                              {
                                authors[
                                  post.entry.author as keyof typeof authors
                                ].name
                              }
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.entry.publishedAt
                              ? new Date(
                                  post.entry.publishedAt
                                ).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })
                              : "Date not available"}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.entry.readTime}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end mt-auto">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="h-7 px-3 text-xs"
                        >
                          <Link href={`/blog/${post.slug}`}>
                            Read More
                            <ArrowRight className="ml-1 h-2 w-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </BlogMotionItem>
              ))}
            </div>
          </BlogAnimatedGroup>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-4xl px-6">
          <BlogMotionItem className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-primary/10">
            <Target className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Never Miss an Insight
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get our latest marketing strategies, case studies, and business
              growth insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="h-12"
              />
              <Button size="lg" className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </BlogMotionItem>
        </div>
      </section>
    </main>
  );
}
