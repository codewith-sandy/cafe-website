/* ============================================
   Home Page — Brew & Bean Cafe
   Hero, Featured, Testimonials, Instagram, CTA
   ============================================ */

import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import InstagramGallery from "@/components/InstagramGallery";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/data/menu";

const popularItems = menuItems.filter((item) => item.isPopular).slice(0, 6);

const features = [
  {
    icon: "☕",
    title: "Specialty Coffee",
    description: "Single-origin beans roasted to perfection, crafted by passionate baristas.",
  },
  {
    icon: "🍕",
    title: "Artisanal Food",
    description: "From sourdough pizza to Japanese karaage — every dish tells a story.",
  },
  {
    icon: "🎂",
    title: "Celebrations",
    description: "Birthday surprises, small events, and moments made memorable.",
  },
  {
    icon: "🏠",
    title: "Cozy Ambience",
    description: "A warm, inviting space designed for connection and comfort.",
  },
];

export default function Home() {
  return (
    <>
      {/* ──── Hero Section ──── */}
      <Hero />

      {/* ──── Features Section ──── */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold">
              More Than Just a Cafe
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="text-center p-8 bg-white rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-heading font-semibold text-espresso text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-dark-soft/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Featured Menu Items ──── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Customer Favorites
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold mb-4">
              Most Loved Items
            </h2>
            <p className="text-dark-soft/60 max-w-2xl mx-auto">
              Handpicked by our guests — these are the dishes and drinks that keep people coming back.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.08}>
                <div className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
                    <span className="absolute bottom-3 left-3 bg-white/90 text-espresso text-sm font-bold px-3 py-1 rounded-full">
                      ₹{item.price}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-espresso text-lg mb-1">
                      {item.name}
                    </h3>
                    <p className="text-dark-soft/60 text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/menu" className="btn-primary">
              View Full Menu →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── About Preview / Story Section ──── */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&h=600&fit=crop"
                    alt="Brew & Bean Cafe cozy interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card p-6 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gold text-xl">★</span>
                    <span className="font-bold text-espresso text-2xl">4.4</span>
                  </div>
                  <p className="text-dark-soft/60 text-xs">
                    406+ happy customers and counting
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em] mb-3">
                Our Story
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold mb-6">
                Crafted with Love,
                <br />
                Served with Warmth
              </h2>
              <p className="text-dark-soft/70 leading-relaxed mb-6">
                Brew & Bean Cafe was born from a simple belief — that great food, exceptional
                coffee, and genuine hospitality can turn ordinary moments into extraordinary
                memories. Nestled in the heart of the city, we&apos;ve created a space
                where every cup tells a story.
              </p>
              <p className="text-dark-soft/70 leading-relaxed mb-8">
                From our 48-hour fermented sourdough pizza to our single-origin espresso,
                every item on our menu is crafted with passion and attention to detail. Whether
                you&apos;re here for a quiet morning coffee or a birthday celebration, you&apos;re family.
              </p>
              <Link href="/about" className="btn-secondary">
                Read Our Full Story →
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ──── Testimonials Section ──── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              What People Say
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold">
              Loved by 406+ Guests
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <TestimonialSlider />
          </AnimatedSection>

          <AnimatedSection className="text-center mt-12">
            <Link href="/reviews" className="btn-secondary">
              Read All Reviews →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── CTA Section ──── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1920&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-espresso/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              Ready to Experience
              <br />
              <span className="text-beige-light">Something Special?</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Reserve your table today and discover why Brew & Bean Cafe is
              the city&apos;s most beloved neighborhood cafe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/reservation" className="btn-primary text-base px-10 py-4">
                Reserve a Table
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold text-base text-white border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Order Online
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── Instagram Feed ──── */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <AnimatedSection>
            <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Follow Our Journey
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-espresso font-bold mb-2">
              @brewandbeancafe
            </h2>
            <p className="text-dark-soft/60 text-sm">
              Tag us in your photos for a chance to be featured!
            </p>
          </AnimatedSection>
        </div>
        <InstagramGallery />
      </section>
    </>
  );
}
