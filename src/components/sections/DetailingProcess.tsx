"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "INSPECT",
    desc: "We assess the vehicle's paint, interior, condition, and specific requirements."
  },
  {
    num: "02",
    title: "PREPARE",
    desc: "The vehicle is carefully prepared for the selected treatment."
  },
  {
    num: "03",
    title: "DETAIL",
    desc: "Our team performs the detailing, correction, cleaning, or protection process."
  },
  {
    num: "04",
    title: "REVEAL",
    desc: "The finished vehicle is inspected and presented with attention to the final details."
  }
];

export function DetailingProcess() {
  return (
    <section id="process" className="py-24 md:py-32 bg-mak-primary relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-tight"
          >
            FROM INSPECTION <br />
            <span className="text-mak-muted">TO PERFECTION.</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-white/10" />
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 left-[23px] w-[2px] h-full bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex md:flex-col gap-6 md:gap-8 group"
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-mak-primary border-2 border-white/20 flex items-center justify-center group-hover:border-mak-red transition-colors duration-300">
                  <div className="w-3 h-3 rounded-full bg-mak-muted group-hover:bg-mak-red transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-0">
                  <span className="font-heading font-black text-5xl text-white/5 block mb-4 group-hover:text-mak-red/20 transition-colors duration-300">
                    {step.num}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white uppercase tracking-wide mb-3">
                    {step.title}
                  </h3>
                  <p className="text-mak-muted text-base leading-relaxed">
                    {step.desc}
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
