"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "REAL ESTATE",
      tagline: "Generate inquiries. Sell faster.",
      services: ["Property Photography", "Drone Shoots", "Project Walkthroughs", "Property Films"],
      img: "/images/camera-rock-bg.jpg"
    },
    {
      title: "RESTAURANTS & CAFES",
      tagline: "Attract more customers. Build local love.",
      services: ["Food Photography", "Reels", "Menu Shoots", "Promotional Videos"],
      img: "/images/camera-rock-bg.jpg"
    },
    {
      title: "GYMS & FITNESS",
      tagline: "Boost memberships. Create engaging content.",
      services: ["Fitness Photography", "Transformation Videos", "Testimonials", "Reels"],
      img: "/images/camera-rock-bg.jpg"
    },
    {
      title: "SALONS & CLINICS",
      tagline: "Showcase transformations. Build trust.",
      services: ["Beauty Photography", "Before & After Videos", "Promotional Campaigns", "Reels"],
      img: "/images/camera-rock-bg.jpg"
    },
    {
      title: "FOUNDERS & COACHES",
      tagline: "Build personal brand. Become an authority.",
      services: ["Personal Branding", "LinkedIn Content", "Podcast Production", "Short-form Reels"],
      img: "/images/camera-rock-bg.jpg"
    },
    {
      title: "CORPORATE BRANDS",
      tagline: "Professional content for bigger impact.",
      services: ["Corporate Films", "Event Coverage", "Training Videos", "Brand Films"],
      img: "/images/camera-rock-bg.jpg"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-20">
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl tracking-tight leading-tight mb-4">
            EVERY BUSINESS HAS A STORY.<br/>
            <span className="text-white/50">WE HELP YOU TELL IT.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1} className="group relative bg-[#111] border border-white/5 overflow-hidden flex flex-col h-[400px]">
              <div className="h-1/2 relative overflow-hidden">
                <Image
                  src={ind.img}
                  alt={ind.title}
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-end relative z-10 -mt-10">
                <h3 className="font-montserrat font-bold text-xl tracking-wide mb-2">{ind.title}</h3>
                <p className="text-sm font-medium text-red-500 mb-6">{ind.tagline}</p>
                <ul className="space-y-2">
                  {ind.services.map((service, idx) => (
                    <li key={idx} className="text-xs text-white/60 font-light flex items-center gap-2">
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
