"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

export default function StrategicContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (imageRef.current && containerRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <Image 
          ref={imageRef}
          src="/images/camera-rock-bg.jpg" 
          alt="Strategic Content Parallax" 
          fill
          className="object-cover opacity-20 scale-110 -translate-y-[10%]"
        />
        
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[60vh] gap-12">
        <Reveal className="md:w-3/5">
          <h2 className="font-montserrat font-bold text-4xl md:text-6xl tracking-tighter leading-tight mb-6">
            STRATEGIC CONTENT<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">FOR BUSINESS GROWTH</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-lg mb-10 leading-relaxed">
            From brand awareness to lead generation, our content helps you attract, engage and convert the right audience.
          </p>
          <Link href="#contact" className="inline-block px-10 py-5 bg-white text-black font-semibold text-sm tracking-wide uppercase hover:bg-gray-200 transition-colors">
            Let's Discuss Your Project →
          </Link>
        </Reveal>

        <div className="md:w-1/5 flex flex-col items-end gap-6 md:gap-10">
          {["STRATEGY", "SHOOT", "EDIT", "PUBLISH", "GROW"].map((step, i) => (
            <Reveal key={i} delay={i * 0.08} y={16} className="flex items-center gap-4 group">
              <span className="text-xs font-bold tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">
                {step}
              </span>
              <div className="w-12 h-[1px] bg-white/20 group-hover:bg-red-600 transition-colors" />
              <span className="text-[10px] text-white/30 font-montserrat w-4">0{i+1}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
