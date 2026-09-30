export { cn } from "cn";
export type ProjectCategory = "web" | "mobile" | "full-stack";
import {
  React as ReactIcon,
  Nextdotjs,
  Typescript,
  Flutter,
  Tailwindcss,
  ReactQuery,
  Appwrite,
  Expo,
  ShadcnUi,
  React,
  Dicebear,
} from "@thesvg/react";
import { SvgIconComponent } from "@thesvg/react/types";
import { IconType } from "react-icons";
import { GiThreeLeaves } from "react-icons/gi";
export interface Project {
  id: number;
  slug: string;
  name: string;
  tagline: string; // subtitle on the details page
  type: string; // badge on the details page (e.g. "Web Application")
  categories: ProjectCategory[]; // used by the filter buttons (All is implicit)

  icon: {
    name: IconType; // react-icons name, resolve with the iconMap below
    color: string; // icon color
    bg: string; // icon badge background
  };

  shortDescription: string; // shown on the card
  description: string; // shown on the details page

  techStack: { name: string; icon: SvgIconComponent }[]; // icon = @thesvg/react export name

  links: {
    live: string;
    github: string;
  };

  images: {
    cardImage: string; // second image, top of the card in the grid
    mainImage: string; // hero mockup on the details page
    screenshots: string[]; // "Screenshots" grid
  };

  keyFeatures: string[];

  highlights: { value: string; label: string }[];

  status: "completed" | "in-progress";
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "smart-farm-management-system",
    name: "Smart Farm Management System",
    tagline: "Multi-workspace Farm Management System",
    type: "Web Application",
    categories: ["web", "full-stack"],

    icon: {
      name: GiThreeLeaves,
      color: "#ffffff",
      bg: "#22c55e",
    },

    shortDescription:
      "Multi-workspace farm management platform with analytics and AI insights.",
    description:
      "A modern, intelligent farm management platform that helps farmers and agribusinesses manage farms, fields, crops, workers, harvests, finances and daily operations from one centralized dashboard.",

    techStack: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: Typescript },
      { name: "Tailwind CSS", icon: Tailwindcss },
      { name: "TanStack Query", icon: ReactQuery },
      { name: "Appwrite", icon: Appwrite },
    ],

    links: {
      live: "https://smart-farm-managementt.vercel.app",
      github: "https://github.com/Happiesamuel/smart-farm-management",
    },

    images: {
      cardImage: "/smart-farm/smart-farm-card.jpeg",
      mainImage: "/smart-farm/smart-farm-main.jpeg",
      screenshots: [
        "/smart-farm/smart-1.png",
        "/smart-farm/smart-2.png",
        "/smart-farm/smart-3.png",
        "/smart-farm/smart-4.png",
      ],
    },

    keyFeatures: [
      "Multi-workspace management",
      "Crop & field tracking",
      "Financial analytics",
      "Weather integration",
      "Smart insights & recommendations",
    ],

    highlights: [
      { value: "9+", label: "Key Modules" },
      { value: "2+", label: "Months Development" },
      { value: "100%", label: "Responsive Design" },
    ],

    status: "completed",
    featured: true,
    year: 2026,
  },

  {
    id: 2,
    slug: "mealio",
    name: "Mealio",
    tagline: "Food Ordering & Delivery App",
    type: "Mobile Application",
    categories: ["mobile", "full-stack"],

    icon: {
      name: MdRestaurant,
      color: "#ffffff",
      bg: "#f97316",
    },

    shortDescription:
      "Food ordering app with real-time tracking and push notifications.",
    description:
      "A modern food ordering app built with React Native and Expo, featuring real-time order tracking, push notifications, and Users authentication and authorization.",

    techStack: [
      { name: "React Native", icon: ReactIcon },
      { name: "Expo", icon: Expo },
      { name: "TypeScipt", icon: Typescript },
      { name: "Zustand", icon: Dicebear },
      { name: "Nativewind", icon: Tailwindcss },
      { name: "TanStack Query", icon: ReactQuery },
      { name: "Appwrite", icon: Appwrite },
    ],

    links: {
      live: "https://mealio-download.netlify.app",
      github: "https://github.com/Happiesamuel/mealio-fullstack",
    },

    images: {
      cardImage: "/mealio/mealio-card.jpeg",
      mainImage: "/mealio/mealio-main.jpeg",
      screenshots: [
        "/mealio/mealio-1.jpg",
        "/mealio/mealio-2.jpg",
        "/mealio/mealio-3.jpg",
        "/mealio/mealio-2.jpg",
      ],
    },

    keyFeatures: [
      "Restaurant & menu browsing",
      "Real-time order tracking",
      "Push notifications",
      "Cart & secure checkout",
      "Order history & reordering",
    ],

    highlights: [
      { value: "7+", label: "Core Screens" },
      { value: "1", label: "Android" },
      { value: "Live", label: "Order Tracking" },
    ],

    status: "completed",
    featured: true,
    year: 2026,
  },

  {
    id: 3,
    slug: "apex-bank",
    name: "Apex Bank",
    tagline: "Modern Banking Dashboard",
    type: "Web Application",
    categories: ["web", "full-stack"],

    icon: {
      name: MdAccountBalance,
      color: "#ffffff",
      bg: "#3b82f6",
    },

    shortDescription:
      "Modern banking dashboard with transaction tracking and analytics.",
    description:
      "A clean, secure banking dashboard where users can view balances, track transactions, transfer funds and understand their spending through clear charts and analytics.",

    techStack: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "React", icon: React },
      { name: "TypeScript", icon: Typescript },
      { name: "Appwrite", icon: Appwrite },
      { name: "Tailwind CSS", icon: Tailwindcss },
      { name: "Shadcn/ui", icon: ShadcnUi },
    ],

    links: {
      live: "https://apexbank.vercel.app",
      github: "https://github.com/Happiesamuel/apex",
    },

    images: {
      cardImage: "/apex/apex-card.jpeg",
      mainImage: "/apex/apex-main.jpeg",
      screenshots: [
        "/apex/apex-1.png",
        "/apex/apex-2.png",
        "/apex/apex-3.png",
        "/apex/apex-4.png",
      ],
    },

    keyFeatures: [
      "Account overview & balances",
      "Transaction history & filters",
      "Fund transfers",
      "Spending analytics & charts",
      "Secure authentication",
    ],

    highlights: [
      { value: "5+", label: "Key Modules" },
      { value: "2+", label: "Months Development" },
      { value: "100%", label: "Responsive Design" },
    ],

    status: "completed",
    featured: true,
    year: 2026,
  },
];

/* ---------- Icon lookup ----------
   JSON can't store components, so each project stores an icon *name*
   and this map resolves it to the real react-icons component. */
import { FaLeaf } from "react-icons/fa6";
import { MdRestaurant, MdAccountBalance } from "react-icons/md";

export const iconMap = {
  FaLeaf,
  MdRestaurant,
  MdAccountBalance,
} as const;

/* ---------- Helpers ---------- */
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const filterProjects = (tag: string) =>
  tag === "all"
    ? projects
    : projects.filter((p) => p.categories.includes(tag as ProjectCategory));
