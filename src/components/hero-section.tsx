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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of hero images for carousel
  const heroImages = [
    "/assets/images/hero/hero_home_img.svg",
    "/assets/images/hero/social.svg",
    "/assets/images/hero/conversion.svg",
    "/assets/images/hero/analysis.svg",
  ];

  useEffect(() => {
    console.log("Hero component mounted");
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Debug component state
  useEffect(() => {
    console.log("Current image index:", currentImageIndex);
  }, [currentImageIndex]);

  return (
    <>
      <main className="relative overflow-hidden min-h-screen">
        {/* Image Carousel Background Layer - Contained within hero section */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {heroImages.map((imageSrc, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-20" : "opacity-0"
              }`}
            >
              <Image
                src={imageSrc}
                alt={`Social Funnel Hero Background ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <section className="relative flex items-center justify-center h-screen">
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center px-6">
              <div className="text-center w-full max-w-7xl">
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
                  className="font-serif mx-auto mt-8 lg:mt-16 xl:mt-20 text-balance text-5xl max-md:font-semibold md:text-7xl lg:text-9xl xl:text-[8rem] 2xl:text-[9rem]"
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
                  className="mt-12 lg:mt-16 xl:mt-20 flex flex-col items-center justify-center gap-2 md:flex-row lg:gap-4 xl:gap-6"
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
