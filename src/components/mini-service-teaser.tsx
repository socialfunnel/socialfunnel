"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Funnel, Megaphone, Zap, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { motion } from "motion/react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          scale: 0.95,
          filter: "blur(10px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1,
            delay: delay,
          },
        },
      }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
          {icon}
        </div>
        
        <h3 className="text-xl font-serif font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
        
        {/* Hover arrow indicator */}
        <div className="mt-4 flex items-center text-primary opacity-0 transform translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <span className="text-sm font-medium mr-2">Learn more</span>
          <ArrowRight className="h-4 w-4" />
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        bounce: 0.2,
        duration: 0.8,
      },
    },
  },
} as const;

export default function MiniServiceTeaser() {
  const services = [
    {
      icon: <Funnel className="h-6 w-6" />,
      title: "Client Acquisition Funnels",
      description: "High-converting landing pages and automated lead capture sequences that maximize conversions at every step.",
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Paid Ads That Work",
      description: "ROI-focused Facebook, Instagram & Google Ads with precision targeting and continuous optimization.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Smart Automation",
      description: "AI-powered chatbots, CRM integration, and automated workflows that run your sales on autopilot.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Brand Strategy",
      description: "Professional funnel design and strategic communications that build trust and convert leads.",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <AnimatedGroup variants={transitionVariants}>
          <motion.div variants={transitionVariants.item} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              How We Grow Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We don&apos;t believe in random marketing activities. We build systems that give your business a predictable flow of new clients—on autopilot.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div variants={transitionVariants.item} className="text-center">
            <div className="bg-foreground/5 rounded-2xl border p-0.5 inline-block">
              <Button
                asChild
                size="lg" 
                className="rounded-2xl px-8 text-base font-semibold"
              >
                <Link href="/services" className="flex items-center gap-2">
                  <span>Explore All Services</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Ready to scale? Let&apos;s build your growth engine.
            </p>
          </motion.div>
        </AnimatedGroup>
      </div>
    </section>
  );
}