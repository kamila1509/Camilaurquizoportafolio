import { motion } from "motion/react";
import { Code2, Database, Cloud, TestTube } from "lucide-react";

interface TechStackSectionProps {
  language: "en" | "es";
}

export function TechStackSection({ language }: TechStackSectionProps) {
  const content = {
    en: {
      title: "Tech stack",
      categories: [
        {
          title: "Frontend",
          icon: Code2,
          color: "from-pink-400 to-pink-600",
          techs: [
            { name: "React (17–18)", icon: "⚛️", level: "" },
            { name: "TypeScript", icon: "📘", level: "" },
            { name: "Next.js", icon: "▲", level: "" },
            { name: "React Native", icon: "📱", level: "" },
            { name: "Vue.js & Angular", icon: "◆", level: "" },
            { name: "HTML · CSS · Sass/SCSS", icon: "🎨", level: "" },
          ],
        },
        {
          title: "State & data",
          icon: Database,
          color: "from-purple-400 to-purple-600",
          techs: [
            { name: "Redux", icon: "🔄", level: "" },
            { name: "Redux-Saga", icon: "🧩", level: "" },
            { name: "Redux Form", icon: "📋", level: "" },
            { name: "TanStack React Query", icon: "🔍", level: "" },
            { name: "Zustand", icon: "🐻", level: "" },
          ],
        },
        {
          title: "Testing",
          icon: TestTube,
          color: "from-green-400 to-green-600",
          techs: [
            { name: "Jest", icon: "🃏", level: "" },
            { name: "React Testing Library", icon: "🧪", level: "" },
            { name: "Vitest", icon: "✅", level: "" },
            { name: "Enzyme", icon: "🔬", level: "" },
            { name: "Cypress", icon: "🌲", level: "" },
            { name: "Selenium (QA automation)", icon: "🤖", level: "" },
          ],
        },
        {
          title: "Tooling, cloud & delivery",
          icon: Cloud,
          color: "from-blue-400 to-blue-600",
          techs: [
            { name: "Git · GitLab", icon: "🔀", level: "" },
            { name: "Azure DevOps & CI/CD", icon: "🧰", level: "" },
            { name: "Vite & Webpack", icon: "📦", level: "" },
            { name: "Babel, Axios, Fetch API", icon: "🔌", level: "" },
            { name: "Storybook", icon: "📖", level: "" },
            { name: "AWS (Amplify, S3, etc.)", icon: "☁️", level: "" },
            { name: "Datadog", icon: "📈", level: "" },
            { name: "Google Analytics", icon: "📊", level: "" },
          ],
        },
      ],
    },
    es: {
      title: "Stack tecnológico",
      categories: [
        {
          title: "Frontend",
          icon: Code2,
          color: "from-pink-400 to-pink-600",
          techs: [
            { name: "React (17–18)", icon: "⚛️", level: "" },
            { name: "TypeScript", icon: "📘", level: "" },
            { name: "Next.js", icon: "▲", level: "" },
            { name: "React Native", icon: "📱", level: "" },
            { name: "Vue.js y Angular", icon: "◆", level: "" },
            { name: "HTML · CSS · Sass/SCSS", icon: "🎨", level: "" },
          ],
        },
        {
          title: "Estado y datos",
          icon: Database,
          color: "from-purple-400 to-purple-600",
          techs: [
            { name: "Redux", icon: "🔄", level: "" },
            { name: "Redux-Saga", icon: "🧩", level: "" },
            { name: "Redux Form", icon: "📋", level: "" },
            { name: "TanStack React Query", icon: "🔍", level: "" },
            { name: "Zustand", icon: "🐻", level: "" },
          ],
        },
        {
          title: "Testing",
          icon: TestTube,
          color: "from-green-400 to-green-600",
          techs: [
            { name: "Jest", icon: "🃏", level: "" },
            { name: "React Testing Library", icon: "🧪", level: "" },
            { name: "Vitest", icon: "✅", level: "" },
            { name: "Enzyme", icon: "🔬", level: "" },
            { name: "Cypress", icon: "🌲", level: "" },
            { name: "Selenium (automatización QA)", icon: "🤖", level: "" },
          ],
        },
        {
          title: "Herramientas, nube e integración",
          icon: Cloud,
          color: "from-blue-400 to-blue-600",
          techs: [
            { name: "Git · GitLab", icon: "🔀", level: "" },
            { name: "Azure DevOps y CI/CD", icon: "🧰", level: "" },
            { name: "Vite y Webpack", icon: "📦", level: "" },
            { name: "Babel, Axios, Fetch API", icon: "🔌", level: "" },
            { name: "Storybook", icon: "📖", level: "" },
            { name: "AWS (Amplify, S3, etc.)", icon: "☁️", level: "" },
            { name: "Datadog", icon: "📈", level: "" },
            { name: "Google Analytics", icon: "📊", level: "" },
          ],
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-20 px-4">
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

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {t.categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "var(--shadow-kawaii)" }}
                className="bg-card rounded-3xl p-6 shadow-lg border border-border transition-all"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br ${category.color} rounded-2xl shadow-lg mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Tech Items */}
                <div className="space-y-3">
                  {category.techs.map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 bg-secondary/30 rounded-2xl hover:bg-secondary/50 transition-colors"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground text-sm leading-snug">{tech.name}</div>
                        {tech.level ? (
                          <div className="text-xs text-muted-foreground">{tech.level}</div>
                        ) : null}
                      </div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills - Glossy Pills */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {(
              language === "en"
                ? [
                    "JavaScript (ES+)",
                    "Tailwind CSS",
                    "Sass/SCSS",
                    "Selenium",
                    "Datadog & GA",
                    "react-intl",
                    "ContentStack (CMS)",
                    "Agile / Scrum",
                  ]
                : [
                    "JavaScript (ES+)",
                    "Tailwind CSS",
                    "Sass/SCSS",
                    "Selenium",
                    "Datadog y GA",
                    "react-intl",
                    "ContentStack (CMS)",
                    "Agile / Scrum",
                  ]
            ).map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  className="px-5 py-2 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-full font-semibold text-foreground border border-primary/30 shadow-md hover:shadow-lg transition-all"
                  style={{
                    boxShadow: "inset 0 2px 8px rgba(255, 255, 255, 0.3), var(--shadow-soft)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
