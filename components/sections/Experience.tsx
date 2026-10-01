import { motion, Variants } from "framer-motion";
import { FaBriefcase } from "react-icons/fa6";
import Tag from "../utils/Tag";
import { timeline } from "@/lib/skills";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import TextHeader from "../utils/TextHeader";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const rowItem = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const dotItem = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

const lineItem = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay: 0.2 },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative h-full overflow-hidden bg-[#050807] px-3 pb-16 pt-25 sm-px-4  md:px-6 lg:px-12"
    >
      {/* Background — same pattern as your other sections */}
      <div className="absolute inset-0 bg-[#050807]" />
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 180px, #000 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 180px, #000 100%)",
        }}
      >
        <div
          className="absolute -left-[160px] top-[120px] h-[600px] w-[600px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.16) 0%, rgba(34,197,94,0.07) 40%, transparent 72%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.4), transparent 30%)",
          }}
        />
      </div>

      <div className="relative z-10   mx-auto max-w-7xl ">
        <TextHeader
          headingWords={[{ text: "My" }, { text: "Journey" }]}
          paragraph="  A timeline of my education, work experience and key milestones in my
            developer journey."
        >
          <Tag text="Experience" Icon={FaBriefcase} />
        </TextHeader>

        <div className="flex flex-col gap-10 lg:grid grid-cols-[1fr_0.6fr] items-start mt-6 md:mt-8 lg:mt-12 justify-between">
          <div className="w-full">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative  flex flex-col gap-10"
            >
              {/* Connecting line, grows downward once, behind the dots */}
              <motion.div
                variants={lineItem as unknown as Variants}
                style={{ transformOrigin: "top" }}
                className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"
              />

              {timeline.map((entry) => (
                <motion.div
                  key={entry.title}
                  variants={rowItem as unknown as Variants}
                  className="relative flex gap-7"
                >
                  {/* Dot */}
                  <motion.span
                    variants={dotItem as Variants}
                    className="relative mt-1.5 flex size-[15px] shrink-0 items-center justify-center rounded-full bg-accent shadow-[0_0_10px_rgba(74,222,128,0.7)]"
                  >
                    <motion.span
                      animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 rounded-full bg-accent"
                    />
                  </motion.span>

                  {/* Text */}
                  <div className="flex flex-col md:grid grid-cols-[0.23fr_1fr] gap-1  items-start justify-start max-w-[500px">
                    <p className="text-caption font-medium text-accent">
                      {entry.period}
                    </p>
                    <div>
                      <h3 className=" text-base font-semibold text-text-primary">
                        {entry.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-text-secondary">
                        {entry.sub}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-text-secondary">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
              className="flex project-card max-w-[300px] md:max-w-[400px] h-fit flex-col justify-center gap-4 rounded-[24px] border border-accent/15 bg-card/50 p-8 backdrop-blur-md "
            >
              <BiSolidQuoteAltLeft className="text-4xl leading-none text-accent/60" />
              <p className="text-lg font-medium leading-relaxed text-text-primary">
                The best way to predict the future is to build it.
              </p>
              <p className="text-caption text-text-secondary">
                — Happie Samuel
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
