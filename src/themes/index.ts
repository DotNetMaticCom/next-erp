// src/themes/index.ts

import type { AppThemeConfig } from "./theme-types";
import { defaultLightThemeConfig, defaultDarkThemeConfig } from "./default-theme";
import { oceanLightTheme, oceanDarkTheme } from "./ocean-theme";
import { forestLightTheme, forestDarkTheme } from "./forest-theme"; // <--- ÖNEMLİ
import { sunsetLightTheme, sunsetDarkTheme } from "./sunset-theme";
import { lavenderLightTheme, lavenderDarkTheme } from "./lavender-theme";

export const allAppThemes: AppThemeConfig[] = [
  defaultLightThemeConfig,
  defaultDarkThemeConfig,
  oceanLightTheme,
  oceanDarkTheme,
  forestLightTheme,  // <--- EKLENDİ
  forestDarkTheme,   // <--- EKLENDİ
  sunsetLightTheme,
  sunsetDarkTheme,
  lavenderLightTheme,
  lavenderDarkTheme,
];

export function getAppThemeConfig(themeName: string): AppThemeConfig | undefined {
  return allAppThemes.find((t) => t.name === themeName);
}

export function saveThemePreference(themeName: string, storageKey: string): void {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(storageKey, themeName);
    } catch {}
  }
}

export function loadThemePreference(storageKey: string): string | null {
  if (typeof window !== "undefined") {
    try {
      return localStorage.getItem(storageKey);
    } catch {}
  }
  return null;
}

export function isSystemDarkMode(): boolean {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
}

export function watchSystemTheme(callback: (isDark: boolean) => void): () => void {
  if (typeof window !== "undefined" && window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      callback(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }
  return () => {};
}

export { useTheme } from "./ThemeProvider";
export type { AppThemeConfig };
