"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lock, PackageCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { formatPrice } from "@/lib/menu";
import { useStore } from "@/lib/store";
import { OrderStatus } from "@/lib/types";

const statuses: OrderStatus[] = ["Függőben", "Készül", "Kiszállítva"];

export default function AdminPage() {
  const { orders, updateOrderStatus } = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "admin@kavandra.local" && password === "kavandra2026") {
      setLoggedIn(true);
      setError("");
      return;
    }
    setError("Hibás admin belépési adatok.");
  };

  if (!loggedIn) {
    return (
      <main className="grid min-h-screen place-items-center px-4">
        <form className="glass-strong w-full max-w-md rounded-3xl p-6" onSubmit={submit}>
          <Link className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-basil" href="/">
            <ArrowLeft className="h-4 w-4" />
            Vissza az apphoz
          </Link>
          <Lock className="h-10 w-10 text-basil" />
          <h1 className="mt-4 text-3xl font-black">Admin belépés</h1>
          <p className="mt-2 text-sm text-ink/60">Demó hozzáférés: admin@kavandra.local / kavandra2026</p>
          <div className="mt-6 grid gap-3">
            <input className="rounded-button border border-white/10 bg-white/8 px-4 py-3 text-ink outline-none transition placeholder:text-ink/35 focus:border-rose-400 focus:bg-white/10" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <input className="rounded-button border border-white/10 bg-white/8 px-4 py-3 text-ink outline-none transition placeholder:text-ink/35 focus:border-rose-400 focus:bg-white/10" placeholder="Jelszó" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          {error && <p className="mt-3 rounded-button bg-rose-500/15 p-3 text-sm font-bold text-rose-200 ring-1 ring-rose-400/25">{error}</p>}
          <Button className="mt-5 w-full">Belépés</Button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <Link className="inline-flex items-center gap-2 text-sm font-bold text-basil" href="/">
              <ArrowLeft className="h-4 w-4" />
              Vissza az apphoz
            </Link>
            <h1 className="mt-3 text-4xl font-black">Rendelések kezelése</h1>
            <p className="mt-2 text-ink/60">Összes rendelés, vásárlói adatok és státusz módosítás.</p>
          </div>
          <div className="glass rounded-2xl p-5">
            <PackageCheck className="h-7 w-7 text-basil" />
            <p className="mt-3 text-3xl font-black">{orders.length}</p>
            <p className="text-sm font-bold text-ink/60">rendelés</p>
          </div>
        </div>

        <div className="grid gap-4">
          {orders.length === 0 ? (
            <div className="glass rounded-2xl p-8 text-center text-ink/60">Még nincs rendelés. Adj le egyet a főoldalon, és itt azonnal megjelenik.</div>
          ) : (
            orders.map((order) => (
              <article className="glass rounded-2xl p-5" key={order.id}>
                <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-black">{order.id}</h2>
                      <span className="rounded-full bg-rose-500/15 px-3 py-1 text-sm font-black text-basil ring-1 ring-rose-300/20">{order.status}</span>
                    </div>
                    <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
                      <p><strong>Név:</strong> {order.customer.name}</p>
                      <p><strong>Cím:</strong> {order.customer.address}</p>
                      <p><strong>Telefon:</strong> {order.customer.phone}</p>
                    </div>
                    {order.customer.note && (
                      <p className="mt-4 rounded-2xl bg-white/7 p-4 text-sm ring-1 ring-white/10">
                        <strong>Megjegyzés:</strong> {order.customer.note}
                      </p>
                    )}
                    <div className="mt-4 rounded-2xl bg-white/7 p-4 ring-1 ring-white/10">
                      {order.items.map((item) => (
                        <div className="flex justify-between gap-3 text-sm" key={item.id}>
                          <span>{item.quantity} x {item.name}</span>
                          <strong>{formatPrice(item.price * item.quantity)}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/7 p-4 ring-1 ring-white/10">
                    <p className="text-sm font-bold text-ink/60">Végösszeg</p>
                    <p className="text-3xl font-black">{formatPrice(order.total)}</p>
                    <p className="mt-2 text-sm">{order.paymentMethod === "card" ? "Bankkártya mock" : "Utánvét"}</p>
                    <label className="mt-5 block text-sm font-black" htmlFor={`status-${order.id}`}>Státusz</label>
                    <select
                      id={`status-${order.id}`}
                      className="mt-2 w-full rounded-button border border-white/10 bg-white/8 px-4 py-3 text-ink outline-none transition focus:border-rose-400 focus:bg-white/10"
                      value={order.status}
                      onChange={(event) => updateOrderStatus(order.id, event.target.value as OrderStatus)}
                    >
                      {statuses.map((status) => (
                        <option key={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
