/* ============================================
   Reviews Page — Google-Style Layout
   TAKKT Southern Cafe
   ============================================ */

import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ReviewCard from "@/components/ReviewCard";
import { reviews, ratingStats } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what 406+ guests say about TAKKT Southern Cafe. 4.4-star rated café in Vanagaram, Chennai — read real reviews about our coffee, food, and ambience.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* ──── Hero Banner ──── */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1920&h=800&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <p className="text-beige-light font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              What Our Guests Say
            </p>
            <h1 className="font-heading text-5xl md:text-7xl text-white font-bold">
              Reviews
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── Rating Summary ──── */}
      <section className="section-padding bg-off-white !pb-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left — Overall */}
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                    <span className="text-6xl font-bold text-espresso font-heading">
                      {ratingStats.overall}
                    </span>
                    <div>
                      <div className="flex gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(ratingStats.overall)
                                ? "text-gold"
                                : i < ratingStats.overall
                                ? "text-gold/50"
                                : "text-cream"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-dark-soft/60 text-sm">
                        {ratingStats.total}+ reviews on Google
                      </p>
                    </div>
                  </div>
                  <p className="text-dark-soft/50 text-sm">
                    Our guests consistently rate us one of the best cafes in
                    Vanagaram & Ambattur, Chennai.
                  </p>
                </div>

                {/* Right — Breakdown */}
                <div className="space-y-3">
                  {ratingStats.breakdown.map((stat) => (
                    <div key={stat.stars} className="flex items-center gap-3">
                      <span className="text-sm text-dark-soft/70 w-12">
                        {stat.stars} star
                      </span>
                      <div className="flex-1 h-3 bg-cream rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gold rounded-full transition-all duration-1000"
                          style={{ width: `${stat.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-dark-soft/50 w-10 text-right">
                        {stat.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── Reviews Grid ──── */}
      <section className="section-padding bg-off-white !pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── Leave a Review CTA ──── */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-espresso font-bold mb-4">
              Enjoyed Your Visit?
            </h2>
            <p className="text-dark-soft/60 mb-8">
              We&apos;d love to hear from you! Leave us a review on Google and help
              others discover their new favorite cafe.
            </p>
            <a
              href="https://g.co/kgs/takktsoutherncafe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Write a Review on Google ↗
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
