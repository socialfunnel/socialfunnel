import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Discover our proven 6-step digital marketing process. From strategy development to automation implementation, see how we transform businesses with our systematic approach.",
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
