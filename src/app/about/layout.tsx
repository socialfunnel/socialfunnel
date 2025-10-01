import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Social Funnel team. Learn about our mission, vision, and the passionate experts who help businesses grow through innovative digital marketing strategies.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
