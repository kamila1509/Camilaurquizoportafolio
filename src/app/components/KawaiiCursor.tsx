import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

const SM_MIN_WIDTH = "(min-width: 640px)";

export function KawaiiCursor() {
  const [enabled, setEnabled] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(SM_MIN_WIDTH).matches
      : false
  );
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const mq = window.matchMedia(SM_MIN_WIDTH);
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) {
      setSparkles([]);
      return;
    }

    let sparkleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Only create sparkles occasionally to avoid performance issues
      if (Math.random() > 0.7) {
        const newSparkle: Sparkle = {
          id: sparkleId++,
          x: e.clientX,
          y: e.clientY,
        };

        setSparkles((prev) => [...prev, newSparkle]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [1, 1, 0],
              y: [0, -30],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute"
            style={{
              left: sparkle.x,
              top: sparkle.y,
            }}
          >
            <span className="text-2xl">✨</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
