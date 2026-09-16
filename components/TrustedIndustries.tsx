"use client";

import { Building2, Utensils, Scissors, Dumbbell, Briefcase, UserCircle } from "lucide-react";
import Reveal from "./Reveal";

export default function TrustedIndustries() {
  const industries = [
    { name: "REAL ESTATE", icon: Building2 },
    { name: "F&B", icon: Utensils },
    { name: "HEALTH & BEAUTY", icon: Scissors },
    { name: "GYM & FITNESS", icon: Dumbbell },
    { name: "CORPORATES", icon: Briefcase },
    { name: "FOUNDERS & COACHES", icon: UserCircle },
  ];

  return (
    <section className="py-12 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">

        <Reveal className="md:w-1/4">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 leading-relaxed">
            TRUSTED BY BUSINESSES<br/>
            <span className="text-white/80">ACROSS MAHARASHTRA & INDIA</span>
          </h3>
        </Reveal>

        <div className="md:w-3/4 flex flex-wrap justify-between items-center gap-6 w-full">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={i} delay={i * 0.06} y={16} className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
                  <Icon size={20} className="text-white/70 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[10px] font-medium tracking-widest text-white/50 group-hover:text-white/90 transition-colors text-center w-min md:w-max">
                  {ind.name}
                </span>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
