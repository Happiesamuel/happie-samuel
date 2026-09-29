import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import EasterEgg, { useEasterEgg } from "./sections/EasterEgg";

const links = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "Experience", link: "#experience" },
  { title: "Skills", link: "#skills" },
  { title: "Contact", link: "#contact" },
];

const linksContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } },
};

const linkItem = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, setIsOpen, trigger } = useEasterEgg();
  // Active section tracking (unchanged)
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.link))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Shrink the bar slightly once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="fixed inset-x-0 top-0 z-[200] px-4 pt-4 max-w-[120rem] mx-auto w-full"
    >
      <motion.nav
        animate={{
          height: scrolled ? 56 : 64,
          boxShadow: scrolled
            ? "0 10px 50px rgba(0,0,0,.55), 0 0 35px rgba(34,197,94,.14)"
            : "0 8px 40px rgba(0,0,0,.35), 0 0 30px rgba(34,197,94,.08)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center justify-between rounded-full border border-border bg-card/70 px-6 backdrop-blur-[20px]"
      >
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            trigger();
          }}
          className="group flex items-center gap-3"
        >
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full bg-primary/15
              shadow-[0_0_18px_rgba(34,197,94,.25)]
              transition-all duration-300
              group-hover:bg-primary/25
              group-hover:shadow-[0_0_30px_rgba(74,222,128,.45)]
            "
          >
            {/* Idle sway, like a leaf in a light breeze */}
            <motion.span
              animate={{ rotate: [0, 10, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              🌿
            </motion.span>
          </div>

          <span className="text-base font-bold tracking-tight text-text-primary">
            Happie
          </span>
        </Link>

        <EasterEgg isOpen={isOpen} onClose={() => setIsOpen(false)} />

        {/* Desktop Links */}
        <motion.div
          variants={linksContainer}
          initial="hidden"
          animate="show"
          className="hidden items-center gap-2 md:flex"
        >
          {links.map((l) => {
            const id = l.link.replace("#", "");
            const isActive = activeId === id;

            return (
              <motion.a
                key={l.link}
                href={l.link}
                variants={linkItem as Variants}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={`nav-link group relative px-4 py-2 ${
                  isActive ? "active" : ""
                }`}
              >
                {/* Sliding pill that glides between active links */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full border border-accent/20 bg-accent/10 shadow-[0_0_18px_rgba(74,222,128,.18)]"
                  />
                )}
                <span className="relative z-10">{l.title}</span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.button
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          animate="rest"
          variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="btn-primary relative cursor-pointer overflow-hidden rounded-[12px]"
        >
          <span className="relative z-10">Hire Me</span>

          {/* Shine sweep on hover */}
          <motion.span
            variants={{
              rest: { x: "-120%", opacity: 0 },
              hover: {
                x: "220%",
                opacity: 1,
                transition: { duration: 0.7, ease: "easeInOut" },
              },
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.button>
      </motion.nav>
    </motion.header>
  );
}
