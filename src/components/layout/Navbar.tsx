"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { businessConfig } from "@/config/business";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "SERVICES", href: "#services" },
  { name: "ABOUT", href: "#about" },
  { name: "GALLERY", href: "#gallery" },
  { name: "PROCESS", href: "#process" },
  { name: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-mak-primary/95 backdrop-blur-md border-b border-white/10 shadow-lg py-4"
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          {/* Logo Placeholder - Will be replaced by actual image */}
          <div className="text-2xl font-heading font-bold tracking-wider flex items-center gap-1">
            <span className="text-mak-white">THE DETAILING </span>
            <span className="text-mak-red">MANIACS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-widest text-mak-muted hover:text-mak-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-mak-red transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6 z-50">
          <a
            href={`tel:${businessConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-2 text-mak-white hover:text-mak-red transition-colors text-sm tracking-wider"
          >
            <Phone className="w-4 h-4" />
            <span>{businessConfig.contact.phone}</span>
          </a>
          <Link
            href="#booking"
            className="bg-mak-red hover:bg-mak-crimson text-white px-6 py-2.5 rounded-sm text-sm font-bold tracking-widest uppercase transition-colors"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-4 z-50">
          <Link
            href="#booking"
            className="bg-mak-red text-white px-4 py-2 rounded-sm text-xs font-bold tracking-widest uppercase"
          >
            BOOK NOW
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-mak-white p-1"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={cn(
          "fixed inset-0 bg-mak-primary z-40 lg:hidden flex flex-col items-center justify-center gap-8",
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-heading font-bold tracking-widest hover:text-mak-red transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <a
          href={`tel:${businessConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
          className="flex items-center gap-2 text-mak-muted mt-8"
        >
          <Phone className="w-5 h-5" />
          <span className="tracking-widest">{businessConfig.contact.phone}</span>
        </a>
      </motion.div>
    </motion.header>
  );
}
