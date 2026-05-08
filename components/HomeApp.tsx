"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, Clock, Flame, MapPin, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AuthPanel } from "@/components/AuthPanel";
import { Button } from "@/components/Button";
import { CartPanel } from "@/components/CartPanel";
import { MenuCard } from "@/components/MenuCard";
import { MobileNav } from "@/components/MobileNav";
import { OrdersPanel } from "@/components/OrdersPanel";
import { categories, formatPrice, menuItems } from "@/lib/menu";
import { featuredItems, useStore } from "@/lib/store";
import { menuImage } from "@/lib/visuals";

const faqs = [
  {
    question: "Valódi Stripe fizetés van bekötve?",
    answer: "A demó mock bankkártyás fizetést használ, a Stripe kulcsok helye az .env.example fájlban elő van készítve."
  },
  {
    question: "Megmarad a bejelentkezés?",
    answer: "Igen, a demó localStorage-ban őrzi meg a fiók, kosár és rendelés állapotot."
  },
  {
    question: "Hol látható az admin felület?",
    answer: "A /admin útvonalon. A demó belépés: admin@aplacc.local / aplacc2026."
  }
];

export function HomeApp() {
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [heroItem, setHeroItem] = useState(featuredItems[0]);
  const { cartCount, orderTotal } = useStore();

  useEffect(() => {
    setHeroItem(featuredItems[Math.floor(Math.random() * featuredItems.length)] ?? featuredItems[0]);
  }, []);

  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <main className="pb-28 md:pb-0">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-rose-600 text-lg font-black text-white shadow-lift">A</span>
            <span>
              <span className="block text-base font-black">A PLACC</span>
              <span className="block text-xs font-bold text-basil">Pizza Pasta & Grill</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-ink/70 md:flex [&_a]:transition [&_a:hover]:text-rose-300">
            <a href="#menu">Menü</a>
            <a href="#specials">Különlegességek</a>
            <a href="#orders">Rendelések</a>
            <a href="/admin">Admin</a>
          </nav>
          <Button onClick={() => setCartOpen(true)}>
            <ShoppingBag className="h-4 w-4" />
            {formatPrice(orderTotal)}
            <span className="rounded-full bg-white/20 px-2 py-0.5">{cartCount}</span>
          </Button>
        </div>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-10 md:grid-cols-[1.08fr_0.92fr] md:px-8">
        <div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-rose-300/25 bg-white/10 px-4 py-2 text-sm font-black text-basil shadow-glass backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Pizza. Pasta. Grill.
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-ink text-balance md:text-7xl">
            A PLACC Pizza Pasta & Grill
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">
            A PLACC-ban a jó ízek és a kellemes hangulat találkoznak. Látványkemencében sült nápolyi stílusú pizzáink, friss tésztáink, kézműves hamburgereink és étlapunk különleges elemei minden alkalomra tökéletes választás.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}>
              Menü megnyitása
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" onClick={() => setCartOpen(true)}>
              Kosár
            </Button>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ["35-45 perc", Clock],
              ["Mock kártya", ShieldCheck],
              ["Kiszállítás", MapPin]
            ].map(([label, Icon]) => (
              <div className="glass rounded-2xl p-4" key={String(label)}>
                <Icon className="h-5 w-5 text-basil" />
                <p className="mt-3 text-sm font-black">{String(label)}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18 }} className="glass-strong animate-float overflow-hidden rounded-[2rem]">
          <Image priority className="h-[360px] w-full object-cover md:h-[430px]" src={menuImage(heroItem)} alt={`${heroItem.name} illusztráció`} width={900} height={520} />
          <div className="p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-basil">Mai ajánlat</p>
                <h2 className="text-2xl font-black">{heroItem.name}</h2>
              </div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black ring-1 ring-white/15">{formatPrice(heroItem.price)}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/65">{heroItem.description}</p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8" id="menu">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-basil">Menü</p>
            <h2 className="mt-2 text-4xl font-black">Ételek és italok</h2>
          </div>
          <div className="glass flex gap-2 overflow-x-auto rounded-2xl p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-button px-4 py-2 text-sm font-black transition ${activeCategory === category ? "bg-rose-600 text-white shadow-lift" : "text-ink/60 hover:bg-white/10 hover:text-rose-200"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <MenuCard item={item} key={item.id} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8" id="specials">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-basil">Különlegességek</p>
          <h2 className="mt-2 text-4xl font-black">A PLACC kedvencek</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredItems.slice(0, 4).map((item) => (
            <div className="glass scroll-reveal overflow-hidden rounded-2xl" key={item.id}>
              <Image className="h-36 w-full object-cover" src={menuImage(item)} alt={`${item.name} illusztráció`} width={900} height={520} />
              <div className="p-5">
                <Flame className="h-6 w-6 text-tomato" />
                <h3 className="mt-4 text-xl font-black">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/62">{item.description}</p>
                <p className="mt-4 font-black">{formatPrice(item.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-[1fr_360px] md:px-8">
        <OrdersPanel />
        <AuthPanel />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 md:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-basil">GYIK</p>
        <h2 className="mt-2 text-4xl font-black">Gyakori kérdések</h2>
        <div className="mt-7 space-y-3">
          {faqs.map((faq) => (
            <details className="glass rounded-2xl p-5" key={faq.question}>
              <summary className="cursor-pointer text-lg font-black">{faq.question}</summary>
              <p className="mt-3 text-sm leading-6 text-ink/65">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-ink/60 md:flex-row md:items-center md:justify-between">
          <p className="font-black text-ink">A PLACC Pizza Pasta & Grill</p>
          <p>Classico, Gourmet, Signature · PWA telepíthető webapp · Vercel ready</p>
        </div>
      </footer>

      <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
      <MobileNav onCart={() => setCartOpen(true)} />
    </main>
  );
}
