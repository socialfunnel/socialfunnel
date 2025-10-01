import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Social Funnel. Ready to transform your business? Contact our digital marketing experts for a consultation and discover how we can boost your growth.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
