import { Heart, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {
  language: "en" | "es";
}

export function Footer({ language }: FooterProps) {
  const content = {
    en: {
      message: "Let's build something amazing together!",
      contact: "Get in touch",
      rights: "All rights reserved",
      made: "Made with",
      and: "and",
      by: "by Camila Urquizo",
    },
    es: {
      message: "¡Construyamos algo increíble juntos!",
      contact: "Ponte en contacto",
      rights: "Todos los derechos reservados",
      made: "Hecho con",
      and: "y",
      by: "por Camila Urquizo",
    },
  };

  const t = content[language];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-foreground" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-sky-400" },
    { icon: Mail, label: "Email", href: "#", color: "hover:text-primary" },
  ];

  return (
    <footer className="py-16 px-4 bg-gradient-to-br from-card via-secondary/20 to-accent/20 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* CTA */}
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.message}
            </h3>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-kawaii)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="w-5 h-5" />
              {t.contact}
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, i) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className={`p-4 bg-card rounded-2xl shadow-lg border border-border transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="max-w-md mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Bottom text */}
          <div className="text-foreground/60 space-y-2">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span>{t.made}</span>
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span>{t.and}</span>
              <span>☕</span>
              <span>{t.by}</span>
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} Camila Urquizo. {t.rights}.
            </p>
          </div>

          {/* Kawaii decorative elements */}
          <div className="flex justify-center gap-4 text-3xl">
            {["✨", "💖", "🌸", "🦄", "🌈"].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
