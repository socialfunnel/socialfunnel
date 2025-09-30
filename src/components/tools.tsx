"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion } from "motion/react";

const ToolLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex items-center justify-center px-4 py-3 bg-card/30 rounded-lg border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group hover:scale-105">
    <div className="transition-transform duration-300 group-hover:scale-110">
      <Image
        src={src}
        alt={alt}
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    </div>
  </div>
);

export default function Tools() {
  const tools: Array<{
    name: string;
    src?: string;
    alt?: string;
    logo?: React.ReactNode;
  }> = [
    {
      name: "Google Analytics",
      src: "/assets/images/tools/google-analytics.svg",
      alt: "Google Analytics Logo",
    },
    {
      name: "Adobe Creative Cloud",
      src: "/assets/images/tools/adobe-creative-cloud.svg",
      alt: "Adobe Creative Cloud Logo",
    },
    {
      name: "Make.com",
      src: "/assets/images/tools/make-color.svg",
      alt: "Make.com Logo",
    },
    {
      name: "HubSpot",
      src: "/assets/images/tools/hubspot.svg",
      alt: "HubSpot Logo",
    },
    {
      name: "Canva",
      src: "/assets/images/tools/canva-icon.svg",
      alt: "Canva Logo",
    },
    {
      name: "CapCut",
      src: "/assets/images/tools/capcut.svg",
      alt: "CapCut Logo",
    },
    {
      name: "InShot",
      src: "/assets/images/tools/inshot.svg",
      alt: "InShot Logo",
    },
    {
      name: "Wix",
      src: "/assets/images/tools/wix.svg",
      alt: "Wix Logo",
    },
    {
      name: "Google Workspace",
      src: "/assets/images/tools/Google_Workspace.svg",
      alt: "Google Workspace Logo",
    },
    {
      name: "WordPress",
      src: "/assets/images/tools/wordpress.svg",
      alt: "WordPress Logo",
    },
    {
      name: "Mailchimp",
      src: "/assets/images/tools/mailchimp.svg",
      alt: "Mailchimp Logo",
    },
    {
      name: "LinkedIn",
      src: "/assets/images/tools/LI-Logo.png",
      alt: "LinkedIn Logo",
    },
  ];

  return (
    <section className="bg-background overflow-hidden py-20 relative">
      {/* Background decoration */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="group relative m-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Expert Tools, Maximum Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team is trained and certified on industry-leading platforms to
            maximize engagement and drive measurable growth
          </p>
        </motion.div>

        <div className="flex flex-col items-center md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:max-w-44 md:border-r md:border-border/50 md:pr-6 mb-8 md:mb-0"
          >
            <p className="text-center md:text-end text-sm font-medium text-muted-foreground">
              Certified & Trained
              <br />
              <span className="text-xs text-primary font-semibold">
                13+ Tools
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative py-6 md:w-[calc(100%-11rem)]"
          >
            <InfiniteSlider speedOnHover={15} speed={30} gap={24}>
              {tools.map((tool, index) =>
                tool.src && tool.alt ? (
                  <ToolLogo key={index} src={tool.src} alt={tool.alt} />
                ) : (
                  <div
                    key={index}
                    className="flex items-center justify-center px-4 py-3 bg-card/30 rounded-lg border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {tool.logo}
                    </div>
                  </div>
                )
              )}
            </InfiniteSlider>

            {/* Gradient overlays */}
            <div className="bg-gradient-to-r from-background via-background/80 to-transparent absolute inset-y-0 left-0 w-20 pointer-events-none"></div>
            <div className="bg-gradient-to-l from-background via-background/80 to-transparent absolute inset-y-0 right-0 w-20 pointer-events-none"></div>

            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-sm font-medium text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Continuously expanding our expertise
          </div>
        </motion.div>
      </div>
    </section>
  );
}
