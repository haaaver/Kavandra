"use client";

import { PackageCheck } from "lucide-react";
import { formatPrice } from "@/lib/menu";
import { useStore } from "@/lib/store";

export function OrdersPanel() {
  const { orders } = useStore();

  return (
    <section className="scroll-reveal" id="orders">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-basil">Rendelések</p>
          <h2 className="text-3xl font-black md:text-4xl">Állapotkövetés</h2>
        </div>
        <PackageCheck className="hidden h-10 w-10 text-basil md:block" />
      </div>
      <div className="grid gap-3">
        {orders.length === 0 ? (
          <div className="glass rounded-2xl p-6 text-sm text-ink/60">Még nincs leadott rendelés ezen az eszközön.</div>
        ) : (
          orders.slice(0, 4).map((order) => (
            <article className="glass rounded-2xl p-5" key={order.id}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-black">{order.id}</h3>
                  <p className="mt-1 text-sm text-ink/60">{order.customer.name} · {order.customer.address}</p>
                </div>
                <span className="rounded-full bg-rose-500/15 px-3 py-1 text-sm font-black text-basil ring-1 ring-rose-300/20">{order.status}</span>
              </div>
              <p className="mt-3 text-sm font-bold">{formatPrice(order.total)} · {order.paymentMethod === "card" ? "Bankkártya mock" : "Utánvét"}</p>
              {order.customer.note && <p className="mt-2 rounded-button bg-white/7 p-3 text-sm text-ink/70 ring-1 ring-white/10">Megjegyzés: {order.customer.note}</p>}
            </article>
          ))
        )}
      </div>
    </section>
  );
}
