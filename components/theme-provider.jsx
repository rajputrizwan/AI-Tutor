"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class" // adds 'class="dark"' to <html> when dark mode is active
      defaultTheme="system" // uses OS preference initially
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
