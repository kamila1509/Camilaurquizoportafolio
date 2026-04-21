import { motion } from "motion/react";
import callieImg from "../../imports/callie.png";

interface KawaiiLoaderProps {
  language?: "en" | "es";
}

export function KawaiiLoader({ language = "en" }: KawaiiLoaderProps) {
  const text = {
    en: "Loading amazing things...",
    es: "Cargando cosas increíbles...",
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-lg">
      <div className="text-center">
        {/* Callie bouncing */}
        <motion.div
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <motion.img
            src={callieImg}
            alt="Loading"
            className="w-32 h-32 mx-auto drop-shadow-2xl dark:drop-shadow-[0_0_25px_rgba(255,110,199,1)]"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-foreground/70 mb-6"
        >
          {text[language]}
        </motion.p>

        {/* Loading dots */}
        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-primary rounded-full"
            />
          ))}
        </div>

        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${30 + i * 10}%`,
              top: `${40 + (i % 3) * 10}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </div>
  );
}
