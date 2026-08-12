"use client";

import { motion } from "framer-motion";
import { businessConfig } from "@/config/business";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: typeof businessConfig.services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-mak-secondary overflow-hidden h-[450px] flex flex-col border border-white/5 hover:border-mak-red/30 transition-colors duration-500"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop')` }} // Placeholder generic detail image
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mak-primary via-mak-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-8 transition-transform duration-500 group-hover:-translate-y-2">
        <div className="flex items-start justify-between mb-auto">
          <span className="font-heading text-4xl font-black text-white/20 group-hover:text-mak-red transition-colors duration-300">
            {service.id}
          </span>
          {/* Top Red Line Reveal */}
          <span className="w-0 h-1 bg-mak-red transition-all duration-500 group-hover:w-16" />
        </div>

        <div>
          <h3 className="font-heading text-2xl font-bold uppercase text-white mb-3">
            {service.name}
          </h3>
          <p className="text-mak-muted text-sm leading-relaxed mb-6 line-clamp-3">
            {service.shortDescription}
          </p>
          
          <div className="flex items-center gap-3 text-white font-bold tracking-widest text-xs uppercase group-hover:text-mak-red transition-colors">
            <span>EXPLORE</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
      
      {/* Bottom accent glow */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-mak-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_#E30620]" />
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-mak-primary relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="w-12 h-[1px] bg-mak-red" />
            <span className="text-mak-red font-bold tracking-[0.2em] text-xs uppercase">
              WHAT WE DO
            </span>
            <span className="w-12 h-[1px] bg-mak-red" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase leading-tight text-white"
          >
            BUILT TO DETAIL. <br />
            <span className="text-mak-muted">ENGINEERED TO PROTECT.</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessConfig.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
