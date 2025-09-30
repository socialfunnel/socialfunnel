"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Search,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { motion } from "motion/react";

const transitionVariants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.4,
        duration: 0.8,
      },
    },
  },
};

const categories = [
  "All Posts",
  "Lead Generation",
  "Marketing Automation",
  "Business Growth",
  "Digital Strategy",
  "Case Studies",
];

const blogPosts = [
  {
    id: 1,
    slug: "complete-guide-lead-generation-2024",
    title:
      "The Complete Guide to Lead Generation for High-Ticket Services in 2024",
    excerpt:
      "Discover proven strategies to generate quality leads for your high-ticket service business. Learn from real case studies and actionable insights.",
    content: "Full blog post content here...",
    author: {
      name: "Elvis Wangari",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      role: "Founder & CEO",
    },
    publishedAt: "2024-03-15",
    readTime: "8 min read",
    category: "Lead Generation",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
    featured: true,
  },
  {
    id: 2,
    slug: "marketing-automation-roi-calculator",
    title:
      "How to Calculate ROI from Marketing Automation: A Step-by-Step Guide",
    excerpt:
      "Learn how to measure and calculate the return on investment from your marketing automation efforts with our comprehensive framework.",
    content: "Full blog post content here...",
    author: {
      name: "Sarah Kimani",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      role: "Head of Operations",
    },
    publishedAt: "2024-03-10",
    readTime: "6 min read",
    category: "Marketing Automation",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=80",
    featured: false,
  },
  {
    id: 3,
    slug: "scaling-service-business-kenya",
    title: "Scaling Your Service Business in Kenya: 5 Proven Strategies",
    excerpt:
      "Practical insights on how Kenyan service businesses can scale effectively using modern marketing and automation strategies.",
    content: "Full blog post content here...",
    author: {
      name: "James Mwangi",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      role: "Lead Generation Manager",
    },
    publishedAt: "2024-03-05",
    readTime: "10 min read",
    category: "Business Growth",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&auto=format&q=80",
    featured: false,
  },
  {
    id: 4,
    slug: "facebook-ads-b2b-services",
    title: "Facebook Ads for B2B Services: What Actually Works in 2024",
    excerpt:
      "Cut through the noise and discover the Facebook advertising strategies that actually drive results for B2B service companies.",
    content: "Full blog post content here...",
    author: {
      name: "Grace Wanjiku",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      role: "Automation Specialist",
    },
    publishedAt: "2024-02-28",
    readTime: "7 min read",
    category: "Digital Strategy",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&auto=format&q=80",
    featured: false,
  },
  {
    id: 5,
    slug: "case-study-construction-company-leads",
    title:
      "Case Study: How We Generated 150+ Qualified Leads for a Kenyan Construction Company",
    excerpt:
      "A detailed breakdown of our lead generation campaign that resulted in 150+ qualified leads and $2M in new business for our client.",
    content: "Full blog post content here...",
    author: {
      name: "David Kimeu",
      avatar:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      role: "Analytics Manager",
    },
    publishedAt: "2024-02-20",
    readTime: "12 min read",
    category: "Case Studies",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format&q=80",
    featured: false,
  },
  {
    id: 6,
    slug: "email-marketing-automation-workflow",
    title:
      "Building High-Converting Email Marketing Workflows That Actually Work",
    excerpt:
      "Step-by-step guide to creating email marketing automation workflows that nurture leads and drive conversions for service businesses.",
    content: "Full blog post content here...",
    author: {
      name: "Mary Njeri",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      role: "Creative Director",
    },
    publishedAt: "2024-02-15",
    readTime: "9 min read",
    category: "Marketing Automation",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format&q=80",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
          <AnimatedGroup variants={transitionVariants}>
            <motion.div
              variants={transitionVariants.item}
              className="text-center mb-16"
            >
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
                Discover proven strategies, case studies, and actionable
                insights to grow your high-ticket service business. Learn from
                our team&apos;s experience working with businesses across Kenya
                and East Africa.
              </TextEffect>
            </motion.div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8"
          >
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-9 h-9 text-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="text-xs px-3 py-1 h-7"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Featured Article
              </h2>

              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span>{featuredPost.author.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(
                            featuredPost.publishedAt
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <Button asChild className="group w-fit">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-serif font-bold flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-secondary" />
              Latest Articles
            </h2>
          </motion.div>

          <AnimatedGroup variants={transitionVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={transitionVariants.item}
                  className="group bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-secondary/90 text-secondary-foreground text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={16}
                          height={16}
                          className="rounded-full"
                        />
                        <span>{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 group/link"
                      >
                        Read More
                        <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </AnimatedGroup>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-primary/10"
          >
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
