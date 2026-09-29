import { AnimatePresence, motion } from "framer-motion";
import { FaBolt } from "react-icons/fa6";
import { createPortal } from "react-dom";
import { useState, useRef, useCallback, useSyncExternalStore } from "react";
const pixelMap = [
  "..XXXXX.......",
  ".XXXXXXXX.....",
  "XXXXXXXXX.....",
  "XXXX.XXXX.....",
  "XXXXXXXXXX....",
  "..XXXXXXXXXXX.",
  "..XXXXXXXXXXXX",
  "..XXXXXXXXX...",
  "..XXX..XXX....",
  "..XX....XX....",
];

export function useEasterEgg(requiredClicks = 5, resetDelay = 1500) {
  const [isOpen, setIsOpen] = useState(false);

  const clickCount = useRef(0);

  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const trigger = useCallback(() => {
    clickCount.current += 1;

    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }

    resetTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, resetDelay);

    if (clickCount.current >= requiredClicks) {
      setIsOpen(true);
      clickCount.current = 0;
    }
  }, [requiredClicks, resetDelay]);

  return {
    isOpen,
    setIsOpen,
    trigger,
  };
}
function PixelDino({ running }: { running: boolean }) {
  return (
    <div className="relative h-16 w-20">
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(14, 1fr)`,
          gridTemplateRows: `repeat(10, 1fr)`,
        }}
      >
        {pixelMap.flatMap((row, y) =>
          [...row].map((cell, x) =>
            cell === "X" ? (
              <span
                key={`${x}-${y}`}
                className="bg-accent shadow-[0_0_4px_rgba(74,222,128,0.6)]"
                style={{ gridColumn: x + 1, gridRow: y + 1 }}
              />
            ) : null,
          ),
        )}
      </div>

      {/* Legs, alternating to fake a run cycle */}
      <motion.span
        animate={running ? { scaleY: [1, 0.6, 1] } : {}}
        transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-[28%] h-2 w-[10%] origin-bottom bg-accent"
      />
      <motion.span
        animate={running ? { scaleY: [0.6, 1, 0.6] } : {}}
        transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-[45%] h-2 w-[10%] origin-bottom bg-accent"
      />
    </div>
  );
}
const random = Math.random();

function Firefly({ delay }: { delay: number }) {
  const startX = random * 100;
  const startY = random * 100;

  return (
    <motion.span
      className="absolute size-1 rounded-full bg-accent shadow-[0_0_6px_rgba(74,222,128,0.9)]"
      style={{ left: `${startX}%`, top: `${startY}%` }}
      animate={{
        opacity: [0, 1, 0],
        y: [0, -12, 0],
      }}
      transition={{
        duration: 3 + random * 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // client snapshot: we're in the browser
    () => false, // server snapshot: always false during SSR
  );
}

export default function EasterEgg({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const isClient = useIsClient();

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative  w-[350px] overflow-hidden rounded-[24px] border border-accent/20 bg-card/90 p-8 text-center backdrop-blur-xl"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(34,197,94,0.14) 0%, rgba(17,28,23,0.95) 55%, rgba(7,17,12,0.98) 100%)",
            }}
          >
            {/* Fireflies */}
            {Array.from({ length: 8 }).map((_, i) => (
              <Firefly key={i} delay={i * 0.4} />
            ))}

            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg font-bold text-text-primary"
            >
              You found the easter egg!{" "}
              <motion.span
                animate={{ rotate: [0, 20, -15, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                🎉
              </motion.span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-sm text-text-secondary"
            >
              Thanks for exploring. You&apos;re awesome!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, type: "spring", stiffness: 200 }}
              className="my-6 flex justify-center"
            >
              <PixelDino running />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onClose}
              className="btn-glow flex w-full cursor-pointer items-center justify-center gap-2"
            >
              Keep Going <FaBolt size={14} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  if (!isClient) return null;

  return createPortal(modal, document.body);
}
