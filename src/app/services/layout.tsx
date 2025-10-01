import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover our comprehensive digital marketing services. From lead generation and marketing automation to social media management and funnel optimization - we help businesses grow.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
