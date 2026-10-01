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
  Gsap,
} from "@thesvg/react";
import { BsTools } from "react-icons/bs";
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
    slug: "future-tech",
    name: "Future Tech",
    tagline: "Modern Websites for Forward-Thinking Brands",
    type: "Web Application",
    categories: ["web"],

    icon: {
      name: BsTools,
      color: "#ffffff",
      bg: "#ffd11a",
    },

    shortDescription:
      "A modern multi-page website built with Next.js, TypeScript, Tailwind CSS, and GSAP animations.",

    description:
      "A modern multi-page web experience designed for forward-thinking brands, combining polished UI/UX, smooth GSAP animations, responsive layouts, and a scalable component-based architecture.",

    techStack: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: Typescript },
      { name: "Tailwind CSS", icon: Tailwindcss },
      { name: "GSAP", icon: Gsap },
      { name: "shadcn/ui", icon: ShadcnUi },
    ],

    links: {
      live: "https://futuree-tech.vercel.app",
      github: "https://github.com/Happiesamuel/Future-Tech",
    },

    images: {
      cardImage: "/future/future-card.jpeg",
      mainImage: "/future/future-main.jpeg",
      screenshots: [
        "/future/future-1.png",
        "/future/future-2.png",
        "/future/future-3.png",
        "/future/future-4.png",
      ],
    },

    keyFeatures: [
      "Multi-page website experience",
      "Modern responsive UI/UX",
      "Smooth GSAP animations",
      "Reusable component architecture",
      "Responsive layouts across screen sizes",
    ],

    highlights: [
      { value: "Multi", label: "Page Experience" },
      { value: "GSAP", label: "Animations" },
      { value: "100%", label: "Responsive" },
    ],

    status: "completed",
    featured: true,
    year: 2025,
  },

  {
    id: 3,
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
    id: 4,
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
  {
    id: 5,
    slug: "prolific-woman",
    name: "The Prolific Woman Trybe",
    tagline: "Empowering Women to Evolve, Thrive and Lead",

    type: "Community & Organization Website",
    categories: ["web"],

    icon: {
      name: MdGroups,
      color: "#ffffff",
      bg: "#480f80",
    },

    shortDescription:
      "A modern community website built to showcase The Prolific Woman Trybe, its programs, events, impact, and mission to empower women.",

    description:
      "The Prolific Woman Trybe is a modern organization and community website designed to communicate the organization's mission, showcase its programs and events, and connect women with opportunities for growth and empowerment. The experience brings together sections for the organization's story, evolution timeline, community programs, photo gallery, events, impact statistics, founder profile, books, sponsorship, and contact information.",

    techStack: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: Typescript },
      { name: "Tailwind CSS", icon: Tailwindcss },
      { name: "Shadcn/ui", icon: ShadcnUi },
    ],

    links: {
      live: "https://proolific-wooman.vercel.app/",
      github: "https://github.com/Happiesamuel/prolific-woman",
    },

    images: {
      cardImage: "/prolific/prolific-card.jpeg",
      mainImage: "/prolific/prolific-main.jpeg",

      screenshots: [
        "/prolific/prolific-1.png",
        "/prolific/prolific-2.png",
        "/prolific/prolific-3.png",
        "/prolific/prolific-4.png",
      ],
    },

    keyFeatures: [
      "Responsive organization website",
      "Hero section with clear calls to action",
      "About and organization overview",
      "Evolution and journey timeline",
      "Evolve Her programs and initiatives",
      "Events and programs showcase",
      "Photo gallery",
      "Community impact statistics",
      "Founder profile section",
      "Books and publications showcase",
      "Sponsorship information and calls to action",
      "Contact and social media links",
    ],

    highlights: [
      { value: "10+", label: "Content Sections" },
      { value: "4+", label: "Programs & Events" },
      { value: "1,000+", label: "Women Empowered" },
    ],

    status: "completed",
    featured: true,
    year: 2056,
  },
  {
    id: 6,
    slug: "capita-token",
    name: "Capita Token",
    tagline: "Modern Digital Platform for Capita Token",

    type: "Web Application",
    categories: ["web"],

    icon: {
      name: MdCurrencyExchange,
      color: "#ffffff",
      bg: "#1950f1",
    },

    shortDescription:
      "A modern web platform for Capita Token, designed with a polished interface, responsive layouts, and a smooth digital experience.",

    description:
      "Capita Token is a modern web experience built to present the Capita Token platform through a polished, responsive interface. The project focuses on clean UI design, structured page layouts, engaging interactions, and a consistent visual system across the experience.",

    techStack: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: Typescript },
      { name: "Gsap", icon: Gsap },
      { name: "Tailwind CSS", icon: Tailwindcss },
    ],

    links: {
      live: "https://capita-token.vercel.app/",
      github: "https://github.com/Happiesamuel/token",
    },

    images: {
      cardImage: "/capita/capita-card.jpeg",
      mainImage: "/capita/capita-main.jpeg",
      screenshots: [
        "/capita/capita-1.png",
        "/capita/capita-2.png",
        "/capita/capita-3.png",
        "/capita/capita-4.png",
      ],
    },

    keyFeatures: [
      "Modern responsive interface",
      "Multi-page website experience",
      "Clean and structured UI/UX",
      "Responsive layouts across screen sizes",
      "Reusable frontend components",
    ],

    highlights: [
      { value: "Multi", label: "Page Experience" },
      { value: "100%", label: "Responsive" },
      { value: "Live", label: "Deployment" },
    ],

    status: "completed",
    featured: false,
    year: 2025,
  },

  {
    id: 7,
    slug: "orbix",
    name: "Orbix",
    tagline: "A Modern E-Commerce Shopping Experience",

    type: "E-Commerce Website",
    categories: ["web", "full-stack"],

    icon: {
      name: MdShoppingBag,
      color: "#ffffff",
      bg: "#101010",
    },

    shortDescription:
      "A modern e-commerce website focused on clean product browsing, responsive layouts, and a smooth shopping experience.",

    description:
      "Orbix is a modern e-commerce web application designed to provide a clean and engaging online shopping experience. The project focuses on responsive product layouts, intuitive navigation, product discovery, and reusable frontend components. It was built as an ongoing project to explore modern e-commerce interface patterns and frontend development workflows.",

    techStack: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: Typescript },
      { name: "Appwrite", icon: Appwrite },
      { name: "Shadcn/ui", icon: ShadcnUi },
      { name: "Tailwind CSS", icon: Tailwindcss },
    ],

    links: {
      live: "https://oorbix.vercel.app/",
      github: "https://github.com/Happiesamuel/orbix",
    },

    images: {
      cardImage: "/orbix/orbix-card.jpeg",
      mainImage: "/orbix/orbix-main.jpeg",

      screenshots: [
        "/orbix/orbix-1.png",
        "/orbix/orbix-2.png",
        "/orbix/orbix-3.png",
        "/orbix/orbix-4.png",
      ],
    },

    keyFeatures: [
      "Modern e-commerce interface",
      "Responsive product browsing experience",
      "Product listing and discovery",
      "Reusable product components",
      "Responsive navigation and layouts",
      "Modern product-focused UI/UX",
      "Mobile-friendly shopping experience",
    ],

    highlights: [
      { value: "E-Commerce", label: "Web Platform" },
      { value: "100%", label: "Responsive UI" },
      { value: "Modern", label: "Product Experience" },
    ],

    status: "in-progress",
    featured: false,
    year: 2025,
  },

  {
    id: 7,
    slug: "chainfundme",
    name: "ChainFundMe",
    tagline: "Decentralized Crowdfunding, Bringing Hope Onchain",

    type: "Web3 / Crowdfunding Platform",
    categories: ["web"],

    icon: {
      name: MdAccountBalanceWallet,
      color: "#ffffff",
      bg: "#003def",
    },

    shortDescription:
      "A Web3 crowdfunding platform landing page designed around decentralized fundraising, crypto donations, and onchain campaigns.",

    description:
      "ChainFundMe is a Web3 crowdfunding platform created by Capita to bring decentralized fundraising onchain. The platform introduces a crypto-powered approach to crowdfunding, allowing users to create fundraising campaigns, connect supported wallets, explore campaigns, and contribute using selected cryptocurrencies. The landing page communicates the platform's mission through campaign categories, step-by-step fundraising and donation flows, platform benefits, partner highlights, and an overview of its Base-network vision.",

    techStack: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: Typescript },
      { name: "Tailwind CSS", icon: Tailwindcss },
    ],

    links: {
      live: "https://chainfundme-landing-page.vercel.app/",
      github: "https://github.com/Happiesamuel/chainfundme-landing-page",
    },

    images: {
      cardImage: "/chainfundme/chainfundme-card.jpeg",
      mainImage: "/chainfundme/chainfundme-main.jpeg",

      screenshots: [
        "/chainfundme/chainfundme-1.png",
        "/chainfundme/chainfundme-2.png",
        "/chainfundme/chainfundme-3.png",
        "/chainfundme/chainfundme-4.png",
      ],
    },

    keyFeatures: [
      "Modern Web3 crowdfunding landing page",
      "Decentralized fundraising concept",
      "Campaign creation flow",
      "Campaign discovery experience",
      "Crypto wallet connection flow",
      "Cryptocurrency donation flow",
      "Fundraising campaign categories",
      "Step-by-step campaign creation guide",
      "Step-by-step donation guide",
      "Platform benefits and value proposition",
      "Base network integration messaging",
      "Responsive Web3-focused UI",
    ],

    highlights: [
      { value: "Web3", label: "Crowdfunding Platform" },
      { value: "Onchain", label: "Fundraising Experience" },
      { value: "Base", label: "Blockchain Network" },
    ],

    status: "completed",
    featured: true,
    year: 2025,
  },
  {
    id: 8,
    slug: "j-designs",
    name: "J-Designs",
    tagline: "Creative UI/UX & Digital Design Portfolio",

    type: "Designer Portfolio Website",
    categories: ["web"],

    icon: {
      name: MdDesignServices,
      color: "#ffffff",
      bg: "#ff0000",
    },

    shortDescription:
      "A modern designer portfolio website showcasing UI/UX, web, app, and graphic design services and projects.",

    description:
      "J-Designs is a personal portfolio website created for John Joseph, a UI/UX designer focused on crafting intuitive and visually appealing digital experiences. The website presents his design services, selected projects, testimonials, and personal profile through a clean and engaging portfolio experience.",

    techStack: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: Typescript },
      { name: "Tailwind CSS", icon: Tailwindcss },
    ],

    links: {
      live: "https://j-designs.vercel.app/",
      github: "https://github.com/Happiesamuel/j-designs",
    },

    images: {
      cardImage: "/j-designs/j-designs-card.jpeg",
      mainImage: "/j-designs/j-designs-main.jpeg",

      screenshots: [
        "/j-designs/j-designs-1.png",
        "/j-designs/j-designs-2.png",
        "/j-designs/j-designs-3.png",
        "/j-designs/j-designs-4.png",
      ],
    },

    keyFeatures: [
      "Personal designer portfolio",
      "UI/UX design showcase",
      "Web design portfolio",
      "Mobile app design showcase",
      "Graphic design services",
      "Featured project gallery",
      "Project category filtering",
      "Client testimonials",
      "Designer profile and introduction",
      "Service showcase",
      "Contact and hiring section",
      "Responsive portfolio layout",
    ],

    highlights: [
      { value: "4+", label: "Design Services" },
      { value: "5+", label: "Featured Projects" },
      { value: "100%", label: "Responsive Design" },
    ],

    status: "completed",
    featured: false,
    year: 2025,
  },
];

/* ---------- Icon lookup ----------
   JSON can't store components, so each project stores an icon *name*
   and this map resolves it to the real react-icons component. */
import { FaLeaf } from "react-icons/fa6";
import {
  MdRestaurant,
  MdAccountBalance,
  MdCurrencyExchange,
  MdShoppingBag,
  MdGroups,
  MdAccountBalanceWallet,
  MdDesignServices,
} from "react-icons/md";

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
