/* ============================================
   Order Page — Cart & Checkout UI
   TAKKT Southern Cafe
   ============================================ */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import AnimatedSection from "@/components/AnimatedSection";

export default function OrderPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCartStore();

  if (items.length === 0) {
    return (
      <>
        <section className="pt-32 pb-20 min-h-[80vh] flex items-center">
          <div className="max-w-lg mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-beige">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <h1 className="font-heading text-3xl text-espresso font-bold mb-3">
                Your Cart is Empty
              </h1>
              <p className="text-dark-soft/60 mb-8">
                Looks like you haven&apos;t added anything yet. Browse our menu and
                add your favorites!
              </p>
              <Link href="/menu" className="btn-primary">
                Browse Menu →
              </Link>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* ──── Header ──── */}
      <section className="pt-28 pb-8 bg-off-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-beige font-semibold text-sm uppercase tracking-[0.2em] mb-2">
              Online Order
            </p>
            <h1 className="font-heading text-4xl md:text-5xl text-espresso font-bold">
              Your Order
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ──── Cart Content ──── */}
      <section className="section-padding bg-off-white !pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-soft flex gap-4 md:gap-6"
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-heading font-semibold text-espresso text-base md:text-lg">
                          {item.name}
                        </h3>
                        <p className="text-dark-soft/50 text-sm line-clamp-1 hidden md:block">
                          {item.description}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-dark-soft/30 hover:text-red-500 transition-colors p-1"
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-full bg-cream flex items-center justify-center hover:bg-beige/30 text-espresso font-bold"
                        >
                          −
                        </button>
                        <span className="text-espresso font-semibold w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full bg-cream flex items-center justify-center hover:bg-beige/30 text-espresso font-bold"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-espresso font-bold text-lg">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="flex items-center justify-between pt-4">
                <Link
                  href="/menu"
                  className="text-beige font-semibold text-sm hover:text-warm-brown transition-colors"
                >
                  ← Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-dark-soft/40 text-sm hover:text-red-500 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-card p-6 md:p-8 sticky top-28">
                <h2 className="font-heading text-xl text-espresso font-bold mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-dark-soft/60">
                      Subtotal ({items.reduce((t, i) => t + i.quantity, 0)} items)
                    </span>
                    <span className="text-espresso font-medium">₹{totalPrice()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dark-soft/60">Delivery Fee</span>
                    <span className="text-olive font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dark-soft/60">Taxes (5%)</span>
                    <span className="text-espresso font-medium">
                      ₹{Math.round(totalPrice() * 0.05)}
                    </span>
                  </div>
                  <hr className="border-cream" />
                  <div className="flex justify-between">
                    <span className="text-espresso font-bold text-lg">Total</span>
                    <span className="text-espresso font-bold text-xl">
                      ₹{totalPrice() + Math.round(totalPrice() * 0.05)}
                    </span>
                  </div>
                </div>

                {/* Delivery Options */}
                <div className="space-y-3 mb-6">
                  <label className="flex items-center gap-3 p-3 bg-beige/10 rounded-xl border-2 border-beige cursor-pointer">
                    <input
                      type="radio"
                      name="delivery"
                      defaultChecked
                      className="w-4 h-4 accent-beige"
                    />
                    <div>
                      <span className="text-espresso font-medium text-sm">Delivery</span>
                      <p className="text-dark-soft/50 text-xs">30-45 min estimated</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-cream/50 rounded-xl border-2 border-transparent hover:border-beige/30 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="delivery"
                      className="w-4 h-4 accent-beige"
                    />
                    <div>
                      <span className="text-espresso font-medium text-sm">Takeaway</span>
                      <p className="text-dark-soft/50 text-xs">15-20 min estimated</p>
                    </div>
                  </label>
                </div>

                <button className="btn-primary w-full text-center">
                  Place Order — ₹{totalPrice() + Math.round(totalPrice() * 0.05)}
                </button>

                <p className="text-dark-soft/40 text-xs text-center mt-4">
                  Payment integration coming soon. This is a UI demo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
