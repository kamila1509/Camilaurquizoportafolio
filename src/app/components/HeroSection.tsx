import { Download, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";
import callieImg from "../../imports/callie.png";
import profileImg from "../../imports/me.png";

interface HeroSectionProps {
  language: "en" | "es";
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      greeting: "Hi there! I'm",
      name: "Camila Urquizo",
      title: "Senior React Developer",
      subtitle: "Crafting Beautiful & Performant Web Experiences",
      description:
        "7+ years building scalable applications with React, TypeScript, and modern web technologies. Passionate about clean code, accessibility, and delightful user experiences.",
      cta: "Download CV",
      experience: "7+ Years",
      projects: "50+ Projects",
      tech: "20+ Technologies",
    },
    es: {
      greeting: "¡Hola! Soy",
      name: "Camila Urquizo",
      title: "Desarrolladora React Senior",
      subtitle: "Creando Experiencias Web Hermosas y Eficientes",
      description:
        "Más de 7 años construyendo aplicaciones escalables con React, TypeScript y tecnologías web modernas. Apasionada por el código limpio, accesibilidad y experiencias de usuario encantadoras.",
      cta: "Descargar CV",
      experience: "7+ Años",
      projects: "50+ Proyectos",
      tech: "20+ Tecnologías",
    },
  };

  const t = content[language];

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm">{t.greeting}</span>
            </motion.div>

            <div className="relative">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t.name}
              </h1>
              {/* Callie with React sticker */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -top-8 -right-12 lg:-right-16"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="relative"
                >
                  <img
                    src={callieImg}
                    alt="Callie"
                    className="w-24 h-24 lg:w-32 lg:h-32 drop-shadow-lg dark:drop-shadow-[0_0_20px_rgba(255,110,199,0.9)]"
                  />
                  {/* React sticker on bandana */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-2 right-2 w-8 h-8 bg-[#61DAFB] rounded-full flex items-center justify-center text-xs shadow-lg"
                  >
                    ⚛️
                  </motion.div>
                </motion.div>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground/80 mb-2">
                {t.title}
              </h2>
              <p className="text-xl text-primary font-semibold">{t.subtitle}</p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.description}
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(255, 137, 192, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="w-5 h-5" />
              {t.cta}
            </motion.button>

            {/* Stats */}
            <div className="flex gap-6 pt-6">
              {[
                { label: t.experience, icon: "💼" },
                { label: t.projects, icon: "🚀" },
                { label: t.tech, icon: "⚡" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-1">{stat.icon}</div>
                  <div className="font-bold text-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Decorative Card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative bg-gradient-to-br from-card via-secondary/20 to-accent/30 rounded-[3rem] p-8 shadow-2xl backdrop-blur-sm border border-border"
              style={{
                boxShadow: "var(--shadow-kawaii)",
              }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden">
                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-20"
                >
                  <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-2xl" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full blur-3xl" />
                </motion.div>

                {/* Profile picture */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative z-10 w-full h-full p-4"
                >
                  <div className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-white/50 dark:border-primary/30 shadow-2xl">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={profileImg}
                      alt="Camila Urquizo"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Sparkle overlay on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-3xl"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${15 + i * 20}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        ✨
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Floating hearts around photo */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${10 + i * 15}%`,
                      top: `${5 + (i % 3) * 30}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    <Heart className="w-6 h-6 text-primary fill-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Decorative corners */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full blur-2xl opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-full blur-3xl opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
