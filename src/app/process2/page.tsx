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

export default function Process2Page() {
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

      {/* Social Funnel Process */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <TextEffect
              per="word"
              as="h2"
              preset="slide"
              className="text-3xl md:text-4xl font-bold font-serif mb-4"
            >
              Social Funnel Process
            </TextEffect>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch how we guide your prospects through our proven conversion
              funnel, transforming awareness into action.
            </p>
          </div>

          <div className="relative min-h-[800px] md:min-h-[700px]">
            {/* Funnel SVG Background - Desktop */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
              viewBox="0 0 600 700"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient
                  id="funnelGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.9"
                  />
                  <stop
                    offset="50%"
                    stopColor="hsl(var(--secondary))"
                    stopOpacity="0.8"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.9"
                  />
                </linearGradient>
                <radialGradient id="funnelFlow" cx="50%" cy="50%" r="50%">
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.8"
                  />
                </radialGradient>
                <filter id="glow">
                  <feMorphology operator="dilate" radius="2" />
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Realistic Funnel Shape */}

              {/* Main funnel body with curved sides - much wider opening */}
              <path
                d="M 80 60 
                   Q 50 70, 50 100
                   L 50 350
                   Q 50 380, 70 400
                   L 260 520
                   Q 280 540, 300 540
                   Q 320 540, 340 520
                   L 530 400
                   Q 550 380, 550 350
                   L 550 100
                   Q 550 70, 520 60
                   L 80 60 Z"
                fill="url(#funnelGradient)"
                stroke="oklch(0.7228 0.1214 203.7873)"
                strokeWidth="3"
                className="drop-shadow-lg opacity-85"
                filter="url(#glow)"
              />

              {/* Funnel neck (narrow part) */}
              <path
                d="M 260 520
                   Q 280 540, 300 540
                   Q 320 540, 340 520
                   L 340 580
                   Q 340 600, 320 600
                   L 280 600
                   Q 260 600, 260 580
                   L 260 520 Z"
                fill="url(#funnelGradient)"
                stroke="oklch(0.7228 0.1214 203.7873)"
                strokeWidth="3"
                className="drop-shadow-lg opacity-90"
                filter="url(#glow)"
              />

              {/* Large funnel rim (top edge) - much bigger opening */}
              <ellipse
                cx="300"
                cy="60"
                rx="240"
                ry="25"
                fill="oklch(0.7228 0.1214 203.7873)"
                opacity="0.4"
                className="drop-shadow-lg"
              />

              {/* Inner rim shadow for depth */}
              <ellipse
                cx="300"
                cy="65"
                rx="235"
                ry="20"
                fill="oklch(0.5 0.1 203)"
                opacity="0.2"
                className="drop-shadow-md"
              />

              {/* Funnel sections - curved dividers matching wider opening */}
              <path
                d="M 75 180 Q 300 190, 525 180"
                stroke="oklch(0.7228 0.1214 203.7873)"
                strokeWidth="2"
                opacity="0.6"
                fill="none"
              />
              <path
                d="M 110 280 Q 300 290, 490 280"
                stroke="oklch(0.7228 0.1214 203.7873)"
                strokeWidth="2"
                opacity="0.6"
                fill="none"
              />
              <path
                d="M 150 380 Q 300 390, 450 380"
                stroke="oklch(0.7228 0.1214 203.7873)"
                strokeWidth="2"
                opacity="0.6"
                fill="none"
              />

              {/* Central flow line through funnel */}
              <path
                d="M 300 60 L 300 520 L 300 600"
                stroke="oklch(0.7228 0.1214 203.7873)"
                strokeWidth="4"
                fill="none"
                className="animate-pulse drop-shadow-lg"
                filter="url(#glow)"
                opacity="0.4"
              />

              {/* Funnel spout opening */}
              <circle
                cx="300"
                cy="600"
                r="20"
                fill="none"
                stroke="oklch(0.7228 0.1214 203.7873)"
                strokeWidth="3"
                opacity="0.6"
                className="animate-pulse"
              />

              {/* Animated flowing particles through funnel */}
              <circle r="4" fill="hsl(var(--primary))" opacity="0.8">
                <animateMotion
                  dur="8s"
                  repeatCount="indefinite"
                  path="M 300 60 L 300 520 L 300 600"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0.9;0.3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="3" fill="hsl(var(--secondary))" opacity="0.6">
                <animateMotion
                  dur="10s"
                  repeatCount="indefinite"
                  begin="2s"
                  path="M 180 70 Q 180 300, 290 520 L 295 600"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.7;0.2"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="3" fill="hsl(var(--primary))" opacity="0.5">
                <animateMotion
                  dur="12s"
                  repeatCount="indefinite"
                  begin="4s"
                  path="M 420 75 Q 420 300, 310 520 L 305 600"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.6;0.2"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Additional swirling particles using full funnel width */}
              <circle r="2" fill="hsl(var(--secondary))" opacity="0.4">
                <animateMotion
                  dur="14s"
                  repeatCount="indefinite"
                  begin="6s"
                  path="M 100 80 Q 500 250, 280 400 Q 300 450, 298 600"
                />
                <animate
                  attributeName="opacity"
                  values="0.1;0.5;0.1"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="2" fill="hsl(var(--primary))" opacity="0.3">
                <animateMotion
                  dur="16s"
                  repeatCount="indefinite"
                  begin="8s"
                  path="M 500 85 Q 100 220, 320 380 Q 300 430, 302 600"
                />
                <animate
                  attributeName="opacity"
                  values="0.1;0.4;0.1"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Edge particles from rim */}
              <circle r="2" fill="hsl(var(--secondary))" opacity="0.3">
                <animateMotion
                  dur="11s"
                  repeatCount="indefinite"
                  begin="1s"
                  path="M 120 75 Q 250 200, 285 520 L 290 600"
                />
                <animate
                  attributeName="opacity"
                  values="0.1;0.4;0.1"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="2" fill="hsl(var(--primary))" opacity="0.3">
                <animateMotion
                  dur="13s"
                  repeatCount="indefinite"
                  begin="3s"
                  path="M 480 70 Q 350 200, 315 520 L 310 600"
                />
                <animate
                  attributeName="opacity"
                  values="0.1;0.4;0.1"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Funnel flow indicators - curved arrows following funnel shape */}
              <path
                d="M 270 150 Q 300 155, 330 150 L 325 165 Q 300 160, 275 165 Z"
                fill="hsl(var(--primary))"
                opacity="0.6"
                className="animate-pulse"
              />
              <path
                d="M 260 250 Q 300 255, 340 250 L 335 265 Q 300 260, 265 265 Z"
                fill="hsl(var(--primary))"
                opacity="0.6"
                className="animate-pulse"
              />
              <path
                d="M 250 350 Q 300 355, 350 350 L 345 365 Q 300 360, 255 365 Z"
                fill="hsl(var(--primary))"
                opacity="0.6"
                className="animate-pulse"
              />
              <polygon
                points="290,480 310,480 300,500"
                fill="hsl(var(--primary))"
                opacity="0.7"
                className="animate-pulse"
              />

              {/* Process flow arrows - clear progression through funnel */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="hsl(var(--primary))"
                    opacity="0.8"
                  />
                </marker>
              </defs>

              {/* Step 1 to Step 2 - Inside funnel flow */}
              <path
                d="M 240 140 Q 330 160, 400 190"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8,4"
                opacity="0.6"
                fill="none"
                markerEnd="url(#arrowhead)"
                className="animate-pulse"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;12"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Step 2 to Step 3 - Inside funnel flow */}
              <path
                d="M 380 230 Q 300 280, 240 330"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8,4"
                opacity="0.6"
                fill="none"
                markerEnd="url(#arrowhead)"
                className="animate-pulse"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;12"
                  dur="2s"
                  repeatCount="indefinite"
                  begin="0.7s"
                />
              </path>

              {/* Step 3 to Step 4 - Inside funnel flow */}
              <path
                d="M 260 370 Q 320 430, 360 470"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8,4"
                opacity="0.6"
                fill="none"
                markerEnd="url(#arrowhead)"
                className="animate-pulse"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;12"
                  dur="2s"
                  repeatCount="indefinite"
                  begin="1.4s"
                />
              </path>

              {/* Final flow to funnel output */}
              <path
                d="M 350 510 Q 325 540, 300 570"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeDasharray="6,3"
                opacity="0.8"
                fill="none"
                markerEnd="url(#arrowhead)"
                className="animate-pulse"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;9"
                  dur="1.5s"
                  repeatCount="indefinite"
                  begin="2.1s"
                />
              </path>

              {/* Step numbers inside funnel */}
              <circle
                cx="200"
                cy="120"
                r="16"
                fill="hsl(var(--primary))"
                opacity="0.9"
              />
              <text
                x="200"
                y="126"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
              >
                1
              </text>

              <circle
                cx="420"
                cy="210"
                r="16"
                fill="hsl(var(--secondary))"
                opacity="0.9"
              />
              <text
                x="420"
                y="216"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
              >
                2
              </text>

              <circle
                cx="220"
                cy="350"
                r="16"
                fill="hsl(var(--primary))"
                opacity="0.9"
              />
              <text
                x="220"
                y="356"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
              >
                3
              </text>

              <circle
                cx="380"
                cy="490"
                r="16"
                fill="hsl(var(--secondary))"
                opacity="0.9"
              />
              <text
                x="380"
                y="496"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
              >
                4
              </text>
            </svg>

            {/* Process Cards positioned along the funnel - Desktop Only */}
            <div className="relative z-10 hidden md:block">
              {/* Step 1 - Inside Funnel Opening (Awareness Stage) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute"
                style={{ top: "90px", left: "80px" }}
              >
                <div className="group relative w-64 max-w-[85vw]">
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

              {/* Step 2 - Inside Upper Funnel (Interest Stage) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute"
                style={{ top: "180px", right: "100px" }}
              >
                <div className="group relative w-64 max-w-[85vw]">
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

              {/* Step 3 - Inside Middle Funnel (Consideration Stage) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute"
                style={{ top: "320px", left: "120px" }}
              >
                <div className="group relative w-64 max-w-[85vw]">
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

              {/* Step 4 - Inside Funnel Neck (Conversion Stage) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute"
                style={{ top: "460px", right: "140px" }}
              >
                <div className="group relative w-56 max-w-[80vw]">
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
    </main>
  );
}
