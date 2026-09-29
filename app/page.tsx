"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Mouse from "@/components/utils/Mouse";

export default function Portfolio() {
  return (
    <div className="max-w-[120rem] mx-auto w-full">
      <Navbar />
      <div className="relative">
        <Home />
        <Mouse />
      </div>
      <About />

      <Projects />
      <Skills />
    </div>
  );
}
/* Navbar: .btn-secondary for the "Hire Me" pill.

Hero CTA: .btn-glow ("View Projects").

Secondary CTA: .btn-secondary ("Download CV").

Social icons: .btn-icon.

Project cards: .btn-project.

Project filters: .btn-chip. */
