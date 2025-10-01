"use client";

import Link from "next/link";
import {
  ArrowRight,
  Funnel,
  Bot,
  CheckCircle,
  BarChart3,
  Clock,
  Users,
  Target,
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
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1,
      },
    },
  },
} as const;

export default function ProcessPage() {
  const processSteps = [
    {
      step: 1,
      title: "Lead Generation",
      subtitle: "Attract Your Ideal Clients",
      description:
        "We launch targeted campaigns and create high-converting funnels that attract your ideal clients and capture their information.",
      icon: <Funnel className="h-8 w-8" />,
      details: [
        "Facebook, Instagram & Google Ads setup",
        "High-converting landing pages",
        "Lead magnets and opt-in forms",
        "A/B testing and optimization",
      ],
      timeline: "Week 1-2",
      color: "primary",
    },
    {
      step: 2,
      title: "Automation & Follow-up",
      subtitle: "Never Miss a Lead Again",
      description:
        "Our AI systems and call center team qualify leads, nurture prospects, and book qualified appointments directly into your calendar.",
      icon: <Bot className="h-8 w-8" />,
      details: [
        "AI chatbot setup and training",
        "CRM integration and lead scoring",
        "Automated email/SMS sequences",
        "Call center qualification process",
      ],
      timeline: "Week 2-3",
      color: "secondary",
    },
    {
      step: 3,
      title: "Proposal & Closing",
      subtitle: "Focus on What You Do Best",
      description:
        "You focus on what you do best—consulting with pre-qualified prospects and closing deals with clients ready to invest.",
      icon: <CheckCircle className="h-8 w-8" />,
      details: [
        "Pre-qualified appointment scheduling",
        "Client consultation templates",
        "Proposal automation tools",
        "Deal closing best practices",
      ],
      timeline: "Week 3-4",
      color: "primary",
    },
    {
      step: 4,
      title: "Tracking & Analytics",
      subtitle: "Optimize for Growth",
      description:
        "We provide detailed reports and analytics so you can see exactly how your investment is performing and optimize for growth.",
      icon: <BarChart3 className="h-8 w-8" />,
      details: [
        "Performance dashboard setup",
        "ROI tracking and reporting",
        "Lead source analytics",
        "Monthly strategy optimization",
      ],
      timeline: "Ongoing",
      color: "secondary",
    },
  ];

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
                Your Roadmap to Success
              </div>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="font-serif mx-auto max-w-4xl text-balance text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Our Proven Process
              </TextEffect>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.3}
                as="p"
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                From first contact to closed deals, here&apos;s exactly what you
                can expect when working with Social Funnel. Our systematic
                approach ensures predictable results every time.
              </TextEffect>
            </motion.div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Process Roadmap - Curved River */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative md:min-h-[1200px]">
            {/* Curved River Path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
              viewBox="0 0 800 1200"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient
                  id="riverGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.8"
                  />
                  <stop
                    offset="25%"
                    stopColor="hsl(var(--secondary))"
                    stopOpacity="0.9"
                  />
                  <stop
                    offset="50%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.8"
                  />
                  <stop
                    offset="75%"
                    stopColor="hsl(var(--secondary))"
                    stopOpacity="0.9"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.8"
                  />
                </linearGradient>
                <filter id="glow">
                  <feMorphology operator="dilate" radius="3" />
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Main river path with brand colors */}
              <path
                d="M 150 100 
                   Q 250 150, 350 200
                   Q 450 250, 500 350
                   Q 550 450, 450 550
                   Q 350 650, 400 750
                   Q 450 850, 550 950
                   Q 650 1050, 650 1100"
                stroke="oklch(0.7228 0.1214 203.7873)"
                strokeWidth="12"
                fill="none"
                className="animate-pulse drop-shadow-lg"
                filter="url(#glow)"
              />

              {/* Animated flowing dots along the river */}
              <circle r="4" fill="hsl(var(--primary))" opacity="0.8">
                <animateMotion
                  dur="8s"
                  repeatCount="indefinite"
                  path="M 150 100 
                        Q 250 150, 350 200
                        Q 450 250, 500 350
                        Q 550 450, 450 550
                        Q 350 650, 400 750
                        Q 450 850, 550 950
                        Q 650 1050, 650 1100"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="3" fill="hsl(var(--secondary))" opacity="0.6">
                <animateMotion
                  dur="12s"
                  repeatCount="indefinite"
                  begin="2s"
                  path="M 150 100 
                        Q 250 150, 350 200
                        Q 450 250, 500 350
                        Q 550 450, 450 550
                        Q 350 650, 400 750
                        Q 450 850, 550 950
                        Q 650 1050, 650 1100"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.7;0.2"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="2" fill="hsl(var(--primary))" opacity="0.4">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  begin="4s"
                  path="M 150 100 
                        Q 250 150, 350 200
                        Q 450 250, 500 350
                        Q 550 450, 450 550
                        Q 350 650, 400 750
                        Q 450 850, 550 950
                        Q 650 1050, 650 1100"
                />
                <animate
                  attributeName="opacity"
                  values="0.1;0.5;0.1"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* River banks */}
              <path
                d="M 150 100 
                   Q 250 150, 350 200
                   Q 450 250, 500 350
                   Q 550 450, 450 550
                   Q 350 650, 400 750
                   Q 450 850, 550 950
                   Q 650 1050, 650 1100"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeOpacity="0.2"
                fill="none"
                strokeDasharray="4,2"
                transform="translate(-15, 0)"
              />

              <path
                d="M 150 100 
                   Q 250 150, 350 200
                   Q 450 250, 500 350
                   Q 550 450, 450 550
                   Q 350 650, 400 750
                   Q 450 850, 550 950
                   Q 650 1050, 650 1100"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeOpacity="0.2"
                fill="none"
                strokeDasharray="4,2"
                transform="translate(15, 0)"
              />
            </svg>

            {/* Process Cards positioned along the river - Desktop Only */}
            <div className="relative z-10 hidden md:block">
              {/* Step 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute top-0 left-0 md:left-16"
              >
                <div className="group relative w-80 max-w-[90vw]">
                  {/* Step number floating badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>

                  {/* Card */}
                  <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Funnel className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold">
                          {processSteps[0].title}
                        </h3>
                        <p className="text-sm text-primary font-medium">
                          {processSteps[0].timeline}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {processSteps[0].description}
                    </p>
                    <div className="space-y-2">
                      {processSteps[0].details
                        .slice(0, 2)
                        .map((detail, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">
                              {detail}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 - Center Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-60 right-0 md:right-16"
              >
                <div className="group relative w-80 max-w-[90vw]">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>

                  <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-secondary/30 hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                        <Bot className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold">
                          {processSteps[1].title}
                        </h3>
                        <p className="text-sm text-secondary font-medium">
                          {processSteps[1].timeline}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {processSteps[1].description}
                    </p>
                    <div className="space-y-2">
                      {processSteps[1].details
                        .slice(0, 2)
                        .map((detail, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-secondary flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">
                              {detail}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 - Center Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-[480px] left-0 md:left-32"
              >
                <div className="group relative w-80 max-w-[90vw]">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>

                  <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold">
                          {processSteps[2].title}
                        </h3>
                        <p className="text-sm text-primary font-medium">
                          {processSteps[2].timeline}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {processSteps[2].description}
                    </p>
                    <div className="space-y-2">
                      {processSteps[2].details
                        .slice(0, 2)
                        .map((detail, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">
                              {detail}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 4 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-[720px] right-0 md:right-16"
              >
                <div className="group relative w-80 max-w-[90vw]">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                    4
                  </div>

                  <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-secondary/30 hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                        <BarChart3 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold">
                          {processSteps[3].title}
                        </h3>
                        <p className="text-sm text-secondary font-medium">
                          {processSteps[3].timeline}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {processSteps[3].description}
                    </p>
                    <div className="space-y-2">
                      {processSteps[3].details
                        .slice(0, 2)
                        .map((detail, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-secondary flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">
                              {detail}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile version - stacked cards */}
            <div className="md:hidden space-y-6 px-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Step progress indicator */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 ${
                        step.color === "primary"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      } rounded-full flex items-center justify-center text-lg font-bold shadow-md`}
                    >
                      {step.step}
                    </div>
                    <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          step.color === "primary"
                            ? "bg-primary"
                            : "bg-secondary"
                        } rounded-full`}
                        style={{ width: `${(step.step / 4) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${
                          step.color === "primary"
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary/10 text-secondary"
                        } flex items-center justify-center flex-shrink-0`}
                      >
                        {step.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-serif font-bold leading-tight mb-1">
                          {step.title}
                        </h3>
                        <div
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            step.color === "primary"
                              ? "bg-primary/10 text-primary"
                              : "bg-secondary/10 text-secondary"
                          }`}
                        >
                          <Clock className="w-3 h-3 mr-1" />
                          {step.timeline}
                        </div>
                      </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-base font-medium text-muted-foreground mb-3">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.slice(0, 4).map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle
                            className={`h-4 w-4 mt-0.5 ${
                              step.color === "primary"
                                ? "text-primary"
                                : "text-secondary"
                            } flex-shrink-0`}
                          />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connection line to next step */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="flex justify-center py-4"
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1 + 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-secondary/50 relative overflow-hidden">
                        {/* Animated flowing effect */}
                        <motion.div
                          className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-primary/70 to-transparent"
                          animate={{
                            y: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.3 + 1,
                          }}
                        />

                        {/* Pulsing dot */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary/60 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2 + 0.8,
                          }}
                        />

                        {/* Secondary flowing dot */}
                        <motion.div
                          className="absolute w-1 h-1 bg-secondary/80 rounded-full left-1/2 -translate-x-1/2"
                          animate={{
                            y: [0, 32, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.4 + 1.5,
                          }}
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of high-ticket service businesses that have
              transformed their growth with our proven process.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-foreground/5 rounded-2xl border p-0.5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl px-8 py-6 text-base font-semibold group"
                >
                  <Link
                    href="https://calendly.com/musemind/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>Book Your Strategy Call</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl px-8 py-6 text-base font-semibold border-2 hover:bg-primary/5"
              >
                <Link href="/services" className="flex items-center gap-2">
                  <span>View Our Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
