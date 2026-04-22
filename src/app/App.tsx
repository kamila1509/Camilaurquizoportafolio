import { useState, useEffect } from "react";
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
import { motion } from "motion/react";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [showKawaiiCursor, setShowKawaiiCursor] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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

  // Show loader on initial load
  if (isLoading) {
    return <KawaiiLoader language={language} />;
  }

  return (
    <div className="min-h-screen relative w-full min-w-0 max-w-full overflow-x-clip">
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