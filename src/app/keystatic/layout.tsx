// src/app/keystatic/layout.tsx
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Lexend, Fira_Code } from "next/font/google";
import "../globals.css";

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

export default function KeystaticLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable} ${firaCode.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 9999,
              overflow: "hidden",
            }}
            className="bg-background text-foreground"
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
