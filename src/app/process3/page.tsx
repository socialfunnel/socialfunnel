"use client";

import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { Bot, CheckCircle, BarChart3, Clock } from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";

const processSteps = [
  {
    step: 1,
    title: "Lead Generation",
    subtitle: "Attract Your Ideal Clients",
    description:
      "We launch targeted campaigns and create high-converting funnels that attract your ideal clients and capture their information.",
    icon: <Bot className="w-8 h-8 text-primary" />,
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
    icon: <CheckCircle className="w-8 h-8 text-secondary" />,
    timeline: "Week 2-3",
    color: "secondary",
    position: { top: "220px", right: "120px" },
  },
  {
    step: 3,
    title: "Proposal & Closing",
    subtitle: "Focus on What You Do Best",
    description:
      "You focus on what you do best—consulting with pre-qualified prospects and closing deals with clients ready to invest.",
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
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
    icon: <BarChart3 className="w-8 h-8 text-secondary" />,
    timeline: "Ongoing",
    color: "secondary",
    position: { top: "480px", right: "160px" },
  },
  {
    step: 5,
    title: "Successful Conversion",
    subtitle: "Achieve Your Goals",
    description:
      "Celebrate your success and optimize for continued growth with our comprehensive metrics and support.",
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    timeline: "Ongoing",
    color: "primary",
    position: { top: "620px", left: "180px" },
  },
];

export default function Process2Page() {
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

      <section className="py-16 md:py-24 relative overflow-visible max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <TextEffect
            per="word"
            as="h2"
            preset="slide"
            className="text-4xl font-bold font-serif mb-4 text-foreground"
          >
            Social Funnel Process
          </TextEffect>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch how we guide your prospects through our proven conversion
            funnel, transforming awareness into action.
          </p>
        </div>

        <div className="relative min-h-[700px] md:min-h-[750px]">
          {/* Funnel SVG Background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 600 650"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="funnelGradientWater"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{
                    stopColor: "hsl(var(--primary))",
                    stopOpacity: 0.25,
                  }}
                />
                <stop
                  offset="50%"
                  style={{
                    stopColor: "hsl(var(--secondary))",
                    stopOpacity: 0.15,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "hsl(var(--primary))",
                    stopOpacity: 0.25,
                  }}
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
                  style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.9 }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "hsl(var(--secondary))",
                    stopOpacity: 0.6,
                  }}
                />
              </linearGradient>
              <filter
                id="glowWater"
                height="200%"
                width="200%"
                x="-50%"
                y="-50%"
                colorInterpolationFilters="sRGB"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="4"
                  style={{
                    floodColor: "hsl(var(--primary))",
                    floodOpacity: 0.8,
                  }}
                />
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="8"
                  style={{
                    floodColor: "hsl(var(--primary))",
                    floodOpacity: 0.3,
                  }}
                />
              </filter>
            </defs>

            {/* Funnel body */}
            <path
              d="
                M 80 80           /* Top left wide opening */
                L 520 80          /* Top right wide opening */
                Q 520 90, 510 100 /* Top right curve */
                L 350 500         /* Taper to narrow neck */
                Q 340 520, 320 520 /* Neck right curve */
                L 280 520         /* Neck bottom */
                Q 260 520, 250 500 /* Neck left curve */
                L 90 100          /* Taper back up to wide opening */
                Q 80 90, 80 80    /* Top left curve */
                Z
              "
              fill="url(#funnelGradientWater)"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              className="drop-shadow-lg"
              filter="url(#glowWater)"
            />

            {/* Funnel neck */}
            <rect
              x="250"
              y="520"
              width="100"
              height="80"
              fill="url(#funnelGradientWater)"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              className="drop-shadow-lg"
              rx="15"
              ry="15"
              filter="url(#glowWater)"
            />

            {/* Funnel rim */}
            <ellipse
              cx="300"
              cy="80"
              rx="220"
              ry="25"
              fill="hsl(var(--secondary) / 0.4)"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              className="drop-shadow-lg"
              filter="url(#glowWater)"
            />

            {/* Inner rim shadow */}
            <ellipse
              cx="300"
              cy="82"
              rx="215"
              ry="20"
              fill="none"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1.5"
              className="drop-shadow-sm"
            />

            {/* Funnel outline */}
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
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              className="opacity-80"
            />

            {/* Center flow line */}
            <path
              id="flowLine"
              d="M 300 80 L 300 520 L 300 600"
              stroke="url(#flowGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#glowWater)"
            />
            <animate
              href="#flowLine"
              attributeName="stroke-dashoffset"
              from="600"
              to="0"
              dur="4s"
              repeatCount="indefinite"
            />

            {/* Water drops animation */}
            {[0, 1, 2].map((i) => (
              <circle
                key={i}
                r={4 - i}
                style={{
                  fill:
                    i % 2 === 0
                      ? "hsl(var(--primary))"
                      : "hsl(var(--secondary))",
                }}
                opacity={0.6 - i * 0.2}
              >
                <animateMotion
                  dur={`${6 + i * 3}s`}
                  repeatCount="indefinite"
                  begin={`${i * 2}s`}
                  path="M 300 80 L 300 520 L 300 600"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.9;0.2"
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            {/* Step numbers */}
            {[
              { cx: 150, cy: 160, step: 1, isPrimary: true },
              { cx: 450, cy: 220, step: 2, isPrimary: false },
              { cx: 180, cy: 320, step: 3, isPrimary: true },
              { cx: 420, cy: 420, step: 4, isPrimary: false },
              { cx: 300, cy: 560, step: 5, isPrimary: true },
            ].map(({ cx, cy, step, isPrimary }) => (
              <g key={step}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="18"
                  style={{
                    fill: isPrimary
                      ? "hsl(var(--primary))"
                      : "hsl(var(--secondary))",
                  }}
                  opacity="0.9"
                  filter="url(#glowWater)"
                />
                <text
                  x={cx}
                  y={cy + 6}
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
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
          <div className="md:hidden space-y-4 px-3">
            {processSteps.map(
              ({
                step,
                title,
                subtitle,
                description,
                icon,
                timeline,
                color,
              }) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: step * 0.1 }}
                  className="bg-card rounded-lg p-4 border border-border shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-3">
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
                      <h3 className="text-base font-serif font-bold leading-tight mb-0.5">
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
                  <p className="text-sm font-medium mb-2">{subtitle}</p>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {description}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
