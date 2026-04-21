import { motion } from "motion/react";
import { Code2, Rocket, Zap, Database, Cloud, TestTube } from "lucide-react";

interface TechStackSectionProps {
  language: "en" | "es";
}

export function TechStackSection({ language }: TechStackSectionProps) {
  const content = {
    en: {
      title: "Tech Stack",
      subtitle: "Technologies I love working with",
      categories: [
        {
          title: "Frontend",
          icon: Code2,
          color: "from-pink-400 to-pink-600",
          techs: [
            { name: "React", icon: "⚛️", level: "Expert" },
            { name: "TypeScript", icon: "📘", level: "Expert" },
            { name: "Next.js", icon: "▲", level: "Advanced" },
            { name: "React Native", icon: "📱", level: "Advanced" },
          ],
        },
        {
          title: "State & Data",
          icon: Database,
          color: "from-purple-400 to-purple-600",
          techs: [
            { name: "Redux", icon: "🔄", level: "Expert" },
            { name: "React Query", icon: "🔍", level: "Advanced" },
            { name: "Zustand", icon: "🐻", level: "Intermediate" },
            { name: "GraphQL", icon: "◆", level: "Intermediate" },
          ],
        },
        {
          title: "Cloud & DevOps",
          icon: Cloud,
          color: "from-blue-400 to-blue-600",
          techs: [
            { name: "AWS", icon: "☁️", level: "Advanced" },
            { name: "CI/CD", icon: "🔧", level: "Advanced" },
            { name: "Docker", icon: "🐳", level: "Intermediate" },
            { name: "Jenkins", icon: "🤖", level: "Intermediate" },
          ],
        },
        {
          title: "Testing & Quality",
          icon: TestTube,
          color: "from-green-400 to-green-600",
          techs: [
            { name: "Jest", icon: "🃏", level: "Expert" },
            { name: "Testing Library", icon: "🧪", level: "Expert" },
            { name: "Cypress", icon: "🌲", level: "Advanced" },
            { name: "Playwright", icon: "🎭", level: "Intermediate" },
          ],
        },
      ],
    },
    es: {
      title: "Stack Tecnológico",
      subtitle: "Tecnologías con las que me encanta trabajar",
      categories: [
        {
          title: "Frontend",
          icon: Code2,
          color: "from-pink-400 to-pink-600",
          techs: [
            { name: "React", icon: "⚛️", level: "Experto" },
            { name: "TypeScript", icon: "📘", level: "Experto" },
            { name: "Next.js", icon: "▲", level: "Avanzado" },
            { name: "React Native", icon: "📱", level: "Avanzado" },
          ],
        },
        {
          title: "Estado & Datos",
          icon: Database,
          color: "from-purple-400 to-purple-600",
          techs: [
            { name: "Redux", icon: "🔄", level: "Experto" },
            { name: "React Query", icon: "🔍", level: "Avanzado" },
            { name: "Zustand", icon: "🐻", level: "Intermedio" },
            { name: "GraphQL", icon: "◆", level: "Intermedio" },
          ],
        },
        {
          title: "Cloud & DevOps",
          icon: Cloud,
          color: "from-blue-400 to-blue-600",
          techs: [
            { name: "AWS", icon: "☁️", level: "Avanzado" },
            { name: "CI/CD", icon: "🔧", level: "Avanzado" },
            { name: "Docker", icon: "🐳", level: "Intermedio" },
            { name: "Jenkins", icon: "🤖", level: "Intermedio" },
          ],
        },
        {
          title: "Testing & Calidad",
          icon: TestTube,
          color: "from-green-400 to-green-600",
          techs: [
            { name: "Jest", icon: "🃏", level: "Experto" },
            { name: "Testing Library", icon: "🧪", level: "Experto" },
            { name: "Cypress", icon: "🌲", level: "Avanzado" },
            { name: "Playwright", icon: "🎭", level: "Intermedio" },
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
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{tech.name}</div>
                        <div className="text-xs text-muted-foreground">{tech.level}</div>
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
            {["Git", "Webpack", "Vite", "Tailwind CSS", "SCSS", "Figma", "Storybook", "Agile/Scrum"].map(
              (skill, i) => (
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
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
