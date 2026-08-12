"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1974&auto=format&fit=crop", service: "CERAMIC COATING", vehicle: "PORSCHE 911", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop", service: "PAINT CORRECTION", vehicle: "BMW M4", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop", service: "PPF", vehicle: "MERCEDES G63", span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop", service: "INTERIOR DETAILING", vehicle: "RANGE ROVER", span: "md:col-span-1 md:row-span-2" },
  { id: 5, src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=1974&auto=format&fit=crop", service: "PREMIUM WASH", vehicle: "AUDI RS6", span: "md:col-span-1 md:row-span-1" },
  { id: 6, src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop", service: "CERAMIC COATING", vehicle: "LAMBORGHINI HURACAN", span: "md:col-span-2 md:row-span-1" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-mak-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-mak-red" />
              <span className="text-mak-red font-bold tracking-[0.2em] text-xs uppercase">
                OUR WORK
              </span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-black text-5xl md:text-6xl uppercase text-white leading-[0.9]"
            >
              THE MAK SHIELD <br />
              <span className="text-mak-muted">SHOWCASE.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <p className="text-mak-muted max-w-sm text-sm">
              Explore our portfolio of premium detailing, ceramic coating, and paint protection film applications.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-sm bg-mak-secondary ${img.span}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-[2px]">
                <Search className="w-8 h-8 text-mak-red mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <h4 className="text-white font-heading font-bold text-xl uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {img.service}
                </h4>
                <p className="text-mak-muted text-sm font-bold tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {img.vehicle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video rounded-sm overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${selectedImage}')` }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
