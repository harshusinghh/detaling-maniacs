"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { businessConfig } from "@/config/business";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-mak-primary border-t border-white/10 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <a 
        href={`tel:${businessConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
        className="flex-1 flex flex-col items-center justify-center py-3 text-mak-muted hover:text-white transition-colors"
      >
        <Phone className="w-5 h-5 mb-1" />
        <span className="text-[10px] font-bold tracking-widest uppercase">CALL</span>
      </a>
      
      <a 
        href={`https://wa.me/${businessConfig.contact.whatsapp}?text=Hi MAK SHIELD, I would like to enquire about detailing/protection services for my car.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 text-[#25D366] hover:text-white transition-colors"
      >
        <MessageCircle className="w-5 h-5 mb-1" />
        <span className="text-[10px] font-bold tracking-widest uppercase">WHATSAPP</span>
      </a>

      <Link 
        href="#booking"
        className="flex-1 flex flex-col items-center justify-center py-3 bg-mak-red text-white hover:bg-mak-crimson transition-colors"
      >
        <Calendar className="w-5 h-5 mb-1" />
        <span className="text-[10px] font-bold tracking-widest uppercase">BOOK NOW</span>
      </Link>
    </div>
  );
}
