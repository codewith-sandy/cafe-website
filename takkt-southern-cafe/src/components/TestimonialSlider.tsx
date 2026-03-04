/* ============================================
   TestimonialSlider — Auto-Scrolling Reviews
   Home Page Featured Testimonials
   ============================================ */

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "@/data/reviews";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const featured = reviews.slice(0, 5);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % featured.length);
  }, [featured.length]);

  const prev = () => {
    setCurrent((p) => (p - 1 + featured.length) % featured.length);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const review = featured[current];

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={review.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="text-center px-4"
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < review.rating ? "text-gold" : "text-beige-light"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="font-heading text-2xl md:text-3xl text-espresso leading-snug mb-6 italic">
            &ldquo;{review.text}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-beige/30 flex items-center justify-center">
              <span className="text-espresso font-semibold text-sm">
                {review.avatar}
              </span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-espresso text-sm">
                {review.name}
              </p>
              <p className="text-dark-soft/50 text-xs">{review.date} · {review.source}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:shadow-card transition-all text-espresso"
        aria-label="Previous review"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:shadow-card transition-all text-espresso"
        aria-label="Next review"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-beige" : "w-2 bg-beige/30"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
