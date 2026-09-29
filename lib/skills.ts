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
import { FaLinkedinIn, FaLocationDot, FaXTwitter } from "react-icons/fa6";

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
    period: "2024 - Present",
    title: "Frontend Developer (Self Employed)",
    sub: "",
    description:
      "Building real-world applications and working on personal projects like Smart Farm and Mealio.",
  },
  {
    period: "2023 - 2024",
    title: "HNG Internship 12",
    sub: "",
    description:
      "Frontend Finalist. Built production-ready applications and collaborated with amazing teams.",
  },
  {
    period: "2020 - 2024",
    title: "University of Benin",
    sub: "BSc, Computer Science.",
    description:
      " Gained a strong foundation in software development and problem solving.",
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
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/ha-the-dev",
    href: "https://linkedin.com/in/ha-the-dev",
  },
  {
    icon: FaXTwitter,
    label: "X (Twitter)",
    value: "x.com/ha_the_dev",
    href: "https://x.com/ha_the_dev",
  },
  {
    icon: FaLocationDot,
    label: "Location",
    value: "Benin City, Nigeria",
    href: undefined,
  },
];
