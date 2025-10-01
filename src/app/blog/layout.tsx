import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay updated with the latest digital marketing insights, strategies, and industry trends. Explore our expert articles on lead generation, automation, and business growth.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
