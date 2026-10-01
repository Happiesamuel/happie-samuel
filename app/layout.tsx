import type { Metadata } from "next";
import { Caveat, Geist, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CursorGlow } from "@/components/utils/CursorGlow";
import ClientRoot from "@/components/ClientRoot";
import TransitionProvider from "@/lib/TransitionProvider";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Happie Samuel | Frontend & Mobile Developer",
    template: "%s | Happie Samuel",
  },

  description:
    "Happie Samuel is a Frontend & Mobile Developer building modern, responsive, and production-ready web and mobile applications with React, Next.js, TypeScript, React Native, and Flutter.",

  keywords: [
    "Happie Samuel",
    "Frontend Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Native Developer",
    "Flutter Developer",
    "Frontend Engineer",
    "Web Developer",
    "Nigeria Developer",
    "Benin City Developer",
  ],

  authors: [{ name: "Happie Samuel" }],
  creator: "Happie Samuel",

  metadataBase: new URL("https://happie-samuel.vercel.app"),

  icons: {
    icon: "/icon.jpeg",
    shortcut: "/icon.jpeg",
    apple: "/icon.jpeg",
  },

  openGraph: {
    title: "Happie Samuel | Frontend & Mobile Developer",
    description:
      "Building digital products that feel production-ready. Explore my web and mobile projects, technical experience, and development skills.",
    url: "https://happie-samuel.vercel.app",
    siteName: "Happie Samuel",
    images: [
      {
        url: "/port.png",
        width: 1200,
        height: 630,
        alt: "Happie Samuel — Frontend & Mobile Developer",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Happie Samuel | Frontend & Mobile Developer",
    description:
      "Frontend & Mobile Developer building modern, responsive, and production-ready digital products.",
    images: ["/port.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.className,
        inter.variable,
      )}
    >
      <ClientRoot>
        <body className="min-h-full flex flex-col">
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "rgba(13, 21, 18, 0.9)",
                border: "1px solid rgba(34,197,94,0.2)",
                color: "#f4f4f5",
                backdropFilter: "blur(16px)",
              },
            }}
          />
          <CursorGlow />
          <TransitionProvider>{children}</TransitionProvider>
        </body>
      </ClientRoot>
    </html>
  );
}
