import type { Metadata } from "next";
import { Lexend, Fira_Code } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cookies, draftMode } from "next/headers";

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
  metadataBase: new URL(process.env.NODE_ENV === 'production' 
    ? 'https://socialfunnel.agency' 
    : 'http://localhost:3000'
  ),
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const draft = await draftMode();
  const { isEnabled } = draft;
  const cookieStore = await cookies();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable} ${firaCode.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isEnabled && (
            <div className="bg-primary text-primary-foreground px-4 py-2 text-sm flex items-center justify-between">
              <span>
                🎬 Draft mode (
                {cookieStore.get("ks-branch")?.value || "unknown branch"})
              </span>
              <form method="POST" action="/preview/end">
                <button
                  type="submit"
                  className="bg-primary-foreground text-primary px-3 py-1 rounded text-xs hover:opacity-80 transition-opacity"
                >
                  End preview
                </button>
              </form>
            </div>
          )}
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
