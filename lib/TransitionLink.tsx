"use client";

import { MouseEvent } from "react";
import Link, { LinkProps } from "next/link";
import { useTransitionNavigate } from "./TransitionProvider";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function TransitionLink({
  href,
  children,
  className,
  ...props
}: TransitionLinkProps) {
  const navigate = useTransitionNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Origin the wipe at the center of whatever was clicked (the card,
    // the button, etc.), so it feels like that element is tearing open.
    const rect = e.currentTarget.getBoundingClientRect();
    const origin = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    navigate(href.toString(), origin);
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
