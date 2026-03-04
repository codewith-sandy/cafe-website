/* ============================================
   MenuCard — Product Card with Add-to-Cart
   Brew & Bean Cafe
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import type { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

export default function MenuCard({ item, index = 0 }: MenuCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isPopular && (
            <span className="bg-espresso text-cream text-xs font-semibold px-3 py-1 rounded-full">
              Popular
            </span>
          )}
          {item.isNew && (
            <span className="bg-olive text-white text-xs font-semibold px-3 py-1 rounded-full">
              New
            </span>
          )}
        </div>
        {/* Warm overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Dietary tags */}
        {item.dietary && item.dietary.length > 0 && (
          <div className="flex gap-1.5 mb-2">
            {item.dietary.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider text-olive font-semibold bg-olive/10 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-heading font-semibold text-espresso text-lg mb-1.5">
          {item.name}
        </h3>
        <p className="text-dark-soft/70 text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-espresso font-bold text-xl">
            ₹{item.price}
          </span>
          <button
            onClick={() => addItem(item)}
            className="bg-beige/20 hover:bg-beige text-espresso px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-sm active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
