import { motion } from "framer-motion";
import { IconType } from "react-icons";

const RIPPLE_COUNT = 3;
const DURATION = 5;

export default function Tag({ text, Icon }: { text: string; Icon: IconType }) {
  return (
    <span className=" inline-flex btn-chip items-center gap-2 rounded-full border border-accent/20 bg-card/60    px-4 py-2 text-caption md:text-small font-medium  text-text-accent backdrop-blur-[18px] shadow-[0_0_20px_rgba(34,197,94,0.08)] transition-all duration-300 hover:border-accent/35 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] ">
      <span className="relative flex items-center justify-center h-4 w-4">
        {Array.from({ length: RIPPLE_COUNT }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-full bg-accent/40"
            animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
            transition={{
              duration: DURATION,
              repeat: Infinity,
              ease: "easeOut",
              delay: (DURATION / RIPPLE_COUNT) * i,
            }}
          />
        ))}

        <Icon className="relative h-4 w-4 text-accent drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
      </span>
      {text}
    </span>
  );
}
