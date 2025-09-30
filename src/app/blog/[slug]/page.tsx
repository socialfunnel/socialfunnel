"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  Copy,
  Tag,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: "complete-guide-lead-generation-2024",
    title:
      "The Complete Guide to Lead Generation for High-Ticket Services in 2024",
    excerpt:
      "Discover proven strategies to generate quality leads for your high-ticket service business. Learn from real case studies and actionable insights.",
    author: {
      name: "Elvis Wangari",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      role: "Founder & CEO",
      bio: "Elvis is the founder of Social Funnel and has over 8 years of experience in digital marketing and business development. He specializes in helping service businesses scale through strategic automation and lead generation.",
    },
    publishedAt: "2024-03-15",
    readTime: "8 min read",
    views: "2.1k",
    category: "Lead Generation",
    tags: ["Lead Generation", "B2B Marketing", "Sales Funnel", "Automation"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=80",
    content: `
      <p class="lead">In today's competitive marketplace, generating high-quality leads for high-ticket services requires a strategic approach that goes beyond traditional marketing tactics. This comprehensive guide will walk you through proven strategies that we've used to help our clients generate over $10M in new business.</p>

      <h2>Why Traditional Lead Generation Falls Short for High-Ticket Services</h2>
      
      <p>High-ticket services (typically $10,000+ in value) require a different approach to lead generation. Unlike low-cost products that rely on impulse purchases, high-ticket services involve:</p>
      
      <ul>
        <li>Longer decision-making processes</li>
        <li>Multiple stakeholders in the buying decision</li>
        <li>Higher levels of trust and credibility requirements</li>
        <li>More detailed research and comparison phases</li>
      </ul>

      <blockquote>
        "The biggest mistake we see businesses make is treating high-ticket lead generation like e-commerce. The strategies that work for selling $50 products will fail miserably when selling $50,000 services." - Elvis Wangari, Founder of Social Funnel
      </blockquote>

      <h2>The 5-Step Framework for High-Ticket Lead Generation</h2>

      <h3>1. Define Your Ideal Client Profile (ICP)</h3>
      
      <p>Before you can generate quality leads, you need to know exactly who you're targeting. Our ICP framework includes:</p>
      
      <ul>
        <li><strong>Demographics:</strong> Industry, company size, location, revenue</li>
        <li><strong>Psychographics:</strong> Pain points, goals, values, motivations</li>
        <li><strong>Behavioral:</strong> Where they consume content, how they make decisions</li>
        <li><strong>Situational:</strong> Current challenges, timing, budget authority</li>
      </ul>

      <h3>2. Create Authority-Building Content</h3>
      
      <p>High-ticket prospects need to see you as an authority in your field. This means creating content that demonstrates your expertise:</p>
      
      <ul>
        <li>In-depth case studies showing real results</li>
        <li>Industry reports and original research</li>
        <li>Thought leadership articles on industry trends</li>
        <li>Video testimonials from satisfied clients</li>
      </ul>

      <h3>3. Implement Multi-Channel Lead Magnets</h3>
      
      <p>A single lead magnet won't cut it for high-ticket services. You need multiple touchpoints:</p>
      
      <ul>
        <li><strong>Educational Resources:</strong> Whitepapers, guides, toolkits</li>
        <li><strong>Assessment Tools:</strong> ROI calculators, readiness assessments</li>
        <li><strong>Exclusive Content:</strong> Webinars, private LinkedIn groups</li>
        <li><strong>Direct Engagement:</strong> Strategy sessions, consultations</li>
      </ul>

      <h3>4. Nurture Leads with Personalized Sequences</h3>
      
      <p>High-ticket leads require personalized nurturing. Generic email sequences won't work. Instead:</p>
      
      <ul>
        <li>Segment leads based on their specific challenges</li>
        <li>Create industry-specific nurture sequences</li>
        <li>Include personal video messages from your team</li>
        <li>Provide relevant case studies and social proof</li>
      </ul>

      <h3>5. Qualify and Convert Through Consultative Selling</h3>
      
      <p>The final step is converting qualified leads through consultative selling:</p>
      
      <ul>
        <li>Discovery calls to understand specific needs</li>
        <li>Custom proposals based on their situation</li>
        <li>Proof of concept or pilot programs</li>
        <li>Clear next steps and decision timelines</li>
      </ul>

      <h2>Real Results: Case Study from Our Construction Client</h2>
      
      <p>To illustrate these principles in action, let me share a recent case study from our work with a Kenyan construction company:</p>
      
      <div class="case-study-box">
        <h4>Client Background:</h4>
        <ul>
          <li>Large construction company specializing in commercial buildings</li>
          <li>Average project value: $500,000 - $2M</li>
          <li>Previous lead generation: Word of mouth and cold calling</li>
        </ul>
        
        <h4>Our Strategy:</h4>
        <ul>
          <li>Created an "Construction Cost Calculator" as a lead magnet</li>
          <li>Developed LinkedIn content showcasing completed projects</li>
          <li>Set up targeted Facebook and Google ads</li>
          <li>Implemented a 12-email nurture sequence</li>
        </ul>
        
        <h4>Results (6 months):</h4>
        <ul>
          <li>Generated 150+ qualified leads</li>
          <li>Converted 12 leads to clients</li>
          <li>Total new business: $8.2M</li>
          <li>ROI: 340%</li>
        </ul>
      </div>

      <h2>Common Mistakes to Avoid</h2>
      
      <p>After working with hundreds of service businesses, we've identified the most common mistakes:</p>
      
      <ol>
        <li><strong>Focusing on quantity over quality:</strong> 100 unqualified leads are worthless compared to 10 qualified ones</li>
        <li><strong>Generic messaging:</strong> Your messaging must speak directly to your ICP's specific challenges</li>
        <li><strong>Lack of follow-up system:</strong> Most high-ticket sales happen after multiple touchpoints</li>
        <li><strong>Not tracking the right metrics:</strong> Focus on qualified leads and conversion rates, not just traffic</li>
        <li><strong>Selling too early:</strong> Build trust and authority before making your pitch</li>
      </ol>

      <h2>Tools and Technologies We Recommend</h2>
      
      <p>Here are the essential tools for implementing this framework:</p>
      
      <ul>
        <li><strong>CRM:</strong> HubSpot or Pipedrive for lead management</li>
        <li><strong>Email Marketing:</strong> ConvertKit or ActiveCampaign for nurturing</li>
        <li><strong>Landing Pages:</strong> Unbounce or Leadpages for conversion optimization</li>
        <li><strong>Analytics:</strong> Google Analytics 4 and Facebook Pixel for tracking</li>
        <li><strong>Social Media:</strong> Hootsuite or Buffer for content scheduling</li>
      </ul>

      <h2>Next Steps: Implementing Your Lead Generation System</h2>
      
      <p>Ready to implement these strategies in your business? Here's your action plan:</p>
      
      <ol>
        <li><strong>Week 1:</strong> Define your ICP using our framework</li>
        <li><strong>Week 2:</strong> Audit your current content and identify gaps</li>
        <li><strong>Week 3-4:</strong> Create your first lead magnet</li>
        <li><strong>Week 5-6:</strong> Set up your nurture sequences</li>
        <li><strong>Week 7-8:</strong> Launch and optimize your campaigns</li>
      </ol>

      <p>Remember, lead generation for high-ticket services is a marathon, not a sprint. It takes time to build authority and trust, but the results are worth it.</p>

      <h2>Get Expert Help</h2>
      
      <p>If you'd like help implementing these strategies in your business, Social Funnel specializes in lead generation for high-ticket service businesses across Kenya and East Africa. We've helped our clients generate over $10M in new business using these exact strategies.</p>
      
      <p><a href="/contact" class="text-primary">Schedule a free strategy session</a> to see how we can help you implement a predictable lead generation system for your business.</p>
    `,
  },
  // Add more blog posts here...
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

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
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-12">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {post.excerpt}
              </p>
            </div>

            {/* Author and Meta Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-border/50">
              <div className="flex items-center gap-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{post.author.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{post.views} views</span>
                </div>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="flex items-center justify-between py-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">
                  Share:
                </span>
                <Button variant="ghost" size="sm">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg prose-gray dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Tags */}
      <section className="pb-12">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-b border-border/50 py-6"
          >
            <h3 className="text-sm font-semibold mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-xl font-serif font-bold mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {post.author.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-primary/10"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Implement These Strategies?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how Social Funnel can help you build a
              predictable lead generation system for your high-ticket service
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read More Articles</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
