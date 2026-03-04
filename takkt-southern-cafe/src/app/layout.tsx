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
    default: "TAKKT Southern Cafe | Best Cafe in Vanagaram, Chennai",
    template: "%s | TAKKT Southern Cafe",
  },
  description:
    "TAKKT Southern Cafe — Chennai's beloved café in Vanagaram offering specialty coffees, sourdough pizza, Japanese fried chicken, pastries, and warm hospitality. Dine-in, takeaway & delivery. 4.4★ rated.",
  keywords: [
    "TAKKT Southern Cafe",
    "best cafe in Vanagaram",
    "best cafe in Ambattur",
    "best cafe in Chennai",
    "specialty coffee Chennai",
    "sourdough pizza Chennai",
    "cafe near Vanagaram",
    "Japanese fried chicken Chennai",
    "cozy cafe Chennai",
    "birthday cafe Chennai",
    "cafe with good ambience Chennai",
  ],
  authors: [{ name: "TAKKT Southern Cafe" }],
  creator: "TAKKT Southern Cafe",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://takktsoutherncafe.com",
    siteName: "TAKKT Southern Cafe",
    title: "TAKKT Southern Cafe | Best Cafe in Vanagaram, Chennai",
    description:
      "Specialty coffees, artisanal food, and warm hospitality in the heart of Chennai. Your new favorite neighborhood cafe.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "TAKKT Southern Cafe — Warm, inviting cafe in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAKKT Southern Cafe | Best Cafe in Vanagaram, Chennai",
    description:
      "Specialty coffees, artisanal food, and warm hospitality in the heart of Chennai.",
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
  name: "TAKKT Southern Cafe",
  image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=630&fit=crop",
  "@id": "https://takktsoutherncafe.com",
  url: "https://takktsoutherncafe.com",
  telephone: "+914412345678",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "98/99, Vanagaram-Ambattur Rd, Rajankuppam",
    addressLocality: "Vanagaram",
    addressRegion: "Tamil Nadu",
    postalCode: "600095",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0569,
    longitude: 80.1524,
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
  hasMenu: "https://takktsoutherncafe.com/menu",
  acceptsReservations: "True",
  sameAs: [
    "https://instagram.com/takktsoutherncafe",
    "https://facebook.com/takktsoutherncafe",
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
