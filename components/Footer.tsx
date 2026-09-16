"use client";

import Link from "next/link";
import { Camera, Briefcase, Video, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Brand Col */}
          <Reveal className="flex flex-col">
            <Link href="/" className="font-montserrat font-bold text-2xl tracking-wider leading-tight flex flex-col mb-6">
              <span>ARK</span>
              <span className="text-sm tracking-widest text-white/70">LINE MEDIA</span>
            </Link>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-8">
              VISUAL CONTENT.<br/>REAL GROWTH.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Camera size={18} className="text-white/70" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Briefcase size={18} className="text-white/70" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Video size={18} className="text-white/70" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <MessageCircle size={18} className="text-white/70" />
              </Link>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.08} className="flex flex-col">
            <h4 className="font-montserrat font-bold text-sm tracking-widest mb-6">QUICK LINKS</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="#work" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </Reveal>

          {/* Services */}
          <Reveal delay={0.16} className="flex flex-col">
            <h4 className="font-montserrat font-bold text-sm tracking-widest mb-6">SERVICES</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Photography</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Videography</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Branding</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Social Media</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Drone</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Podcast</Link></li>
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.24} className="flex flex-col">
            <h4 className="font-montserrat font-bold text-sm tracking-widest mb-6">CONTACT</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li className="font-medium text-white/90">+91 XXXXX XXXXX</li>
              <li className="font-medium text-white/90 hover:text-red-500 transition-colors">
                <a href="mailto:hello@arklinemedia.com">hello@arklinemedia.com</a>
              </li>
              <li className="mt-4 pt-4 border-t border-white/10 text-xs tracking-wider uppercase leading-relaxed">
                Pune, Maharashtra,<br/>India
              </li>
            </ul>
          </Reveal>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-white/40">
          <p>© 2026 ARK Line Media. All rights reserved.</p>
          <p>Photography & Video Production Partner</p>
        </div>
      </div>
    </footer>
  );
}
