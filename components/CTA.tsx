"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/camera-rock-bg.jpg" 
          alt="ARK Line Media Background" 
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none mb-6">
            READY TO GROW<br/>
            YOUR BRAND?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mb-12">
            Let's create visual content that gets your business noticed, trusted and remembered.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Link href="#contact" className="px-10 py-5 bg-white text-black font-semibold text-sm tracking-wide uppercase hover:bg-gray-200 transition-colors">
              Get a Free Consultation →
            </Link>
            <Link href="#contact" className="group flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border-b border-white/20 pb-1 hover:border-white transition-colors">
              Let's Discuss Your Project
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
