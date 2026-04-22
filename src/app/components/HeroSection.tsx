import { Download, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";
import callieImg from "../../imports/callie.png";
import profileImg from "../../imports/me.png";
import cvPdfUrl from "../../imports/K-LAGAN- REACT DEV_Camila Urquizo.pdf?url";

interface HeroSectionProps {
  language: "en" | "es";
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      greeting: "Hi there! I'm",
      name: "Camila Urquizo",
      title: "Frontend Developer (React)",
      subtitle: "Building intuitive, well-thought-out digital products",
      description:
        "I have 7 years of experience in software development, working mainly with React and modern technologies across the frontend ecosystem. I also bring QA experience, including test automation with Selenium, and I work with analytics and observability tools such as Google Analytics and Datadog. I focus on clear, accessible, and maintainable interfaces, from code quality to how we measure and monitor products.",
      description2:
        "I'm interested in growing further in frontend architecture and in the use of artificial intelligence applied to development.",
      cta: "Download CV",
      experience: "7+ Years",
      projects: "International projects",
      tech: "20+ Technologies",
    },
    es: {
      greeting: "¡Hola! Soy",
      name: "Camila Urquizo",
      title: "Desarrolladora Frontend (React)",
      subtitle: "Construyendo productos digitales intuitivos y bien pensados",
      description:
        "Cuento con 7 años de experiencia en desarrollo de software, trabajando principalmente con React y tecnologías modernas del ecosistema frontend. También tengo experiencia en el ámbito de QA, con automatización de pruebas usando Selenium, y con analítica y observabilidad usando herramientas como Google Analytics y Datadog. Me enfoco en interfaces claras, accesibles y mantenibles, desde la calidad del código hasta cómo medimos y monitoreamos el producto.",
      description2:
        "Me interesa seguir creciendo en arquitectura frontend y en el uso de inteligencia artificial aplicada al desarrollo.",
      cta: "Descargar CV",
      experience: "7+ Años",
      projects: "Proyectos internacionales",
      tech: "20+ Tecnologías",
    },
  };

  const t = content[language];

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-x-hidden w-full min-w-0 max-w-full">
      <div className="container mx-auto w-full min-w-0 max-w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full min-w-0">
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
              {/* Callie with React sticker — hidden on small screens to avoid overlap/clutter */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -top-8 -right-12 lg:-right-16 hidden lg:block"
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

            <div className="text-lg text-foreground/70 leading-relaxed space-y-4">
              <p>{t.description}</p>
              <p>{t.description2}</p>
            </div>

            <motion.a
              href={cvPdfUrl}
              download="Camila-Urquizo-CV.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(255, 137, 192, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              aria-label={language === "en" ? "Download CV as PDF" : "Descargar CV en PDF"}
            >
              <Download className="w-5 h-5" aria-hidden />
              {t.cta}
            </motion.a>

            {/* Stats: grid + min-w-0 avoids a single row wider than the viewport on narrow phones */}
            <div className="grid w-full min-w-0 grid-cols-3 gap-2 sm:gap-6 pt-6">
              {[
                { label: t.experience, icon: "💼" },
                { label: t.projects, icon: "🌍" },
                { label: t.tech, icon: "⚡" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="min-w-0 text-center"
                >
                  <div className="text-2xl sm:text-3xl mb-1">{stat.icon}</div>
                  <div className="font-bold text-foreground text-xs sm:text-sm md:text-base leading-tight [overflow-wrap:break-word]">
                    {stat.label}
                  </div>
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
              className="relative bg-gradient-to-br from-card via-secondary/20 to-accent/30 rounded-[3rem] p-4 sm:p-8 shadow-2xl backdrop-blur-sm border border-border w-full min-w-0"
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
