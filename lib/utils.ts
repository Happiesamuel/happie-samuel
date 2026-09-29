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
} from "@thesvg/react";
import { SvgIconComponent } from "@thesvg/react/types";
import { IconType } from "react-icons";

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
    slug: "smart-farm",
    name: "Smart Farm",
    tagline: "Multi-workspace Farm Management System",
    type: "Web Application",
    categories: ["web", "full-stack"],

    icon: {
      name: FaLeaf,
      color: "#22c55e",
      bg: "rgba(34,197,94,0.15)",
    },

    shortDescription:
      "Multi-workspace farm management platform with analytics and AI insights.",
    description:
      "A modern, intelligent farm management platform that helps farmers and agribusinesses manage farms, fields, crops, workers, harvests, finances and daily operations from one centralized dashboard.",

    techStack: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: Typescript },
      { name: "Tailwind", icon: Tailwindcss },
      { name: "TanStack Query", icon: ReactQuery },
      { name: "Appwrite", icon: Appwrite },
    ],

    links: {
      live: "https://your-smartfarm-demo.com",
      github: "https://github.com/your-username/smart-farm",
    },

    images: {
      cardImage: "/smart-farm-card.jpeg",
      mainImage: "/projects/smart-farm/main.png",
      screenshots: [
        "/projects/smart-farm/screenshot-1.png",
        "/projects/smart-farm/screenshot-2.png",
        "/projects/smart-farm/screenshot-3.png",
        "/projects/smart-farm/screenshot-4.png",
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
      { value: "6+", label: "Key Modules" },
      { value: "3+", label: "Months Development" },
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
      color: "#f97316",
      bg: "rgba(249,115,22,0.15)",
    },

    shortDescription:
      "Food ordering app with real-time tracking and push notifications.",
    description:
      "A cross-platform food ordering app that lets users browse restaurants, customise meals, place orders and follow their delivery live on a map, with push notifications for every order update.",

    techStack: [
      { name: "React Native", icon: ReactIcon },
      { name: "Expo", icon: Expo },
      { name: "Appwrite", icon: Appwrite },
    ],

    links: {
      live: "https://your-mealio-demo.com",
      github: "https://github.com/your-username/mealio",
    },

    images: {
      cardImage: "/mealio-card.jpeg",
      mainImage: "/projects/mealio/main.png",
      screenshots: [
        "/projects/mealio/screenshot-1.png",
        "/projects/mealio/screenshot-2.png",
        "/projects/mealio/screenshot-3.png",
        "/projects/mealio/screenshot-4.png",
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
      { value: "5+", label: "Core Screens" },
      { value: "2", label: "Platforms (iOS & Android)" },
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
      color: "#3b82f6",
      bg: "rgba(59,130,246,0.15)",
    },

    shortDescription:
      "Modern banking dashboard with transaction tracking and analytics.",
    description:
      "A clean, secure banking dashboard where users can view balances, track transactions, transfer funds and understand their spending through clear charts and analytics.",

    techStack: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "TypeScript", icon: Typescript },
      { name: "shadcn/ui", icon: ShadcnUi },
    ],

    links: {
      live: "https://your-apexbank-demo.com",
      github: "https://github.com/your-username/apex-bank",
    },

    images: {
      cardImage: "/apex-card.jpeg",
      mainImage: "/projects/apex-bank/main.png",
      screenshots: [
        "/projects/apex-bank/screenshot-1.png",
        "/projects/apex-bank/screenshot-2.png",
        "/projects/apex-bank/screenshot-3.png",
        "/projects/apex-bank/screenshot-4.png",
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
