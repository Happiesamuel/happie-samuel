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
import TextHeader from "../utils/TextHeader";
import TransitionLink from "@/lib/TransitionLink";
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
      className="relative h-full pb-8 pt-25   overflow-hidden bg-[#050807] px-3 sm-px-4  md:px-6 lg:px-12"
    >
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
      <div className="relative z-10  mx-auto max-w-7xl ">
        <div className="flex flex-col gap-4 pb-8 lg:flex-row lg:items-center justify-between">
          <TextHeader
            headingWords={[{ text: "Featured" }, { text: "Projects" }]}
            paragraph="  Here are some of the projects I've built, ranging from web
              platforms to mobile applications."
          >
            <Tag text="My Projects" Icon={FaBookAtlas} />
          </TextHeader>

          <motion.div
            variants={tabsContainer as unknown as Variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="flex items-center w-fit mx-auto lg:mx-0 gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur-md "
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:w-[98%] xl:w-[90%] mx-auto scroll-mt-28"
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
                  className="project-card max-w-[380px] mx-auto group w-full mx-auto cursor-pointer"
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

                        <h3 className="text-base md:text-lg font-bold text-text-primary">
                          {project.name}
                        </h3>
                      </div>

                      <p className="text-sm leading-6 text-text-secondary line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech pills: static, CSS-only hover */}
                    <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
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
                    <TransitionLink
                      href={`/projects/${project.slug}`}
                      className="project-link after:absolute after:inset-0"
                    >
                      View Project
                      <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                    </TransitionLink>
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
