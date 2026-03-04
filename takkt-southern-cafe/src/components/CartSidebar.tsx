/* ============================================
   Cart Sidebar — Slide-out Order Summary
   TAKKT Southern Cafe
   ============================================ */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartSidebar() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, totalPrice, clearCart } =
    useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-off-white shadow-elevated flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-cream">
              <h2 className="font-heading font-bold text-xl text-espresso">
                Your Order
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="w-8 h-8 rounded-full bg-cream flex items-center justify-center hover:bg-beige/30 transition-colors"
                aria-label="Close cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-beige">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                  </div>
                  <p className="font-heading text-lg text-espresso mb-2">Your cart is empty</p>
                  <p className="text-dark-soft/60 text-sm mb-6">
                    Add some delicious items from our menu!
                  </p>
                  <Link
                    href="/menu"
                    onClick={() => setCartOpen(false)}
                    className="btn-primary text-sm"
                  >
                    Browse Menu
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 bg-white rounded-2xl p-4 shadow-soft"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-espresso text-sm truncate">
                          {item.name}
                        </h4>
                        <p className="text-warm-brown text-sm font-medium">
                          ₹{item.price}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 rounded-full bg-cream flex items-center justify-center hover:bg-beige/30 text-espresso text-sm font-bold"
                          >
                            −
                          </button>
                          <span className="text-sm font-semibold text-espresso w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 rounded-full bg-cream flex items-center justify-center hover:bg-beige/30 text-espresso text-sm font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-dark-soft/40 hover:text-red-500 transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <span className="text-espresso font-bold text-sm">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-cream p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-dark-soft/70 text-sm">Subtotal</span>
                  <span className="font-bold text-espresso text-lg">
                    ₹{totalPrice()}
                  </span>
                </div>
                <p className="text-dark-soft/50 text-xs">
                  Taxes and delivery charges calculated at checkout
                </p>
                <Link
                  href="/order"
                  onClick={() => setCartOpen(false)}
                  className="btn-primary w-full text-center block"
                >
                  Proceed to Checkout — ₹{totalPrice()}
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-dark-soft/50 text-sm hover:text-red-500 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
