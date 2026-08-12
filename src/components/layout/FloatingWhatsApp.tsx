"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { businessConfig } from "@/config/business";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${businessConfig.contact.whatsapp}?text=Hi THE DETAILING MANIACS, I would like to enquire about detailing/protection services for my car.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-24 lg:bottom-8 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-mak-secondary text-white text-xs font-bold tracking-widest uppercase py-2 px-4 rounded-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
        CHAT WITH US
      </div>
    </motion.a>
  );
}
