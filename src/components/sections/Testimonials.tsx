"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { businessConfig } from "@/config/business";

const testimonials = [
  {
    name: "Rahul M.",
    text: "Absolutely exceptional work on my ceramic coating. The gloss is unbelievable and the attention to detail from The Detailing Maniacs team is unmatched in Hyderabad.",
    rating: 5
  },
  {
    name: "Sanjay Reddy",
    text: "Got PPF done for my new SUV. The application is virtually invisible and flawless. Highly recommend their professional approach.",
    rating: 5
  },
  {
    name: "Vikram K.",
    text: "They transformed my 5-year-old car's paint back to showroom condition. Paint correction was spot on. True automotive craftsmen.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-mak-secondary border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-black text-5xl md:text-6xl uppercase text-white leading-tight"
            >
              BUILT ON <br />
              <span className="text-mak-muted">TRUST.</span>
            </motion.h2>
          </div>
          
          <motion.a 
            href={businessConfig.reviews.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-mak-primary p-4 border border-white/10 hover:border-mak-red transition-colors group"
          >
            <div className="text-4xl font-heading font-black text-white group-hover:text-mak-red transition-colors">
              {businessConfig.reviews.rating}
            </div>
            <div>
              <div className="flex text-mak-red mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold tracking-widest text-mak-muted uppercase">
                {businessConfig.reviews.count} Google Reviews
              </p>
            </div>
          </motion.a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-mak-primary p-8 md:p-10 border border-white/5 relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-mak-red/10 transition-colors" />
              
              <div className="flex text-mak-red mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-mak-muted text-lg italic leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-mak-secondary flex items-center justify-center font-heading font-bold text-white border border-white/20">
                  {review.name.charAt(0)}
                </div>
                <span className="text-white font-bold tracking-wider uppercase text-sm">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
