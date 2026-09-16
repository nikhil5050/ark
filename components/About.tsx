"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Reveal from "./Reveal";


export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLVideoElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Mirrors the Hero's camera scrub: the product shot scales, settles
      // and lights up as this section rises to meet it, so the handoff
      // from Hero reads as one continuous motion.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          cameraRef.current,
          { y: 80, scale: 0.8, rotate: -10, opacity: 0 },
          {
            y: 0,
            scale: 1,
            rotate: -3,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          glowRef.current,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1.3,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          frameRef.current,
          { opacity: 0, scale: 1.08 },
          {
            opacity: 1,
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent py-28 text-white z-10"
    >
      <div className="container relative z-10 mx-auto px-6 lg:px-12">

        {/* Main Grid Layout with Extended Middle Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT SIDE CONTENT (4 Columns) */}
          <Reveal className="lg:col-span-4 flex flex-col justify-center space-y-6 order-1">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50">
              ABOUT ARK LINE MEDIA
            </p>

            <h2 className="relative font-montserrat font-bold text-4xl sm:text-5xl tracking-tighter leading-[1.1]">
              <span className="absolute -left-4 -top-4 h-4 w-4 border-l-2 border-t-2 border-red-600/80 sm:-left-5 sm:-top-5 sm:h-5 sm:w-5" />
              MORE THAN<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                PHOTOS & VIDEOS
              </span>
            </h2>


          </Reveal>

          {/* VIDEO VISUAL (4 Columns) */}
          <div className="order-2 flex items-center justify-center py-6 lg:col-span-4 lg:py-0">
            <div className="relative flex h-[380px] w-full max-w-[420px] items-center justify-center sm:h-[440px]">
              <div
                ref={glowRef}
                className="pointer-events-none absolute inset-x-8 top-1/2 h-[220px] -translate-y-1/2 rounded-full bg-red-700/15 blur-[70px]"
              />
              <video
                ref={cameraRef}
                className="relative z-10 h-full w-full rounded-[26px] object-cover opacity-90"
                src="/aboutvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div
                ref={frameRef}
                className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/5"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT (4 Columns) */}
          <Reveal delay={0.15} className="lg:col-span-4 flex flex-col justify-center space-y-8 order-3">
            <div className="space-y-6 text-white/70 font-light text-base sm:text-lg leading-relaxed">
              <p>
                ARK Line Media is a media production company helping businesses grow through strategic photography, videography, branding, and content creation.
              </p>
              <p>
                We don&apos;t just create content. We create visual stories designed to attract attention, build trust, and create real business opportunities.
              </p>
            </div>

            {/* Replacement Minimalist Card for Right Image */}
           

            {/* Call To Action Link */}
            <div className="pt-2">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-4 text-sm font-semibold tracking-widest uppercase w-max"
              >
                <span className="border-b border-white/20 pb-1 group-hover:border-white transition-colors">
                  Know Our Story
                </span>
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}