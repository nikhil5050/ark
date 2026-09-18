import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrustedIndustries from "@/components/TrustedIndustries";
import Services from "@/components/Services";
// import BrandPhilosophy from "@/components/BrandPhilosophy";
// import IndustriesWeServe from "@/components/IndustriesWeServe";
// import FeaturedWork from "@/components/FeaturedWork";
import StrategicContent from "@/components/StrategicContent";
import CurvedGallery from "@/components/CurvedGallery";
import BusinessOutcome from "@/components/BusinessOutcome";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-red-600/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <TrustedIndustries />
      <Services />
      {/* <BrandPhilosophy /> */}
      {/* <IndustriesWeServe /> */}
      {/* <FeaturedWork /> */}
      <StrategicContent />
      <CurvedGallery />
      <BusinessOutcome />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
