/* ============================================
   Reviews Data — Google-Style Testimonials
   Brew & Bean Cafe
   ============================================ */

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  source: string;
}

export const ratingStats = {
  overall: 4.4,
  total: 406,
  breakdown: [
    { stars: 5, percentage: 58 },
    { stars: 4, percentage: 26 },
    { stars: 3, percentage: 10 },
    { stars: 2, percentage: 4 },
    { stars: 1, percentage: 2 },
  ],
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Priya Ramesh",
    avatar: "PR",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely love this place! The ambience is so cozy and perfect for a weekend brunch. Tried their sourdough pizza and Japanese fried chicken — both were incredible. The staff went above and beyond for my friend's birthday surprise. Highly recommended!",
    source: "Google",
  },
  {
    id: "r2",
    name: "Arjun Krishnan",
    avatar: "AK",
    rating: 5,
    date: "1 month ago",
    text: "Best cafe in the neighborhood, hands down. The caramel latte is my go-to, and their fruit tart is a work of art. The place has such a warm, inviting vibe — perfect for working or catching up with friends. Will keep coming back!",
    source: "Google",
  },
  {
    id: "r3",
    name: "Sneha Venkatesh",
    avatar: "SV",
    rating: 4,
    date: "3 weeks ago",
    text: "Lovely place with great coffee and pastries. The pumpkin soup was hearty and flavorful. Only giving 4 stars because it can get a bit crowded on weekends, but the food and service make it worth the wait. Staff is really attentive.",
    source: "Google",
  },
  {
    id: "r4",
    name: "Karthik Subramanian",
    avatar: "KS",
    rating: 5,
    date: "1 week ago",
    text: "Organized a small celebration here and this place made it so special. The decor, the food, and the hospitality — everything was top-notch. The hot chocolate is divine, and those chocolate croissants are freshly baked perfection!",
    source: "Google",
  },
  {
    id: "r5",
    name: "Divya Narayanan",
    avatar: "DN",
    rating: 4,
    date: "2 months ago",
    text: "Such a hidden gem in the area! The iced cold brew and avocado toast are my favorites. The interiors have a very Instagram-worthy aesthetic. Prices are reasonable for the quality. Would love to see more vegan options on the menu.",
    source: "Google",
  },
  {
    id: "r6",
    name: "Rahul Menon",
    avatar: "RM",
    rating: 5,
    date: "3 days ago",
    text: "Came here for the first time and was blown away! The karaage chicken is the best I've had in the city. Loved the rustic interiors and the attention to detail in every dish. The staff remembered my coffee preference on my second visit. That's service!",
    source: "Google",
  },
  {
    id: "r7",
    name: "Ananya Iyer",
    avatar: "AI",
    rating: 5,
    date: "1 month ago",
    text: "Perfect date-night spot! The truffle mushroom pasta was absolutely divine, and the tiramisu was the best I've had in a long time. Candle-lit ambience in the evening makes it extra special. Will definitely be our regular spot.",
    source: "Google",
  },
  {
    id: "r8",
    name: "Vikram Reddy",
    avatar: "VR",
    rating: 4,
    date: "2 weeks ago",
    text: "Great place for remote work! Good WiFi, comfortable seating, and the coffee keeps flowing. The eggs benedict is a great breakfast option. My only suggestion would be extended evening hours. Otherwise, a solid 4.5 from me!",
    source: "Google",
  },
];
