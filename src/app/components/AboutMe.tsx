import { motion } from "motion/react";
import { Heart, Sparkles, Code2, Book } from "lucide-react";

interface AboutMeProps {
  language: "en" | "es";
}

export function AboutMe({ language }: AboutMeProps) {
  const content = {
    en: {
      title: "About Me",
      intro: "How I work",
      workParagraphs: [
        "I care about building things that not only work today, but that can be maintained and improved over time. I try to keep the app clear for the user even as it grows.",
        "I also pay attention to when to move fast and when to prioritize quality or experience, depending on the context.",
        "I like working in sync with design, backend, and QA so the whole story holds from the idea to production.",
      ],
      passion: "What I lean on",
      passionItems: [
        {
          icon: Code2,
          title: "Structure that scales",
          description: "Frontends that stay legible when business rules grow—types, state boundaries, and patterns the team can share",
        },
        {
          icon: Sparkles,
          title: "Quality you can see",
          description: "Tests and automation where they buy confidence, plus signals from production so we’re not guessing",
        },
        {
          icon: Heart,
          title: "Product in the room",
          description: "Clear UX in international teams; web and mobile when the product needs both, not one-size-fits-all",
        },
      ],
      hobbies: "Languages",
      hobbiesItems: [
        { icon: Book, text: "English — B2, professional working proficiency" },
        { icon: Heart, text: "Spanish — native" },
      ],
      values: "Beyond the desk",
      valuesParagraphs: [
        "I like to really disconnect: working out, going out, and completely changing gears.",
        "Callie 🐶 is my soft spot—even though she’s far away now, she’s still part of my every day (and of course this page).",
        "I also enjoy getting out, clearing my head, and keeping a balance between everything I do.",
      ],
    },
    es: {
      title: "Sobre mí",
      intro: "Cómo trabajo",
      workParagraphs: [
        "Me importa construir cosas que no solo funcionen hoy, sino que se puedan mantener y mejorar con el tiempo. Intento que, aunque la aplicación crezca, siga siendo clara para el usuario.",
        "También tengo en cuenta cuándo ir rápido y cuándo priorizar calidad o experiencia, dependiendo del contexto.",
        "Me gusta trabajar alineada con diseño, backend y QA para que todo tenga sentido desde la idea hasta que llega a producción.",
      ],
      passion: "En qué me apoyo",
      passionItems: [
        {
          icon: Code2,
          title: "Estructura que escala",
          description: "Frontends legibles cuando el dominio se complica: tipos, límites de estado y patrones compartidos en el equipo",
        },
        {
          icon: Sparkles,
          title: "Calidad con señales",
          description: "Pruebas y automatización donde aportan confianza, y datos de entorno real para no ir a ciegas",
        },
        {
          icon: Heart,
          title: "Producto presente",
          description: "UX clara en equipos internacionales; web y móvil cuando el producto lo pide, sin forzar un solo molde",
        },
      ],
      hobbies: "Idiomas",
      hobbiesItems: [
        { icon: Book, text: "Inglés — B2, nivel profesional" },
        { icon: Heart, text: "Español — nativo" },
      ],
      values: "Fuera del código",
      valuesParagraphs: [
        "Me gusta desconectar de verdad: entrenar, salir y cambiar completamente el chip.",
        "Callie 🐶 es mi adoración, aunque ahora la tengo a distancia. Aun así, siempre está presente en mi día a día (y claramente también en esta página).",
        "También disfruto salir, despejarme y tener ese balance entre todo lo que hago.",
      ],
    },
  };

  const t = content[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent inline-flex items-center gap-3">
            {t.title}
            <motion.span
              animate={{
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              ✨
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Main intro card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "var(--shadow-kawaii)" }}
            className="lg:col-span-2 p-8 rounded-[2rem] bg-card/60 backdrop-blur-xl border-2 border-border shadow-soft"
          >
            <div className="flex items-start gap-4 mb-4">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="text-4xl"
              >
                💖
              </motion.div>
              <div>
                <h3 className="text-3xl mb-2">{t.intro}</h3>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  {t.workParagraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Passion section */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-[2rem] bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-border shadow-soft"
          >
            <h3 className="text-2xl mb-6 flex items-center gap-2">
              {t.passion}
              <span className="text-2xl">🌸</span>
            </h3>
            <div className="space-y-4">
              {t.passionItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-background/50 border border-border/50 transition-all hover:border-primary/50"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies and Values */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Hobbies card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl border-2 border-border shadow-soft"
            >
              <h3 className="text-2xl mb-4 flex items-center gap-2">
                {t.hobbies}
                <span className="text-2xl">🎀</span>
              </h3>
              <div className="space-y-3">
                {t.hobbiesItems.map((hobby, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-background/40 border border-border/30"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      <hobby.icon className="w-5 h-5 text-accent" />
                    </motion.div>
                    <span className="text-sm">{hobby.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Values card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-[2rem] bg-gradient-to-br from-accent/10 to-secondary/20 backdrop-blur-xl border-2 border-border shadow-soft"
            >
              <h3 className="text-2xl mb-4 flex items-center gap-2">
                {t.values}
                <motion.span
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="text-2xl"
                  aria-hidden
                >
                  🐶
                </motion.span>
              </h3>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                {t.valuesParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="text-6xl opacity-20"
          >
            🦄
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-10 pointer-events-none">
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="text-5xl opacity-20"
          >
            🌈
          </motion.div>
        </div>
      </div>
    </section>
  );
}
