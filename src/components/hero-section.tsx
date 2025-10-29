"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    console.log("Hero component mounted");
    // Start video after 4 seconds to allow initial animations to complete
    const timer = setTimeout(() => {
      console.log("Switching to video");
      setShowVideo(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Track scroll position to hide backgrounds when not on hero
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight; // Approximate hero height

      // Hide backgrounds if scrolled past half the hero section
      if (scrollPosition > heroHeight * 0.5) {
        setIsHeroVisible(false);
      } else {
        setIsHeroVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Debug component state
  useEffect(() => {
    console.log("showVideo state:", showVideo, "isHeroVisible:", isHeroVisible);
  }, [showVideo, isHeroVisible]);

  return (
    <>
      <main className="overflow-hidden">
        {/* Video/Image Background Layer - Full coverage */}
        <div
          className={`fixed inset-0 -z-30 overflow-hidden h-screen w-full transition-opacity duration-300 ${
            isHeroVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Initial Image Background */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              showVideo ? "opacity-0" : "opacity-70"
            }`}
          >
            <Image
              src="/assets/images/hero/hero_home_img.svg"
              alt="Social Funnel Hero Background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Video Background - Replaces image after delay */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              showVideo ? "opacity-70" : "opacity-0"
            }`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                console.error("Video failed to load:", e);
                setShowVideo(false);
              }}
              onLoadStart={() => console.log("Video loading started")}
              onCanPlay={() => console.log("Video can play")}
            >
              <source
                src="/assets/images/hero/animated_video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            {/* Removed the masked background image that was creating the border effect */}

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="/services"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      🇰🇪 Kenyan-Based • High-Ticket Business Focus
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="font-serif mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                >
                  Social Funnel, We Grow Brands
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                >
                  We&apos;re a vibrant marketing agency that helps businesses
                  cut through the noise, connect with people, and grow with
                  strategy.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="/contact">
                        <span className="text-nowrap">Get a Demo</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <Link href="/process">
                      <span className="text-nowrap">See Our Process</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
