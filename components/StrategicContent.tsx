"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

export default function StrategicContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const bigTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cameraRef.current && containerRef.current) {
        // Parallax drift as the section scrolls
        gsap.to(cameraRef.current, {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Gentle continuous float
        gsap.to(cameraRef.current, {
          y: "+=16",
          duration: 2.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      if (bigTextRef.current) {
        gsap.fromTo(
          bigTextRef.current,
          { opacity: 0, y: 60, letterSpacing: "0.05em" },
          {
            opacity: 1,
            y: 0,
            letterSpacing: "-0.02em",
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bigTextRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#050505] py-24 md:py-32">
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 15% 30%, rgba(220,38,38,0.16), transparent 55%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <Reveal className="lg:w-2/5 w-full flex justify-center" y={40}>
            <div
              ref={cameraRef}
              className="relative w-56 sm:w-72 lg:w-full max-w-sm drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)]"
            >
              <Image
                src="/satergy.png"
                alt="Professional photography camera on tripod"
                width={416}
                height={606}
                className="w-full h-auto select-none"
                priority
              />
            </div>
          </Reveal>

          <div className="lg:w-3/5 w-full">
            <Reveal>
              <div className="relative inline-block px-6 py-5 mb-8">
                <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-red-600" />
                <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-red-600" />
                <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-red-600" />
                <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-red-600" />
                <h3 className="font-montserrat font-bold text-3xl md:text-5xl tracking-tighter leading-tight text-white">
                  STRATEGIC CONTENT<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
                    FOR BUSINESS GROWTH
                  </span>
                </h3>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-white/70 text-lg md:text-xl font-light max-w-lg mb-10 leading-relaxed">
                From brand awareness to lead generation, our content helps you
                attract, engage and convert the right audience.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mb-12">
              <Link
                href="#contact"
                className="inline-block px-10 py-5 bg-white text-black font-semibold text-sm tracking-wide uppercase hover:bg-gray-200 transition-colors"
              >
                Let&apos;s Discuss Your Project →
              </Link>
            </Reveal>

            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5 max-w-md">
              {["STRATEGY", "SHOOT", "EDIT", "PUBLISH", "GROW"].map((step, i) => (
                <Reveal
                  key={i}
                  delay={0.2 + i * 0.06}
                  y={16}
                  className="flex items-center gap-3 group"
                >
                  <span className="text-[10px] text-red-600 font-montserrat font-bold">
                    0{i + 1}
                  </span>
                  <span className="text-xs font-bold tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                    {step}
                  </span>
                </Reveal>
              ))}
            </div> */}
          </div>
        </div>

        <div className="mt-2 mb-8 md:mt-2 text-center overflow-hidden">
          <h2
            ref={bigTextRef}
            className="animate-glow-pan font-montserrat font-black uppercase leading-[0.85] text-[16vw] md:text-[10.5vw] lg:text-[9vw] tracking-tighter bg-clip-text text-transparent select-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 60% 130% at 50% 35%, #ef4444 0%, #dc2626 18%, #991b1b 35%, #450a0a 55%, #0a0202 75%, #000000 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 30%, rgba(0,0,0,0.6) 60%, transparent 92%)",
              maskImage:
                "linear-gradient(to bottom, black 30%, rgba(0,0,0,0.6) 60%, transparent 92%)",
            }}
          >
            PHOTOGRAPHY
          </h2>
          <Reveal delay={0.25}>
            <p className="text-white/80 text-base md:text-2xl font-light tracking-wide max-w-2xl mx-auto -mt-3 md:-mt-2 px-4">
              CAPTURE EVERY MOMENT WITH CUTTING EDGE CONTENT
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
