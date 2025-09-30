import HeroSection from "@/components/hero-section";
import ImpactStats from "@/components/impact-stats";
import MiniServiceTeaser from "@/components/mini-service-teaser";
import Tools from "@/components/tools";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MiniServiceTeaser />
      <Tools />
      <ImpactStats />
    </>
  );
}
