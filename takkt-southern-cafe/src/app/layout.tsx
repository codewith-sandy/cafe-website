import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

/* ============================================
   Typography — Premium Font Pairing
   Playfair Display (serif headings) + DM Sans (body)
   ============================================ */

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/* ============================================
   SEO — Local Business Optimized Metadata
   ============================================ */

export const metadata: Metadata = {
  title: {
    default: "Brew & Bean Cafe | Premium Cafe Demo",
    template: "%s | Brew & Bean Cafe",
  },
  description:
    "Brew & Bean Cafe — a premium café offering specialty coffees, sourdough pizza, Japanese fried chicken, pastries, and warm hospitality. Dine-in, takeaway & delivery. 4.4★ rated.",
  keywords: [
    "Brew & Bean Cafe",
    "best cafe demo",
    "specialty coffee",
    "sourdough pizza",
    "cozy cafe",
    "birthday cafe",
    "cafe with good ambience",
  ],
  authors: [{ name: "Brew & Bean Cafe" }],
  creator: "Brew & Bean Cafe",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://brewandbeancafe.com",
    siteName: "Brew & Bean Cafe",
    title: "Brew & Bean Cafe | Premium Cafe Demo",
    description:
      "Specialty coffees, artisanal food, and warm hospitality. Your new favorite neighborhood cafe.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Brew & Bean Cafe — Warm, inviting cafe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brew & Bean Cafe | Premium Cafe Demo",
    description:
      "Specialty coffees, artisanal food, and warm hospitality.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ============================================
   JSON-LD — Local Business Schema Markup
   ============================================ */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Brew & Bean Cafe",
  image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=630&fit=crop",
  "@id": "https://brewandbeancafe.com",
  url: "https://brewandbeancafe.com",
  telephone: "+918012345678",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "42, MG Road, Heritage Town",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9716,
    longitude: 77.5946,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "23:00",
    },
  ],
  servesCuisine: ["Coffee", "Italian", "Continental", "Japanese", "Pastries"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "406",
    bestRating: "5",
  },
  hasMenu: "https://brewandbeancafe.com/menu",
  acceptsReservations: "True",
  sameAs: [
    "https://instagram.com/brewandbeancafe",
    "https://facebook.com/brewandbeancafe",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        <CartSidebar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
