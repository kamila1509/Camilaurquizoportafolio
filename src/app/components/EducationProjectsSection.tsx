import { GraduationCap, FolderKanban, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

interface EducationProjectsSectionProps {
  language: "en" | "es";
}

export function EducationProjectsSection({ language }: EducationProjectsSectionProps) {
  const content = {
    en: {
      title: "Education & Projects",
      subtitle: "Continuous learning and impactful work",
      education: {
        degree: "Master's Degree in Web Development",
        school: "Universitat Internacional Valenciana",
        period: "2020 - 2022",
        description: "Specialized in modern web architectures, UX design, and full-stack development.",
      },
      projectsTitle: "Featured Projects",
      projects: [
        {
          name: "Mining Monitoring Platform",
          description:
            "Real-time monitoring dashboard for mining operations with data visualization, alerts, and predictive analytics using React, D3.js, and AWS IoT.",
          tags: ["React", "TypeScript", "D3.js", "AWS", "Real-time"],
          impact: "Reduced incidents by 35%",
        },
        {
          name: "E-commerce Platform",
          description:
            "Full-featured e-commerce solution with product catalog, cart, checkout, and admin panel. Built with Next.js and Stripe integration.",
          tags: ["Next.js", "Redux", "Stripe", "Tailwind"],
          impact: "500K+ monthly users",
        },
        {
          name: "Component Library",
          description:
            "Design system and reusable component library used across multiple projects. Documented with Storybook and published to npm.",
          tags: ["React", "Storybook", "Rollup", "TypeScript"],
          impact: "Used in 8+ projects",
        },
      ],
    },
    es: {
      title: "Educación y Proyectos",
      subtitle: "Aprendizaje continuo y trabajo de impacto",
      education: {
        degree: "Máster en Desarrollo Web",
        school: "Universitat Internacional Valenciana",
        period: "2020 - 2022",
        description: "Especializada en arquitecturas web modernas, diseño UX y desarrollo full-stack.",
      },
      projectsTitle: "Proyectos Destacados",
      projects: [
        {
          name: "Plataforma Monitoreo Minero",
          description:
            "Dashboard de monitoreo en tiempo real para operaciones mineras con visualización de datos, alertas y análisis predictivo usando React, D3.js y AWS IoT.",
          tags: ["React", "TypeScript", "D3.js", "AWS", "Tiempo Real"],
          impact: "Reducción incidentes 35%",
        },
        {
          name: "Plataforma E-commerce",
          description:
            "Solución e-commerce completa con catálogo de productos, carrito, checkout y panel admin. Construida con Next.js e integración Stripe.",
          tags: ["Next.js", "Redux", "Stripe", "Tailwind"],
          impact: "500K+ usuarios mensuales",
        },
        {
          name: "Librería de Componentes",
          description:
            "Sistema de diseño y librería de componentes reutilizables usada en múltiples proyectos. Documentada con Storybook y publicada en npm.",
          tags: ["React", "Storybook", "Rollup", "TypeScript"],
          impact: "Usada en 8+ proyectos",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
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

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Education Card - Spans 1 column */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "var(--shadow-kawaii)" }}
            className="lg:col-span-1 bg-gradient-to-br from-card via-primary/5 to-accent/5 rounded-3xl p-8 shadow-lg border border-border transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold text-primary mb-1">{t.education.degree}</h4>
                <p className="text-foreground/70 font-semibold">{t.education.school}</p>
                <p className="text-muted-foreground text-sm">{t.education.period}</p>
              </div>
              <p className="text-foreground/70 leading-relaxed">{t.education.description}</p>

              {/* Decorative elements */}
              <div className="flex gap-2 pt-4">
                {["🎓", "📚", "💻", "🌟"].map((emoji, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="text-3xl"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects - Spans 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <FolderKanban className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">{t.projectsTitle}</h3>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              {t.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4, boxShadow: "var(--shadow-kawaii)" }}
                  className="bg-card rounded-3xl p-6 shadow-lg border border-border transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h4>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-secondary/50 hover:bg-secondary rounded-xl transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors"
                        aria-label="View live"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.button>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span className="text-2xl">🚀</span>
                    <span>{project.impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional certifications */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-card rounded-3xl p-8 shadow-lg border border-border"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            {language === "en" ? "Certifications & Skills" : "Certificaciones y Habilidades"}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", text: language === "en" ? "Accessibility (a11y)" : "Accesibilidad (a11y)" },
              { icon: "🔄", text: "CI/CD Pipelines" },
              { icon: "📊", text: language === "en" ? "Data Visualization" : "Visualización de Datos" },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="flex items-center gap-3 p-4 bg-secondary/30 rounded-2xl"
              >
                <span className="text-3xl">{cert.icon}</span>
                <span className="font-semibold">{cert.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
