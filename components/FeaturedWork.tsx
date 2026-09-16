"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (scrollRef.current && containerRef.current && window.innerWidth > 768) {
      const sections = gsap.utils.toArray(scrollRef.current.children);
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: "+=3000",
        }
      });
    }
  }, []);

  const works = [
    {
      industry: "REAL ESTATE",
      desc: "Premium project visuals designed to build buyer trust and generate inquiries.",
      img: "/images/camera-rock-bg.jpg"
    },
    {
      industry: "F&B",
      desc: "Visual content designed to increase local attention and customer footfall.",
      img: "/images/camera-rock-bg.jpg"
    },
    {
      industry: "FITNESS",
      desc: "Transformation-driven content designed to attract new members.",
      img: "/images/camera-rock-bg.jpg"
    },
    {
      industry: "SALON & CLINIC",
      desc: "Premium visuals that strengthen trust and appointment demand.",
      img: "/images/camera-rock-bg.jpg"
    },
    {
      industry: "CORPORATE",
      desc: "High-impact corporate content built for stronger brand visibility.",
      img: "/images/camera-rock-bg.jpg"
    }
  ];

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-16 md:h-screen md:flex md:flex-col md:justify-center md:py-0 md:pt-20 bg-[#050505] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 mb-8 md:mb-6 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
            <span className="block">REAL STORIES.</span>
            <span className="block text-white/40">REAL BUSINESS IMPACT.</span>
          </h2>
        </div>
        <Link href="#contact" className="group flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border-b border-white/20 pb-1 hover:border-white transition-colors whitespace-nowrap">
          View Case Studies
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div className="md:ml-12 pl-6 md:pl-0">
        <div ref={scrollRef} className="flex gap-6 md:gap-6 w-max overflow-x-auto md:overflow-visible pb-4 scrollbar-hide">
          {works.map((work, i) => (
            <div key={i} className="w-[72vw] max-w-[420px] md:w-[32vw] lg:w-[28vw] flex-shrink-0 group cursor-pointer">
              <div className="relative h-[300px] md:h-[min(40vh,420px)] w-full overflow-hidden mb-4">
                <Image
                  src={work.img}
                  alt={work.industry}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-montserrat font-bold text-xl md:text-2xl tracking-wide mb-2">{work.industry}</h3>
                  <p className="text-sm md:text-base text-white/60 font-light max-w-sm line-clamp-2">{work.desc}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
