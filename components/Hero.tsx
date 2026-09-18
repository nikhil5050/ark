"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Scrub the camera down and out of view as the hero's own height
      // scrolls by, right as the About section slides up to cover it.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(cameraRef.current, {
          y: "82vh",
          scale: 0.68,
          opacity: 0,
          filter: "blur(12px)",
          ease: "power1.in",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Bounds the sticky section's containing block to exactly one viewport,
    // so it releases right after the About section finishes covering it
    // instead of staying pinned for the rest of the page.
    <div className="relative h-screen">
      <section
        ref={containerRef}
        className="sticky top-0 z-0 h-screen w-full overflow-hidden bg-[#0c0d0d] font-sans text-white select-none"
      >
        {/* 1. BACKGROUND VIDEO & OVERLAYS */}
        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover object-center opacity-70 brightness-90 contrast-110"
            src="/bg2.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          {/* Subtle dark gradient overlay to ensure UI elements are readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/30 to-[#050505]/80" />
        </div>

        {/* 2. TOP HEADER / SUBTITLE */}
        <div className="absolute bottom-10 left-[20%] -translate-x-1/2 z-20 text-center uppercase tracking-[0.35em] text-xs md:text-sm font-semibold text-gray-300/90">
          <span className="inline-block border-l border-white/30 pl-3">
            Capture A Bolder Tomorrow
          </span>
        </div>

        {/* 3. SIDE TEXT (LEFT) */}
        <div className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 z-20 flex-col items-start space-y-4 max-w-[140px] text-xs uppercase tracking-widest text-gray-300/80 border-l border-white/20 pl-4 leading-relaxed">
          <p>More than a camera, a way of life.</p>
        </div>

        {/* 4. MAIN HERO CONTENT AREA (CENTERED) */}
        <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 md:px-12">
          <div className="relative flex w-full max-w-[1400px] items-center justify-center">

            {/* GIANT BACKDROP TEXT "ARK" */}
            <div className="absolute inset-0 top-[-35%] flex items-center justify-center pointer-events-none z-0">
              <h1 className="text-[30vw] md:text-[25vw] leading-none tracking-tighter text-[#e8ded1] opacity-95 drop-shadow-2xl uppercase scale-y-110">
                ARK
              </h1>
            </div>

            {/* FOREGROUND CAMERA IMAGE */}
            <div ref={cameraRef} className="relative z-10 mt-[150px] transition-transform duration-500 hover:scale-105 md:mt-[200px]">
              <div className="relative w-[320px] sm:w-[480px] md:w-[620px] lg:w-[400px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.85)]">
                <Image
                  src="/camera/camera.png" // Place your third image (camera) here
                  alt="Insta360 ACE Pro 2"
                  width={1200}
                  height={900}
                  priority
                  className="h-auto w-full object-contain -rotate-3"
                />
              </div>
            </div>

            {/* HANDWRITTEN ACCENT TEXT (RIGHT SIDE OF CAMERA) */}
            <div className="hidden md:block absolute right-[2%] top-[100%] z-20 pointer-events-none">
              <span className="font-serif italic text-3xl md:text-4xl text-gray-200/90 tracking-wide font-light rotate-[-6deg] block">
                For Real Moments
              </span>
            </div>

          </div>
        </div>
      </section>
       
    </div>
  );
}
