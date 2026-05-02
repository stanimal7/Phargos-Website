"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const platformLinks = [
  { label: "How It Works", href: "/platform/how-it-works" },
  { label: "Integrations", href: "/platform/integrations" },
];

const industriesLinks = [
  { label: "Hardwood Distribution", href: "/industries/hardwood-distribution" },
  { label: "Building Products", href: "/industries/building-products" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center"
      style={{ backgroundColor: "#0D2137" }}
    >
      <div
        className="w-full flex items-center justify-between px-6 md:px-12"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className="text-2xl tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#F5F2EC",
              fontWeight: 300,
              letterSpacing: "0.15em",
            }}
          >
            PHARGOS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {/* Platform Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPlatformOpen(true)}
            onMouseLeave={() => setPlatformOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium transition-colors duration-150"
              style={{
                fontFamily: "var(--font-body)",
                color: platformOpen ? "#C9A84C" : "#F5F2EC",
                letterSpacing: "0.01em",
              }}
            >
              Platform
              <ChevronDownIcon className="w-3 h-3" />
            </button>
            {platformOpen && (
              <div
                className="absolute top-full left-0 mt-1 py-1 rounded-sm min-w-48 animate-in fade-in duration-150"
                style={{ backgroundColor: "#1A3A52" }}
              >
                {platformLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-3 text-sm transition-colors duration-150 hover:bg-white/10"
                    style={{ fontFamily: "var(--font-body)", color: "#F5F2EC", fontWeight: 500 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium transition-colors duration-150"
              style={{
                fontFamily: "var(--font-body)",
                color: industriesOpen ? "#C9A84C" : "#F5F2EC",
                letterSpacing: "0.01em",
              }}
            >
              Industries
              <ChevronDownIcon className="w-3 h-3" />
            </button>
            {industriesOpen && (
              <div
                className="absolute top-full left-0 mt-1 py-1 rounded-sm min-w-56 animate-in fade-in duration-150"
                style={{ backgroundColor: "#1A3A52" }}
              >
                {industriesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-3 text-sm transition-colors duration-150 hover:bg-white/10"
                    style={{ fontFamily: "var(--font-body)", color: "#F5F2EC", fontWeight: 500 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about/story"
            className="text-sm font-medium transition-colors duration-150 hover:text-amber-400"
            style={{ fontFamily: "var(--font-body)", color: "#F5F2EC", letterSpacing: "0.01em" }}
          >
            About
          </Link>

          <Link
            href="/pricing"
            className="text-sm font-medium transition-colors duration-150 hover:text-amber-400"
            style={{ fontFamily: "var(--font-body)", color: "#F5F2EC", letterSpacing: "0.01em" }}
          >
            Pricing
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            href="/demo"
            className="inline-block px-7 py-3.5 text-sm font-semibold rounded-sm transition-colors duration-150"
            style={{
              backgroundColor: "#C9A84C",
              color: "#0D2137",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#B8973E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#C9A84C";
            }}
          >
            Get a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="w-6 h-5" style={{ color: "#F5F2EC" }} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: "#0D2137" }}
        >
          <div className="flex items-center justify-between px-6 h-16">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-2xl tracking-widest uppercase"
              style={{ fontFamily: "var(--font-heading)", color: "#F5F2EC", fontWeight: 300, letterSpacing: "0.15em" }}
            >
              PHARGOS
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <XMarkIcon className="w-6 h-6" style={{ color: "#F5F2EC" }} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {[
              { label: "Platform", href: "/platform/how-it-works" },
              { label: "Industries", href: "/industries/hardwood-distribution" },
              { label: "About", href: "/about/story" },
              { label: "Pricing", href: "/pricing" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-4xl font-light transition-colors"
                style={{ fontFamily: "var(--font-heading)", color: "#F5F2EC", fontWeight: 300 }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="px-6 pb-12">
            <Link
              href="/demo"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-4 text-sm font-semibold rounded-sm transition-colors duration-150"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0D2137",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.04em",
              }}
            >
              Get a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
