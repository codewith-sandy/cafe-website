/* ============================================
   Menu Data — CMS-Ready JSON Structure
   TAKKT Southern Cafe
   ============================================ */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
  dietary?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: MenuCategory[] = [
  {
    id: "coffee",
    name: "Coffee",
    description: "Specialty brews crafted with care",
    icon: "☕",
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Refreshing iced drinks & more",
    icon: "🧊",
  },
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Start your morning right",
    icon: "🍳",
  },
  {
    id: "lunch",
    name: "Lunch",
    description: "Hearty meals for the afternoon",
    icon: "🍽️",
  },
  {
    id: "pastries",
    name: "Pastries & Desserts",
    description: "Sweet indulgences baked fresh",
    icon: "🥐",
  },
];

export const menuItems: MenuItem[] = [
  // ──── Coffee ────
  {
    id: "cof-1",
    name: "Signature Espresso",
    description: "Rich, bold espresso pulled from our house blend of single-origin beans. A velvety crema tops this intense shot of perfection.",
    price: 180,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: "cof-2",
    name: "Caramel Latte",
    description: "Silky steamed milk meets our signature espresso, finished with a house-made caramel swirl and a dusting of cinnamon.",
    price: 260,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: "cof-3",
    name: "Vanilla Oat Latte",
    description: "Creamy oat milk paired with espresso and a hint of Madagascar vanilla. Dairy-free and delicious.",
    price: 280,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop",
    dietary: ["vegan"],
  },
  {
    id: "cof-4",
    name: "Classic Cappuccino",
    description: "Equal parts espresso, steamed milk, and velvety foam — the timeless Italian classic, perfected.",
    price: 220,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&h=400&fit=crop",
  },
  {
    id: "cof-5",
    name: "Hot Chocolate",
    description: "Belgian dark chocolate melted into frothy steamed milk, topped with hand-whipped cream and cocoa dust.",
    price: 240,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: "cof-6",
    name: "Mocha",
    description: "The best of both worlds — rich espresso meets Belgian chocolate, crowned with whipped cream.",
    price: 270,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&h=400&fit=crop",
  },

  // ──── Beverages ────
  {
    id: "bev-1",
    name: "Iced Matcha Latte",
    description: "Ceremonial-grade Japanese matcha whisked to perfection, poured over ice with creamy milk.",
    price: 300,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=400&fit=crop",
    isNew: true,
  },
  {
    id: "bev-2",
    name: "Fresh Strawberry Smoothie",
    description: "Farm-fresh strawberries blended with yogurt, honey, and a splash of orange juice.",
    price: 250,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=400&fit=crop",
  },
  {
    id: "bev-3",
    name: "Iced Cold Brew",
    description: "Slow-steeped for 18 hours, our cold brew delivers smooth, low-acid coffee with natural sweetness.",
    price: 260,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: "bev-4",
    name: "Mango Passionfruit Cooler",
    description: "Tropical mango and tangy passionfruit shaken with ice and a hint of lime — sunshine in a glass.",
    price: 230,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&h=400&fit=crop",
    isNew: true,
  },
  {
    id: "bev-5",
    name: "Fresh Lime Soda",
    description: "Zesty lime juice, sparkling soda, and a touch of mint — crisp and endlessly refreshing.",
    price: 150,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=400&fit=crop",
  },

  // ──── Breakfast ────
  {
    id: "brk-1",
    name: "Avocado Toast",
    description: "House-baked sourdough topped with smashed avocado, cherry tomatoes, microgreens, and everything seasoning.",
    price: 320,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop",
    isPopular: true,
    dietary: ["vegetarian"],
  },
  {
    id: "brk-2",
    name: "Eggs Benedict",
    description: "Poached eggs on toasted English muffins, layered with smoked ham and drizzled with hollandaise.",
    price: 380,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1608039829572-9b1234ef1d8b?w=600&h=400&fit=crop",
  },
  {
    id: "brk-3",
    name: "Pancake Stack",
    description: "Fluffy buttermilk pancakes stacked high, finished with maple syrup, fresh berries, and whipped butter.",
    price: 300,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
    dietary: ["vegetarian"],
  },
  {
    id: "brk-4",
    name: "Granola Bowl",
    description: "House-made crunchy granola with Greek yogurt, seasonal fruit, honey drizzle, and chia seeds.",
    price: 280,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=600&h=400&fit=crop",
    dietary: ["vegetarian"],
  },

  // ──── Lunch ────
  {
    id: "lun-1",
    name: "Sourdough Pizza Margherita",
    description: "48-hour fermented sourdough crust, San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil.",
    price: 450,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
    isPopular: true,
    dietary: ["vegetarian"],
  },
  {
    id: "lun-2",
    name: "Japanese Fried Chicken (Karaage)",
    description: "Crispy marinated chicken thighs, double-fried to golden perfection, served with yuzu mayo and pickled ginger.",
    price: 420,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: "lun-3",
    name: "Pumpkin Soup",
    description: "Velvety roasted pumpkin soup with a swirl of cream, toasted pepitas, and a side of garlic bread.",
    price: 280,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop",
    isPopular: true,
    dietary: ["vegetarian"],
  },
  {
    id: "lun-4",
    name: "Truffle Mushroom Pasta",
    description: "Al dente pappardelle tossed in a creamy truffle sauce with sautéed wild mushrooms and parmesan shavings.",
    price: 480,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop",
    dietary: ["vegetarian"],
  },
  {
    id: "lun-5",
    name: "Grilled Chicken Sandwich",
    description: "Herb-marinated grilled chicken, sun-dried tomatoes, arugula, and pesto mayo on ciabatta bread.",
    price: 350,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=400&fit=crop",
  },

  // ──── Pastries & Desserts ────
  {
    id: "pas-1",
    name: "Seasonal Fruit Tart",
    description: "Buttery shortcrust pastry filled with vanilla custard and topped with jewel-toned seasonal fruits.",
    price: 280,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop",
    isPopular: true,
    dietary: ["vegetarian"],
  },
  {
    id: "pas-2",
    name: "Chocolate Croissant",
    description: "Flaky, laminated pastry with a heart of rich Belgian dark chocolate. Best enjoyed warm.",
    price: 180,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=400&fit=crop",
    dietary: ["vegetarian"],
  },
  {
    id: "pas-3",
    name: "New York Cheesecake",
    description: "Dense, creamy classic cheesecake on a buttery graham cracker crust with berry compote.",
    price: 320,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop",
    dietary: ["vegetarian"],
  },
  {
    id: "pas-4",
    name: "Tiramisu",
    description: "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa — an Italian masterpiece.",
    price: 300,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop",
    isNew: true,
    dietary: ["vegetarian"],
  },
  {
    id: "pas-5",
    name: "Cinnamon Roll",
    description: "Soft, pillowy roll swirled with cinnamon sugar and finished with cream cheese frosting.",
    price: 200,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop",
    dietary: ["vegetarian"],
  },
];
