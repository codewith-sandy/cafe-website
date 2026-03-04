/* ============================================
   ReviewCard — Google-Style Testimonial Card
   TAKKT Southern Cafe
   ============================================ */

"use client";

import { motion } from "framer-motion";
import type { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export default function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full bg-beige/30 flex items-center justify-center">
          <span className="text-espresso font-semibold text-sm">
            {review.avatar}
          </span>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-espresso text-sm">{review.name}</h4>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < review.rating ? "text-gold" : "text-cream"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-dark-soft/50 text-xs">{review.date}</span>
          </div>
        </div>
        {/* Google Badge */}
        <div className="text-xs text-dark-soft/40 font-medium bg-cream rounded-full px-2.5 py-1">
          {review.source}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-dark-soft/80 text-sm leading-relaxed">
        {review.text}
      </p>
    </motion.div>
  );
}
