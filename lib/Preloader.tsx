"use client";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import ParticleField from "./ParticleField";
import { GlitchText } from "./GlitchText";
import { TbWorldCode } from "react-icons/tb";

const statusMessages = [
  "Initializing systems...",
  "Compiling components...",
  "Loading assets...",
  "Optimizing render...",
  "Almost ready...",
];

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  const raw = useMotionValue(0);
  const smooth = useSpring(raw, { stiffness: 60, damping: 20 });
  const displayValue = useTransform(smooth, (v) => Math.floor(v));
  const [displayText, setDisplayText] = useState("0");

  useEffect(() => {
    const unsub = displayValue.on("change", (v) => setDisplayText(String(v)));
    return unsub;
  }, [displayValue]);

  useEffect(() => {
    // Simulated, non-linear progress: fast, then slows, then a final burst
    let current = 0;
    const tick = () => {
      const remaining = 100 - current;
      const step =
        remaining > 40 ? Math.random() * 8 + 4 : Math.random() * 3 + 0.5;
      current = Math.min(100, current + step);
      setProgress(current);
      raw.set(current);

      if (current < 100) {
        setTimeout(tick, current > 90 ? 180 : 90);
      } else {
        setTimeout(() => setExiting(true), 500);
      }
    };
    const start = setTimeout(tick, 300);
    return () => clearTimeout(start);
  }, [raw]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((i) => Math.min(i + 1, statusMessages.length - 1));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (exiting) {
      const t = setTimeout(() => {
        setHidden(true);
        onComplete?.();
      }, 1100);
      return () => clearTimeout(t);
    }
  }, [exiting, onComplete]);

  if (hidden) return null;

  const leafPathLength = Math.min(progress / 100, 1);

  return (
    <AnimatePresence>
      {!hidden && (
        <div className="fixed inset-0 z-[500]">
          {/* Curtain panels: split apart on exit */}
          <motion.div
            initial={{ x: 0 }}
            animate={exiting ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#050807]"
          >
            <ParticleField />
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={exiting ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[#050807]"
          >
            <div className="absolute inset-0 -translate-x-1/2">
              <ParticleField />
            </div>
          </motion.div>

          {/* Center content, fades/scales out just before the curtains move */}
          <motion.div
            animate={
              exiting ? { opacity: 0, scale: 0.85, filter: "blur(8px)" } : {}
            }
            transition={{ duration: 0.4 }}
            className="relative z-10 flex h-full flex-col items-center justify-center gap-8"
          >
            {/* Logo that draws itself */}
            <div className="relative flex size-24 items-center justify-center">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(74,222,128,0.15)",
                    "0 0 45px rgba(74,222,128,0.35)",
                    "0 0 20px rgba(74,222,128,0.15)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-primary/10"
              />

              <div className="relative flex size-24 items-center justify-center">
                {/* Ambient pulse glow, unchanged */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(74,222,128,0.15)",
                      "0 0 45px rgba(74,222,128,0.35)",
                      "0 0 20px rgba(74,222,128,0.15)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-primary/10"
                />

                {/* Progress ring, drawn separately from the icon */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute size-20 -rotate-90"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="rgba(34,197,94,0.15)"
                    strokeWidth="4"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 42}
                    style={{
                      strokeDashoffset: 2 * Math.PI * 42 * (1 - leafPathLength),
                    }}
                    className="drop-shadow-[0_0_6px_rgba(74,222,128,0.8)]"
                  />
                </svg>

                {/* The icon itself, centered inside the ring */}
                <TbWorldCode className="relative size-8 text-accent" />
              </div>
            </div>

            {/* Glitching percentage counter */}
            <div className="relative text-center">
              <div className="relative flex items-baseline gap-1 font-mono">
                <span className="relative text-6xl font-bold text-text-primary md:text-7xl">
                  {displayText}
                  {progress > 96 && progress < 100 && (
                    <motion.span
                      className="absolute inset-0 text-accent"
                      animate={{ x: [0, -3, 2, 0], opacity: [0, 1, 0] }}
                      transition={{ duration: 0.15, repeat: 3 }}
                    >
                      {displayText}
                    </motion.span>
                  )}
                </span>
                <span className="text-2xl font-medium text-accent">%</span>
              </div>
            </div>

            {/* Progress bar with scanning glow */}
            <div className="relative h-[3px] w-64 overflow-hidden rounded-full bg-white/5 md:w-80">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                animate={{ left: ["-10%", "110%"] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Cycling status text */}
            <div className="h-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={statusIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-caption tracking-wide"
                >
                  <GlitchText text={statusMessages[statusIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Corner brackets, sci-fi HUD touch */}
          {[
            "top-8 left-8 border-t border-l",
            "top-8 right-8 border-t border-r",
            "bottom-8 left-8 border-b border-l",
            "bottom-8 right-8 border-b border-r",
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: exiting ? 0 : 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`pointer-events-none absolute z-10 size-8 border-accent/40 md:size-12 ${pos}`}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
