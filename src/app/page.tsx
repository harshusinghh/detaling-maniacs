import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { Services } from "@/components/sections/Services";
import { FeaturedProtection } from "@/components/sections/FeaturedProtection";
import { ProductGloss } from "@/components/sections/ProductGloss";
import { WhyMakShield } from "@/components/sections/WhyMakShield";
import { DetailingProcess } from "@/components/sections/DetailingProcess";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { Booking } from "@/components/sections/Booking";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-mak-primary pb-16 lg:pb-0">
      <Navbar />
      
      <Hero />
      <TrustBar />
      <BrandIntro />
      <Services />
      <FeaturedProtection />
      <ProductGloss />
      <WhyMakShield />
      <DetailingProcess />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <Location />
      <Booking />
      
      <Footer />
      
      <FloatingWhatsApp />
      <MobileActionBar />
    </main>
  );
}
