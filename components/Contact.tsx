"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, CheckCircle2, AlertCircle, Send, Mail, Phone, User, MessageSquare } from "lucide-react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars are not configured.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-28 lg:py-32">
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 85% 20%, rgba(220,38,38,0.14), transparent 55%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <Reveal className="text-center mb-10 sm:mb-16 md:mb-20">
          <div className="relative inline-block px-4 py-4 sm:px-6 sm:py-5">
            <span className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 border-red-600" />
            <span className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-red-600" />
            <span className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-l-2 border-red-600" />
            <span className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 border-red-600" />
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-tight text-white">
              LET&apos;S CREATE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
                SOMETHING GREAT
              </span>
            </h2>
          </div>
          <p className="text-white/60 text-sm sm:text-base md:text-lg font-light max-w-xl mx-auto mt-4 sm:mt-6 px-2">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
          <Reveal className="w-full lg:w-[46%]" y={30}>
            <div className="relative h-[260px] sm:h-[380px] md:h-[460px] lg:h-[560px] w-full">
              <video
                src="/contactpageanimation.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-contain"
              />
            </div>
          </Reveal>

          <Reveal className="lg:w-1/2 w-full" y={30} delay={0.1}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-5 sm:gap-6 w-full"
            >
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <FormField
                  icon={<User size={16} />}
                  label="Your Name"
                  name="user_name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
                <FormField
                  icon={<Mail size={16} />}
                  label="Email Address"
                  name="user_email"
                  type="email"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <FormField
                  icon={<Phone size={16} />}
                  label="Phone Number"
                  name="user_phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                />
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50">
                    Service
                  </label>
                  <select
                    name="service"
                    defaultValue=""
                    className="bg-transparent border-b border-white/20 py-3 text-base sm:text-sm text-white focus:outline-none focus:border-red-600 transition-colors [&>option]:bg-[#0a0a0a]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Photography">Photography</option>
                    <option value="Videography">Videography</option>
                    <option value="Branding">Branding</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Drone">Drone</option>
                    <option value="Podcast">Podcast</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 flex items-center gap-2">
                  <MessageSquare size={16} />
                  Project Details
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="bg-transparent border-b border-white/20 py-3 text-base sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-black font-semibold text-sm tracking-wide uppercase hover:bg-gray-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>

              <div className="mt-2 border-t border-white/10 pt-5 text-sm text-white/75">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-red-500" />
                    <a href="mailto:hello@arklinemedia.com" className="hover:text-white transition-colors">
                      hello@arklinemedia.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-red-500" />
                    <a href="tel:+919876543210" className="hover:text-white transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare size={14} className="text-red-500" />
                    <span>Instagram: @arklinemedia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Send size={14} className="text-red-500" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>


                {/* <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]">
                  <div className="relative h-28 w-full">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.18),_transparent_50%)]" />
                    <div className="absolute inset-0 opacity-80 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-red-500 bg-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.9)]" />
                    <div className="absolute left-[42%] top-[38%] h-16 w-16 rounded-full border border-red-500/40" />
                    <div className="absolute left-[50%] top-[52%] h-24 w-24 rounded-full border border-red-500/20" />
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/60">
                    <span>Mumbai, India</span>
                    <a href="https://maps.google.com/?q=Mumbai+India" target="_blank" rel="noreferrer" className="text-red-400 hover:text-red-300">
                      View Map
                    </a>
                  </div>
                </div> */}
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-green-500 font-medium">
                  <CheckCircle2 size={18} />
                  Message sent successfully. We&apos;ll be in touch soon.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-500 font-medium">
                  <AlertCircle size={18} />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormField({
  icon,
  label,
  name,
  type,
  placeholder,
  required,
}: {
  icon: React.ReactNode;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 flex items-center gap-2">
        {icon}
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="bg-transparent border-b border-white/20 py-3 text-base sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-colors"
      />
    </div>
  );
}
