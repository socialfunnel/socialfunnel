"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function CallToAction() {
  const benefits = [
    "Free 30-minute strategy session",
    "Custom growth plan for your business",
    "No obligation • No sales pitch",
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Ready to Scale Your Business?
          </div>

          <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Not Sure Where to Start?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a{" "}
            <span className="font-semibold text-foreground">
              free consultation
            </span>{" "}
            and discover how we can build a predictable client acquisition
            system for your high-ticket business.
          </p>

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 text-sm"
                >
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
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
                  <Phone className="h-5 w-5" />
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
                <span>Send Us a Message</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-muted-foreground mt-6"
          >
            🇰🇪 Call us at{" "}
            <Link
              href="tel:+254721634183"
              className="font-semibold text-primary hover:underline"
            >
              +254 721 634 183
            </Link>{" "}
            or email{" "}
            <Link
              href="mailto:info@socialfunnel.agency"
              className="font-semibold text-primary hover:underline"
            >
              info@socialfunnel.agency
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
