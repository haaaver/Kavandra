import { MenuItem } from "@/lib/types";

/**
 * 🍕 ITEM SZINTŰ KÉPEK (EZ A LEGFONTOSABB)
 * 👉 ide egyedi étel képek kerülnek
 */
const ITEM_IMAGES: Record<string, string> = {
  // DESSZERT
  "tiramisu-classico": "https://images.unsplash.com/photo-1745327801469-7f92d8cb3c3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "panna-cotta": "https://images.unsplash.com/photo-1542116021-0ff087fb0a41?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  // CLASSICO PIZZÁK
  "margherita": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "prosciutto-cotto": "https://plus.unsplash.com/premium_photo-1733266807710-f8f8de34416f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "picante": "https://images.unsplash.com/photo-1595357081381-c34f5634adef?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "cotto-e-funghi": "https://plus.unsplash.com/premium_photo-1663858366999-aa1ce123a972?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "capricciosa": "https://plus.unsplash.com/premium_photo-1667682939994-4c9e874dc175?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  // GOURMET
  "mortadella": "https://images.unsplash.com/photo-1716237389869-a88407bd2b99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "6-formaggi": "https://img.magnific.com/foto-premium/pizza-quattro-formaggi-o-pizza-quattro-formaggi-condita-con-salsa-di-pomodoro-mozzarella-gorgonzola_116118-1234.jpg",
  "tartufo": "https://images.unsplash.com/photo-1671106681075-5a7233268cbd?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "napoletana": "https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "tonno-e-cipolla": "https://misikemenceje.cdn.shoprenter.hu/custom/misikemenceje/image/cache/w550h550wt1q100/product/tonno%20e%20cipolla-pizza.jpg.webp?lastmod=1708602545.1597297788",
  "calzone-classico": "https://production.streetkitchen-cdn.com/3-fele-calzone-1-videoban-3-scaled-HbRxLj.webp",

  // ELŐÉTELEK
  "bresaola": "https://kisparadicsom.wordpress.com/wp-content/uploads/2021/05/bresaola-rukola-parmezan-4.jpg?w=732",
  "burrata-puttanesca": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6PgBQnnLmWv95xScg-Hzk3IHrwa7n62u5Q&s",
  "antipasto-misto": "https://media02.stockfood.com/largepreviews/Mzk3NzI2OQ==/00128299-Antipasto-misto-plate-of-assorted-appetisers-Italy.jpg",

  // SIGNATURE
  "nostro-diavola": "https://lapizzanostra.hu/wp-content/uploads/2025/09/diavola-csipos-szalamis-fiordilatte-pizza.webp",
  "ungherese": "https://lapizzanostra.hu/wp-content/uploads/2025/09/olasz-pizza-ungrherese-csipos-szalamis-hagymas.webp",
  "prosciutto-crudo": "https://banditosgyongyos.hu/wp-content/uploads/2024/10/caprese_e_crudo_banditos_pizza_gyongyos.jpg",
  "donna-serrano": "https://images.unsplash.com/photo-1571477716456-d27a74eba772?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "parma": "https://parmacrown.com/wp-content/uploads/2021/08/Pizza0327_1920x1080.jpg",
};

/**
 * 📂 KATEGÓRIA FALLBACK KÉPEK
 */
const CATEGORY_IMAGES: Record<string, string> = {
  "Desszert": "https://kep.cdn.indexvas.hu/1/0/3875/38750/387509/38750989_2955921_45d426b703796b8414f66ea8328cbd5b_wm.jpg",
  "Kávék és italok": "https://cdn.mindmegette.hu/2024/02/qVlGTAwnFxz6_InbYsE3-mYe3Eysc4doJk_4BhMxs0g/fill/0/0/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50Lzc5MDAxZGI2YTYxNzRjYjM4OTRkMWMzYWExZmU3MTZm.webp",
  "Classico": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Gourmet": "https://images.unsplash.com/photo-1716237389869-a88407bd2b99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Előételek": "https://kisparadicsom.wordpress.com/wp-content/uploads/2021/05/bresaola-rukola-parmezan-4.jpg?w=732",
  "Signature": "https://lapizzanostra.hu/wp-content/uploads/2025/09/diavola-csipos-szalamis-fiordilatte-pizza.webp",
};

/**
 * 🚨 végső fallback (ha semmi nincs)
 */
const FALLBACK_IMAGE = "/images/fallback.jpg";

/**
 * 🍽️ kép választó függvény
 */
export function menuImage(item: MenuItem) {
  return (
    ITEM_IMAGES[item.id] ||
    CATEGORY_IMAGES[item.category] ||
    FALLBACK_IMAGE
  );
}