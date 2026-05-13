/** Same key as the inline script in `index.html` (first paint, no flash). */
export const THEME_STORAGE_KEY = "camila-portfolio-theme" as const;

export type StoredTheme = "light" | "dark";

const THEME_COLOR_LIGHT = "#FFF5FA";
const THEME_COLOR_DARK = "#1A0B1C";

export function getStoredIsDark(): boolean {
  if (typeof window === "undefined") {
    return true;
  }
  try {
    const t = localStorage.getItem(THEME_STORAGE_KEY) as StoredTheme | null;
    if (t === "light") {
      return false;
    }
    if (t === "dark") {
      return true;
    }
  } catch {
    /* private mode / blocked */
  }
  return true;
}

/**
 * Applies the theme on `<html>`: `data-theme`, `color-scheme`, `localStorage`,
 * `theme-color` meta, and a reflow nudge for WebKit. No `class` — Tailwind `dark:`
 * uses the same `data-theme` (see `theme.css` `@custom-variant dark`).
 */
export function applyDocumentTheme(isDark: boolean): void {
  if (typeof document === "undefined") {
    return;
  }
  const root = document.documentElement;
  const theme = isDark ? "dark" : "light";
  root.setAttribute("data-theme", theme);
  root.style.setProperty("color-scheme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  } catch {
    /* ignore */
  }
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute(
    "content",
    isDark ? THEME_COLOR_DARK : THEME_COLOR_LIGHT
  );
  void root.offsetHeight;
}
