"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS_DATA = [
  { id: 1, title: "Mountain Biking", src: "https://i.pinimg.com/1200x/de/21/7d/de217d5be721d6091496cfe514ebc3bc.jpg" },
  { id: 2, title: "Trail Running", src: "https://i.pinimg.com/736x/dd/dc/59/dddc595a11204e5a82b8438815c917e5.jpg" },
  { id: 3, title: "Surfing", src: "https://i.pinimg.com/1200x/81/cd/2f/81cd2f2bcf4c73a4f0799e144c29e489.jpg" },
  { id: 4, title: "Mountain Summit", src: "https://i.pinimg.com/736x/e8/21/46/e82146ef6270a9f13da3a6fb47901f7c.jpg" },
  { id: 5, title: "Kayaking", src: "https://i.pinimg.com/1200x/2c/cd/12/2ccd123708291302dd7b6d14c9425a37.jpg" },
];

export default function CurvedGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const archTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotation animation anchored at the bottom-center to create the arching movement
      gsap.fromTo(
        archTrackRef.current,
        { rotate: 18 },
        {
          rotate: -18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#07070a] text-white flex flex-col items-center"
    >
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/1200x/91/2d/01/912d010222a929fe657d664f0742f5ce.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-20 blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-[#07070a]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070a] via-transparent to-[#07070a]" />
        <div className="absolute left-1/2 top-[55%] h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/10 blur-[100px]" />
      </div>

      {/* HEADING */}
      <div className="relative z-30  sm:pt-20 md:pt-2 md:pb-14 text-center px-4">
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-red-500/80 leading-none">
          Behind The Lens
        </p>
        <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] leading-none">
          Every Angle A New Story
        </h2>
      </div>

      {/* GUIDE ARC + END DOTS (static decorative accent) */}
      <svg
        className="pointer-events-none absolute left-1/2 top-[150px] sm:top-[190px] md:top-[225px] z-10 h-[110px] w-[92%] max-w-[1000px] -translate-x-1/2 sm:h-[140px] md:h-[170px]"
        viewBox="0 0 100 30"
        preserveAspectRatio="none"
      >
        <path d="M 4 27 Q 50 2 96 27" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="0.35" />
        <circle cx="4" cy="27" r="1" fill="white" fillOpacity="0.6" />
        <circle cx="50" cy="6" r="1" fill="#ef4444" fillOpacity="0.85" />
        <circle cx="96" cy="27" r="1" fill="white" fillOpacity="0.6" />
      </svg>

      {/* ARC CARD GALLERY */}
      <div className="relative z-20 mt-[130px] h-[220px] w-full sm:mt-[170px] sm:h-[290px] md:mt-[210px] md:h-[340px]">
        <div
          ref={archTrackRef}
          className="absolute bottom-[-760px] left-1/2 h-[980px] w-[1500px] -translate-x-1/2 sm:bottom-[-940px] sm:h-[1180px] sm:w-[2000px] md:bottom-[-1080px] md:h-[1340px] md:w-[2300px]"
          style={{ transformOrigin: "50% 900px" }}
        >
          {CARDS_DATA.map((card, index) => {
            const totalCards = CARDS_DATA.length;
            const angleStep = 16;
            const startAngle = -((totalCards - 1) * angleStep) / 2;
            const cardAngle = startAngle + index * angleStep;

            return (
              <div
                key={card.id}
                className="group absolute top-0 left-1/2 h-[165px] w-[135px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-stone-900 shadow-[0_25px_50px_rgba(0,0,0,0.7)] sm:h-[220px] sm:w-[180px] md:h-[255px] md:w-[210px]"
                style={{
                  transformOrigin: "50% 900px",
                  transform: `rotate(${cardAngle}deg)`,
                }}
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  sizes="(min-width: 768px) 210px, (min-width: 640px) 180px, 135px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            );
          })}
        </div>
      </div>

      {/* CAMERA PRODUCT VISUAL */}
      <div className="relative z-20 mt-2 flex flex-1 flex-col items-center justify-center sm:mt-4">
        <div className="relative h-[190px] w-[260px] sm:h-[250px] sm:w-[350px] md:h-[300px] md:w-[420px] mb-2">
          <Image
            src="https://i.pinimg.com/1200x/91/2d/01/912d010222a929fe657d664f0742f5ce.jpg"
            alt="ARK Line Media camera on location"
            fill
            sizes="420px"
            className="object-cover object-center rounded-3xl [mask-image:radial-gradient(closest-side,black_65%,transparent_100%)]"
          />
        </div>
        <div className="mt-3 mb-8 h-px w-16 bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
        <p className="mt-2 text-[10px] tracking-[0.35em] uppercase text-white/50 sm:text-xs">
          Ark Line Media
        </p>
      </div>
    </section>
  );
}
