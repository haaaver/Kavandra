"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Button } from "@/components/Button";
import { formatPrice, takeawayFee } from "@/lib/menu";
import { useStore } from "@/lib/store";
import { PaymentMethod } from "@/lib/types";

export function CartPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { cart, cartTotal, orderTotal, changeQuantity, removeFromCart, placeOrder, user } = useStore();
  const [name, setName] = useState(user?.name || "");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>("card");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name.trim() || !address.trim() || !phone.trim()) {
      setError("Töltsd ki a név, cím és telefonszám mezőket.");
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      try {
        const order = placeOrder({ name, address, phone, note }, payment);
        setSuccess(`Sikeres rendelés: ${order.id}`);
        setAddress("");
        setPhone("");
        setNote("");
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : "Nem sikerült leadni a rendelést.");
      } finally {
        setLoading(false);
      }
    }, 650);
  };

  return (
    <aside
      className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-xl transform flex-col border-l border-white/70 bg-white/85 shadow-glass backdrop-blur-2xl transition duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between border-b border-mint-100 p-5">
        <div>
          <p className="text-sm font-bold text-basil">Mindig látható összeg</p>
          <h2 className="text-2xl font-black">{formatPrice(orderTotal)}</h2>
        </div>
        <Button variant="ghost" onClick={onClose} aria-label="Kosár bezárása">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        {cart.length === 0 ? (
          <div className="glass rounded-2xl p-8 text-center">
            <ShoppingBag className="mx-auto h-12 w-12 text-basil" />
            <h3 className="mt-4 text-xl font-black">A kosarad még üres</h3>
            <p className="mt-2 text-sm text-ink/60">Válassz egy pizzát, kávét vagy desszertet a menüből.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="glass flex gap-3 rounded-2xl p-4">
                <div className="flex-1">
                  <h3 className="font-black">{item.name}</h3>
                  <p className="mt-1 text-sm text-ink/60">{formatPrice(item.price)}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Button variant="secondary" className="h-9 min-h-9 w-9 px-0" onClick={() => changeQuantity(item.id, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-black">{item.quantity}</span>
                    <Button variant="secondary" className="h-9 min-h-9 w-9 px-0" onClick={() => changeQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button variant="ghost" className="h-10 min-h-10 w-10 px-0" onClick={() => removeFromCart(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 rounded-2xl bg-mint-50/80 p-4 text-sm">
          <div className="flex justify-between">
            <span>Termékek</span>
            <strong>{formatPrice(cartTotal)}</strong>
          </div>
          <div className="mt-2 flex justify-between">
            <span>Elviteli díj</span>
            <strong>{cart.length ? formatPrice(takeawayFee) : formatPrice(0)}</strong>
          </div>
        </div>

        <form className="mt-6 space-y-4" onSubmit={submit}>
          <h3 className="text-xl font-black">Fizetés</h3>
          <div className="grid gap-3">
            <input className="rounded-button border border-mint-100 bg-white/80 px-4 py-3 outline-none focus:border-basil" placeholder="Név" value={name} onChange={(event) => setName(event.target.value)} />
            <input className="rounded-button border border-mint-100 bg-white/80 px-4 py-3 outline-none focus:border-basil" placeholder="Cím" value={address} onChange={(event) => setAddress(event.target.value)} />
            <input className="rounded-button border border-mint-100 bg-white/80 px-4 py-3 outline-none focus:border-basil" placeholder="Telefonszám" value={phone} onChange={(event) => setPhone(event.target.value)} />
            <textarea
              className="min-h-24 resize-none rounded-button border border-mint-100 bg-white/80 px-4 py-3 outline-none focus:border-basil"
              placeholder="Megjegyzés a rendeléshez, pl. pizza gomba nélkül vagy kávé koffeinmentesen"
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <label className={`cursor-pointer rounded-button border p-3 text-sm font-bold ${payment === "card" ? "border-basil bg-mint-100" : "border-mint-100 bg-white/70"}`}>
              <input className="sr-only" type="radio" checked={payment === "card"} onChange={() => setPayment("card")} />
              Bankkártya mock
            </label>
            <label className={`cursor-pointer rounded-button border p-3 text-sm font-bold ${payment === "cod" ? "border-basil bg-mint-100" : "border-mint-100 bg-white/70"}`}>
              <input className="sr-only" type="radio" checked={payment === "cod"} onChange={() => setPayment("cod")} />
              Utánvét
            </label>
          </div>
          {error && <p className="rounded-button bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p>}
          {success && (
            <p className="flex items-center gap-2 rounded-button bg-mint-100 p-3 text-sm font-bold text-basil">
              <CheckCircle2 className="h-4 w-4" />
              {success}
            </p>
          )}
          <Button loading={loading} disabled={!cart.length} className="w-full">
            Rendelés leadása
          </Button>
        </form>
      </div>
    </aside>
  );
}
