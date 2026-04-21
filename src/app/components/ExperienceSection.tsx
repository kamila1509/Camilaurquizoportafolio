import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";
import callieImg from "../../imports/callie.png";

interface ExperienceSectionProps {
  language: "en" | "es";
}

export function ExperienceSection({ language }: ExperienceSectionProps) {
  const content = {
    en: {
      title: "Work Experience",
      subtitle: "Building amazing products at top companies",
      experiences: [
        {
          company: "K-LAGAN",
          position: "Senior React Developer",
          period: "2021 - Present",
          description:
            "Leading frontend architecture, implementing CI/CD pipelines, and mentoring junior developers. Focus on scalable React applications with TypeScript and AWS integration.",
          achievements: ["Led team of 5 developers", "Reduced build time by 40%", "Implemented E2E testing"],
        },
        {
          company: "Globant",
          position: "React Developer",
          period: "2019 - 2021",
          description:
            "Developed enterprise-level web applications for international clients. Specialized in React, Redux, and performance optimization.",
          achievements: ["Built 10+ client projects", "Performance boost 60%", "Established code standards"],
        },
        {
          company: "Belatrix",
          position: "Frontend Developer",
          period: "2017 - 2019",
          description:
            "Started journey in professional web development, building responsive UIs and learning modern JavaScript frameworks.",
          achievements: ["Delivered 15+ features", "Mobile-first approach", "Accessibility champion"],
        },
      ],
    },
    es: {
      title: "Experiencia Laboral",
      subtitle: "Construyendo productos increíbles en empresas líderes",
      experiences: [
        {
          company: "K-LAGAN",
          position: "Desarrolladora React Senior",
          period: "2021 - Presente",
          description:
            "Liderando arquitectura frontend, implementando pipelines CI/CD y mentoreando desarrolladores junior. Enfoque en aplicaciones React escalables con TypeScript e integración AWS.",
          achievements: ["Lideré equipo de 5 devs", "Reduje build time 40%", "Implementé testing E2E"],
        },
        {
          company: "Globant",
          position: "Desarrolladora React",
          period: "2019 - 2021",
          description:
            "Desarrollé aplicaciones web empresariales para clientes internacionales. Especializada en React, Redux y optimización de rendimiento.",
          achievements: ["Construí 10+ proyectos", "Performance boost 60%", "Establecí estándares código"],
        },
        {
          company: "Belatrix",
          position: "Desarrolladora Frontend",
          period: "2017 - 2019",
          description:
            "Inicié mi trayectoria en desarrollo web profesional, construyendo UIs responsivas y aprendiendo frameworks JavaScript modernos.",
          achievements: ["Entregué 15+ features", "Enfoque mobile-first", "Champion accesibilidad"],
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-foreground/70">{t.subtitle}</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block rounded-full" />

          {/* Callie guide at the end of timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -left-2 bottom-0 hidden md:block"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              <img
                src={callieImg}
                alt="Callie Guide"
                className="w-20 h-20 drop-shadow-xl dark:drop-shadow-[0_0_18px_rgba(255,110,199,0.8)]"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            {t.experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block z-10" />

                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "var(--shadow-kawaii)" }}
                  className="md:ml-20 bg-card rounded-3xl p-8 shadow-lg border border-border transition-all"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                        <p className="text-primary font-semibold">{exp.position}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium"
                      >
                        ✨ {achievement}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
