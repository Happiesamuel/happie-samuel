import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const projectLinks = [
  { label: "Smart Farm", href: "/projects/smart-farm" },
  { label: "Mealio", href: "/projects/mealio" },
  { label: "Apex Bank", href: "/projects/apex-bank" },
  { label: "ChainFundMe", href: "/projects/chainfundme" },
  { label: "Or6ix", href: "/projects/or6ix" },
  { label: "Flutter UI", href: "/projects/flutter-ui" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/your-username" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/ha-the-dev" },
  { icon: FaXTwitter, href: "https://x.com/ha_the_dev" },
  { icon: MdOutlineMailOutline, href: "mailto:odionsamuel2005@gmail.com" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const linkList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const linkItem = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050807] px-3 pt-16 pb-6 md:px-12">
      {/* Background: faint top glow so it doesn't look flat after Contact */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 0%, rgba(34,197,94,0.06) 0%, transparent 45%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8"
      >
        {/* Brand */}
        <motion.div
          variants={fadeUp as unknown as Variants}
          className="col-span-2 md:col-span-1"
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🌿</span>
            <span className="text-base font-bold text-text-primary">
              Happie
            </span>
          </Link>

          <p className="mt-4 max-w-[220px] text-sm leading-6 text-text-secondary">
            Building digital products that make a difference.
          </p>

          <motion.div
            variants={linkList}
            className="mt-5 flex items-center gap-4"
          >
            {socials.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                variants={linkItem as unknown as Variants}
                whileHover={{ y: -3, color: "var(--accent)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-text-secondary"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp as unknown as Variants}>
          <p className="text-small font-semibold text-text-primary">
            Quick Links
          </p>
          <motion.ul variants={linkList} className="mt-4 flex flex-col gap-3">
            {quickLinks.map(({ label, href }) => (
              <motion.li key={label} variants={linkItem as unknown as Variants}>
                <motion.a
                  href={href}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-block text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Projects */}
        <motion.div variants={fadeUp as unknown as Variants}>
          <p className="text-small font-semibold text-text-primary">Projects</p>
          <motion.ul variants={linkList} className="mt-4 flex flex-col gap-3">
            {projectLinks.map(({ label, href }) => (
              <motion.li key={label} variants={linkItem as unknown as Variants}>
                <motion.a
                  href={href}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-block text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp as unknown as Variants}>
          <p className="text-small font-semibold text-text-primary">Contact</p>
          <motion.ul variants={linkList} className="mt-4 flex flex-col gap-3">
            <motion.li
              variants={linkItem as unknown as Variants}
              className="flex items-center gap-2 text-sm text-text-secondary"
            >
              <MdOutlineMailOutline
                className="shrink-0 text-accent"
                size={15}
              />
              odionsamuel2005@gmail.com
            </motion.li>
            <motion.li
              variants={linkItem as unknown as Variants}
              className="flex items-center gap-2 text-sm text-text-secondary"
            >
              <FaLocationDot className="shrink-0 text-accent" size={13} />
              Benin City, Nigeria
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Divider + bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-caption text-text-secondary md:flex-row"
      >
        <p>© {new Date().getFullYear()} Happie Samuel. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="text-accent"
          >
            ❤️
          </motion.span>
          by Happie
        </p>
      </motion.div>
    </footer>
  );
}
