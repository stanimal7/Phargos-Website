"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

interface GoldButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  style?: CSSProperties;
}

export default function GoldButton({ href, children, className = "", fullWidth = false, style }: GoldButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block text-sm font-semibold rounded-sm transition-colors duration-150 ${fullWidth ? "block w-full text-center" : ""} ${className}`}
      style={{
        backgroundColor: "#C9A84C",
        color: "#0D2137",
        fontFamily: "var(--font-body)",
        letterSpacing: "0.04em",
        padding: "14px 28px",
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#B8973E";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#C9A84C";
      }}
    >
      {children}
    </Link>
  );
}
