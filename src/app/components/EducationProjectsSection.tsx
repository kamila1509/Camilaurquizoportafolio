import { GraduationCap, FolderKanban, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

interface EducationProjectsSectionProps {
  language: "en" | "es";
}

export function EducationProjectsSection({ language }: EducationProjectsSectionProps) {
  const content = {
    en: {
      title: "Education & projects",
      subtitle: "Academic path and product experience aligned with my CV",
      educationSectionTitle: "Education",
      education: {
        master: {
          degree: "Master’s Degree in Web Application and Services Development",
          school: "Universitat Internacional Valenciana (VIU)",
          detail: "Valencia, Spain · 2024",
        },
        bachelor: {
          degree: "Bachelor’s Degree in Computer Engineering",
          school: "National University Federico Villarreal (UNFV)",
          detail: "Lima, Peru",
        },
      },
      projectsTitle: "Key product contexts",
      projects: [
        {
          name: "Insurance management platform",
          description:
            "Frontend for insurance operations: quote generation, product configuration, complex workflows. React, TypeScript, Redux, Redux-Saga, Sass, REST, Jest, and Azure DevOps in an international team.",
          tags: ["React", "TypeScript", "Redux", "Azure DevOps", "Jest"],
          impact: "K-LAGAN",
        },
        {
          name: "Mining instrumentation monitoring (SPA)",
          description:
            "Scalable SPA for monitoring mining instrumentation and operational data: React Query, Context, role-based access, AWS Amplify, JWT, Chart.js, Google Maps, AWS (S3, CloudFront, CodePipeline), Jest/RTL.",
          tags: ["React", "TypeScript", "Vite", "Tailwind", "AWS", "React Query"],
          impact: "Start Cloud Peru",
        },
        {
          name: "Nu Skin Vera (skincare & ecommerce app)",
          description:
            "Hybrid mobile work with React Native and related web stack (Vue, Vuetify, Vuex) for a personalized skincare and ecommerce experience for US-based clients, with QA and agile delivery.",
          tags: ["React Native", "Vue", "JavaScript", "Ecommerce"],
          impact: "Globant / Nu Skin",
        },
      ],
    },
    es: {
      title: "Formación y proyectos",
      subtitle: "Trayectoria académica y productos alineados con mi CV",
      educationSectionTitle: "Formación",
      education: {
        master: {
          degree: "Máster en Desarrollo de Aplicaciones y Servicios Web",
          school: "Universitat Internacional Valenciana (VIU)",
          detail: "Valencia, España · 2024",
        },
        bachelor: {
          degree: "Grado en Ingeniería de Computación",
          school: "Universidad Nacional Federico Villarreal (UNFV)",
          detail: "Lima, Perú",
        },
      },
      projectsTitle: "Contextos de producto",
      projects: [
        {
          name: "Plataforma de gestión de seguros",
          description:
            "Frontends para operaciones de seguros: cotización, configuración de productos y flujos complejos. React, TypeScript, Redux, Redux-Saga, Sass, REST, Jest y Azure DevOps, en equipo internacional.",
          tags: ["React", "TypeScript", "Redux", "Azure DevOps", "Jest"],
          impact: "K-LAGAN",
        },
        {
          name: "Monitoreo de instrumentación minera (SPA)",
          description:
            "SPA escalable para datos de instrumentación y operación minera: React Query, Context, acceso por roles, AWS Amplify, JWT, Chart.js, Google Maps, AWS (S3, CloudFront, CodePipeline), Jest/RTL.",
          tags: ["React", "TypeScript", "Vite", "Tailwind", "AWS", "React Query"],
          impact: "Start Cloud Perú",
        },
        {
          name: "Nu Skin Vera (app skincare y ecommerce)",
          description:
            "Trabajo en app móvil híbrida con React Native y stack web (Vue, Vuetify, Vuex) para experiencia de skincare y ecommerce hacia clientes en EE. UU., con QA y entrega ágil.",
          tags: ["React Native", "Vue", "JavaScript", "Ecommerce"],
          impact: "Globant / Nu Skin",
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
                <h3 className="text-2xl font-bold text-foreground">{t.educationSectionTitle}</h3>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-primary mb-1">{t.education.master.degree}</h4>
                <p className="text-foreground/70 font-semibold">{t.education.master.school}</p>
                <p className="text-muted-foreground text-sm">{t.education.master.detail}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-1">{t.education.bachelor.degree}</h4>
                <p className="text-foreground/70 font-semibold">{t.education.bachelor.school}</p>
                <p className="text-muted-foreground text-sm">{t.education.bachelor.detail}</p>
              </div>

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

                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <span className="text-xl" aria-hidden>
                      🏢
                    </span>
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
            {language === "en" ? "Other strengths (from CV)" : "Otras fortalezas (del CV)"}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "☁️",
                text:
                  language === "en"
                    ? "Backend on AWS: Lambda functions with DynamoDB"
                    : "Backend en AWS: funciones Lambda con DynamoDB",
              },
              { icon: "🌐", text: language === "en" ? "Internationalization (e.g. react-intl)" : "Internacionalización (p. ej. react-intl)" },
              {
                icon: "🤖",
                text:
                  language === "en"
                    ? "QA automation (Selenium) & observability (Datadog, Google Analytics)"
                    : "Automatización QA (Selenium) y observabilidad (Datadog, Google Analytics)",
              },
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
