"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "PRECISION",
    description: "Every panel and surface receives focused attention."
  },
  {
    title: "PROTECTION",
    description: "Treatments designed around preserving the vehicle's finish."
  },
  {
    title: "CRAFTSMANSHIP",
    description: "Detailing performed with patience and attention to finish quality."
  },
  {
    title: "PREMIUM PRODUCTS",
    description: "Use quality detailing and protection products appropriate to the selected treatment."
  },
  {
    title: "PERSONALIZED CARE",
    description: "Every vehicle has different needs. Treatments should be selected based on vehicle condition and customer goals."
  }
];

export function WhyDetailingManiacs() {
  return (
    <section className="py-24 md:py-32 bg-mak-secondary border-t border-white/5 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-black text-5xl md:text-6xl uppercase text-white leading-tight mb-8 sticky top-32">
              WHY <br />
              <span className="text-mak-red">THE DETAILING MANIACS?</span>
            </h2>
          </motion.div>

          {/* Features List */}
          <div className="space-y-8 md:space-y-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-8 h-8 text-mak-muted group-hover:text-mak-red transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-2 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-mak-muted text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
