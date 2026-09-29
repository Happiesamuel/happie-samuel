import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
export default function Mouse() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-0 left-1/2 flex -translate-x-1/2 z-50 flex-col items-center gap-2.5"
    >
      {/* Mouse */}
      <div
        className="
          flex h-11 w-7 justify-center z-50
          rounded-full
          border border-border
          bg-card/40
          backdrop-blur-md
        "
      >
        <motion.div
          animate={{
            y: [6, 18, 6],
            opacity: [1, 0.4, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mt-2
            size-2
            rounded-full
            bg-accent
            shadow-[0_0_12px_rgba(74,222,128,.8)]
          "
        />
      </div>

      {/* Arrow */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="size-4 text-text-muted" />
      </motion.div>
    </motion.div>
  );
}
