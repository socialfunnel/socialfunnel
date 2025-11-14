"use client";

import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { Bot, CheckCircle, BarChart3, Clock } from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";

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

const processSteps = [
  {
    step: 1,
    title: "Lead Generation",
    subtitle: "Attract Your Ideal Clients",
    description:
      "We launch targeted campaigns and create high-converting funnels that attract your ideal clients and capture their information.",
    icon: <Bot className="w-8 h-8" />,
    timeline: "Week 1-2",
    color: "primary",
    position: { top: "140px", left: "100px" },
  },
  {
    step: 2,
    title: "Automation & Follow-up",
    subtitle: "Never Miss a Lead Again",
    description:
      "Our AI systems and call center team qualify leads, nurture prospects, and book qualified appointments directly into your calendar.",
    icon: <Bot className="h-8 w-8" />,
    timeline: "Week 2-3",
    color: "primary",
    position: { top: "220px", right: "120px" },
  },
  {
    step: 3,
    title: "Proposal & Closing",
    subtitle: "Focus on What You Do Best",
    description:
      "You focus on what you do best—consulting with pre-qualified prospects and closing deals with clients ready to invest.",
    icon: <CheckCircle className="w-8 h-8" />,
    timeline: "Week 3-4",
    color: "primary",
    position: { top: "360px", left: "140px" },
  },
  {
    step: 4,
    title: "Tracking & Analytics",
    subtitle: "Optimize for Growth",
    description:
      "We provide detailed reports and analytics so you can see exactly how your investment is performing and optimize for growth.",
    icon: <BarChart3 className="w-8 h-8" />,
    timeline: "Ongoing",
    color: "primary",
    position: { top: "480px", right: "160px" },
  },
  {
    step: 5,
    title: "Successful Conversion",
    subtitle: "Achieve Your Goals",
    description:
      "Celebrate your success and optimize for continued growth with our comprehensive metrics and support.",
    icon: <CheckCircle className="w-8 h-8" />,
    timeline: "Ongoing",
    color: "primary",
    position: { top: "720px", left: "40%", transform: "translateX(-50%)" },
  },
];

export default function ProcessPage() {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      while (true) {
        for (let i = 0; i < processSteps.length; i++) {
          await controls.start({
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 10px 3px hsl(var(--primary) / 0.2)",
              "0 0 20px 8px hsl(var(--primary) / 0.6)",
              "0 0 10px 3px hsl(var(--primary) / 0.2)",
            ],
            transition: { duration: 1.2, delay: i * 2 },
          });
        }
      }
    }
    sequence();
  }, [controls]);

  return (
    <main className="overflow-hidden bg-background min-h-screen relative">
      {/* Background decoration */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-24 left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="pt-24 md:pt-36 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <motion.div
              variants={transitionVariants.item}
              className="text-center mb-8"
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

      {/* Funnel Section */}
      <section className="py-8 md:py-12 relative overflow-visible max-w-7xl mx-auto px-6">
        <AnimatedGroup variants={transitionVariants}>
          <motion.div
            variants={transitionVariants.item}
            className="relative min-h-[820px] md:min-h-[820px]"
          >
            {/* Funnel SVG Background */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
              viewBox="0 0 600 750"
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
                    className="[stop-color:hsl(var(--primary))]"
                    stopOpacity="0.15"
                  />
                  <stop
                    offset="50%"
                    className="[stop-color:hsl(var(--secondary))]"
                    stopOpacity="0.15"
                  />
                  <stop
                    offset="100%"
                    className="[stop-color:hsl(var(--primary))]"
                    stopOpacity="0.2"
                  />
                </linearGradient>

                <linearGradient
                  id="flowGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    className="[stop-color:hsl(var(--primary))]"
                    stopOpacity="0.8"
                  />
                  <stop
                    offset="100%"
                    className="[stop-color:hsl(var(--secondary))]"
                    stopOpacity="0.8"
                  />
                </linearGradient>

                <filter id="glow" height="300%" width="300%" x="-100%" y="-100%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Funnel body with gradient fill */}
              <path
                d="
                  M 80 80
                  L 520 80
                  Q 520 90, 510 100
                  L 350 500
                  Q 340 520, 320 520
                  L 280 520
                  Q 260 520, 250 500
                  L 90 100
                  Q 80 90, 80 80
                  Z
                "
                fill="url(#funnelGradient)"
                className="stroke-primary"
                strokeWidth="3"
                filter="url(#glow)"
              />

              {/* Funnel neck */}
              <rect
                x="250"
                y="520"
                width="100"
                height="80"
                fill="url(#funnelGradient)"
                className="stroke-primary"
                strokeWidth="3"
                rx="15"
                ry="15"
                filter="url(#glow)"
              />

              {/* Funnel rim (top ellipse) */}
              <ellipse
                cx="300"
                cy="80"
                rx="220"
                ry="25"
                className="fill-primary/20 stroke-primary"
                strokeWidth="3"
                filter="url(#glow)"
              />

              {/* Inner rim detail */}
              <ellipse
                cx="300"
                cy="82"
                rx="215"
                ry="20"
                fill="none"
                className="stroke-primary/40"
                strokeWidth="2"
              />

              {/* Center flow line */}
              <path
                id="flowLine"
                d="M 300 80 L 300 520 L 300 600"
                stroke="url(#flowGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="10 5"
                opacity="0.7"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="30"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Animated flow particles */}
              {[0, 1, 2, 3].map((i) => (
                <circle
                  key={i}
                  r={3}
                  className={i % 2 === 0 ? "fill-primary" : "fill-secondary"}
                  opacity="0"
                >
                  <animateMotion
                    dur={`${4 + i}s`}
                    repeatCount="indefinite"
                    begin={`${i * 1}s`}
                    path="M 300 80 L 300 600"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0"
                    dur={`${4 + i}s`}
                    repeatCount="indefinite"
                    begin={`${i * 1}s`}
                  />
                </circle>
              ))}

              {/* Step number circles */}
              {[
                { cx: 150, cy: 160, step: 1, isPrimary: true },
                { cx: 450, cy: 220, step: 2, isPrimary: true },
                { cx: 180, cy: 320, step: 3, isPrimary: true },
                { cx: 420, cy: 420, step: 4, isPrimary: true },
                { cx: 300, cy: 560, step: 5, isPrimary: true },
              ].map(({ cx, cy, step, isPrimary }) => (
                <g key={step}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r="22"
                    className={
                      isPrimary
                        ? "fill-primary stroke-primary-foreground"
                        : "fill-secondary stroke-secondary-foreground"
                    }
                    strokeWidth="2"
                    filter="url(#glow)"
                  />
                  <text
                    x={cx}
                    y={cy + 6}
                    textAnchor="middle"
                    className="fill-primary-foreground font-bold"
                    fontSize="16"
                    style={{ pointerEvents: "none" }}
                  >
                    {step}
                  </text>
                </g>
              ))}
            </svg>

            {/* Process cards */}
            <div className="relative z-10 hidden md:block">
              {processSteps.map(
                ({
                  step,
                  title,
                  timeline,
                  description,
                  icon,
                  color,
                  position,
                }) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.85, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: step * 0.3 }}
                    animate={controls}
                    className="absolute rounded-lg p-4 shadow-md bg-card/90 backdrop-blur-sm border border-border/50 max-w-[280px] min-w-[240px]"
                    style={{
                      top: position.top,
                      left: position.left,
                      right: position.right,
                      transform: position.transform,
                      boxShadow: "0 0 8px 2px transparent",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          color === "primary"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {icon}
                      </div>
                      <div>
                        <h3 className="text-base font-serif font-bold">
                          {title}
                        </h3>
                        <p
                          className={`text-xs font-medium ${
                            color === "primary"
                              ? "text-primary"
                              : "text-secondary"
                          }`}
                        >
                          {timeline}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {description}
                    </p>
                  </motion.div>
                )
              )}
            </div>

            {/* Mobile stacked cards */}
            <div className="md:hidden px-3">
              {processSteps.map(
                ({
                  step,
                  title,
                  subtitle,
                  description,
                  icon,
                  timeline,
                  color,
                }, index) => (
                  <div key={step} className="relative">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: step * 0.1 }}
                      className="relative bg-card rounded-lg p-4 border border-border shadow-sm"
                    >
                      {/* Step number badge */}
                      <div className="absolute -left-3 top-4 z-10">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
                            color === "primary"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {step}
                        </div>
                      </div>

                      <div className="ml-8">
                        <div className="flex items-start gap-3 mb-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                              color === "primary"
                                ? "bg-primary/10 text-primary"
                                : "bg-secondary/10 text-secondary"
                            }`}
                          >
                            {icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base font-serif font-bold leading-tight mb-1">
                              {title}
                            </h3>
                            <div
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                color === "primary"
                                  ? "bg-primary/10 text-primary"
                                  : "bg-secondary/10 text-secondary"
                              }`}
                            >
                              <Clock className="w-3 h-3 mr-1" />
                              {timeline}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm font-medium mb-2 text-foreground">
                          {subtitle}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Connecting line */}
                    {index < processSteps.length - 1 && (
                      <div className="flex justify-center py-2">
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: step * 0.1 + 0.3 }}
                          className="w-0.5 h-8 bg-gradient-to-b from-primary via-secondary to-primary origin-top"
                        />
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </AnimatedGroup>
      </section>
    </main>
  );
}