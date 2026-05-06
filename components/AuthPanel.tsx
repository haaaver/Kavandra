"use client";

import { FormEvent, useState } from "react";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import { Button } from "@/components/Button";
import { useStore } from "@/lib/store";

export function AuthPanel() {
  const { user, login, register, logout } = useStore();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setError("");
      if (mode === "register") {
        register(name || "Kavandra vendég", email, password);
      } else {
        login(email, password);
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Nem sikerült a belépés.");
    }
  };

  if (user) {
    return (
      <div className="glass rounded-2xl p-5" id="profile">
        <p className="text-sm font-bold text-basil">Bejelentkezve</p>
        <h3 className="mt-1 text-2xl font-black">{user.name}</h3>
        <p className="mt-1 text-sm text-ink/60">{user.email}</p>
        <Button variant="secondary" className="mt-5 w-full" onClick={logout}>
          <LogOut className="h-4 w-4" />
          Kijelentkezés
        </Button>
      </div>
    );
  }

  return (
    <form className="glass rounded-2xl p-5" id="profile" onSubmit={submit}>
      <div className="mb-4 flex rounded-button bg-mint-50 p-1">
        <button type="button" onClick={() => setMode("login")} className={`flex-1 rounded-xl px-3 py-2 text-sm font-black ${mode === "login" ? "bg-white shadow" : "text-ink/55"}`}>
          Bejelentkezés
        </button>
        <button type="button" onClick={() => setMode("register")} className={`flex-1 rounded-xl px-3 py-2 text-sm font-black ${mode === "register" ? "bg-white shadow" : "text-ink/55"}`}>
          Regisztráció
        </button>
      </div>
      <div className="grid gap-3">
        {mode === "register" && (
          <input className="rounded-button border border-mint-100 bg-white/80 px-4 py-3 outline-none focus:border-basil" placeholder="Név" value={name} onChange={(event) => setName(event.target.value)} />
        )}
        <input required type="email" className="rounded-button border border-mint-100 bg-white/80 px-4 py-3 outline-none focus:border-basil" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input required minLength={6} type="password" className="rounded-button border border-mint-100 bg-white/80 px-4 py-3 outline-none focus:border-basil" placeholder="Jelszó" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      {error && <p className="mt-3 rounded-button bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p>}
      <Button className="mt-4 w-full">
        {mode === "register" ? <UserPlus className="h-4 w-4" /> : <LogIn className="h-4 w-4" />}
        {mode === "register" ? "Fiók létrehozása" : "Belépés"}
      </Button>
    </form>
  );
}
