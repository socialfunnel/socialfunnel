"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { AnimatedGroup } from "@/components/ui/animated-group";

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({
  value,
  label,
  suffix = "",
  prefix = "",
  delay = 0,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  // Extract numeric value for animation
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      controls.start("visible");

      // Animate counter
      const startTime = Date.now();
      const duration = 2000; // 2 seconds
      
      const animateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(numericValue * easeOut);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      setTimeout(() => {
        animateCount();
      }, delay);
    }
  }, [isInView, hasAnimated, numericValue, controls, delay]);

  const formatDisplayValue = (num: number) => {
    if (value.includes("K")) {
      return `${num}K`;
    } else if (value.includes("M")) {
      return `${num}M`;
    } else if (value.includes("%")) {
      return `${num}%`;
    }
    return num.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: delay / 1000,
          },
        },
      }}
      className="text-center group"
    >
      <div className="relative">
        <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-2 transition-colors duration-300 group-hover:text-primary/80">
          {prefix}
          {hasAnimated ? formatDisplayValue(count) : "0"}
          {suffix}
        </div>
        <div className="text-sm md:text-base text-muted-foreground font-medium tracking-wide uppercase">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

const transitionVariants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        duration: 1.2,
      },
    },
  },
} as const;

export default function ImpactStats() {
  const stats = [
    {
      value: "137",
      label: "YoY Organic Traffic",
      prefix: "+",
      suffix: "%",
    },
    {
      value: "105", 
      label: "YoY Leads",
      prefix: "+",
      suffix: "%",
    },
    {
      value: "500",
      label: "Value Built",
      prefix: "$",
      suffix: "K",
    },
    {
      value: "20",
      label: "Ad Spend Managed",
      prefix: "$",
      suffix: "M",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedGroup variants={transitionVariants}>
          <motion.div
            variants={transitionVariants.item}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Proven Results That Speak
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our data-driven approach delivers measurable growth for businesses across Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
                delay={index * 200}
              />
            ))}
          </div>

          <motion.div
            variants={transitionVariants.item}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Results from the last 12 months
            </div>
          </motion.div>
        </AnimatedGroup>
      </div>
    </section>
  );
}