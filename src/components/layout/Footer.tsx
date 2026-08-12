import Link from "next/link";
import { businessConfig } from "@/config/business";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mak-secondary border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="text-2xl font-heading font-bold tracking-wider flex items-center gap-1">
                <span className="text-mak-white">THE DETAILING </span>
                <span className="text-mak-red">MANIACS</span>
              </div>
            </Link>
            <p className="text-mak-muted text-sm font-bold tracking-[0.2em] uppercase leading-relaxed">
              {businessConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              {["HOME", "SERVICES", "ABOUT", "GALLERY", "PROCESS", "CONTACT"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-mak-muted hover:text-mak-red transition-colors text-sm font-bold tracking-wider uppercase">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4">
              {["Detailing", "Ceramic Coating", "Graphene Coating", "PPF", "Paint Correction", "Interior Detailing"].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-mak-muted hover:text-mak-red transition-colors text-sm font-bold tracking-wider uppercase">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-bold tracking-wider text-mak-muted uppercase">
              <li>
                <a href={`tel:${businessConfig.contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors">
                  {businessConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${businessConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={businessConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors leading-relaxed block mt-4">
                  {businessConfig.location.address}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-mak-muted text-xs font-bold tracking-widest uppercase">
            © {currentYear} {businessConfig.name}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <a href={businessConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-mak-muted hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">
              INSTAGRAM
            </a>
            <a href={businessConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-mak-muted hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">
              FACEBOOK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
