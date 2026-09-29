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
} from "@thesvg/react";

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
      { name: "Tailwind CSS", icon: Tailwindcss },
      { name: "shadcn/ui", icon: ShadcnUi },
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
