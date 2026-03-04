/* ============================================
   Instagram Gallery — Lifestyle Grid
   Brew & Bean Cafe
   ============================================ */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    alt: "Latte art at Brew & Bean Cafe",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400&h=400&fit=crop",
    alt: "Cozy cafe interior",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=400&fit=crop",
    alt: "Freshly baked pastries",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop",
    alt: "Pizza preparation",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=400&fit=crop",
    alt: "Warm cafe ambience",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=400&h=400&fit=crop",
    alt: "Specialty coffee being brewed",
  },
];

export default function InstagramGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      {instagramPosts.map((post, index) => (
        <motion.a
          key={post.id}
          href="https://instagram.com/brewandbeancafe"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="relative aspect-square overflow-hidden group"
        >
          <Image
            src={post.image}
            alt={post.alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
          />
          <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-colors duration-300 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
