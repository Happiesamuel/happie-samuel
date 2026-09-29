import { motion, Variants } from "framer-motion";
import { FaArrowRightLong, FaCode } from "react-icons/fa6";
import Tag from "../utils/Tag";
import { skillCategories } from "@/lib/skills";
import { rows, SkillCategoryBlock } from "../utils/SkillsCard";

const categoryContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const headingWords = [
  { text: "Technology" },
  { text: "I" },
  { text: "Work" },
  { text: "With" },
];

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const wordItem = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const paragraphItem = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut", delay: 0.6 },
  },
};
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative h-full overflow-hidden bg-[#050807] px-3 pb-8 pt-32 md:px-12"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#050807]" />

      {/* Fades in from the section above so there's no hard seam */}
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 180px, #000 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 180px, #000 100%)",
        }}
      >
        {/* Soft top-left wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 8% 25%, rgba(34,197,94,0.07) 0%, transparent 45%)",
          }}
        />

        {/* Big glow behind the ring, right side */}
        <div
          className="absolute -right-[200px] top-[65%] h-[760px] w-[760px] -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.22) 0%, rgba(34,197,94,0.09) 40%, transparent 72%)",
          }}
        />

        {/* Faint grid, fades out toward the left */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:44px_44px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to left, #000 0%, transparent 70%)",
            maskImage: "linear-gradient(to left, #000 0%, transparent 70%)",
          }}
        />

        {/* Left-only vignette, same as your other sections */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.4), transparent 30%)",
          }}
        />
      </div>

      {/* The ring: hidden on mobile, since it would sit behind the skill cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -right-[140px] top-[65%] hidden h-[460px] w-[460px] -translate-y-1/2 lg:block xl:-right-[100px]"
      >
        {/* Outer faint rings, each breathing at its own pace */}
        <motion.div
          animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-12 rounded-full border border-accent/10"
        />
        <motion.div
          animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -inset-24 rounded-full border border-accent/5"
        />

        {/* Main ring */}
        <div
          className="absolute inset-0 rounded-full border border-accent/40"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(34,197,94,0.28) 0%, rgba(17,28,23,0.85) 55%, rgba(7,17,12,0.95) 100%)",
            boxShadow:
              "inset 0 0 60px rgba(34,197,94,0.18), 0 0 60px rgba(34,197,94,0.14)",
          }}
        />

        {/* Bright arc on the left edge, like the lit rim in your screenshot */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 180deg, transparent 0%, rgba(74,222,128,0.5) 12%, transparent 30%)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
          }}
        />

        {/* Text sits on the visible (left) half, since the right half is clipped */}
        <div className="absolute inset-y-0 left-0 flex w-[62%] flex-col items-center justify-center gap-3 pl-6 text-center">
          <p className="heading-4 leading-snug text-text-primary">
            Always learning,
            <br />
            always building.
          </p>
          <FaArrowRightLong className="ml-auto mr-4 text-accent drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
        </div>
      </motion.div>

      {/* Your content */}
      <div className="relative z-10">
        <div className="max-w-[550px]">
          <Tag text="My Skills" Icon={FaCode} />
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="heading-2 max-w-125 md:max-w-225 mt-5 flex flex-wrap gap-x-[0.3em]"
          >
            {headingWords.map(({ text }) => (
              <span key={text} className="inline-block overflow-hidden pb-1">
                <motion.span
                  variants={wordItem as unknown as Variants}
                  className={`inline-block `}
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={paragraphItem as Variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-body mt-3 md:mt-4 text-text-secondary"
          >
            I use modern tools and technologies to build fast, scalable and
            user-friendly applications.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-x-8 gap-y-6 mt-3 md:mt-6 "
          ></motion.div>
        </div>

        <motion.div
          variants={categoryContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
          {rows.map((row, i) => (
            <div
              key={i}
              className={row.length > 1 ? "flex items-start gap-8" : ""}
            >
              {row.map((key) => (
                <SkillCategoryBlock
                  key={key}
                  category={skillCategories[key].category}
                  skills={skillCategories[key].skills}
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
