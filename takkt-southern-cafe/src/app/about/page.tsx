/* ============================================
   About Page — Our Story & Values
   TAKKT Southern Cafe
   ============================================ */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind TAKKT Southern Cafe — Chennai's beloved café crafted with passion, warmth, and attention to detail. Learn about our values, our team, and our commitment to hospitality.",
};

const values = [
  {
    title: "Artisanal Quality",
    description:
      "Every ingredient is sourced with intention. From single-origin coffee beans to locally grown produce, we never compromise on quality.",
    icon: "✦",
  },
  {
    title: "Warm Hospitality",
    description:
      "We believe every guest is family. Our team is trained to create personalized experiences that make you feel truly welcome.",
    icon: "♡",
  },
  {
    title: "Community First",
    description:
      "TAKKT is more than a cafe — it's a gathering place. We're proud to be the neighborhood's living room, workspace, and celebration venue.",
    icon: "⌂",
  },
  {
    title: "Sustainable Practices",
    description:
      "From compostable packaging to local sourcing, we're committed to making choices that are as good for the planet as they are for your palate.",
    icon: "♻",
  },
];

const team = [
  {
    name: "Chef Meera",
    role: "Head Chef",
    bio: "With 12 years of culinary experience across Europe and Asia, Chef Meera brings global flavors with a local soul to every dish.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop",
  },
  {
    name: "Arun Kumar",
    role: "Head Barista",
    bio: "A certified Q-grader and latte art champion, Arun transforms every cup into a work of art with passion and precision.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Priya Sundaram",
    role: "Pastry Chef",
    bio: "Trained at Le Cordon Bleu, Priya's pastries are a celebration of butter, technique, and creativity.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ──── Hero Banner ──── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1920&h=800&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <p className="text-beige-light font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Est. 2020 · Vanagaram, Chennai
            </p>
            <h1 className="font-heading text-5xl md:text-7xl text-white font-bold">
              Our Story
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── Story Section ──── */}
      <section className="section-padding bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em]">
                  The Beginning
                </p>
                <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold">
                  Born from a Love of Coffee & Connection
                </h2>
                <p className="text-dark-soft/70 leading-relaxed text-lg">
                  TAKKT Southern Cafe started as a dream — to create a space where the
                  aroma of freshly roasted coffee meets the warmth of Southern hospitality.
                  In 2020, amidst a world that was pulling apart, we opened our doors with
                  a simple promise: to bring people together.
                </p>
                <p className="text-dark-soft/70 leading-relaxed">
                  What began as a small corner cafe on Vanagaram-Ambattur Road has blossomed
                  into one of Chennai&apos;s most beloved gathering places. Every detail —
                  from the hand-selected furniture to the 48-hour fermented sourdough dough —
                  reflects our obsession with quality and comfort.
                </p>
                <p className="text-dark-soft/70 leading-relaxed">
                  Today, with over 406 glowing reviews and a 4.4-star rating, TAKKT isn&apos;t
                  just a cafe. It&apos;s where first dates happen, friendships deepen, ideas
                  are born, and every birthday feels extra special.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=350&fit=crop"
                    alt="Latte art at TAKKT"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=350&fit=crop"
                    alt="TAKKT cafe interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=350&fit=crop"
                    alt="Fresh pastries"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=400&h=350&fit=crop"
                    alt="Coffee brewing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ──── Values Section ──── */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold">
              Our Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300">
                  <span className="text-3xl text-beige mb-4 block">{value.icon}</span>
                  <h3 className="font-heading text-xl text-espresso font-bold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-dark-soft/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Team Section ──── */}
      <section className="section-padding bg-off-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              The People Behind the Magic
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso font-bold">
              Meet Our Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-72">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-espresso font-bold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-beige font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-dark-soft/70 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="section-padding bg-espresso text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl text-white font-bold mb-6">
              Come Be Part of
              <br />
              <span className="text-beige-light">Our Story</span>
            </h2>
            <p className="text-cream/60 text-lg mb-10">
              Every visit writes a new chapter. We can&apos;t wait to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/reservation" className="btn-primary">
                Reserve a Table
              </Link>
              <Link href="/visit" className="btn-secondary !border-cream/30 !text-cream hover:!bg-cream/10">
                Get Directions
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
