"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { formatPrice } from "@/lib/menu";
import { useStore } from "@/lib/store";
import { MenuItem } from "@/lib/types";
import { menuImage } from "@/lib/visuals";

export function MenuCard({ item }: { item: MenuItem }) {
  const { addToCart } = useStore();

  return (
    <article className="glass scroll-reveal flex min-h-[260px] flex-col overflow-hidden rounded-2xl">
      <Image className="h-40 w-full object-cover" src={menuImage(item)} alt={`${item.name} illusztráció`} width={900} height={520} />
      <div className="flex flex-1 flex-col p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-basil">{item.category}</p>
          <h3 className="mt-2 text-xl font-black text-ink">{item.name}</h3>
        </div>
        <span className="rounded-full bg-mint-100 px-3 py-1 text-sm font-black text-basil">{formatPrice(item.price)}</span>
      </div>
      <p className="flex-1 text-sm leading-6 text-ink/70">{item.description}</p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-ink/45">{item.allergens ? `Allergének: ${item.allergens}` : "Koffeinmentes és kókusztejes opció elérhető"}</span>
        <Button aria-label={`${item.name} hozzáadása`} onClick={() => addToCart(item)} className="shrink-0">
          <Plus className="h-4 w-4" />
          Kosárba
        </Button>
      </div>
      </div>
    </article>
  );
}
