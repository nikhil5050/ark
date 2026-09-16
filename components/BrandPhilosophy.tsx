"use client";

import Reveal from "./Reveal";

export default function BrandPhilosophy() {
  return (
    <section className="py-32 bg-[#e8e6df] text-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <Reveal>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8">
            GREAT VISUALS<br/>CREATE REAL OPPORTUNITIES
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-16 opacity-80">
            We don't just create content, we create growth opportunities for your business.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="inline-block relative">
            <span className="font-montserrat font-bold text-lg md:text-xl tracking-[0.4em] uppercase border-y border-[#0a0a0a]/20 py-4 px-8">
              ARK LINE MEDIA
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
