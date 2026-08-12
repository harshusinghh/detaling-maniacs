"use client";

import { motion } from "framer-motion";

export function ProductGloss() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105 transform animate-slow-pan"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop')" }} // Close up of paint / gloss
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-heading font-black text-5xl md:text-7xl lg:text-8xl uppercase text-white leading-tight mb-8"
        >
          GLOSS IS THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mak-red to-mak-crimson">BEGINNING.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-lg md:text-2xl font-light tracking-wide uppercase"
        >
          "Real detailing is measured in the details you notice — and the protection you don't."
        </motion.p>
      </div>

      {/* Animated Red Line Elements */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-mak-red to-transparent"
      />
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-mak-red to-transparent"
      />
    </section>
  );
}
