"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "ARK Line Media understood exactly how we wanted our brand to be presented. The final content gave us a much stronger presence online.",
      client: "Client Name",
      industry: "Real Estate Developer"
    },
    {
      quote: "The visual quality of the content they produced for our launch campaign was exceptional. It immediately elevated our brand positioning.",
      client: "Client Name",
      industry: "Corporate Director"
    },
    {
      quote: "Working with the ARK team was seamless. They are not just shooters, they think strategically about what the business actually needs.",
      client: "Client Name",
      industry: "Restaurant Owner"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        <div className="md:w-1/3">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
            WHAT OUR<br/>
            <span className="text-white/40">CLIENTS SAY</span>
          </h2>
          
          <div className="flex gap-4 mt-12">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="md:w-2/3 relative min-h-[300px] flex items-center">
          <Quote size={120} className="absolute -top-10 -left-10 text-white/5 z-0" />
          
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-10 text-white/90">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <p className="font-montserrat font-bold text-lg tracking-wider mb-1">{testimonials[currentIndex].client}</p>
              <p className="text-sm text-red-500 font-medium uppercase tracking-widest">{testimonials[currentIndex].industry}</p>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="absolute bottom-0 right-0 flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? "bg-red-600" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
