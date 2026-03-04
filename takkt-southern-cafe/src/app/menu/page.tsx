/* ============================================
   Menu Page — Categorized with Add to Cart
   TAKKT Southern Cafe
   ============================================ */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import MenuCard from "@/components/MenuCard";
import { menuItems, categories } from "@/data/menu";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* ──── Hero Banner ──── */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=800&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <p className="text-beige-light font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Crafted with Passion
            </p>
            <h1 className="font-heading text-5xl md:text-7xl text-white font-bold">
              Our Menu
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── Category Filter ──── */}
      <section className="sticky top-20 z-30 bg-off-white/95 backdrop-blur-md border-b border-cream">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setActiveCategory("all")}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-espresso text-cream shadow-sm"
                  : "bg-white text-dark-soft hover:bg-cream"
              }`}
            >
              All Items
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-espresso text-cream shadow-sm"
                    : "bg-white text-dark-soft hover:bg-cream"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Menu Grid ──── */}
      <section className="section-padding bg-off-white !pt-12">
        <div className="max-w-7xl mx-auto">
          {/* Category Header */}
          {activeCategory !== "all" && (
            <AnimatedSection className="mb-10">
              <h2 className="font-heading text-3xl text-espresso font-bold">
                {categories.find((c) => c.id === activeCategory)?.name}
              </h2>
              <p className="text-dark-soft/60 mt-1">
                {categories.find((c) => c.id === activeCategory)?.description}
              </p>
            </AnimatedSection>
          )}

          {/* Results Count */}
          <p className="text-dark-soft/50 text-sm mb-8">
            Showing {filteredItems.length} item{filteredItems.length !== 1 && "s"}
          </p>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-dark-soft/50 text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ──── CTA Banner ──── */}
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-espresso font-bold mb-4">
              Want a Custom Order?
            </h2>
            <p className="text-dark-soft/60 mb-8 max-w-2xl mx-auto">
              Planning an event or need something special? Contact us and our team will
              craft a personalized menu just for you.
            </p>
            <a href="tel:+914412345678" className="btn-primary">
              Call Us: +91 44 1234 5678
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
