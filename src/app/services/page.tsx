"use client";

import Link from "next/link";
import {
  ArrowRight,
  Funnel,
  Bot,
  Megaphone,
  Zap,
  Palette,
  MessageSquare,
  CheckCircle,
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

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  result: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  result,
  delay = 0,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
            delay: delay,
          },
        },
      }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card/50 hover:shadow-lg hover:shadow-primary/5 h-full flex flex-col"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 flex-shrink-0">
          {icon}
        </div>

        <h3 className="text-2xl font-serif font-bold mb-4 transition-colors duration-300 group-hover:text-primary flex-shrink-0">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6 flex-shrink-0">
          {description}
        </p>

        <div className="mb-6 flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex-shrink-0 mt-auto">
          <p className="text-sm font-semibold text-primary mb-1">Result:</p>
          <p className="text-sm text-foreground">{result}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Funnel className="h-8 w-8" />,
      title: "Client Acquisition Funnels",
      description:
        "We map and design the entire customer journey—from the first ad click to a booked appointment. Our funnels are built to maximize conversions at every step, using data-driven testing and proven frameworks.",
      features: [
        "High-converting landing pages tailored to your industry",
        "Automated lead capture and follow-up sequences",
        "Conversion tracking to measure ROI at every stage",
      ],
      result: "More qualified leads, consistently filling your pipeline.",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI-Powered Chatbots & CRM Systems",
      description:
        "Your leads don&apos;t want to wait. We set up intelligent chatbots that respond instantly, answer questions, and qualify prospects—all while syncing to your CRM.",
      features: [
        "24/7 chatbot support for instant lead response",
        "Automated lead scoring so you know who&apos;s ready to buy",
        "CRM setup and integrations to keep your sales organized",
      ],
      result:
        "No missed opportunities—every prospect is followed up, every lead tracked.",
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Paid Ads That Actually Work",
      description:
        "We don&apos;t waste money on &quot;likes&quot; or vanity metrics. Our ad campaigns are laser-focused on one thing: client acquisition.",
      features: [
        "Facebook, Instagram & Google Ads built for ROI",
        "Precision targeting to reach decision-makers in your industry",
        "Continuous testing and optimization to lower cost per lead",
      ],
      result: "More clients for less ad spend.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automation Systems",
      description:
        "We take the manual, repetitive work off your plate and replace it with smart automation.",
      features: [
        "Automated booking flows that sync to your calendar",
        "Email/SMS follow-ups that nurture leads until they&apos;re ready",
        "Lead qualification workflows to prioritize high-value prospects",
      ],
      result: "Sales running on autopilot, while you focus on delivery.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Brand & Funnel Design",
      description:
        "Your funnel isn&apos;t just a system—it&apos;s also the first impression your clients get of your business. We design with clarity, trust, and authority in mind.",
      features: [
        "Clean, professional funnel pages that build instant credibility",
        "Persuasive copywriting that moves clients to take action",
        "Brand-aligned design so you look as good as you perform",
      ],
      result:
        "A brand presence that inspires confidence and converts leads into long-term clients.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Strategic Communications & Campaigns",
      description:
        "We craft compelling narratives that cut through noise and build trust. From product launches to corporate rebrands, we tell stories that move people to action.",
      features: [
        "Campaign strategy and messaging frameworks",
        "Multi-channel execution: social, digital, and print",
        "Data-driven monitoring and reporting",
      ],
      result:
        "Campaigns that shift perception, win attention, and deliver measurable outcomes.",
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
                End-to-End Business Development Solutions
              </div>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="font-serif mx-auto max-w-4xl text-balance text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Systems That Build Predictable Revenue
              </TextEffect>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.3}
                as="p"
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                We don&apos;t believe in random marketing activities. We build
                systems that give your business a predictable flow of new
                clients—on autopilot. Our ideal client has a minimum product
                value of $10,000 (&gt;Ksh 1M) per sale.
              </TextEffect>
            </motion.div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <motion.div
              variants={transitionVariants.item}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                Our Complete Business Growth System
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We handle everything from finding customers to closing deals, so
                you can focus on what you do best. Here&apos;s exactly how we
                help high-ticket service businesses grow:
              </p>
            </motion.div>
          </AnimatedGroup>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                result={service.result}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup variants={transitionVariants}>
            <motion.div
              variants={transitionVariants.item}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                Why Clients Choose Social Funnel
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our promise is simple: we give you more clients, less stress,
                and a predictable growth engine.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                variants={transitionVariants.item}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  Industry Specialization
                </h3>
                <p className="text-muted-foreground text-sm">
                  We specialize in service industries like construction,
                  healthcare, and professional services—where trust and
                  precision matter most.
                </p>
              </motion.div>

              <motion.div
                variants={transitionVariants.item}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  Scalable Systems
                </h3>
                <p className="text-muted-foreground text-sm">
                  We focus on scalability: systems that grow with you, not ones
                  you&apos;ll outgrow.
                </p>
              </motion.div>

              <motion.div
                variants={transitionVariants.item}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  ROI-Focused
                </h3>
                <p className="text-muted-foreground text-sm">
                  We prioritize ROI above all else—because marketing isn&apos;t
                  about noise, it&apos;s about results.
                </p>
              </motion.div>
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
              Ready to Build Your Growth Engine?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can create a predictable client
              acquisition system for your high-ticket business.
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
                    <span>Book Free Consultation</span>
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
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Get in Touch</span>
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
