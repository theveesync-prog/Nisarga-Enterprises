"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Legacy", href: "/#legacy" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-3 px-4 pointer-events-none">
      <nav
        className={cn(
          "max-w-6xl mx-auto px-4 sm:px-5 h-14 flex items-center justify-between gap-6 rounded-full pointer-events-auto transition-all duration-300",
        )}
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.78)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.95) inset"
            : "0 2px 20px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.95) inset",
        }}
      >
        {/* ─── Logo ─────────────────────────────────── */}
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          aria-label="Nisarga Publicity — Home"
        >
          <Image
            src="/logo/nisarga-mark.png"
            alt=""
            width={220}
            height={220}
            priority
            className="h-8 w-8"
          />
          <span className="font-bold text-base text-[#b52b2c]">Nisarga</span>
        </Link>

        {/* ─── Desktop Nav ──────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-[#1f2937] hover:text-[#b52b2c] transition-colors rounded-full hover:bg-[#b52b2c]/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ─── Desktop CTA ──────────────────────────── */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white btn-primary flex-shrink-0"
        >
          Start a Conversation
        </Link>

        {/* ─── Mobile Hamburger ─────────────────────── */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-[#b52b2c]/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={22} className="text-[#b52b2c]" />
          ) : (
            <Menu size={22} className="text-[#b52b2c]" />
          )}
        </button>
      </nav>

      {/* ─── Mobile Menu ────────────────────────────── */}
      <div
        className={cn(
          "md:hidden pointer-events-auto mx-4 mt-2 overflow-hidden rounded-2xl transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-screen" : "max-h-0"
        )}
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: mobileOpen ? "1px solid rgba(255,255,255,0.75)" : "none",
          boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        }}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className="px-4 pt-4 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobile}
              className="block px-4 py-3 text-sm font-medium text-[#1f2937] hover:text-[#b52b2c] hover:bg-[#b52b2c]/5 rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="pt-3">
            <Link
              href="/#contact"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full text-sm font-semibold text-white btn-primary"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
