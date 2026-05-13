import { Moon, Sun } from "lucide-react";

export type SafariThemeSwitchTarget = "dark" | "light";

interface SafariThemeSplashProps {
  language: "en" | "es";
  target: SafariThemeSwitchTarget;
}

/**
 * Masks WebKit’s delay when toggling <html data-theme> (Safari) so the transition
 * doesn’t look stuck or flash intermediate paints.
 */
export function SafariThemeSplash({ language, target }: SafariThemeSplashProps) {
  const t =
    target === "dark"
      ? language === "en"
        ? { line: "Loading dark mode", hint: "Initializing the page" }
        : { line: "Cargando modo oscuro", hint: "Inicializando la página" }
      : language === "en"
        ? { line: "Loading light mode", hint: "Initializing the page" }
        : { line: "Cargando modo claro", hint: "Inicializando la página" };

  const Icon = target === "dark" ? Moon : Sun;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-background px-4 text-foreground"
      role="status"
      aria-live="polite"
    >
      <Icon
        className="h-12 w-12 animate-pulse text-primary"
        strokeWidth={1.5}
        aria-hidden
      />
      <p className="text-center text-lg font-medium tracking-tight">{t.line}</p>
      <p className="text-center text-sm text-muted-foreground">{t.hint}</p>
      <div
        className="mt-2 h-1 w-40 overflow-hidden rounded-full bg-secondary"
        aria-hidden
      >
        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>
    </div>
  );
}
