import React from "react";
import Tag from "../utils/Tag";

import { useState, useRef } from "react";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaBookAtlas,
} from "react-icons/fa6";

import { motion, Variants, AnimatePresence } from "framer-motion";

import { projects } from "@/lib/utils";

import Link from "next/link";
export type ProjectCategory = "web" | "mobile" | "full-stack" | "all";
const PAGE_SIZE = 6;

const tabsContainer = {
  hidden: { opacity: 0, scale: 0.92, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const tabItem = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};
const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const tags: { name: string; slug: ProjectCategory }[] = [
  { name: "All", slug: "all" },
  { name: "Web", slug: "web" },
  { name: "Mobile", slug: "mobile" },
  { name: "Full Stack", slug: "full-stack" },
];
export default function Projects() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const headingWords = [{ text: "Featured" }, { text: "Projects" }];

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

  const [activeTag, setActiveTag] = useState<ProjectCategory>("all");
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeTag === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeTag));

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);

  const visibleProjects = filteredProjects.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const handleTagChange = (slug: ProjectCategory) => {
    setActiveTag(slug);
    setPage(1); // a new filter always starts from page 1
  };

  const goToPage = (next: number) => {
    if (next < 1 || next > totalPages || next === page) return;
    setPage(next);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section
      id="projects"
      className="relative h-full pb-8 pt-32   overflow-hidden bg-[#050807] px-3 md:px-12"
    >
      <div className="absolute inset-0 bg-[#050807]" />

      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-[#050807]/40 via-[#050807]/80 to-[#050807]" />

      <div
        className="absolute right-[-120px] top-[180px] h-[720px] w-[720px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.08) 38%, transparent 72%)",
        }}
      />

      <div
        className="absolute right-[180px] top-[320px] h-[340px] w-[340px] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.10) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center 75%, transparent 55%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="relative z-10 ">
        <div className="flex flex-col pb-8 md:flex-row items-center justify-between">
          <div className="max-w-[550px]">
            <Tag text="My Projects" Icon={FaBookAtlas} />
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
              Here are some of the projects I&apos;ve built, ranging from web
              platforms to mobile applications.
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
            variants={tabsContainer as unknown as Variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur-md"
          >
            {tags.map((tag) => {
              const isActive = activeTag === tag.slug;

              return (
                <motion.button
                  key={tag.slug}
                  variants={tabItem as Variants}
                  onClick={() => handleTagChange(tag.slug)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative cursor-pointer rounded-full px-4 py-1.5 text-caption md:text-small font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-tag-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full border border-accent/30 bg-accent/15 shadow-[0_0_18px_rgba(74,222,128,0.25)]"
                    />
                  )}
                  <span className="relative z-10">{tag.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          ref={gridRef}
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-[90%] mx-auto scroll-mt-28"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => {
              const Icon = project.icon.name;

              return (
                <motion.article
                  key={project.slug}
                  layout="position"
                  onMouseMove={handleMouseMove}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                      delay: i * 0.07,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                    transition: { duration: 0.2 },
                  }}
                  whileHover={{
                    y: -6,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  }}
                  className="project-card group w-full mx-auto cursor-pointer"
                >
                  {/* Image */}
                  <div className="project-image">
                    <img
                      src={project.images.cardImage}
                      alt={project.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <div className="mb-3 flex items-center gap-2.5">
                        <div
                          style={{
                            background: project.icon.bg,
                            boxShadow: `0 0 18px ${project.icon.bg}`,
                          }}
                          className="flex size-10 items-center justify-center rounded-[10px] transition-transform duration-300 group-hover:scale-105"
                        >
                          <Icon
                            style={{ color: project.icon.color }}
                            className="size-[50%]"
                          />
                        </div>

                        <h3 className="text-lg font-bold text-text-primary">
                          {project.name}
                        </h3>
                      </div>

                      <p className="text-sm leading-6 text-text-secondary">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech pills: static, CSS-only hover */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.techStack.slice(0, 3).map(({ name, icon }) => {
                        const TechIcon = icon;
                        return (
                          <span
                            key={name}
                            className="tech-pill flex items-center gap-1"
                          >
                            {TechIcon && <TechIcon width={14} height={14} />}
                            {name}
                          </span>
                        );
                      })}
                    </div>

                    {/* Link: stretched, so the whole card is clickable */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="project-link after:absolute after:inset-0"
                    >
                      View Project
                      <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
        {totalPages > 1 && (
          <motion.nav
            aria-label="Projects pagination"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur-md">
              {/* Previous */}
              <motion.button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
                whileHover={page === 1 ? undefined : { x: -2 }}
                whileTap={page === 1 ? undefined : { scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex size-9 cursor-pointer items-center justify-center rounded-full text-text-secondary transition-colors duration-200 hover:text-text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-text-secondary"
              >
                <FaArrowLeftLong size={13} />
              </motion.button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
                const isActive = page === n;

                return (
                  <motion.button
                    key={n}
                    onClick={() => goToPage(n)}
                    aria-label={`Page ${n}`}
                    aria-current={isActive ? "page" : undefined}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.92 }}
                    className={`relative flex size-9 cursor-pointer items-center justify-center rounded-full text-small font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="project-page-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute inset-0 rounded-full border border-accent/30 bg-accent/15 shadow-[0_0_18px_rgba(74,222,128,0.25)]"
                      />
                    )}
                    <span className="relative z-10">{n}</span>
                  </motion.button>
                );
              })}

              {/* Next */}
              <motion.button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
                whileHover={page === totalPages ? undefined : { x: 2 }}
                whileTap={page === totalPages ? undefined : { scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex size-9 cursor-pointer items-center justify-center rounded-full text-text-secondary transition-colors duration-200 hover:text-text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-text-secondary"
              >
                <FaArrowRightLong size={13} />
              </motion.button>
            </div>

            <p className="text-caption text-text-secondary">
              Showing {(page - 1) * PAGE_SIZE + 1}–
              {Math.min(page * PAGE_SIZE, filteredProjects.length)} of{" "}
              {filteredProjects.length} projects
            </p>
          </motion.nav>
        )}
      </div>
    </section>
  );
}
