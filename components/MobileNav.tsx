"use client";

import { ClipboardList, Menu, ShoppingBag, UserRound } from "lucide-react";

export function MobileNav({ onCart }: { onCart: () => void }) {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-2xl border border-white/70 bg-white/85 p-2 shadow-glass backdrop-blur-2xl md:hidden">
      <a className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs font-bold text-ink" href="#menu">
        <Menu className="h-5 w-5" />
        Menü
      </a>
      <button className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs font-bold text-ink" onClick={onCart}>
        <ShoppingBag className="h-5 w-5" />
        Kosár
      </button>
      <a className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs font-bold text-ink" href="#orders">
        <ClipboardList className="h-5 w-5" />
        Rendelések
      </a>
      <a className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs font-bold text-ink" href="#profile">
        <UserRound className="h-5 w-5" />
        Profil
      </a>
    </nav>
  );
}
