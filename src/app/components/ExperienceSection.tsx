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
      subtitle: "Web, mobile, and insurance — including QA automation and product analytics",
      experiences: [
        {
          company: "K-LAGAN",
          position: "React Software Developer",
          period: "2023 - Present",
          description:
            "Scalable frontends for an insurance management platform: quotes, product configuration, and complex flows. React, TypeScript, Redux and Redux-Saga, Sass, accessible UIs, REST (Axios), Jest, and collaboration in Azure DevOps CI/CD. I also use Google Analytics and Datadog to understand usage and system health in production.",
          achievements: [
            "Async business logic with Redux-Saga",
            "Quality with unit and integration tests",
            "Analytics & observability: Google Analytics, Datadog; strong release discipline in CI/CD",
          ],
        },
        {
          company: "Start Cloud Peru",
          position: "Frontend Developer (freelance)",
          period: "2022 - 2023",
          description:
            "Single-page app for mining instrumentation and operational data: React, TypeScript, Vite, Tailwind, TanStack React Query, Context, role-based access and auth with AWS Amplify and JWT, dashboards and charts (Chart.js), maps (Google Maps), CI/CD on AWS (S3, CloudFront, CodePipeline).",
          achievements: [
            "Data viz: dashboards, time series, geospatial views",
            "Workflows for alerts, instruments, and reports",
            "Testing with Jest and React Testing Library",
          ],
        },
        {
          company: "Globant (Nu Skin International)",
          position: "Frontend Developer",
          period: "2020 - 2023",
          description:
            "Nu Skin Vera: hybrid mobile app for personalized skincare and ecommerce (React Native, Vue, Vuetify, Vuex). Features for skin consultation, recommendations, and progress; product catalog; agile delivery for US-based clients, with testing and QA.",
          achievements: [
            "React Native and web stacks for the same product",
            "APIs for personalized experiences and catalog",
            "Ecommerce and engagement-focused UI work",
          ],
        },
        {
          company: "Belatrix",
          position: "Frontend Developer",
          period: "2019 - 2020",
          description:
            "Ecommerce in the health sector, SSR insurance app (Angular 8, Node.js), and hands-on work in the QA space: functional testing plus test automation with Selenium. Participation in the Nu Skin project with web + mobile hybrid work. UI integration with backend services end-to-end.",
          achievements: [
            "Angular 8, Vue.js, Vuetify, Vuex, Jest",
            "QA: functional testing and automation with Selenium",
            "End-to-end delivery with development and testing",
          ],
        },
      ],
    },
    es: {
      title: "Experiencia laboral",
      subtitle: "Web, móvil y seguros — incl. automatización QA y analítica de producto",
      experiences: [
        {
          company: "K-LAGAN",
          position: "React Software Developer",
          period: "2023 - Presente",
          description:
            "Frontends escalables para una plataforma de gestión de seguros: cotizaciones, configuración de productos y flujos complejos. React, TypeScript, Redux y Redux-Saga, Sass, UI accesible, REST (Axios), Jest y colaboración en CI/CD con Azure DevOps. Uso de Google Analytics y Datadog para analítica de uso y salud de sistemas en producción.",
          achievements: [
            "Lógica asíncrona de negocio con Redux-Saga",
            "Calidad con pruebas unitarias e integración",
            "Analítica y observabilidad: Google Analytics, Datadog; despliegues con rigor en CI/CD",
          ],
        },
        {
          company: "Start Cloud Peru",
          position: "Desarrolladora frontend (freelance)",
          period: "2022 - 2023",
          description:
            "Aplicación de una sola página para instrumentación minera y datos operativos: React, TypeScript, Vite, Tailwind, TanStack React Query, Context, acceso por roles y autenticación con AWS Amplify y JWT, dashboards y gráficos (Chart.js), mapas (Google Maps), CI/CD en AWS (S3, CloudFront, CodePipeline).",
          achievements: [
            "Visualización: dashboards, series temporales, vistas geoespaciales",
            "Flujos de alertas, instrumentos e informes",
            "Pruebas con Jest y React Testing Library",
          ],
        },
        {
          company: "Globant (Nu Skin International)",
          position: "Desarrolladora frontend",
          period: "2020 - 2023",
          description:
            "Nu Skin Vera: app móvil híbrida de skincare y ecommerce (React Native, Vue, Vuetify, Vuex). Funcionalidades de consulta de piel, recomendaciones y seguimiento; catálogo; entrega ágil para clientes en EE. UU., con pruebas y QA.",
          achievements: [
            "React Native y web para el mismo producto",
            "APIs para experiencias personalizadas y catálogo",
            "Ecommerce e interfaz orientada al engagement",
          ],
        },
        {
          company: "Belatrix",
          position: "Desarrolladora frontend",
          period: "2019 - 2020",
          description:
            "Ecommerce en el sector salud, aplicación de seguros con SSR (Angular 8, Node.js) y trabajo en el ámbito de QA: pruebas funcionales y automatización con Selenium. Participación en el proyecto Nu Skin con híbrido web y móvil. Integración de interfaces con servicios backend de punta a punta.",
          achievements: [
            "Angular 8, Vue.js, Vuetify, Vuex, Jest",
            "QA: pruebas funcionales y automatización con Selenium",
            "Entrega de punta a punta con desarrollo y pruebas",
          ],
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
