"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedProtection() {
  return (
    <section className="relative w-full overflow-hidden bg-mak-primary">
      {/* Container with aspect ratio or min height */}
      <div className="relative min-h-[80vh] md:min-h-[700px] flex items-center">
        
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620803525281-a675fdfae4a8?q=80&w=2070&auto=format&fit=crop')" }} // Detailer applying coating placeholder
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mak-primary via-mak-primary/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-mak-primary via-transparent to-mak-primary/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1 border border-mak-red/50 bg-mak-red/10 backdrop-blur-sm mb-6">
              <span className="text-mak-red font-bold tracking-widest text-xs uppercase">
                FEATURED SERVICE
              </span>
            </div>

            <h2 className="font-heading font-black text-5xl md:text-7xl uppercase text-white leading-[0.9] mb-6">
              PAINT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-mak-muted">PROTECTION</span>
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-wide uppercase">
              "THE FINISH YOU SEE.<br />THE PROTECTION YOU DON'T."
            </h3>

            <p className="text-mak-muted text-lg font-light leading-relaxed mb-10 max-w-xl">
              Your vehicle&apos;s paint faces constant exposure to dust, sunlight, water, road debris, and everyday contamination. Professional protection helps preserve the finish while keeping the vehicle looking its best.
            </p>

            <Link
              href="#booking"
              className="group inline-flex items-center justify-center px-8 py-4 font-bold tracking-widest text-white bg-white/10 hover:bg-mak-red backdrop-blur-md border border-white/20 hover:border-mak-red transition-all duration-300 uppercase"
            >
              <span className="mr-4">GET A PROTECTION QUOTE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        
        {/* Animated Accent Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 right-12 md:right-32 w-[1px] h-full bg-gradient-to-b from-transparent via-mak-red to-transparent origin-top hidden md:block"
        />
      </div>
    </section>
  );
}
