"use client";

import { businessConfig } from "@/config/business";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function TrustBar() {
  const items = [
    "PRECISION DETAILING",
    "PAINT PROTECTION",
    "PREMIUM FINISH",
    "AUTOMOTIVE CARE",
  ];

  return (
    <div className="w-full bg-mak-secondary border-y border-white/5 py-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        
        {/* Service Keywords */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-widest text-mak-muted uppercase">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-mak-red hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Google Rating */}
        <a 
          href={businessConfig.reviews.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <div className="flex gap-1 text-mak-red">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">{businessConfig.reviews.rating}</span>
            <span className="text-mak-muted text-xs uppercase tracking-wider group-hover:text-white transition-colors">
              {businessConfig.reviews.count} GOOGLE REVIEWS
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
