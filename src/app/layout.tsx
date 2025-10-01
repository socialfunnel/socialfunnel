import type { Metadata } from "next";
import { Lexend, Fira_Code } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const lexend = Lexend({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: {
    template: "%s | Social Funnel",
    default: "Social Funnel - Digital Marketing Agency",
  },
  description:
    "Transform your business with our comprehensive digital marketing solutions. From lead generation to marketing automation, we help you create a powerful social funnel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable} ${firaCode.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
