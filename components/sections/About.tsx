import React from "react";
import Tag from "../utils/Tag";
import { FaLinkedinIn, FaRegUser, FaUserSecret } from "react-icons/fa";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import {
  MdEventAvailable,
  MdOutlineMail,
  MdOutlineMailOutline,
  MdOutlineSmartToy,
} from "react-icons/md";
import Image from "next/image";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

import { motion, Variants } from "framer-motion";
export default function About() {
  const obj = [
    {
      icon: FaLocationDot,
      text: "Location",
      sub: "Benin City, Nigeria",
    },
    {
      icon: MdOutlineSmartToy,
      text: "Experience",
      sub: "2+ Years",
    },
    {
      icon: MdOutlineMailOutline,
      text: "Email",
      sub: "odionsamuel2005@gmail.com",
    },
    {
      icon: MdEventAvailable,
      text: "Availability",
      sub: "Open to Opportunities",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const headingWords = [
    { text: "Turning", gradient: true },
    { text: "Ideas" },
    { text: "Into" },
    { text: "Scalable" },
    { text: "Products." },
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
  return (
    <section
      id="about"
      className="relative pt-32  pb-8 h-full overflow-hidden bg-[#050807] px-3 md:px-12"
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
      <div className="relative mx-auto max-w-7xl z-10 gap-10 flex md:flex-row flex-col items-center justify-between">
        <div className="max-w-[550px]">
          <Tag text="About Me" Icon={FaRegUser} />
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="heading-3 md:heading-2 max-w-125 md:max-w-225 mt-5 flex flex-wrap gap-x-[0.3em]"
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
            variants={paragraphItem as Variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-small md:text-body  mt-3 md:mt-4 text-text-secondary"
          >
            I&apos;m Happie Samuel, a passionate Frontend and Mobile Developer
            with a strong focus on building clean, scalable and user-friendly
            applications. I love solving real-world problems through technology
            and I&apos;m always eager to learn and grow.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-3 md:mt-6 "
          >
            {obj.map((o) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.text}
                  variants={item as Variants}
                  className="flex items-start gap-3 "
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="flex project-card p-0 h-10 w-10 border border-accent/10 shrink-0 items-center justify-center rounded-full backdrop-blur-lg bg-accent/5 text-accent shadow-[0_0_0px_rgba(74,222,128,0)] transition-shadow duration-300 hover:bg-accent/20 hover:shadow-[0_0_16px_rgba(74,222,128,0.35)]"
                  >
                    <Icon size={16} />
                  </motion.div>

                  <div className="flex flex-col">
                    <p className="text-caption text-text-secondary">{o.text}</p>
                    <p className="text-small font-medium text-text-primary/90 ">
                      {o.sub}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.button
            className="btn-gradient text-[14px] cursor-pointer mt-8 flex items-center gap-2 group"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Let&apos;s Connect
            <motion.span
              className="flex items-center"
              variants={{
                rest: { x: 0 },
                hover: { x: 4 },
              }}
              initial="rest"
              whileHover="hover"
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
            >
              <FaArrowRightLong />
            </motion.span>
          </motion.button>
        </div>
        <div className="relative flex justify-center items-center w-full">
          {/* Glow behind portrait */}
          <div className="absolute size-[420px]  rounded-full bg-primary/20 blur-[120px]" />

          {/* Decorative script text */}

          {/* Portrait */}
          <div className="relative flex items-center justify-center">
            {/* Back box — offset behind, peeking out */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute bottom-4 -right-5 sm:-right-9 size-[250px] sm:size-[350px] rounded-lg border border-accent/10 bg-card/40 backdrop-blur-md"
            />

            {/* Front box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center size-[250px] sm:size-[350px] rounded-lg border border-accent/10 bg-card/80 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="relative size-[80%] overflow-hidden rounded-sm border border-border/40">
                <Image
                  src="/leaf.jpeg"
                  alt="Happie Samuel"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -right-6 sm:-right-10 top-0 -rotate-6"
            >
              <h2 className="script-glow text-2xl sm:text-4xl">
                Code
                <br />
                Build
                <br />
                Improve
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-6 h-33 sm:h-36 w-60 sm:w-75 right-0 flex flex-col   rounded-md border border-border px-5 py-4 sm:px-6 sm:py-5 bg-card/80 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 flex items-center  justify-center overflow-hidden rounded-full border border-accent/30">
                <FaUserSecret className="text-accent" size={18} />
              </div>

              <div className="flex flex-col">
                <p className="text-small font-semibold text-text-primary">
                  Happie Samuel
                </p>
                <p className="text-caption text-text-secondary">
                  Frontend & Mobile Developer
                </p>
              </div>
            </div>

            <div className="mt-2 sm:mt-5 flex items-center gap-5">
              {[FaGithub, FaXTwitter, FaLinkedinIn, MdOutlineMail].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -2, color: "var(--accent)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex size-8 shrink-0 items-center justify-center rounded-[10px] border border-accent/10 backdrop-blur-lg bg-accent/5 text-accent shadow-[0_0_0px_rgba(74,222,128,0)] transition-shadow duration-300 hover:bg-accent/20 hover:shadow-[0_0_16px_rgba(74,222,128,0.35)]"
                  >
                    <Icon size={18} />
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
