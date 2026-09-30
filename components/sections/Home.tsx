import {
  React as ReactIcon,
  Nextdotjs,
  Typescript,
  Flutter,
} from "@thesvg/react";
import { FiDownload } from "react-icons/fi";
import { FolderKanban, Clock, Trophy, Smartphone } from "lucide-react";
import { TbDeviceImacCode } from "react-icons/tb";
import Tag from "../utils/Tag";
import { motion, Variants } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const headingContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const wordItem = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const blurUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const pillsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const pillItem = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

const headingWords = [
  { text: "Building" },
  { text: "Digital" },
  { text: "Products" },
  { text: "That" },
  { text: "Feel" },
  { text: "Production-Ready.", gradient: true },
];
export default function Home() {
  const obj = [
    {
      title: "10+",
      sub: "Projects",
      icon: FolderKanban,
    },
    {
      title: "4+",
      sub: "Years Coding",
      icon: Clock,
    },
    {
      title: "HNG",
      sub: "Finalist",
      icon: Trophy,
    },
    {
      title: "Web + Mobile",
      sub: "App",
      icon: Smartphone,
    },
  ];
  const skills = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: Nextdotjs },
    { name: "TypeScript", icon: Typescript },
    { name: "React Native", icon: ReactIcon },
    { name: "Flutter", icon: Flutter },
  ];
  return (
    <section
      id="home"
      className="relative h-full overflow-hidden bg-background py-32"
    >
      {/* Background Layers */}

      {/* Main Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(34,197,94,.18)_0%,rgba(10,15,13,.92)_35%,#050807_100%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.45)_100%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:44px_44px]" />

      {/* Green Glow */}
      <div className="absolute top-0 right-0 h-[720px] w-[720px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="absolute top-36 right-48 h-[420px] w-[420px] rounded-full bg-accent/12 blur-[110px]" />

      <div className="absolute bottom-0 left-20 h-[320px] w-[320px] rounded-full bg-brand-dark/35 blur-[120px]" />

      {/* Rings */}
      <div className="absolute top-8 right-12 h-[520px] w-[520px] rounded-full border border-accent/12" />

      <div className="absolute -top-10 right-0 h-[640px] w-[640px] rounded-full border border-accent/8" />

      <div className="absolute -top-24 -right-12 h-[760px] w-[760px] rounded-full border border-accent/5" />

      <div className="relative z-10 mx-auto flex min-h-[85vh justify-center  items-center px-3 md:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center flex-col w-full gap-16"
        >
          <div className="flex flex-col items-center justify-center">
            <motion.div variants={fadeUp as Variants}>
              <Tag Icon={TbDeviceImacCode} text="Frontend & Mobile Developer" />
            </motion.div>

            <motion.h1
              variants={headingContainer}
              className="heading-hero max-w-125 md:max-w-225 mt-5 md:mt-8 flex flex-wrap justify-center gap-x-[0.3em]"
            >
              {headingWords.map(({ text, gradient }) => (
                <span key={text} className="inline-block overflow-hidden pb-1">
                  <motion.span
                    variants={wordItem as unknown as Variants}
                    className={`inline-block ${gradient ? "text-gradient" : ""}`}
                  >
                    {text}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={blurUp as Variants}
              className="text-body-lg mt-3 md:mt-6 max-w-[500px] text-center text-text-secondary"
            >
              I create modern web and mobile applications with React, Next.js,
              TypeScript, React Native and Flutter.
            </motion.p>

            <motion.div
              variants={fadeUp as Variants}
              className="mt-4 md:mt-6 flex items-center justify-center gap-4"
            >
              <motion.button
                className="btn-glow cursor-pointer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                View My Projects
              </motion.button>

              <motion.button
                className="btn-secondary cursor-pointer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Download CV <FiDownload className="text-accent" />
              </motion.button>
            </motion.div>

            <motion.div
              variants={pillsContainer}
              className="mt-8  flex flex-wrap gap-3 items-center justify-center"
            >
              {skills.map(({ name, icon: Icon }) => (
                <motion.span
                  key={name}
                  variants={pillItem as Variants}
                  className="cursor-pointer flex items-center gap-2 rounded-full  border border-border bg-card px-4 py-2 text-caption md:text-small text-text-secondary backdrop-blur-xl"
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(34,197,94,0.3)",
                    boxShadow: "0 0 20px rgba(34,197,94,0.18)",
                  }}
                >
                  <motion.span
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  >
                    <Icon width={16} height={16} />
                  </motion.span>
                  {name}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Stats: animate a wrapper so it doesn't fight stats-glass's CSS transitions */}
          {/* Stats: animate a wrapper so it doesn't fight stats-glass's CSS transitions */}
          <motion.div variants={fadeUp as Variants}>
            <div className="grid grid-cols-2 sm:grid-cols-4 stats-glass">
              {obj.map(({ title, sub, icon: Icon }, index) => (
                <div key={index} className="stats-item-wrap">
                  <div className="stats-icon">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <div className="stats-item">
                    <p className="stats-number">{title}</p>
                    <p className="stats-label">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-35 bg-gradient-to-b from-transparent via-[#050807]/60 to-[#050807] z-[10] pointer-events-none" />
    </section>
  );
}
