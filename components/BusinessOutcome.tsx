"use client";

import { Eye, MessageSquareText, Users, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

export default function BusinessOutcome() {
  const benefits = [
    {
      title: "MORE VISIBILITY",
      desc: "Get noticed online & offline by the right audience.",
      icon: Eye,
    },
    {
      title: "MORE INQUIRIES",
      desc: "Turn views into real leads.",
      icon: MessageSquareText,
    },
    {
      title: "MORE CUSTOMERS",
      desc: "Grow your business faster.",
      icon: Users,
    },
    {
      title: "LONG-TERM GROWTH",
      desc: "Build a trusted media partner.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 bg-[#080808] border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={i} delay={i * 0.1} className="flex flex-col group">
                <Icon size={32} strokeWidth={1} className="text-red-600 mb-6 group-hover:scale-110 transition-transform origin-left" />
                <h4 className="font-montserrat font-bold text-lg mb-3 tracking-wide">{benefit.title}</h4>
                <p className="text-sm text-white/50 font-light leading-relaxed max-w-[200px]">
                  {benefit.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
