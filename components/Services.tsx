"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    { title: "Photography", desc: "Product and brand shoots that hold attention and drive action.", img: "https://i.pinimg.com/736x/68/41/d1/6841d1ccdc9e941a40a10268e72d8323.jpg" },
    { title: "Videography", desc: "Cinematic brand films built to convert viewers into customers.", img: "https://i.pinimg.com/736x/21/3d/12/213d12dd9660c3639063ecc95cd0ae6c.jpg" },
    { title: "Branding & Creative Content", desc: "Visual identity systems that make brands instantly recognizable.", img: "https://i.pinimg.com/1200x/98/c7/de/98c7de42102b2365a8d2d82cdd91d8fe.jpg" },
    { title: "Social Media Reels", desc: "Scroll-stopping short-form content built for reach and engagement.", img: "https://i.pinimg.com/1200x/aa/a7/b8/aaa7b8f6b57b30bc744cba06b8265bae.jpg" },
    { title: "Drone Shoots", desc: "Aerial visuals that give projects and spaces real scale and impact.", img: "https://i.pinimg.com/736x/5b/f6/44/5bf644edcbadfa73c64c668ca78c7c48.jpg" },
    { title: "Podcast Production", desc: "Full studio setup and edit for polished, publish-ready episodes.", img: "https://i.pinimg.com/736x/b4/ea/d9/b4ead9e975f9e5ba05edaf7929bd050c.jpg" },
    { title: "Ad Films & Reels", desc: "Performance-first ad creatives designed to sell on every platform.", img: "https://i.pinimg.com/1200x/4b/68/02/4b6802690025c2d0480a8d800b47af48.jpg" },
    { title: "Event Coverage", desc: "Full-day coverage that turns live moments into lasting content.", img: "https://i.pinimg.com/736x/08/bf/6c/08bf6cd8deed80328817562c62bdaf21.jpg" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (scrollRef.current && containerRef.current && window.innerWidth > 768) {
      const cards = gsap.utils.toArray(scrollRef.current.children) as HTMLElement[];
      const firstCard = cards[0];
      const gap = 24;
      const totalSlide = (firstCard.offsetWidth + gap) * (cards.length - 1);

      const ctx = gsap.context(() => {
        gsap.to(scrollRef.current, {
          x: -totalSlide,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + (window.innerHeight * 1.5),
          },
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-[#0a0a0a] py-16 md:h-screen md:flex md:flex-col md:justify-center md:py-0 md:pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 mb-8 md:mb-6">
        <Reveal className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-2">
              CONTENT THAT<br />
              <span className="text-white/40">BUILDS BRANDS</span>
            </h2>
          </div>
          <Link href="#contact" className="group flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border-b border-white/20  hover:border-white transition-colors whitespace-nowrap">
            Explore All Services
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </Reveal>
      </div>

      <div className="md:ml-12 pl-6 md:pl-0">
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-6 w-max overflow-x-auto md:overflow-visible pb-4 scrollbar-hide"
        >
          {services.map((service, i) => (
            <div key={i} className="w-[72vw] max-w-[420px] md:w-[32vw] lg:w-[26vw] flex-shrink-0 group cursor-pointer">
              <div className="relative h-[300px] md:h-[min(40vh,420px)] w-full overflow-hidden mb-4 rounded-sm">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-montserrat font-bold text-xl md:text-2xl mb-2">{service.title}</h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center gap-2 text-sm text-red-500 font-medium">
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base text-white/60 font-light max-w-sm line-clamp-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
