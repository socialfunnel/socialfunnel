import CallToAction from "@/components/call-to-action";
import HeroSection from "@/components/hero-section";
import ImpactStats from "@/components/impact-stats";
import MiniServiceTeaser from "@/components/mini-service-teaser";
import Tools from "@/components/tools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Transform your business with our comprehensive digital marketing solutions. Expert lead generation, marketing automation, and social media management to grow your brand.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MiniServiceTeaser />
      <Tools />
      <ImpactStats />
      <CallToAction />
    </>
  );
}
