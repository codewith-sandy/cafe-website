/* ============================================
   Visit Us Page — Map, Hours, Contact
   Brew & Bean Cafe
   ============================================ */

import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Find Brew & Bean Cafe at 42, MG Road, Bangalore 560001. View our hours, get directions, and contact us. Open Monday–Sunday.",
};

const businessHours = [
  { day: "Monday", hours: "8:00 AM – 10:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 10:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 10:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 10:00 PM" },
  { day: "Friday", hours: "8:00 AM – 10:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 11:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 11:00 PM" },
];

export default function VisitPage() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <>
      {/* ──── Hero Banner ──── */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=800&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <p className="text-beige-light font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Find Us Here
            </p>
            <h1 className="font-heading text-5xl md:text-7xl text-white font-bold">
              Visit Us
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── Map + Info ──── */}
      <section className="section-padding bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Maps Embed */}
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3976!2d80.1524!3d13.0569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzI0LjgiTiA4MMKwMDknMDguNiJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brew & Bean Cafe Location"
                />
              </div>
            </AnimatedSection>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-beige/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-beige">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-espresso text-lg mb-2">
                        Address
                      </h3>
                      <p className="text-dark-soft/70 leading-relaxed">
                        42, MG Road,
                        <br />
                        Heritage Town,
                        <br />
                        Bangalore, Karnataka 560001
                      </p>
                      <a
                        href="https://maps.google.com/?q=Brew+Bean+Cafe+MG+Road+Bangalore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-beige font-semibold text-sm mt-3 inline-block hover:text-warm-brown transition-colors"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Phone */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-beige/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-beige">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-espresso text-lg mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+918012345678"
                        className="text-dark-soft/70 hover:text-espresso transition-colors text-lg"
                      >
                        +91 80 1234 5678
                      </a>
                      <p className="text-dark-soft/50 text-sm mt-1">
                        Call for reservations or takeaway orders
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Email */}
              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-beige/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-beige">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-espresso text-lg mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@brewandbeancafe.com"
                        className="text-dark-soft/70 hover:text-espresso transition-colors"
                      >
                        hello@brewandbeancafe.com
                      </a>
                      <p className="text-dark-soft/50 text-sm mt-1">
                        For events, partnerships, and inquiries
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Social */}
              <AnimatedSection delay={0.4}>
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-beige/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-beige" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-espresso text-lg mb-2">
                        Follow Us
                      </h3>
                      <a
                        href="https://instagram.com/brewandbeancafe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-soft/70 hover:text-espresso transition-colors"
                      >
                        @brewandbeancafe
                      </a>
                      <p className="text-dark-soft/50 text-sm mt-1">
                        Daily specials, behind-the-scenes, and more
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Business Hours ──── */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Plan Your Visit
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold">
              Opening Hours
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-3xl shadow-soft p-8">
              <div className="space-y-4">
                {businessHours.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl ${
                      item.day === today
                        ? "bg-beige/10 border border-beige/30"
                        : ""
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        item.day === today ? "text-espresso font-semibold" : "text-dark-soft/70"
                      }`}
                    >
                      {item.day}
                      {item.day === today && (
                        <span className="ml-2 text-xs bg-olive text-white px-2 py-0.5 rounded-full">
                          Today
                        </span>
                      )}
                    </span>
                    <span
                      className={
                        item.day === today
                          ? "text-espresso font-semibold"
                          : "text-dark-soft/60"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── Contact Form ──── */}
      <section className="section-padding bg-off-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Get in Touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold mb-4">
              Send Us a Message
            </h2>
            <p className="text-dark-soft/60">
              Have a question, feedback, or event inquiry? We&apos;d love to hear from you.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-3xl shadow-soft p-8">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
