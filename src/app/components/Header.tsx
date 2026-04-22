import { Moon, Sun, Languages } from "lucide-react";
import { motion } from "motion/react";

interface HeaderProps {
  isDark: boolean;
  toggleDarkMode: () => void;
  language: "en" | "es";
  toggleLanguage: () => void;
}

export function Header({ isDark, toggleDarkMode, language, toggleLanguage }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card/80 border-b border-border"
    >
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-2 min-w-0 max-w-full">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="min-w-0 flex-1 sm:flex-none sm:shrink-0 text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent truncate"
          title="Camila Urquizo"
        >
          Camila Urquizo ✨
        </motion.div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          {/* Language Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label="Toggle language"
          >
            <Languages className="w-4 h-4" />
            <span className="font-semibold">{language === "en" ? "EN" : "ES"}</span>
          </motion.button>

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground transition-colors shadow-lg"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
