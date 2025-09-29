"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Toggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid hydration mismatch
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
    >
      {currentTheme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-transform duration-300" />
      )}
    </Button>
  );
}
