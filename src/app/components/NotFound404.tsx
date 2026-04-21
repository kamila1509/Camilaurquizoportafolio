import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import callieImg from "../../imports/callie.png";

interface NotFound404Props {
  language?: "en" | "es";
  onGoHome?: () => void;
}

export function NotFound404({ language = "en", onGoHome }: NotFound404Props) {
  const content = {
    en: {
      title: "Oops! Code Not Found",
      subtitle: "But here I am to keep you company!",
      message:
        "This page doesn't exist in my codebase, but don't worry! Let's get you back to somewhere awesome.",
      button: "Back to Home",
    },
    es: {
      title: "¡Oops! Código No Encontrado",
      subtitle: "¡Pero aquí estoy yo para acompañarte!",
      message:
        "Esta página no existe en mi código, ¡pero no te preocupes! Volvamos a un lugar genial.",
      button: "Volver al Inicio",
    },
  };

  const t = content[language];

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* 404 with Callie */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* 404 Text */}
            <h1 className="text-[150px] lg:text-[200px] font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-none">
              404
            </h1>

            {/* Sad Callie in the middle of 0 */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <img
                  src={callieImg}
                  alt="Sad Callie"
                  className="w-24 h-24 lg:w-32 lg:h-32 drop-shadow-2xl dark:drop-shadow-[0_0_22px_rgba(255,110,199,0.9)]"
                />
                {/* Sad expression overlay */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -top-2 -right-2 text-3xl"
                >
                  😢
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {t.title}
          </h2>
          <p className="text-xl text-primary font-semibold">{t.subtitle}</p>
          <p className="text-lg text-foreground/70 max-w-lg mx-auto">
            {t.message}
          </p>
        </motion.div>

        {/* Action button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "var(--shadow-kawaii)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGoHome}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg"
        >
          <Home className="w-5 h-5" />
          {t.button}
        </motion.button>

        {/* Floating hearts around */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {["💔", "💖", "✨", "⭐", "🌸", "💫", "🎀", "🦄"][i]}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
