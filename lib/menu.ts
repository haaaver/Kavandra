import { MenuCategory, MenuItem } from "@/lib/types";

export const categories: MenuCategory[] = [
  "Antipasti",
  "Levesek",
  "Főételek",
  "Pizzák",
  "Prémium pizzák",
  "Burgerek",
  "Tészták",
  "Gyros",
  "Desszertek"
];

export const menuItems: MenuItem[] = [
  {
    id: "antipasti-napoletana-2-szemelyre",
    category: "Antipasti",
    name: "Antipasti Napoletana 2 személyre",
    description: "Válassz 4-et: Prosciutto Crudo, Prosciutto Cotto, Spianata Picante, Salame Milano, Burrata, Kapribogyó, Olívabogyó. Kemencés pizzakenyérrel. Allergének: 1, 7.",
    price: 3990,
    featured: true
  },
  {
    id: "cezar-salata-roston-sult-csirkemellel",
    category: "Antipasti",
    name: "Cézár saláta roston sült csirkemellel",
    description: "Házi készítésű Caesar öntet, roston sült csirkemell saláta ágyon, parmezán, kemencében sült pizzakenyér. Allergének: 1, 3, 4, 7, 10.",
    price: 2990
  },
  {
    id: "cezar-salata-grillezett-garnelaval",
    category: "Antipasti",
    name: "Cézár saláta grillezett garnélával",
    description: "Házi készítésű Caesar öntet, grillezett garnéla saláta ágyon, parmezán, kemencében sült pizzakenyér. Allergének: 1, 2, 3, 4, 7, 10.",
    price: 3290
  },
  {
    id: "cezar-salata-grillsajttal",
    category: "Antipasti",
    name: "Cézár saláta grillsajttal",
    description: "Házi készítésű Caesar öntet, grillsajt saláta ágyon, paradicsom, uborka, parmezán, kemencében sült pizzakenyér. Allergének: 1, 2, 3, 4, 7, 10.",
    price: 2990
  },
  {
    id: "caprese-di-burrata",
    category: "Antipasti",
    name: "Caprese di Burrata",
    description: "Rukkola, koktélparadicsom, burrata, bazsalikom, olívaolaj, kemencében sült pizzakenyér. Allergének: 1, 7.",
    price: 2990
  },
  {
    id: "insalate-di-tonno",
    category: "Antipasti",
    name: "Insalate di Tonno",
    description: "Rukkola, koktélparadicsom, tonhal, olívabogyó, kapribogyó, kemencében sült pizzakenyér. Allergének: 1, 4.",
    price: 2790
  },
  {
    id: "burrata-e-crudo",
    category: "Antipasti",
    name: "Burrata e Crudo",
    description: "Rukkola, szárított paradicsom, burrata, Prosciutto Crudo érlelt sonka, bazsalikom, olívaolaj, kemencében sült pizzakenyér. Allergének: 1, 7.",
    price: 3390
  },
  {
    id: "tyukhusleves-csigatesztaval",
    category: "Levesek",
    name: "Tyúkhúsleves csigatésztával",
    description: "Klasszikus tyúkhúsleves csigatésztával. Allergének: 1, 3.",
    price: 1990
  },
  {
    id: "szezonalis-kremleves",
    category: "Levesek",
    name: "Szezonális krémleves",
    description: "Friss, szezonális alapanyagokból készült krémleves.",
    price: 1990
  },
  {
    id: "rose-kacsamell",
    category: "Főételek",
    name: "Rosé kacsamell",
    description: "Kacsamell, füstös édesburgonya püré, párolt lilakáposzta, kacsa jus. Allergének: 7.",
    price: 5290,
    featured: true
  },
  {
    id: "saltimbocca-alla-placc",
    category: "Főételek",
    name: "Saltimbocca alla PLACC",
    description: "Prosciutto Crudo, zsálya, sertés karaj, fehérboros vajmártás, paradicsomos penne. Allergének: 1, 7.",
    price: 5290
  },
  {
    id: "pollo-alla-rosso",
    category: "Főételek",
    name: "Pollo alla Rosso",
    description: "Pankómorzsában sült csirkemell paradicsomszósszal, Fior di latte mozzarellával és parmezánnal sütve, paradicsomos pappardelle tésztával. Allergének: 1, 3, 7.",
    price: 5290
  },
  {
    id: "pollo-alla-marsala",
    category: "Főételek",
    name: "Pollo alla Marsala",
    description: "Pirított csirkemell, gomba, sherry, tejszín, zöldfűszeres vajas pappardelle tésztával. Allergének: 1, 7.",
    price: 5290
  },
  {
    id: "lazacfile-caserecce",
    category: "Főételek",
    name: "Lazacfilé & Caserecce",
    description: "Lazac, szárított paradicsomos-spenótos tejszínes casarecce tészta. Allergének: 1, 4, 7.",
    price: 5590
  },
  {
    id: "bbq-sertes-oldalas",
    category: "Főételek",
    name: "BBQ sertés oldalas",
    description: "Lassan sült pácolt sertés oldalas, steak burgonya, savanyított lilahagyma. Allergének: 10.",
    price: 5590
  },
  {
    id: "sertes-cordon-bleu",
    category: "Főételek",
    name: "Sertés Cordon Bleu",
    description: "Prosciutto Cotto sonkával és Fior di latte mozzarellával töltött sertés karaj, héjas hasábburgonya. Allergének: 1, 3, 7.",
    price: 4490
  },
  {
    id: "rantott-sertes",
    category: "Főételek",
    name: "Rántott sertés",
    description: "Rántott sertésszelet, áfonyalekvár, héjas hasábburgonya. Allergének: 1, 3.",
    price: 3990
  },
  {
    id: "rantott-csirke",
    category: "Főételek",
    name: "Rántott csirke",
    description: "Rántott csirkemell, héjas hasábburgonya. Allergének: 1, 3.",
    price: 3990
  },
  {
    id: "pollo-fantasia",
    category: "Főételek",
    name: "Pollo Fantasia",
    description: "Roston sült csirkemell Fior di latte mozzarellával töltve, pirított bacon, friss saláta, héjas hasábburgonya, házi kukorica saláta. Allergének: 3, 7.",
    price: 4390
  },
  {
    id: "enchiladas",
    category: "Főételek",
    name: "Enchiladas",
    description: "Sült tortilla tekercsek, fűszeres marhahús, bab, pikáns paradicsomszósz, jalapeno paprika, mozzarella. Allergének: 1, 7.",
    price: 4490
  },
  {
    id: "pulled-pork-tal",
    category: "Főételek",
    name: "Pulled Pork tál",
    description: "Házi készítésű tépett malachús, amerikai káposzta saláta, steak burgonya, cheddar sajtszósz, lyoni hagyma. Allergének: 1, 3, 7, 10.",
    price: 4290
  },
  {
    id: "pulled-pork-sandwich",
    category: "Főételek",
    name: "Pulled Pork sandwich",
    description: "Házi készítésű kemencés sandwich, tépett malachús, amerikai káposzta saláta, csemege uborka, cheddar sajtszósz, lyoni hagyma. Allergének: 1, 3, 7, 10.",
    price: 3290
  },
  {
    id: "margherita",
    category: "Pizzák",
    name: "1. Margherita",
    description: "Paradicsomszósz, Fior di latte mozzarella, parmezán, friss bazsalikom. Allergének: 1, 7.",
    price: 2790,
    featured: true
  },
  {
    id: "prosciutto-cotto",
    category: "Pizzák",
    name: "2. Prosciutto Cotto",
    description: "Paradicsomszósz, Fior di latte mozzarella, Prosciutto Cotto sonka. Allergének: 1, 7.",
    price: 3290
  },
  {
    id: "salame",
    category: "Pizzák",
    name: "3. Salame",
    description: "Paradicsomszósz, Fior di latte mozzarella, Salame Milano. Allergének: 1, 7.",
    price: 3290
  },
  {
    id: "cotto-e-funghi",
    category: "Pizzák",
    name: "4. Cotto e Funghi",
    description: "Paradicsomszósz, Fior di latte mozzarella, Prosciutto Cotto sonka, gomba. Allergének: 1, 7.",
    price: 3390
  },
  {
    id: "romano",
    category: "Pizzák",
    name: "5. Romano",
    description: "Paradicsomszósz, Fior di latte mozzarella, Prosciutto Cotto sonka, kukorica. Allergének: 1, 7.",
    price: 3390
  },
  {
    id: "quattro-formaggi",
    category: "Pizzák",
    name: "6. Quattro Formaggi",
    description: "Paradicsomszósz, Fior di latte mozzarella, parmezán, füstölt sajt, Gorgonzola DOP, friss bazsalikom. Allergének: 1, 7.",
    price: 3490
  },
  {
    id: "margherita-e-burrata",
    category: "Pizzák",
    name: "7. Margherita e Burrata",
    description: "Paradicsomszósz, Fior di latte mozzarella, burrata, koktélparadicsom, parmezán, friss bazsalikom. Allergének: 1, 7.",
    price: 3490
  },
  {
    id: "vegetariana",
    category: "Pizzák",
    name: "8. Vegetariana",
    description: "Paradicsomszósz, Fior di latte mozzarella, parmezán, articsóka, gomba, olívabogyó, koktélparadicsom. Allergének: 1, 7.",
    price: 3490
  },
  {
    id: "diavola",
    category: "Pizzák",
    name: "9. Diavola",
    description: "Paradicsomszósz, Fior di latte mozzarella, Spianata Picante, csípős pepperoni paprika. Allergének: 1, 7.",
    price: 3490
  },
  {
    id: "picante",
    category: "Pizzák",
    name: "10. Picante",
    description: "Paradicsomszósz, Fior di latte mozzarella, Spianata Picante, bacon, gomba, csípős pepperoni paprika. Allergének: 1, 7.",
    price: 3590
  },
  {
    id: "ungherese",
    category: "Pizzák",
    name: "11. Ungherese",
    description: "Paradicsomszósz, Fior di latte mozzarella, Spianata Picante, bacon, lilahagyma, kukorica. Allergének: 1, 7.",
    price: 3590
  },
  {
    id: "rustica",
    category: "Pizzák",
    name: "12. Rustica",
    description: "Paradicsomszósz, Fior di latte mozzarella, Prosciutto Cotto sonka, Salame Milano, koktélparadicsom, rukkola. Allergének: 1, 7.",
    price: 3590
  },
  {
    id: "tonno-e-cipolla",
    category: "Pizzák",
    name: "13. Tonno e Cipolla",
    description: "Paradicsomszósz, Fior di latte mozzarella, tonhal, olívabogyó, lilahagyma. Allergének: 1, 7, 4.",
    price: 3590
  },
  {
    id: "firenze",
    category: "Pizzák",
    name: "14. Firenze",
    description: "Fokhagymás-tejfölös alap, Fior di latte mozzarella, füstölt sajt, Prosciutto Cotto sonka, bacon, lilahagyma. Allergének: 1, 7.",
    price: 3590
  },
  {
    id: "pollo",
    category: "Pizzák",
    name: "15. Pollo",
    description: "Fokhagymás-tejfölös alap, Fior di latte mozzarella, füstölt sajt, csirkemell, bacon, kukorica. Allergének: 1, 7.",
    price: 3590
  },
  {
    id: "casa-mia",
    category: "Pizzák",
    name: "16. Casa Mia",
    description: "Fokhagymás-tejfölös alap, Fior di latte mozzarella, füstölt sajt, csirkemell, Prosciutto Cotto sonka, kukorica, gomba. Allergének: 1, 7.",
    price: 3590
  },
  {
    id: "a-placc-pizza",
    category: "Pizzák",
    name: "17. A PLACC",
    description: "Barbecue alap, Fior di latte mozzarella, csirkemell, bacon, lilahagyma, kukorica. Allergének: 1, 7.",
    price: 3590
  },
  {
    id: "italia",
    category: "Prémium pizzák",
    name: "18. Italia",
    description: "Paradicsomszósz, Fior di latte mozzarella, Prosciutto Crudo érlelt sonka, koktél paradicsom, parmezán, rukkola. Allergének: 1, 7.",
    price: 3790
  },
  {
    id: "capricciosa",
    category: "Prémium pizzák",
    name: "19. Capricciosa",
    description: "Paradicsomszósz, Fior di latte mozzarella, Prosciutto Cotto sonka, gomba, articsóka, olívabogyó. Allergének: 1, 7.",
    price: 3790
  },
  {
    id: "quattro-formaggi-bosco",
    category: "Prémium pizzák",
    name: "20. Quattro Formaggi Bosco",
    description: "Mascarpone alap, Fior di latte mozzarella, parmezán, füstölt sajt, Gorgonzola DOP, grillezett erdei gomba. Allergének: 1, 7.",
    price: 3790
  },
  {
    id: "patate-e-pancetta",
    category: "Prémium pizzák",
    name: "21. Patate e Pancetta",
    description: "Fior di latte mozzarella, füstölt sajt, pancetta, rozmaringos-kakukkfüves burgonya, olívaolaj. Allergének: 1, 7.",
    price: 3790
  },
  {
    id: "tartufo-pancetta",
    category: "Prémium pizzák",
    name: "22. Tartufo Pancetta",
    description: "Fior di latte mozzarella, pancetta, grillezett erdei gombák, kakukkfű, gyöngyhagyma, szarvasgombaolaj. Allergének: 1, 7.",
    price: 3890
  },
  {
    id: "mortadella-e-pistacchio",
    category: "Prémium pizzák",
    name: "23. Mortadella e Pistacchio",
    description: "Mascarpone alap, Fior di latte mozzarella, mortadella, burrata, rukkola, pisztácia forgács, pisztácia pesztó. Allergének: 1, 7, 8.",
    price: 3990,
    featured: true
  },
  {
    id: "mortadella-e-burrata",
    category: "Prémium pizzák",
    name: "24. Mortadella e Burrata",
    description: "Mascarpone alap, Fior di latte mozzarella, mortadella, burrata, szárított paradicsom, rukkola, olívaolaj. Allergének: 1, 7.",
    price: 3990
  },
  {
    id: "burrata-bianco",
    category: "Prémium pizzák",
    name: "25. Burrata Bianco",
    description: "Mascarpone alap, Fior di latte mozzarella, Prosciutto Crudo érlelt sonka, szárított paradicsom, burrata, rukkola, szarvasgomba olaj. Allergének: 1, 7.",
    price: 3990
  },
  {
    id: "a-placc-burger",
    category: "Burgerek",
    name: "A PLACC Burger",
    description: "100% marhahús, jégsaláta, BBQ, bacon, karamellizált lilahagyma, paradicsomkarika, cheddar sajt, héjas hasábburgonya. Allergének: 1, 7.",
    price: 3690,
    featured: true
  },
  {
    id: "sajtburger",
    category: "Burgerek",
    name: "Sajtburger",
    description: "100% marhahús, ketchup, mustár, lilahagyma, bacon, csemege uborka, cheddar sajt, héjas hasábburgonya. Allergének: 1, 7, 10.",
    price: 3690
  },
  {
    id: "cheddar-burger",
    category: "Burgerek",
    name: "Cheddar Burger",
    description: "100% marhahús, jégsaláta, cheddar sajtszósz, bacon, csemege uborka, paradicsomkarika, cheddar sajt, pirított hagyma, héjas hasábburgonya. Allergének: 1, 7.",
    price: 3690
  },
  {
    id: "amerikai-smash-burger",
    category: "Burgerek",
    name: "Amerikai Smash Burger",
    description: "100% marhahús, házi burger szósz, jégsaláta, paradicsomkarika, csemege uborka, bacon, cheddar sajt, héjas hasábburgonya. Allergének: 1, 3, 7, 10.",
    price: 3690
  },
  {
    id: "smokey-burger",
    category: "Burgerek",
    name: "Smokey Burger",
    description: "100% marhahús, jégsaláta, BBQ, bacon, rántott hagymakarika, paradicsom, pirított hagyma, cheddar sajt, héjas hasábburgonya. Allergének: 1, 7.",
    price: 3690
  },
  {
    id: "vega-burger",
    category: "Burgerek",
    name: "Vega Burger",
    description: "Grillsajt, grillezett camembert, madársaláta, áfonyás lilahagymalekvár, lyoni hagyma, paradicsom, deluxe majonéz, héjas hasábburgonya. Allergének: 1, 3, 7, 10.",
    price: 3690
  },
  {
    id: "golden-crunch-chicken-burger",
    category: "Burgerek",
    name: "Golden Crunch Chicken Burger",
    description: "Ropogós bundában sült csirkemellfilé, jégsaláta, bacon, cheddar sajt, savanyú uborka, paradicsom, deluxe majonéz, héjas hasábburgonya. Allergének: 1, 3, 7, 10.",
    price: 3790
  },
  {
    id: "bacon-berry-beast-burger",
    category: "Burgerek",
    name: "Bacon Berry Beast Burger",
    description: "100% marhahús, rukkola, grillezett camembert, bacon, áfonyás lilahagymalekvár, lyoni hagyma, deluxe majonéz, héjas hasábburgonya. Allergének: 1, 3, 7, 10.",
    price: 3990
  },
  {
    id: "texas-pulled-king-burger",
    category: "Burgerek",
    name: "Texas Pulled King Burger",
    description: "100% marhahús, amerikai káposzta saláta, tépett malachús, bacon, cheddar sajt, csemege uborka, jalapeno paprika, lyoni hagyma, házi burger szósz, héjas hasábburgonya. Allergének: 1, 3, 7, 10.",
    price: 4190
  },
  {
    id: "spaghetti-alla-bolognese",
    category: "Tészták",
    name: "Spaghetti alla Bolognese",
    description: "Házi készítésű bolognai ragu, parmezán. Allergének: 1, 7.",
    price: 3690
  },
  {
    id: "spaghetti-alla-carbonara",
    category: "Tészták",
    name: "Spaghetti alla Carbonara",
    description: "Guanciale, tojás, Grana Padano, parmezán. Allergének: 1, 3, 7.",
    price: 3690
  },
  {
    id: "gnocchi-ai-quattro-formaggi",
    category: "Tészták",
    name: "Gnocchi ai Quattro Formaggi",
    description: "Tejszínes fokhagymás szósz, mozzarella, füstölt sajt, gorgonzola, parmezán. Allergének: 1, 7.",
    price: 3690
  },
  {
    id: "csirkemelles-gnocchi",
    category: "Tészták",
    name: "Csirkemelles Gnocchi",
    description: "Tejszínes fokhagymás szósz, csirkemell, koktélparadicsom, parmezán. Allergének: 1, 7.",
    price: 3790
  },
  {
    id: "spaghetti-di-tuna",
    category: "Tészták",
    name: "Spaghetti di Tuna",
    description: "Paradicsomszósz, kapribogyó, olívabogyó, tonhal, fokhagyma, olívaolaj, parmezán. Allergének: 1, 4, 7.",
    price: 3790
  },
  {
    id: "garnelas-papardelle",
    category: "Tészták",
    name: "Garnélás Papardelle",
    description: "Tejszínes fokhagymás szósz, garnéla, parmezán. Allergének: 1, 2, 7.",
    price: 3890
  },
  {
    id: "casarecce-alla-ungherese",
    category: "Tészták",
    name: "Casarecce alla Ungherese",
    description: "Guanciale, salsiccia, sült paprika, lilahagyma, gomba, paradicsomszósz, parmezán. Allergének: 1, 7.",
    price: 3890
  },
  {
    id: "penne-alla-zozzona",
    category: "Tészták",
    name: "Penne alla Zozzona",
    description: "Guanciale, tépett malachús, fokhagyma, paradicsomszósz, tojás, parmezán. Allergének: 1, 3, 7, 10.",
    price: 4190
  },
  {
    id: "spaghetti-alla-vongole",
    category: "Tészták",
    name: "Spaghetti alla Vongole",
    description: "Fekete kagyló, fehérbor, koktélparadicsom, petrezselyem, vaj. Allergének: 1, 7, 14.",
    price: 4490
  },
  {
    id: "gyros-tal",
    category: "Gyros",
    name: "Gyros tál",
    description: "Nyárson sült gyroshús, jégsaláta, uborka, paradicsom, lilahagyma, háziszósz, héjas hasábburgonya. Allergének: 3, 7.",
    price: 3790
  },
  {
    id: "gyros-wrap",
    category: "Gyros",
    name: "Gyros wrap",
    description: "Nyárson sült gyroshús, tortilla lap, jégsaláta, paradicsom, lilahagyma, uborka, háziszósz. Allergének: 1, 3, 7.",
    price: 2890
  },
  {
    id: "gyros-sandwich",
    category: "Gyros",
    name: "Gyros sandwich",
    description: "Nyárson sült gyroshús, kemencés sandwich, jégsaláta, paradicsom, lilahagyma, uborka, háziszósz. Allergének: 1, 3, 7.",
    price: 3090
  },
  {
    id: "panna-cotta",
    category: "Desszertek",
    name: "Panna Cotta",
    description: "Krémes panna cotta. Allergének: 7.",
    price: 2190
  },
  {
    id: "sajttorta",
    category: "Desszertek",
    name: "Sajttorta",
    description: "Klasszikus sajttorta. Allergének: 1, 3, 7.",
    price: 2190
  }
];

export const takeawayFee = 250;

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0
  }).format(price);
