"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Calendar,
  Mail,
  Linkedin,
  Building,
  MapPin,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

const stats = [
  {
    number: "$10K+",
    label: "Minimum Client Value",
    description: "We specialize in high-ticket services (>Ksh 1M per sale)",
    icon: <Target className="h-8 w-8" />,
    color: "primary",
  },
  {
    number: "100%",
    label: "Systems-Based Approach",
    description: "Predictable revenue through proven frameworks",
    icon: <Award className="h-8 w-8" />,
    color: "secondary",
  },
  {
    number: "24/7",
    label: "Automated Operations",
    description: "AI-powered systems that work around the clock",
    icon: <TrendingUp className="h-8 w-8" />,
    color: "primary",
  },
  {
    number: "ROI",
    label: "Results-Focused",
    description:
      "Every campaign built for client acquisition, not vanity metrics",
    icon: <Users className="h-8 w-8" />,
    color: "secondary",
  },
];

const specializations = [
  {
    title: "High-Ticket Services",
    description:
      "We specialize in service industries like construction, healthcare, and professional services—where trust and precision matter most. Minimum product value of $10,000 per sale.",
    icon: <Target className="h-6 w-6" />,
    color: "primary",
  },
  {
    title: "Scalable Systems",
    description:
      "We focus on scalability: systems that grow with you, not ones you'll outgrow. Built for predictable revenue and long-term growth.",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "secondary",
  },
  {
    title: "ROI-Focused",
    description:
      "We prioritize ROI above all else—because marketing isn't about noise, it's about results. Every campaign is built for client acquisition.",
    icon: <Award className="h-6 w-6" />,
    color: "primary",
  },
  {
    title: "End-to-End Solutions",
    description:
      "From lead generation to dedicated call centers, we provide complete Business Development solutions using the latest technologies for efficiency and accuracy.",
    icon: <Globe className="h-6 w-6" />,
    color: "secondary",
  },
];

export default function About() {
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
                About Social Funnel
              </div>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="font-serif mx-auto max-w-4xl text-balance text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Transforming Businesses Through Strategic Lead Generation
              </TextEffect>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.3}
                as="p"
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
              >
                Based in Nairobi, Kenya, we specialize in helping service-based
                businesses generate high-quality leads and scale their
                operations through proven automation systems and dedicated
                support.
              </TextEffect>

              <motion.div
                variants={transitionVariants.item}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/process">View Our Process</Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedGroup variants={transitionVariants}>
              <motion.div variants={transitionVariants.item}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-semibold mb-6">
                  <Building className="h-4 w-4" />
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                  From Vision to Reality: The Social Funnel Journey
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Social Funnel was founded in 2020 by Elvis Wangari with a
                    clear vision: to bridge the gap between traditional Kenyan
                    businesses and modern digital marketing. What started as a
                    one-person consultancy in Nanyuki has grown into East
                    Africa&apos;s premier marketing automation agency.
                  </p>
                  <p>
                    The inspiration came from witnessing countless local service
                    businesses— construction companies, healthcare providers,
                    professional services— struggling to generate consistent
                    leads despite offering exceptional value. These weren&apos;t
                    businesses lacking quality; they lacked systems.
                  </p>
                  <p>
                    Today, Social Funnel operates from our headquarters in Cape
                    Chestnut, Nanyuki, with a dedicated team of 8 specialists.
                    We&apos;ve evolved from basic lead generation to
                    comprehensive business development solutions, including
                    AI-powered automation, dedicated call centers, and
                    sophisticated CRM systems.
                  </p>
                  <p>
                    Our growth mirrors Kenya&apos;s digital transformation. As
                    more businesses recognize the power of strategic marketing,
                    Social Funnel has positioned itself as the trusted partner
                    for companies ready to scale beyond traditional boundaries
                    and embrace predictable, automated growth.
                  </p>
                </div>
              </motion.div>
            </AnimatedGroup>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="space-y-6">
                {/* Timeline */}
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

                  <div className="space-y-8">
                    <div className="relative flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold relative z-10">
                        1
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-serif font-bold text-primary mb-1">
                          2020 - The Beginning
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Elvis Wangari founded Social Funnel in Nanyuki,
                          starting with basic lead generation for local
                          businesses.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold relative z-10">
                        2
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-serif font-bold text-secondary mb-1">
                          2022 - Team Expansion
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Grew to a team of specialists including automation
                          experts, creative directors, and call center managers.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold relative z-10">
                        3
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-serif font-bold text-primary mb-1">
                          2023 - Technology Focus
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Introduced AI-powered automation, dedicated call
                          centers, and sophisticated CRM integrations.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold relative z-10">
                        4
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-serif font-bold text-secondary mb-1">
                          2024 - Regional Leader
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Established as East Africa&apos;s premier marketing
                          automation agency, serving high-ticket service
                          businesses across the region.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-serif font-bold">
                      Our Home Base
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Cape Chestnut, Nanyuki - Where innovation meets the stunning
                    backdrop of Mount Kenya, inspiring our team to reach new
                    heights.
                  </p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>P.O. Box 1215 - 10400</p>
                    <p>+254 721634183</p>
                    <p>info@socialfunnel.agency</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-primary/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Mission */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
                  <Target className="h-4 w-4" />
                  Our Mission
                </div>
                <h3 className="text-2xl font-serif font-bold">
                  Empowering Service Businesses Through Strategic Systems
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To build client acquisition systems that create predictable
                  revenue and freedom for service businesses—while funding
                  generational impact across Africa. We use our skills to solve
                  real-world problems and transform how businesses connect with
                  their ideal clients.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">
                      African Impact
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">
                      Predictable Growth
                    </span>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-semibold">
                  <Star className="h-4 w-4" />
                  Our Vision
                </div>
                <h3 className="text-2xl font-serif font-bold">
                  Leading Africa&apos;s Digital Transformation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become East Africa&apos;s premier marketing agency,
                  recognized for delivering exceptional results and pioneering
                  innovative business development solutions. We envision a
                  future where every service business has access to world-class
                  marketing systems that drive sustainable growth and create
                  lasting impact.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">
                      Premier Agency
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">
                      Lasting Impact
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <motion.div
              variants={transitionVariants.item}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Meet the Team Behind Social Funnel
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our dedicated team of marketing professionals, strategists, and
                automation experts work together to deliver exceptional results
                for our clients across Kenya and East Africa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Founder & CEO */}
              <motion.div
                variants={transitionVariants.item}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Elvis Wangari - Founder & CEO"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold mb-1">
                    Elvis Wangari
                  </h3>
                  <p className="text-primary font-medium mb-2 text-sm">
                    Founder &amp; CEO
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Visionary leader driving Social Funnel&apos;s mission to
                    transform service businesses through strategic automation.
                  </p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Strategy
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Leadership
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="mailto:elvis@socialfunnel.agency"
                      className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                    <a
                      href="https://linkedin.com/in/elviswangari"
                      className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Head of Operations */}
              <motion.div
                variants={transitionVariants.item}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Sarah Kimani - Head of Operations"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold mb-1">
                    Sarah Kimani
                  </h3>
                  <p className="text-secondary font-medium mb-2 text-sm">
                    Head of Operations
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Ensures seamless operations and exceptional client
                    experience across all Social Funnel services.
                  </p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                        Operations
                      </span>
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                        Client Success
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="mailto:sarah@socialfunnel.agency"
                      className="w-7 h-7 bg-secondary/10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                    <a
                      href="#"
                      className="w-7 h-7 bg-secondary/10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Lead Generation Manager */}
              <motion.div
                variants={transitionVariants.item}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="James Mwangi - Lead Generation Manager"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold mb-1">
                    James Mwangi
                  </h3>
                  <p className="text-primary font-medium mb-2 text-sm">
                    Lead Generation Manager
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Specializes in creating high-converting campaigns that
                    consistently deliver quality leads for our clients.
                  </p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Facebook Ads
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Google Ads
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="mailto:james@socialfunnel.agency"
                      className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                    <a
                      href="#"
                      className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Marketing Automation Specialist */}
              <motion.div
                variants={transitionVariants.item}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Grace Wanjiku - Automation Specialist"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold mb-1">
                    Grace Wanjiku
                  </h3>
                  <p className="text-secondary font-medium mb-2 text-sm">
                    Automation Specialist
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Builds and optimizes marketing automation systems that
                    nurture leads and drive conversions on autopilot.
                  </p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                        Automation
                      </span>
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                        CRM Setup
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="mailto:grace@socialfunnel.agency"
                      className="w-7 h-7 bg-secondary/10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                    <a
                      href="#"
                      className="w-7 h-7 bg-secondary/10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Call Center Manager */}
              <motion.div
                variants={transitionVariants.item}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Peter Kariuki - Call Center Manager"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold mb-1">
                    Peter Kariuki
                  </h3>
                  <p className="text-primary font-medium mb-2 text-sm">
                    Call Center Manager
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Manages our dedicated call center team, ensuring every lead
                    receives professional follow-up and qualification.
                  </p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Lead Nurturing
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Team Training
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="mailto:peter@socialfunnel.agency"
                      className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                    <a
                      href="#"
                      className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Creative Director */}
              <motion.div
                variants={transitionVariants.item}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Mary Njeri - Creative Director"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold mb-1">
                    Mary Njeri
                  </h3>
                  <p className="text-secondary font-medium mb-2 text-sm">
                    Creative Director
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Leads brand design and funnel creation, ensuring every
                    client touchpoint reflects professionalism and trust.
                  </p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                        Brand Design
                      </span>
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                        Funnel Design
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="mailto:mary@socialfunnel.agency"
                      className="w-7 h-7 bg-secondary/10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                    <a
                      href="#"
                      className="w-7 h-7 bg-secondary/10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Data Analytics Manager */}
              <motion.div
                variants={transitionVariants.item}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="David Kimeu - Analytics Manager"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold mb-1">
                    David Kimeu
                  </h3>
                  <p className="text-primary font-medium mb-2 text-sm">
                    Analytics Manager
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Tracks campaign performance and ROI, providing insights that
                    drive data-informed optimization decisions.
                  </p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Data Analysis
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        ROI Tracking
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="mailto:david@socialfunnel.agency"
                      className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                    <a
                      href="#"
                      className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Client Success Manager */}
              <motion.div
                variants={transitionVariants.item}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Ruth Muthoni - Client Success Manager"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold mb-1">
                    Ruth Muthoni
                  </h3>
                  <p className="text-secondary font-medium mb-2 text-sm">
                    Client Success Manager
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Dedicated to ensuring client satisfaction and long-term
                    success through strategic relationship management.
                  </p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                        Relationship Mgmt
                      </span>
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                        Account Growth
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="mailto:ruth@socialfunnel.agency"
                      className="w-7 h-7 bg-secondary/10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                    <a
                      href="#"
                      className="w-7 h-7 bg-secondary/10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <motion.div
              variants={transitionVariants.item}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Why Clients Choose Social Funnel
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our specialized approach and commitment to results set us apart
                in the business development industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specializations.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={transitionVariants.item}
                  className="group relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${
                        value.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      } flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <motion.div
              variants={transitionVariants.item}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Proven Results That Speak for Themselves
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our track record demonstrates our commitment to delivering
                exceptional results for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={transitionVariants.item}
                  className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${
                      stat.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`text-3xl md:text-4xl font-serif font-bold mb-2 ${
                      stat.color === "primary"
                        ? "text-primary"
                        : "text-secondary"
                    }`}
                  >
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-primary/10"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses who trust Social Funnel to
              generate high-quality leads and accelerate their growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="https://calendly.com/musemind/30min">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
