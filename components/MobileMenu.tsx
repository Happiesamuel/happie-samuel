"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { LuCodeXml } from "react-icons/lu";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

interface NavLink {
  title: string;
  link: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
  links: NavLink[];
  activeId: string;
}

/* ---------- Hamburger / close icon ---------- */

const topLine = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 7 },
};
const middleLine = {
  closed: { opacity: 1, x: 0 },
  open: { opacity: 0, x: -8 },
};
const bottomLine = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -7 },
};

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative flex size-8 items-center justify-center">
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
        <motion.line
          x1="0"
          y1="1"
          x2="20"
          y2="1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={topLine}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.line
          x1="0"
          y1="8"
          x2="20"
          y2="8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={middleLine}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        <motion.line
          x1="0"
          y1="15"
          x2="20"
          y2="15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={bottomLine}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

export function MobileMenuTrigger({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.9 }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="relative z-[260] flex cursor-pointer  items-center justify-center rounded-full text-text-primary transition-colors hover:text-accent lg:hidden"
    >
      <HamburgerIcon isOpen={isOpen} />
    </motion.button>
  );
}

/* ---------- Dropdown panel ---------- */

const panelVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: -12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const listContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const linkItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const socials = [
  { icon: FaGithub, href: "https://github.com/Happiesamuel" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/hs-the-dev" },
  { icon: FaXTwitter, href: "https://x.com/hs_the_dev" },
  { icon: FaWhatsapp, href: "https://wa.me/2349065416113" },
];

export default function MobileMenu({
  isOpen,
  onToggle,
  onLinkClick,
  links,
  activeId,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop: tap outside to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onToggle}
            className="fixed inset-0 z-[240] bg-black/50 backdrop-blur-sm lg:hidden"
          />

          {/* The dropdown card itself, anchored under the navbar */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ transformOrigin: "top right" }}
            className="fixed right-4 top-[88px] z-[250] w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-[22px] border border-border bg-card/90 shadow-[0_20px_60px_rgba(0,0,0,0.55),0_0_40px_rgba(34,197,94,0.1)] backdrop-blur-[22px] lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-border/60 px-5 py-4">
              <span className="flex size-7 items-center justify-center rounded-full bg-accent/10 text-accent">
                <LuCodeXml size={14} />
              </span>
              <p className="text-small font-semibold text-text-primary">Menu</p>
            </div>

            {/* Links */}
            <motion.nav
              variants={listContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-1 px-3 py-3"
            >
              {links.map((l) => {
                const id = l.link.replace("/#", "");
                const isActive = activeId === id;

                return (
                  <motion.a
                    key={l.link}
                    href={l.link}
                    onClick={onLinkClick}
                    variants={linkItem}
                    whileTap={{ scale: 0.97 }}
                    className={`relative flex items-center rounded-[12px] px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
                    }`}
                  >
                    {l.title}
                    {isActive && (
                      <motion.span
                        layoutId="mobile-nav-dot"
                        className="ml-auto size-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(74,222,128,0.8)]"
                      />
                    )}
                  </motion.a>
                );
              })}
            </motion.nav>

            {/* Footer: socials + CTA */}
            <div className="flex items-center justify-between border-t border-border/60 px-5 py-4">
              <div className="flex items-center gap-4">
                {socials.map(({ icon: Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="text-text-secondary transition-colors hover:text-accent"
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="/#contact"
                onClick={onLinkClick}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary cursor-pointer rounded-[10px] px-4 py-2 text-text-primary text-caption"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
