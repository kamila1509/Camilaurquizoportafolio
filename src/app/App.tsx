import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutMe } from "./components/AboutMe";
import { ExperienceSection } from "./components/ExperienceSection";
import { TechStackSection } from "./components/TechStackSection";
import { EducationProjectsSection } from "./components/EducationProjectsSection";
import { Footer } from "./components/Footer";
import { KawaiiCursor } from "./components/KawaiiCursor";
import { ChatBot } from "./components/ChatBot";
import { KawaiiLoader } from "./components/KawaiiLoader";
import {
  SafariThemeSplash,
  type SafariThemeSwitchTarget,
} from "./components/SafariThemeSplash";
import { isSafariBrowser } from "./lib/safari";
import {
  applyDocumentTheme,
  getStoredIsDark,
} from "./lib/theme-initialize";
import { motion } from "motion/react";

const SAFARI_THEME_SWITCH_MS = 700;
const KAWAII_DURATION_MS = 2000;

type LoadPhase = "kawaii" | "ready";

export default function App() {
  const [isDark, setIsDark] = useState(() => getStoredIsDark());
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [showKawaiiCursor, setShowKawaiiCursor] = useState(true);
  const [phase, setPhase] = useState<LoadPhase>("kawaii");
  const [safariThemeSwitch, setSafariThemeSwitch] =
    useState<SafariThemeSwitchTarget | null>(null);
  const safariInitEndRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Toggle dark mode: Safari keeps an overlay while we re-apply the theme and wait for paint
  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    if (isSafariBrowser()) {
      setSafariThemeSwitch(next ? "dark" : "light");
    }
  };

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  useLayoutEffect(() => {
    applyDocumentTheme(isDark);
  }, [isDark]);

  // Safari: after toggle, re-apply + double rAF so layout/paint catch up, then remove overlay
  useEffect(() => {
    if (safariThemeSwitch == null || !isSafariBrowser()) {
      return;
    }
    let cancelled = false;
    const t0 = performance.now();
    applyDocumentTheme(isDark);
    void document.documentElement.offsetHeight;
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      if (cancelled) {
        return;
      }
      raf2 = requestAnimationFrame(() => {
        if (cancelled) {
          return;
        }
        applyDocumentTheme(isDark);
        void document.documentElement.offsetHeight;
        // Flush stale GPU compositor tiles (backdrop-filter layers cache the
        // pre-toggle pixels; toggling display synchronously forces a full rebuild
        // before the overlay lifts — the user never sees this because the
        // SafariThemeSplash covers the screen and no intermediate paint occurs).
        document.body.style.display = "none";
        void document.body.offsetHeight;
        document.body.style.display = "";
        const left = Math.max(0, SAFARI_THEME_SWITCH_MS - (performance.now() - t0));
        safariInitEndRef.current = window.setTimeout(() => {
          safariInitEndRef.current = null;
          if (!cancelled) {
            setSafariThemeSwitch(null);
          }
        }, left);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      if (raf2) {
        cancelAnimationFrame(raf2);
      }
      if (safariInitEndRef.current) {
        clearTimeout(safariInitEndRef.current);
        safariInitEndRef.current = null;
      }
    };
  }, [safariThemeSwitch, isDark]);

  useEffect(() => {
    if (phase === "kawaii") {
      const t = window.setTimeout(() => {
        setPhase("ready");
      }, KAWAII_DURATION_MS);
      return () => clearTimeout(t);
    }
    return;
  }, [phase]);

  // Scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (phase === "kawaii") {
    return <KawaiiLoader language={language} />;
  }

  return (
    <div className="min-h-screen relative w-full min-w-0 max-w-full overflow-x-clip">
      {safariThemeSwitch && (
        <SafariThemeSplash
          language={language}
          target={safariThemeSwitch}
        />
      )}
      {/* Kawaii cursor effect */}
      {showKawaiiCursor && <KawaiiCursor />}

      {/* ChatBot */}
      <ChatBot
        language={language}
        theme={isDark ? "dark" : "light"}
      />

      {/* Background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <Header
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
      />

      {/* Main Content */}
      <main>
        <HeroSection language={language} />
        <AboutMe language={language} />
        <ExperienceSection language={language} />
        <TechStackSection language={language} />
        <EducationProjectsSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1, boxShadow: "var(--shadow-kawaii)" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-primary to-accent text-white rounded-full shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}

      {/* Floating kawaii elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
          >
            {["⭐", "💫", "✨", "🌸", "💖", "🦄", "🌈", "🎀"][i]}
          </motion.div>
        ))}
      </div>
    </div>
  );
}