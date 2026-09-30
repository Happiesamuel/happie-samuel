"use client";
import { useState } from "react";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { IoCheckmarkCircle } from "react-icons/io5";
import { getProjectBySlug } from "@/lib/utils";
import { IoIosGlobe } from "react-icons/io";
import ScreenshotLightbox from "@/components/utils/ScreenshotLightbox";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeUpSlow = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.id as string;
  const project = getProjectBySlug(slug);

  // Inside your component, alongside other state:
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Replace your screenshots grid with:

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050807] text-text-secondary">
        Project not found.
      </div>
    );
  }

  const Icon = project.icon.name;

  return (
    <section className="relative h-full overflow-hidden bg-[#050807] px-3 pb-20 pt-28 md:px-12">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050807]" />
      <div
        className="absolute -right-[160px] top-[60px] h-[600px] w-[600px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.16) 0%, rgba(34,197,94,0.06) 40%, transparent 72%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.4), transparent 30%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* Back link */}
        <motion.div variants={fadeUp as unknown as Variants}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
          >
            <motion.span
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <FaArrowLeftLong size={13} />
            </motion.span>
            Back to Projects
          </Link>
        </motion.div>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="w-full">
            <motion.div
              variants={fadeUp as unknown as Variants}
              className="grid grid-cols-[0.15fr_1fr] sm:flex items-center gap-4.5"
            >
              <div
                style={{
                  background: project.icon.bg,
                  boxShadow: `0 0 18px ${project.icon.bg}`,
                }}
                className="flex size-12 items-center justify-center rounded-[12px]"
              >
                <Icon
                  style={{ color: project.icon.color }}
                  className="size-[50%]"
                />
              </div>
              <div>
                <h1 className="heading-3 sm:heading-2 text-text-primary">
                  {project.name}
                </h1>
                <p className="text-sm text-text-secondary">{project.tagline}</p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp as unknown as Variants}
              className="mt-5 max-w-[550px] text-sm leading-7 text-text-secondary"
            >
              {project.description}
            </motion.p>

            <motion.div
              variants={fadeUp as unknown as Variants}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                animate="rest"
                variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="btn-primary relative cursor-pointer overflow-hidden rounded-[12px]"
              >
                <span className="relative z-10">Live Demo</span>
                <FaArrowRightLong className="text-white" />

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
              </motion.a>

              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="btn-secondary flex cursor-pointer items-center gap-2"
              >
                <HiOutlineCodeBracket size={16} />
                View Code
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp as unknown as Variants}
              className="mt-6 flex flex-wrap gap-2"
            >
              {project.techStack.map(({ name, icon }) => {
                const TechIcon = icon;
                return (
                  <motion.span
                    key={name}
                    whileHover={{
                      y: -3,
                      borderColor: "rgba(34,197,94,0.3)",
                      boxShadow: "0 0 16px rgba(34,197,94,0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex p-0 project-card cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card/40 px-3 py-1.5 text-caption text-text-secondary backdrop-blur-md"
                  >
                    {TechIcon && <TechIcon width={13} height={13} />}
                    {name}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUpSlow as unknown as Variants}
            className="relative flex items-center w-full justify-center"
          >
            <div className="relative w-[85%] ">
              <div className="flex absolute right-2 top-2 items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 ">
                <IoIosGlobe className="text-accent text-lg" />
                <span className=" text-[10px] sm:text-caption text-text-secondary">
                  {project.type}
                </span>
              </div>
              <div className="overflow-hidden rounded-[12px] border  border-accent/40">
                <img
                  src={project.images.mainImage}
                  alt={project.name}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: Key Features / Screenshots / Highlights */}
        <div className="mt-8 lg:mt-12 grid gap-6 lg:grid-cols-3">
          {/* Key Features */}
          <motion.div
            variants={fadeUp as unknown as Variants}
            className="rounded-[20px] border border-border bg-card/40 p-6 backdrop-blur-md"
          >
            <p className="text-small font-semibold text-text-primary">
              Key Features
            </p>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 flex flex-col gap-3"
            >
              {project.keyFeatures.map((feature) => (
                <motion.li
                  key={feature}
                  variants={fadeUp as Variants}
                  className="flex items-start gap-2.5 text-sm text-text-secondary"
                >
                  <IoCheckmarkCircle
                    className="mt-0.5 shrink-0 text-accent"
                    size={16}
                  />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Screenshots */}

          <motion.div
            variants={fadeUp as unknown as Variants}
            className="rounded-[20px] border border-border bg-card/40 p-6 backdrop-blur-md"
          >
            <p className="text-small font-semibold text-text-primary">
              Screenshots
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 grid grid-cols-2 gap-2.5"
            >
              {project.images.screenshots.map((src, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp as Variants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  onClick={() => setLightboxIndex(i)}
                  className="cursor-pointer overflow-hidden rounded-[10px] border border-border/60"
                >
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="aspect-video h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <ScreenshotLightbox
            images={project.images.screenshots}
            initialIndex={lightboxIndex ?? 0}
            isOpen={lightboxIndex !== null}
            onClose={() => setLightboxIndex(null)}
            projectName={project.name}
          />
          {/* Project Highlights */}
          <motion.div
            variants={fadeUp as unknown as Variants}
            className="rounded-[20px] border border-border bg-card/40 p-6 backdrop-blur-md"
          >
            <p className="text-small font-semibold text-text-primary">
              Project Highlights
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4 flex flex-col gap-4"
            >
              {project.highlights.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp as Variants}
                  className="flex items-center gap-3"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <IoCheckmarkCircle size={16} />
                  </span>
                  <div>
                    <p className="text-base font-bold text-text-primary">
                      {value}
                    </p>
                    <p className="text-caption text-text-secondary">{label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
