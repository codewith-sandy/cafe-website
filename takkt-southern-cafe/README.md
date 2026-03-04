# TAKKT Southern Cafe — Premium Cafe Website

A conversion-focused, responsive website for **TAKKT Southern Cafe**, a 4.4-rated café in Vanagaram, Chennai. Built with Next.js 16, Tailwind CSS 4, Framer Motion, and Zustand.

![TAKKT Southern Cafe](https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=400&fit=crop)

## ✨ Features

- **7 Pages**: Home, About, Menu, Reviews, Visit Us, Reservation, Order
- **Cart System**: Full add-to-cart & order summary with Zustand state management
- **Reservation Form**: Date/time picker with validation
- **Testimonial Slider**: Auto-scrolling reviews with navigation
- **Instagram Gallery**: Lifestyle photography grid
- **Contact Form**: EmailJS-ready integration placeholder
- **SEO Optimized**: Local business schema markup, Open Graph, meta tags
- **Responsive**: Mobile-first design, tested on all breakpoints
- **Animations**: Framer Motion scroll-triggered animations
- **Performance**: Static generation, optimized images, lazy loading

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| State Management | Zustand |
| Language | TypeScript |
| Fonts | Playfair Display + DM Sans (Google Fonts) |

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, SEO, schema
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design system & global styles
│   ├── about/page.tsx      # About / Our Story
│   ├── menu/page.tsx       # Menu with category filter
│   ├── reviews/page.tsx    # Google-style reviews
│   ├── visit/page.tsx      # Map, hours, contact form
│   ├── reservation/page.tsx # Reservation booking
│   └── order/page.tsx      # Cart & checkout UI
├── components/
│   ├── Navbar.tsx           # Sticky navigation
│   ├── Footer.tsx           # Premium footer
│   ├── Hero.tsx             # Hero banner
│   ├── MenuCard.tsx         # Product card with add-to-cart
│   ├── ReviewCard.tsx       # Testimonial card
│   ├── TestimonialSlider.tsx # Auto-scroll slider
│   ├── CartSidebar.tsx      # Slide-out cart
│   ├── InstagramGallery.tsx # Photo grid
│   ├── ReservationForm.tsx  # Booking form with validation
│   ├── ContactForm.tsx      # Contact form
│   └── AnimatedSection.tsx  # Scroll animation wrapper
├── data/
│   ├── menu.ts             # Menu items (CMS-ready JSON)
│   └── reviews.ts          # Review data
└── store/
    └── cartStore.ts         # Zustand cart store
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone or navigate to the project
cd takkt-southern-cafe

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site will be live in ~60 seconds

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → **New site from Git**
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy

## 🎨 Design System

| Token | Value |
|-------|-------|
| Espresso | `#3C2415` |
| Warm Brown | `#8B5E3C` |
| Beige | `#D4A574` |
| Cream | `#F5F0EB` |
| Off-White | `#FAF8F5` |
| Olive | `#7A8450` |
| Gold | `#C8A96E` |
| Border Radius | `16–24px` |
| Spacing Grid | `8px` |
| Heading Font | Playfair Display (serif) |
| Body Font | DM Sans (sans-serif) |

## 🔌 Backend Integration Points

The frontend is ready for backend integration:

- **Menu Data**: Replace `src/data/menu.ts` with API calls (CMS, Firebase, MongoDB)
- **Cart/Orders**: Connect Zustand store to backend API for order processing
- **Reservation Form**: Wire to backend endpoint or EmailJS
- **Contact Form**: Wire to EmailJS or backend API
- **Reviews**: Fetch from Google Places API or your database
- **Authentication**: Add NextAuth.js for user accounts
- **Payments**: Integrate Razorpay or Stripe for online payments

## 📊 SEO

- Local Business JSON-LD schema markup
- Open Graph & Twitter Card meta tags
- Semantic HTML structure
- Optimized for: "Best Cafe in Vanagaram", "Best Cafe in Ambattur Chennai"
- Per-page metadata with title templates

## 📄 License

This project is proprietary. Built for TAKKT Southern Cafe.
