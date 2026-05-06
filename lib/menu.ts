import { MenuCategory, MenuItem } from "@/lib/types";

export const categories: MenuCategory[] = [
  "Desszertek",
  "Kávék és italok",
  "Classico pizzák",
  "Gourmet pizzák",
  "Előételek",
  "Signature pizzák"
];

export const menuItems: MenuItem[] = [
  {
    id: "tiramisu-classico",
    category: "Desszertek",
    name: "Tiramisu Classico",
    description: "Kávé, mascarpone, bumbu cream.",
    price: 2290,
    allergens: "1, 3, 7",
    featured: true
  },
  {
    id: "panna-cotta",
    category: "Desszertek",
    name: "Panna Cotta",
    description: "Eper, menta, mandula grillázs.",
    price: 2290,
    allergens: "7, 8"
  },
  {
    id: "ristretto",
    category: "Kávék és italok",
    name: "Ristretto",
    description: "Intenzív olasz presszókávé.",
    price: 590
  },
  {
    id: "espresso",
    category: "Kávék és italok",
    name: "Espresso",
    description: "Klasszikus rövid kávé, sűrű cremával.",
    price: 590
  },
  {
    id: "espresso-macchiato",
    category: "Kávék és italok",
    name: "Espresso Macchiato",
    description: "Espresso kevés tejhabbal.",
    price: 690
  },
  {
    id: "cortado",
    category: "Kávék és italok",
    name: "Cortado",
    description: "Espresso meleg tejjel, kiegyensúlyozott arányban.",
    price: 690
  },
  {
    id: "flat-white",
    category: "Kávék és italok",
    name: "Flat White",
    description: "Selymes tejhabos kávé desszert mellé.",
    price: 790
  },
  {
    id: "latte-macchiato",
    category: "Kávék és italok",
    name: "Latte Macchiato",
    description: "Rétegzett tejes kávé lágy habbal.",
    price: 890
  },
  {
    id: "jeges-kave",
    category: "Kávék és italok",
    name: "Jeges kávé",
    description: "Hűsítő kávéital, kérhető vanília fagylalttal.",
    price: 990
  },
  {
    id: "vanilia-fagylalt-extra",
    category: "Kávék és italok",
    name: "+ Vanília fagylalt",
    description: "Extra gombóc jeges kávéhoz.",
    price: 490
  },
  {
    id: "americano",
    category: "Kávék és italok",
    name: "Americano",
    description: "Hosszabb, tiszta ízű kávé.",
    price: 790
  },
  {
    id: "cappuccino",
    category: "Kávék és italok",
    name: "Cappuccino",
    description: "Espresso, gőzölt tej és krémes tejhab.",
    price: 790
  },
  {
    id: "dilmah-tea",
    category: "Kávék és italok",
    name: "Dilmah tea variációk",
    description: "Válogatott teák több ízben.",
    price: 1090
  },
  {
    id: "margherita",
    category: "Classico pizzák",
    name: "Margherita",
    description: "San Marzano paradicsom, fior di latte, grana padano, oliva olaj.",
    price: 2590,
    allergens: "1, 7",
    featured: true
  },
  {
    id: "prosciutto-cotto",
    category: "Classico pizzák",
    name: "Prosciutto Cotto",
    description: "San Marzano paradicsom, fior di latte, főtt sonka.",
    price: 3190,
    allergens: "1, 7"
  },
  {
    id: "picante",
    category: "Classico pizzák",
    name: "Picante",
    description: "San Marzano paradicsom, fior di latte, salsiccia picante.",
    price: 3190,
    allergens: "1, 7"
  },
  {
    id: "cotto-e-funghi",
    category: "Classico pizzák",
    name: "Cotto e Funghi",
    description: "San Marzano paradicsom, fior di latte, főtt sonka, gomba.",
    price: 3290,
    allergens: "1, 7"
  },
  {
    id: "capricciosa",
    category: "Classico pizzák",
    name: "Capricciosa",
    description: "San Marzano paradicsom, fior di latte, főtt sonka, olivabogyó, articsóka, gomba.",
    price: 3590,
    allergens: "1, 7"
  },
  {
    id: "mortadella",
    category: "Gourmet pizzák",
    name: "Mortadella",
    description: "Mascarpone alap, fior di latte, mortadella, pisztácia pesto, burrata, rukkola.",
    price: 3990,
    allergens: "1, 7, 8",
    featured: true
  },
  {
    id: "6-formaggi",
    category: "Gourmet pizzák",
    name: "6 Formaggi",
    description: "Ricotta krém, fior di latte, grana padano, gorgonzola, taleggio, füstölt provola.",
    price: 3690,
    allergens: "1, 7"
  },
  {
    id: "tartufo",
    category: "Gourmet pizzák",
    name: "Tartufo",
    description: "Szarvasgombás gombakrém, fior di latte, grillezett gombák, pecorino romano, rukkola.",
    price: 3890,
    allergens: "1, 7"
  },
  {
    id: "napoletana",
    category: "Gourmet pizzák",
    name: "Napoletana",
    description: "San Marzano paradicsom, bivaly mozzarella, olivabogyó, kapribogyó, szardella, oregánó.",
    price: 3890,
    allergens: "1, 4, 7"
  },
  {
    id: "tonno-e-cipolla",
    category: "Gourmet pizzák",
    name: "Tonno e Cipolla",
    description: "San Marzano paradicsom, fior di latte, tonhal, lilahagyma, olivabogyó.",
    price: 3590,
    allergens: "1, 4, 7"
  },
  {
    id: "calzone-classico",
    category: "Gourmet pizzák",
    name: "Calzone Classico",
    description: "San Marzano paradicsom, fior di latte, főtt sonka, grana padano.",
    price: 3590,
    allergens: "1, 7"
  },
  {
    id: "bresaola",
    category: "Előételek",
    name: "Bresaola",
    description: "Érlelt marha sonka, rukkola, parmigiano reggiano, kapribogyó, grissini, extra szűz olívaolaj.",
    price: 3390,
    allergens: "1, 7"
  },
  {
    id: "burrata-puttanesca",
    category: "Előételek",
    name: "Burrata ala Puttanesca",
    description: "Burrata, koktélparadicsom, Taggiasche olivabogyó, kapribogyó, szardella.",
    price: 3190,
    allergens: "4, 7",
    featured: true
  },
  {
    id: "antipasto-misto",
    category: "Előételek",
    name: "Antipasto Misto",
    description: "Nápolyi szalámi, érlelt sonka, coppa, Taggiasche olivabogyó, napon szárított paradicsom, burrata, parmigiano reggiano, szarvasgombás focaccia.",
    price: 4590,
    allergens: "1, 7"
  },
  {
    id: "nostro-diavola",
    category: "Signature pizzák",
    name: "Nostro Diavola",
    description: "San Marzano paradicsom, fior di latte, salsiccia picante, pesto rosso, nduja.",
    price: 3590,
    allergens: "1, 7, 8",
    featured: true
  },
  {
    id: "ungherese",
    category: "Signature pizzák",
    name: "Ungherese",
    description: "San Marzano paradicsom, fior di latte, salsiccia picante, pancetta, karamellizált lilahagyma, pepperoni Veneti.",
    price: 3690,
    allergens: "1, 7"
  },
  {
    id: "prosciutto-crudo",
    category: "Signature pizzák",
    name: "Prosciutto Crudo",
    description: "San Marzano paradicsom, fior di latte, érlelt sonka, koktél paradicsom, rukkola, grana padano, oliva olaj.",
    price: 3890,
    allergens: "1, 7"
  },
  {
    id: "donna-serrano",
    category: "Signature pizzák",
    name: "Donna Serrano",
    description: "Mascarpone alap, fior di latte, serrano sonka, gránátalma, méz, kecskesajt krém.",
    price: 3990,
    allergens: "1, 7"
  },
  {
    id: "parma",
    category: "Signature pizzák",
    name: "Parma",
    description: "San Marzano paradicsom, pármai sonka, stracciatella, napon szárított paradicsom, mandula.",
    price: 4490,
    allergens: "1, 7, 8"
  }
];

export const takeawayFee = 250;

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0
  }).format(price);
