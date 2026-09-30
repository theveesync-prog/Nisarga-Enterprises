"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/ui/Magnetic";

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
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-4 px-4 pointer-events-none">
      <nav
        className={cn(
          "glass-nav max-w-6xl mx-auto px-4 sm:px-5 h-16 flex items-center justify-between gap-6 rounded-full pointer-events-auto transition-all duration-500",
          scrolled && "is-scrolled"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0"
          aria-label="Nisarga Publicity home"
        >
          <Image
            src="/logo/nisarga-mark.png"
            alt=""
            width={220}
            height={220}
            priority
            className="h-8 w-8"
          />
          <span className="font-bold text-base text-[#18140f] tracking-tight">Nisarga</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-[#4a4237] hover:text-[#18140f] transition-colors rounded-full hover:bg-[#18140f]/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Magnetic className="hidden md:inline-block flex-shrink-0">
          <Link href="/#contact" className="group btn-island btn-primary text-sm font-semibold">
            Start a Conversation
            <span className="btn-island-icon bg-white/15">
              <ArrowUpRight size={16} weight="bold" />
            </span>
          </Link>
        </Magnetic>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#18140f]/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className="absolute transition-all duration-300"
            style={{
              opacity: mobileOpen ? 0 : 1,
              transform: mobileOpen ? "rotate(90deg) scale(0.6)" : "rotate(0deg) scale(1)",
            }}
          >
            <List size={22} className="text-[#18140f]" />
          </span>
          <span
            className="absolute transition-all duration-300"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.6)",
            }}
          >
            <X size={22} className="text-[#18140f]" />
          </span>
        </button>
      </nav>

      {/* Mobile menu — glass styling (border/shadow) is only applied
          while open, so the collapsed panel can never paint a stray
          hairline under the navbar. */}
      <div
        className={cn(
          "md:hidden pointer-events-auto mx-4 mt-2 overflow-hidden rounded-2xl transition-all duration-300 ease-in-out",
          mobileOpen ? "glass-nav is-scrolled max-h-screen" : "max-h-0"
        )}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className="px-4 pt-4 pb-6 space-y-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobile}
              className="block px-4 py-3 text-sm font-medium text-[#4a4237] hover:text-[#18140f] hover:bg-[#18140f]/5 rounded-xl transition-all duration-300"
              style={{
                transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
              }}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3">
            <Link
              href="/#contact"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full text-sm font-semibold btn-primary"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
