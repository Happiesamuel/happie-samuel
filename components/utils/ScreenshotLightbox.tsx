"use client";

import { createPortal } from "react-dom";
import { useSyncExternalStore, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Zoom } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

interface ScreenshotLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}

export default function ScreenshotLightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
  projectName,
}: ScreenshotLightboxProps) {
  const isClient = useIsClient();
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  // Jump to the clicked thumbnail whenever the modal opens
  useEffect(() => {
    if (!isOpen || !swiperInstance) return;

    swiperInstance.slideTo(initialIndex, 0);
  }, [isOpen, initialIndex, swiperInstance]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[400] flex items-center justify-center bg-black/90 backdrop-blur-md px-4 py-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="absolute -top-12 right-0 flex size-9 cursor-pointer items-center justify-center rounded-full border border-border bg-card/60 text-text-primary backdrop-blur-md"
            >
              <IoClose size={18} />
            </motion.button>

            {/* Counter */}
            <div className="absolute -top-12 left-0 text-sm text-text-secondary">
              {projectName} — {activeIndex + 1} / {images.length}
            </div>

            {/* Swiper */}
            <div className="overflow-hidden rounded-[16px] border border-border bg-card/40">
              <Swiper
                modules={[Navigation, Keyboard, Zoom]}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                navigation={{
                  prevEl: ".lightbox-prev",
                  nextEl: ".lightbox-next",
                }}
                keyboard={{ enabled: true }}
                zoom={true}
                initialSlide={initialIndex}
                className="w-full"
              >
                {images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="swiper-zoom-container">
                      <img
                        src={src}
                        alt={`${projectName} screenshot ${i + 1}`}
                        className="h-[75vh] w-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Custom nav arrows */}
            <button
              className="lightbox-prev absolute left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-card/70 text-text-primary backdrop-blur-md transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="Previous screenshot"
            >
              <IoChevronBack size={18} />
            </button>
            <button
              className="lightbox-next absolute right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-card/70 text-text-primary backdrop-blur-md transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="Next screenshot"
            >
              <IoChevronForward size={18} />
            </button>

            {/* Thumbnail strip */}
            <div className="mt-4 flex justify-center gap-2">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => swiperInstance?.slideTo(i)}
                  className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!isClient) return null;
  return createPortal(modal, document.body);
}
