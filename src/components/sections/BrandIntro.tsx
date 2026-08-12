"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandIntro() {
  return (
    <section id="about" className="py-24 md:py-32 bg-mak-primary relative overflow-hidden">
      {/* Carbon subtle pattern */}
      <div className="absolute inset-0 carbon-bg opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-mak-red" />
              <span className="text-mak-red font-bold tracking-[0.2em] text-xs uppercase">
                THE DETAILING MANIACS STANDARD
              </span>
            </div>
            
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.1] mb-8 text-white">
              YOUR CAR DESERVES <br />
              <span className="text-mak-muted">MORE THAN A WASH.</span>
            </h2>
            
            <div className="space-y-6 text-mak-muted text-lg font-light leading-relaxed mb-10">
              <p>
                THE DETAILING MANIACS is built around a simple belief — automotive care should be about more than making a vehicle look clean. It should be about preserving its finish, protecting its surfaces, and bringing out the character of the vehicle.
              </p>
              <p>
                Every vehicle receives attention to the details that matter.
              </p>
            </div>
            
            <Link
              href="#services"
              className="group inline-flex items-center gap-4 text-white font-bold tracking-widest text-sm uppercase hover:text-mak-red transition-colors"
            >
              <span className="relative">
                DISCOVER THE DETAILING MANIACS
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white/20 group-hover:bg-mak-red transition-colors" />
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-[3/4] relative z-10 overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1932&auto=format&fit=crop')" }} // Cinematic car close-up
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mak-primary/80 via-transparent to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-mak-red/50 z-0" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-mak-muted/20 z-0" />
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-10 right-10 bg-mak-secondary p-6 border border-white/10 shadow-2xl z-20 max-w-[200px]"
            >
              <p className="text-mak-red font-bold text-3xl font-heading mb-1">100%</p>
              <p className="text-xs text-mak-muted tracking-wider uppercase font-bold">Precision<br/>Focused</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
