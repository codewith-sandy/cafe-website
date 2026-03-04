/* ============================================
   ReservationForm — Booking with Validation
   TAKKT Southern Cafe
   ============================================ */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  notes: string;
}

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM",
];

const occasions = [
  "None", "Birthday", "Anniversary", "Date Night", "Business Meeting",
  "Family Gathering", "Celebration", "Other",
];

export default function ReservationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "None",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Placeholder for backend integration
      console.log("Reservation submitted:", formData);
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-olive">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading text-3xl text-espresso font-bold mb-3">
          Reservation Confirmed!
        </h3>
        <p className="text-dark-soft/70 max-w-md mx-auto mb-2">
          Thank you, <strong>{formData.name}</strong>! Your table for{" "}
          <strong>{formData.guests}</strong> has been reserved for{" "}
          <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
        </p>
        <p className="text-dark-soft/50 text-sm mb-8">
          A confirmation has been sent to {formData.email}
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              date: "",
              time: "",
              guests: "2",
              occasion: "None",
              notes: "",
            });
          }}
          className="btn-secondary"
        >
          Make Another Reservation
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-espresso mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={errors.name ? "!border-red-400" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-espresso mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={errors.email ? "!border-red-400" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone & Guests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-espresso mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={errors.phone ? "!border-red-400" : ""}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-espresso mb-2">
            Number of Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
            <option value="10+">More than 10</option>
          </select>
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-espresso mb-2">
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
            className={errors.date ? "!border-red-400" : ""}
          />
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">{errors.date}</p>
          )}
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-espresso mb-2">
            Preferred Time *
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={errors.time ? "!border-red-400" : ""}
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="text-red-500 text-xs mt-1">{errors.time}</p>
          )}
        </div>
      </div>

      {/* Occasion */}
      <div>
        <label htmlFor="occasion" className="block text-sm font-medium text-espresso mb-2">
          Occasion (Optional)
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          {occasions.map((occ) => (
            <option key={occ} value={occ}>
              {occ}
            </option>
          ))}
        </select>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-espresso mb-2">
          Special Requests (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Any special requests, dietary requirements, or birthday surprises..."
        />
      </div>

      {/* Submit */}
      <button type="submit" className="btn-primary w-full md:w-auto">
        Confirm Reservation
      </button>
    </form>
  );
}
