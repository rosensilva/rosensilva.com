"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemePreference = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setPreference: (pref: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");
  const [mounted, setMounted] = useState(false);

  // On mount: read from localStorage
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as ThemePreference | null;
    if (stored === "light" || stored === "dark" || stored === "system") {
      setPreferenceState(stored);
    }
    // If nothing stored, default is "system"
  }, []);

  // Resolve theme whenever preference changes or system preference changes
  useEffect(() => {
    if (!mounted) return;

    const resolve = () => {
      const resolved =
        preference === "system" ? getSystemTheme() : preference;
      setResolvedTheme(resolved);
      const root = document.documentElement;
      if (resolved === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    resolve();

    // Listen for system theme changes when preference is "system"
    if (preference === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => resolve();
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [preference, mounted]);

  // Save preference to localStorage
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", preference);
  }, [preference, mounted]);

  const setPreference = (pref: ThemePreference) => {
    setPreferenceState(pref);
  };

  return (
    <ThemeContext.Provider value={{ preference, resolvedTheme, setPreference }}>
      {children}
    </ThemeContext.Provider>
  );
}
