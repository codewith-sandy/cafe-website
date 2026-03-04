/* ============================================
   Hero Section — Bold Statement with Premium Feel
   TAKKT Southern Cafe
   ============================================ */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-5 py-2.5 mb-8"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < 4 ? "text-gold" : "text-gold/50"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">
            4.4 ★ · 406+ Reviews
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05]"
        >
          Where Every Sip
          <br />
          <span className="text-beige-light">Tells a Story</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Specialty coffees, artisanal food, and warm hospitality — nestled in
          the heart of Chennai. Your new favorite neighborhood cafe awaits.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/menu"
            className="btn-primary text-base px-10 py-4"
          >
            Explore Menu
          </Link>
          <Link
            href="/reservation"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold text-base text-white border-2 border-white/30 hover:bg-white/10 transition-all"
          >
            Reserve a Table
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold text-base text-beige-light hover:text-white transition-colors underline underline-offset-4"
          >
            Order Online →
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
