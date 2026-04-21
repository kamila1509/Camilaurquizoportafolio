import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Sparkles } from "lucide-react";
import callieImg from "../../imports/callie.png";

interface ChatBotProps {
  language: "en" | "es";
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatBot({ language }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      title: "Chat with Cami AI",
      placeholder: "Ask me anything...",
      greeting:
        "Hi! I'm Cami AI! ✨ I can tell you about my experience, skills, and projects. What would you like to know?",
      suggestions: [
        "Tell me about your experience",
        "What technologies do you use?",
        "What projects have you worked on?",
      ],
    },
    es: {
      title: "Chat con Cami AI",
      placeholder: "Pregúntame lo que quieras...",
      greeting:
        "¡Hola! Soy Cami AI! ✨ Puedo contarte sobre mi experiencia, habilidades y proyectos. ¿Qué te gustaría saber?",
      suggestions: [
        "Cuéntame sobre tu experiencia",
        "¿Qué tecnologías usas?",
        "¿En qué proyectos has trabajado?",
      ],
    },
  };

  const t = content[language];

  const botResponses = {
    en: {
      experience:
        "I have 7+ years in frontend, mainly React and React Native, with TypeScript, Redux, and REST integration. I’m a Senior React Software Developer at K-LAGAN since 2023. Before that: Start Cloud Peru (mining monitoring SPA, 2022–2023), Globant on Nu Skin Vera (2020–2023), and Belatrix (2019–2020) with Angular, Vue, and web/mobile. 💻",
      technologies:
        "Stack highlights: React, React Native, Next.js, Vue, Angular, TypeScript, JavaScript, HTML, CSS, Sass. State: Redux, Redux-Saga, React Query, Zustand. Testing: Jest, React Testing Library, Vitest, Cypress, Enzyme, plus QA automation with Selenium. I also work with Google Analytics, Datadog, Git, GitLab, Azure DevOps, Vite, Webpack, Storybook, AWS (Amplify, S3, CloudFront). Ask for detail on any area. 🚀",
      projects:
        "Key contexts: insurance management platform (quotes & product config) at K-LAGAN; mining instrumentation monitoring SPA at Start Cloud Peru; Nu Skin Vera (skincare & ecommerce) with Globant. International clients and full lifecycle delivery. 🌟",
      education:
        "I completed a Master’s in Web Application and Services Development at Universitat Internacional Valenciana (VIU, Valencia, 2024) and my bachelor’s in Computer Engineering at UNFV, Lima, Peru. 📚",
      languages:
        "Spanish: native. English: B2, upper-intermediate, professional working proficiency. 🌎",
      default:
        "Thanks for asking! 💖 You can ask about my experience, stack, project contexts, or education — the answers are aligned with my published CV. ✨",
    },
    es: {
      experience:
        "Tengo más de 7 años en frontend, sobre todo React y React Native, con TypeScript, Redux e integración REST. En K-LAGAN soy Senior React Software Developer desde 2023. Antes: Start Cloud Perú (SPA de monitoreo minero, 2022–2023), Globant en Nu Skin Vera (2020–2023) y Belatrix (2019–2020) con Angular, Vue y web/móvil. 💻",
      technologies:
        "Stack: React, React Native, Next.js, Vue, Angular, TypeScript, JavaScript, HTML, CSS, Sass. Estado: Redux, Redux-Saga, React Query, Zustand. Testing: Jest, React Testing Library, Vitest, Cypress, Enzyme, y automatización QA con Selenium. También trabajo con Google Analytics, Datadog, Git, GitLab, Azure DevOps, Vite, Webpack, Storybook, AWS (Amplify, S3, CloudFront). Pregúntame por un bloque. 🚀",
      projects:
        "Contextos clave: plataforma de gestión de seguros (cotización y producto) en K-LAGAN; monitoreo de instrumentación minera en Start Cloud Perú; Nu Skin Vera (skincare y ecommerce) con Globant. Clientes internacionales y entrega de punta a punta. 🌟",
      education:
        "Máster en Desarrollo de Aplicaciones y Servicios Web en la VIU (Valencia, 2024) y grado en Ingeniería de Computación en la UNFV, Lima, Perú. 📚",
      languages:
        "Español: nativo. Inglés: B2, intermedio-alto, nivel profesional. 🌎",
      default:
        "¡Gracias por preguntar! 💖 Puedes preguntar por experiencia, stack, proyectos o formación; las respuestas siguen el CV. ✨",
    },
  };

  const responses = botResponses[language];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetingMessage: Message = {
        id: Date.now().toString(),
        text: t.greeting,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([greetingMessage]);
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    if (
      msg.includes("experiencia") ||
      msg.includes("experience") ||
      msg.includes("trabajo") ||
      msg.includes("work")
    ) {
      return responses.experience;
    } else if (
      msg.includes("tecnolog") ||
      msg.includes("stack") ||
      msg.includes("herramientas") ||
      msg.includes("tools") ||
      msg.includes("selenium") ||
      msg.includes("datadog") ||
      msg.includes("analytics") ||
      msg.includes("analítica")
    ) {
      return responses.technologies;
    } else if (
      msg.includes("proyecto") ||
      msg.includes("project") ||
      msg.includes("portfolio")
    ) {
      return responses.projects;
    } else if (
      msg.includes("educación") ||
      msg.includes("education") ||
      msg.includes("estudios") ||
      msg.includes("master")
    ) {
      return responses.education;
    } else if (
      msg.includes("idioma") ||
      msg.includes("language") ||
      msg.includes("inglés") ||
      msg.includes("english")
    ) {
      return responses.languages;
    } else {
      return responses.default;
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <>
      {/* Floating Action Button with Callie */}
      <motion.button
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 p-3 bg-white dark:bg-card rounded-full shadow-lg border-4 border-primary"
        style={{
          boxShadow: "0 8px 32px rgba(255, 110, 199, 0.4)",
        }}
      >
        <motion.img
          src={callieImg}
          alt="Callie"
          className="w-16 h-16 dark:drop-shadow-[0_0_15px_rgba(255,110,199,0.8)]"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 left-8 z-50 w-[380px] h-[600px] bg-card/95 backdrop-blur-xl rounded-[2rem] border-2 border-border shadow-kawaii overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-primary to-accent text-white relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Callie Avatar */}
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1"
                  >
                    <img
                      src={callieImg}
                      alt="Callie"
                      className="w-full h-full dark:drop-shadow-[0_0_10px_rgba(255,110,199,0.6)]"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-medium">{t.title}</h3>
                    <div className="flex items-center gap-1 text-xs opacity-90">
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                        className="w-2 h-2 bg-green-300 rounded-full"
                      />
                      Online
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-primary to-accent text-white rounded-br-md"
                        : "bg-secondary/50 text-foreground rounded-bl-md border border-border"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary/50 p-4 rounded-2xl rounded-bl-md border border-border">
                    <div className="flex gap-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Suggestions */}
              {messages.length === 1 && !isTyping && (
                <div className="space-y-2 pt-4">
                  <p className="text-xs text-muted-foreground text-center mb-3">
                    {language === "en" ? "Quick suggestions:" : "Sugerencias rápidas:"}
                  </p>
                  {t.suggestions.map((suggestion, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full p-3 text-sm text-left bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <Sparkles className="w-3 h-3 inline mr-2 text-primary" />
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-background/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder={t.placeholder}
                  className="flex-1 px-4 py-3 rounded-full bg-input-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="p-3 bg-gradient-to-br from-primary to-accent text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
