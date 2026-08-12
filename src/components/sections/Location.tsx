"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { businessConfig } from "@/config/business";

export function Location() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-mak-primary relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-5xl md:text-6xl uppercase text-white leading-tight"
          >
            COME SEE <br />
            <span className="text-mak-red">THE SHIELD.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          
          {/* Location Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-mak-secondary p-8 md:p-12 border border-white/5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading font-black text-3xl uppercase text-white mb-8 tracking-wide">
                MAK SHIELD <br/>
                <span className="text-mak-muted text-2xl">DETAILING STUDIO</span>
              </h3>

              <div className="space-y-8 mb-12">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-mak-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold tracking-widest text-sm uppercase mb-2">Location</p>
                    <p className="text-mak-muted leading-relaxed max-w-sm">
                      {businessConfig.location.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-mak-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold tracking-widest text-sm uppercase mb-2">Contact</p>
                    <a href={`tel:${businessConfig.contact.phone.replace(/[^0-9+]/g, "")}`} className="text-mak-muted hover:text-white transition-colors">
                      {businessConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-mak-red flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <p className="text-white font-bold tracking-widest text-sm uppercase mb-3">Hours</p>
                    <div className="space-y-1">
                      {businessConfig.hours.slice(0, 1).map((hour, idx) => (
                        <div key={idx} className="flex justify-between text-mak-muted text-sm max-w-[250px]">
                          <span>Mon - Sun:</span>
                          <span>{hour.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={businessConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 font-bold tracking-widest text-white border border-white/20 hover:border-mak-red hover:bg-white/5 transition-all duration-300 uppercase w-full sm:w-auto self-start"
            >
              <span>GET DIRECTIONS</span>
              <ExternalLink className="w-4 h-4 group-hover:text-mak-red transition-colors" />
            </a>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] lg:h-auto min-h-[400px] border border-white/5 relative group grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden"
          >
            {/* Google Maps Embed using Coordinates */}
            <iframe 
              src={`https://maps.google.com/maps?q=${businessConfig.location.coordinates.lat},${businessConfig.location.coordinates.lng}&z=15&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            {/* Dark overlay that fades on hover */}
            <div className="absolute inset-0 bg-mak-primary/50 group-hover:bg-transparent pointer-events-none transition-colors duration-700" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
