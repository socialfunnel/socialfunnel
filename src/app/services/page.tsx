import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Social Funnel",
  description: "Comprehensive business development solutions for high-ticket service businesses. From client acquisition funnels to automated systems.",
};

export default function ServicesPage() {
  return (
    <main className="pt-24 md:pt-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive business development solutions for high-ticket service businesses.
          </p>
          
          <div className="mt-12 p-8 bg-muted/30 rounded-2xl border">
            <p className="text-muted-foreground">
              Services page coming soon. We&apos;re building something amazing for you.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}