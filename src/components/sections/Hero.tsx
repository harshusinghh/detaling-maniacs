"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-mak-primary flex items-center justify-center"
    >
      {/* Background Parallax Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=2069&auto=format&fit=crop')" }} // Premium dark car placeholder
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-mak-primary/80 via-mak-primary/50 to-mak-primary/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-mak-primary/90 via-transparent to-mak-primary/80" />
        
        {/* Subtle Red Light Effect */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-mak-red/10 rounded-full blur-[120px] pointer-events-none" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center md:items-start text-center md:text-left pt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-12 h-[1px] bg-mak-red hidden md:block" />
          <span className="text-mak-red font-bold tracking-[0.3em] text-xs md:text-sm uppercase">
            THE DETAILING MANIACS
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-6 font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase"
        >
          <h1 className="block">PROTECT.</h1>
          <h1 className="block text-mak-muted">PRESERVE.</h1>
          <h1 className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-mak-muted">
            PERFORM.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-10"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide uppercase">
            WHERE YOUR CAR MEETS PRECISION.
          </h2>
          <p className="text-mak-muted text-lg md:text-xl font-light leading-relaxed">
            Premium automotive detailing and protection crafted to preserve your vehicle&apos;s finish and elevate its presence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Link
            href="#booking"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold tracking-widest text-white bg-mak-red hover:bg-mak-crimson transition-all duration-300 uppercase overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
            <span className="relative">BOOK YOUR DETAILING</span>
          </Link>
          
          <Link
            href="#services"
            className="group inline-flex items-center justify-center px-8 py-4 font-bold tracking-widest text-white border border-white/20 hover:border-mak-red hover:bg-white/5 transition-all duration-300 uppercase backdrop-blur-sm"
          >
            EXPLORE SERVICES
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-[10px] font-bold tracking-[0.3em] text-mak-muted uppercase">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-mak-red" />
        </motion.div>
      </motion.div>
    </section>
  );
}
