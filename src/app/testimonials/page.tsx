"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import WallOfLoveSection from "@/components/testimonials";

const transitionVariants = {
  container: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};

export default function TestimonialsPage() {
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
                <Star className="h-4 w-4 fill-current" />
                Client Success Stories
              </div>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="font-serif mx-auto max-w-4xl text-balance text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Trusted by East Africa&apos;s Leading Businesses
              </TextEffect>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.3}
                as="p"
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                See how Social Funnel has helped high-ticket service businesses
                generate millions in new revenue through strategic marketing
                automation and lead generation systems.
              </TextEffect>
            </motion.div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Testimonials Grid */}
      <WallOfLoveSection />

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-primary/10 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s build a predictable client acquisition system for your
              high-ticket business and create the next success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Transformation
              </motion.a>
              <motion.a
                href="https://calendly.com/musemind/30min"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-background border border-border hover:border-primary/50 font-semibold rounded-xl hover:bg-primary/5 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Strategy Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
