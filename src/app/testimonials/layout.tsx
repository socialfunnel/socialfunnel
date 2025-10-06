import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "See what our clients say about Social Funnel's marketing automation and lead generation services. Real results from real businesses across Kenya and East Africa.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
