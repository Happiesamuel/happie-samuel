import { z } from "zod";
import {
  Nextdotjs,
  React as ReactIcon,
  Typescript,
  Tailwindcss,
  Expo,
  Flutter,
  Appwrite,
  Figma,
  Git,
  ShadcnUi,
  Tanstack,
  Redux,
  Dicebear,
  MicrosoftOnedrive,
  Supabase,
  Firebase,
  VisualStudioCode,
  Dart,
} from "@thesvg/react";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

export interface Skill {
  name: string;
  icon: React.ComponentType<{
    width?: number;
    height?: number;
    className?: string;
  }>;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories = {
  frontend: {
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: Typescript },
      { name: "Dart", icon: Dart },
      { name: "Tailwind CSS", icon: Tailwindcss },
      { name: "Shadcn/ui", icon: ShadcnUi },
    ],
  },
  mobile: {
    category: "Mobile",
    skills: [
      { name: "React Native", icon: ReactIcon },
      { name: "Flutter", icon: Flutter },
    ],
  },
  "State Management": {
    category: "State Management",
    skills: [
      { name: "TanStack Query", icon: Tanstack },
      { name: "Zustand", icon: Dicebear },
      { name: "Redux", icon: Redux },
      { name: "RiverPod", icon: MicrosoftOnedrive },
    ],
  },
  "Backend & Services": {
    category: "Backend & Services",
    skills: [
      { name: "Appwrite", icon: Appwrite },
      { name: "Supabase", icon: Supabase },
      { name: "Firebase", icon: Firebase },
    ],
  },
  "Tools & Others": {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: Git },
      { name: "Figma", icon: Figma },
      { name: "VS Code", icon: VisualStudioCode },
    ],
  },
};

export interface TimelineEntry {
  period: string;
  title: string;
  description: string;
  sub: string;
}

export const timeline: TimelineEntry[] = [
  {
    period: "2025 - Present",
    title: "Frontend & Mobile Developer",
    sub: "Independent / Personal Projects",
    description:
      "Building and shipping real-world web and mobile applications across SaaS, e-commerce, Web3, and food delivery. Projects include Smart Farm, Mealio, ChainFundMe, Future Tech, and other client and personal projects.",
  },

  {
    period: "Jul 2025 - Nov 2025",
    title: "Junior Frontend Developer",
    sub: "Rhocom Technology Limited",
    description:
      "Worked on production web applications including a procurement and tender management platform using Angular, TypeScript, Tailwind CSS, PrimeNG, and REST APIs.",
  },

  {
    period: "Jan 2025 - Oct 2025",
    title: "Frontend Web Developer",
    sub: "Capita Dapps Bridge Limited",
    description:
      "Developed responsive web interfaces using React and Next.js, integrated REST APIs, built reusable components with Tailwind CSS, and collaborated remotely on real-world digital products.",
  },

  {
    period: "Feb 2025 - Apr 2025",
    title: "Frontend Developer Intern",
    sub: "HNG Tech Internship 12",
    description:
      "Progressed to Frontend Finalist while collaborating on real-world development tasks and building production-oriented interfaces with modern frontend technologies.",
  },

  {
    period: "2023 - 2026",
    title: "B.Sc. Computer Science",
    sub: "University of Benin",
    description:
      "Built a strong foundation in software engineering, programming, databases, algorithms, system design, and problem solving while developing practical projects alongside my studies.",
  },
];

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const contactInfo = [
  {
    icon: MdOutlineMailOutline,
    label: "Email",
    value: "odionsamuel2005@gmail.com",
    href: "mailto:odionsamuel2005@gmail.com",
  },
  {
    icon: FaGithub,
    label: "Github",
    value: "github.com/Happiesamuel",
    href: "https://github.com/Happiesamuel",
  },
  {
    icon: FaWhatsapp,
    label: "Whatsapp",
    value: "+234 906 541 6113",
    href: "https://wa.me/2349065416113",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/hs-the-dev",
    href: "https://linkedin.com/in/hs-the-dev",
  },
  {
    icon: FaXTwitter,
    label: "X (Twitter)",
    value: "x.com/hs_the_dev",
    href: "https://x.com/hs_the_dev",
  },
  {
    icon: FaLocationDot,
    label: "Location",
    value: "Benin City, Nigeria",
    href: undefined,
  },
];
