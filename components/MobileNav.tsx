"use client";

import { ClipboardList, Menu, ShoppingBag, UserRound } from "lucide-react";

export function MobileNav({ onCart }: { onCart: () => void }) {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-2xl border border-white/10 bg-black/70 p-2 shadow-glass backdrop-blur-2xl md:hidden">
      <a className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs font-bold text-ink transition hover:bg-white/10 hover:text-rose-200" href="#menu">
        <Menu className="h-5 w-5" />
        Menü
      </a>
      <button className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs font-bold text-ink transition hover:bg-white/10 hover:text-rose-200" onClick={onCart}>
        <ShoppingBag className="h-5 w-5" />
        Kosár
      </button>
      <a className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs font-bold text-ink transition hover:bg-white/10 hover:text-rose-200" href="#orders">
        <ClipboardList className="h-5 w-5" />
        Rendelések
      </a>
      <a className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs font-bold text-ink transition hover:bg-white/10 hover:text-rose-200" href="#profile">
        <UserRound className="h-5 w-5" />
        Profil
      </a>
    </nav>
  );
}
