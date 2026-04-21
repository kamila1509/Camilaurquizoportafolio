import { motion } from "motion/react";
import { Heart, Sparkles, Code2, Coffee, Music, Book } from "lucide-react";

interface AboutMeProps {
  language: "en" | "es";
}

export function AboutMe({ language }: AboutMeProps) {
  const content = {
    en: {
      title: "About Me",
      intro: "Hello! I'm Camila",
      description:
        "I'm a passionate Senior React Developer with over 7 years of experience building beautiful, performant, and user-centric web applications. I love transforming complex problems into elegant solutions through clean code and thoughtful design.",
      passion: "What I Love",
      passionItems: [
        {
          icon: Code2,
          title: "Clean Code",
          description: "Writing maintainable and scalable solutions",
        },
        {
          icon: Sparkles,
          title: "Innovation",
          description: "Exploring new technologies and best practices",
        },
        {
          icon: Heart,
          title: "User Experience",
          description: "Creating delightful interactions",
        },
      ],
      hobbies: "Beyond Coding",
      hobbiesItems: [
        { icon: Coffee, text: "Coffee enthusiast ☕" },
        { icon: Music, text: "Music lover 🎵" },
        { icon: Book, text: "Continuous learner 📚" },
      ],
      values: "My Values",
      valuesText:
        "I believe in continuous learning, collaborative teamwork, and building products that make a real difference. Quality over quantity, always.",
    },
    es: {
      title: "Sobre Mí",
      intro: "¡Hola! Soy Camila",
      description:
        "Soy una apasionada Desarrolladora Senior de React con más de 7 años de experiencia construyendo aplicaciones web hermosas, eficientes y centradas en el usuario. Me encanta transformar problemas complejos en soluciones elegantes a través de código limpio y diseño cuidadoso.",
      passion: "Lo Que Amo",
      passionItems: [
        {
          icon: Code2,
          title: "Código Limpio",
          description: "Escribir soluciones mantenibles y escalables",
        },
        {
          icon: Sparkles,
          title: "Innovación",
          description: "Explorar nuevas tecnologías y mejores prácticas",
        },
        {
          icon: Heart,
          title: "Experiencia de Usuario",
          description: "Crear interacciones encantadoras",
        },
      ],
      hobbies: "Más Allá del Código",
      hobbiesItems: [
        { icon: Coffee, text: "Entusiasta del café ☕" },
        { icon: Music, text: "Amante de la música 🎵" },
        { icon: Book, text: "Aprendiz continua 📚" },
      ],
      values: "Mis Valores",
      valuesText:
        "Creo en el aprendizaje continuo, el trabajo colaborativo en equipo y construir productos que marquen una diferencia real. Calidad sobre cantidad, siempre.",
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
                <p className="text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
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
                >
                  ⭐
                </motion.span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.valuesText}
              </p>
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
