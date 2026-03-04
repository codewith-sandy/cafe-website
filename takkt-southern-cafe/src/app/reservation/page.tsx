/* ============================================
   Reservation Page — Table Booking
   Brew & Bean Cafe
   ============================================ */

import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ReservationForm from "@/components/ReservationForm";

export const metadata: Metadata = {
  title: "Reserve a Table",
  description:
    "Book your table at Brew & Bean Cafe. Perfect for date nights, birthdays, small celebrations, and cozy get-togethers. Easy online reservation.",
};

export default function ReservationPage() {
  return (
    <>
      {/* ──── Hero Banner ──── */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=800&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <p className="text-beige-light font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Your Table Awaits
            </p>
            <h1 className="font-heading text-5xl md:text-7xl text-white font-bold">
              Reserve
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── Reservation Section ──── */}
      <section className="section-padding bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left — Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em] mb-3">
                  Book Your Experience
                </p>
                <h2 className="font-heading text-3xl md:text-4xl text-espresso font-bold mb-6">
                  Reserve Your Table
                </h2>
                <p className="text-dark-soft/70 leading-relaxed mb-8">
                  Whether it&apos;s a quiet brunch, a birthday surprise, or a cozy
                  date night, we&apos;ll make sure your table is ready and your
                  experience is unforgettable.
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-beige/20 rounded-xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-beige">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-espresso font-medium text-sm">Mon–Fri: 8 AM – 10 PM</p>
                      <p className="text-espresso font-medium text-sm">Sat–Sun: 9 AM – 11 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-beige/20 rounded-xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-beige">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                    </div>
                    <p className="text-espresso font-medium text-sm">
                      Up to 10 guests per reservation
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-beige/20 rounded-xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-beige">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                      </svg>
                    </div>
                    <p className="text-espresso font-medium text-sm">
                      Birthday surprises & special decorations available
                    </p>
                  </div>
                </div>

                {/* Ambience Image */}
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=300&fit=crop"
                    alt="Cozy dining at Brew & Bean"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-3xl shadow-card p-8">
                  <ReservationForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Note ──── */}
      <section className="bg-cream py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-dark-soft/50 text-sm">
              For groups larger than 10 or private events, please call us at{" "}
              <a href="tel:+918012345678" className="text-beige font-semibold hover:text-warm-brown transition-colors">
                +91 80 1234 5678
              </a>{" "}
              or email{" "}
              <a href="mailto:events@brewandbeancafe.com" className="text-beige font-semibold hover:text-warm-brown transition-colors">
                events@brewandbeancafe.com
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
