"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import ParticleField from "./ParticleField";

type Phase = "idle" | "covering" | "covered" | "revealing";

interface Origin {
  x: number;
  y: number;
}

interface TransitionContextValue {
  navigate: (href: string, origin?: Origin) => void;
}

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function useTransitionNavigate() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    throw new Error(
      "useTransitionNavigate must be used within a TransitionProvider",
    );
  }
  return ctx.navigate;
}

function LoaderCore() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
      <div className="relative flex size-16 items-center justify-center">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(74,222,128,0.15)",
              "0 0 40px rgba(74,222,128,0.35)",
              "0 0 20px rgba(74,222,128,0.15)",
            ],
          }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-primary/10"
        />
        <svg viewBox="0 0 100 100" className="absolute size-14 -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="rgba(34,197,94,0.15)"
            strokeWidth="6"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#4ade80"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 42}
            animate={{
              strokeDashoffset: [
                2 * Math.PI * 42,
                2 * Math.PI * 42 * 0.25,
                2 * Math.PI * 42,
              ],
            }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="drop-shadow-[0_0_6px_rgba(74,222,128,0.8)]"
          />
        </svg>
      </div>

      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="text-caption tracking-wide text-text-secondary"
      >
        Loading project...
      </motion.p>
    </div>
  );
}

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [phase, setPhase] = useState<Phase>("idle");
  const [origin, setOrigin] = useState<Origin>({ x: 0, y: 0 });
  const pendingHref = useRef<string | null>(null);
  const prevPathname = useRef(pathname);

  const navigate = useCallback(
    (href: string, originPoint?: Origin) => {
      if (phase !== "idle") return; // ignore clicks while a transition is running

      const fallback =
        typeof window !== "undefined"
          ? { x: window.innerWidth / 2, y: window.innerHeight / 2 }
          : { x: 0, y: 0 };

      setOrigin(originPoint ?? fallback);
      pendingHref.current = href;
      setPhase("covering");
    },
    [phase],
  );

  // Once the screen is fully covered, actually change route underneath it
  const handleCoverComplete = () => {
    if (phase !== "covering") return;
    setPhase("covered");
    if (pendingHref.current) {
      router.push(pendingHref.current);
    }
  };

  // When the route changes while we're covered, give the new page a beat
  // to paint, then start revealing it
  useEffect(() => {
    if (phase === "covered" && pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      const t = setTimeout(() => setPhase("revealing"), 250);
      return () => clearTimeout(t);
    }
    prevPathname.current = pathname;
  }, [pathname, phase]);

  const handleRevealComplete = () => {
    if (phase !== "revealing") return;
    setPhase("idle");
    pendingHref.current = null;
  };

  const maxRadius =
    typeof window !== "undefined"
      ? Math.hypot(
          Math.max(origin.x, window.innerWidth - origin.x),
          Math.max(origin.y, window.innerHeight - origin.y),
        )
      : 1600;

  const isActive =
    phase === "covering" || phase === "covered" || phase === "revealing";

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <AnimatePresence>
        {isActive && (
          <motion.div
            key="route-transition"
            className="pointer-events-none fixed inset-0 z-[600] overflow-hidden bg-[#050807]"
            initial={{
              clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
            }}
            animate={
              phase === "revealing"
                ? { clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }
                : {
                    clipPath: `circle(${maxRadius}px at ${origin.x}px ${origin.y}px)`,
                  }
            }
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={() => {
              if (phase === "covering") handleCoverComplete();
              if (phase === "revealing") handleRevealComplete();
            }}
          >
            <ParticleField />
            <LoaderCore />
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
