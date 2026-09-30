import { motion, AnimatePresence } from "framer-motion";

export function GlitchText({ text }: { text: string }) {
  return (
    <div className="relative inline-block">
      <span className="relative z-10 text-text-secondary">{text}</span>
      <motion.span
        aria-hidden
        className="absolute inset-0 text-accent mix-blend-screen"
        animate={{ x: [0, -2, 1, -1, 0], opacity: [0, 0.6, 0, 0.4, 0] }}
        transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 2.2 }}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute inset-0 text-red-500/60 mix-blend-screen"
        animate={{ x: [0, 2, -1, 1, 0], opacity: [0, 0.4, 0, 0.3, 0] }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatDelay: 2.5,
          delay: 0.1,
        }}
      >
        {text}
      </motion.span>
    </div>
  );
}
