"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { businessConfig } from "@/config/business";
import { MessageSquare, ArrowRight, CheckCircle } from "lucide-react";

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-mak-primary relative overflow-hidden">
      {/* Red Lighting Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mak-red/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mak-crimson/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-12">
          
          {/* Header Content */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-black text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-[0.95] mb-8"
            >
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mak-red to-mak-crimson">PROTECT YOUR RIDE?</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-mak-muted text-lg leading-relaxed mb-10 max-w-md"
            >
              Tell us about your vehicle and we'll help you find the right detailing or protection service.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href={`https://wa.me/${businessConfig.contact.whatsapp}?text=Hi MAK SHIELD, I would like to enquire about detailing/protection services for my car.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-white font-bold tracking-widest text-sm uppercase border-b border-mak-red pb-1 hover:text-mak-red transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WHATSAPP US INSTEAD</span>
              </a>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-mak-secondary p-8 md:p-12 border border-white/5 relative"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-mak-secondary z-20 flex flex-col items-center justify-center text-center p-8 border border-mak-red/20"
              >
                <div className="w-20 h-20 rounded-full bg-mak-red/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-mak-red" />
                </div>
                <h3 className="font-heading font-black text-3xl text-white uppercase mb-4">Request Received</h3>
                <p className="text-mak-muted text-lg">
                  Thanks for contacting MAK SHIELD. Our team will get in touch with you shortly.
                </p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-mak-muted uppercase">Full Name</label>
                <input required type="text" className="w-full bg-mak-primary border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mak-red transition-colors" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-mak-muted uppercase">Phone Number</label>
                <input required type="tel" className="w-full bg-mak-primary border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mak-red transition-colors" placeholder="+91 00000 00000" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-mak-muted uppercase">Vehicle Brand</label>
                <input required type="text" className="w-full bg-mak-primary border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mak-red transition-colors" placeholder="e.g. BMW" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-mak-muted uppercase">Vehicle Model</label>
                <input required type="text" className="w-full bg-mak-primary border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mak-red transition-colors" placeholder="e.g. M340i" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold tracking-widest text-mak-muted uppercase">Select Service</label>
                <select required className="w-full bg-mak-primary border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mak-red transition-colors appearance-none rounded-none cursor-pointer">
                  <option value="" disabled selected>Choose a primary service</option>
                  {businessConfig.services.map(service => (
                    <option key={service.id} value={service.name}>{service.name}</option>
                  ))}
                  <option value="Other">Other / Unsure</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold tracking-widest text-mak-muted uppercase">Preferred Date</label>
                <input type="date" className="w-full bg-mak-primary border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mak-red transition-colors cursor-pointer dark:[color-scheme:dark]" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold tracking-widest text-mak-muted uppercase">Message (Optional)</label>
                <textarea rows={3} className="w-full bg-mak-primary border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mak-red transition-colors resize-none" placeholder="Tell us about the condition of your vehicle or specific requirements..." />
              </div>

              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-bold tracking-widest text-white bg-mak-red hover:bg-mak-crimson transition-all duration-300 uppercase overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative flex items-center gap-3">
                    {isSubmitting ? "PROCESSING..." : "GET A QUOTE"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
