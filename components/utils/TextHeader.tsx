import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
export default function TextHeader({
  children,
  paragraph,
  headingWords,
}: {
  children: ReactNode;
  paragraph: string;
  headingWords: { text: string; gradient?: boolean }[];
}) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
  };

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

  return (
    <div className="max-w-[550px]">
      {children}
      <motion.h1
        variants={wordContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="heading-3 md:heading-2 max-w-125 md:max-w-225 mt-5 flex flex-wrap gap-x-[0.3em]"
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
        className="text-small md:text-body mt-3 md:mt-4 text-text-secondary"
      >
        {paragraph}
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 gap-x-8 gap-y-6 mt-3 md:mt-6 "
      ></motion.div>
    </div>
  );
}
