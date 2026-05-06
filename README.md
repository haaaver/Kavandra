# Kavandra Pizzéria & Étterem Webapp

Modern SaaS + glassmorphism stílusú, Next.js App Router alapú rendelési webapp.

## Funkciók

- Kategorizált étlap a megadott menü alapján
- Kosár hozzáadás, eltávolítás, mennyiség módosítás és folyamatos végösszeg
- Checkout űrlap név, cím és telefonszám mezőkkel
- Mock bankkártyás fizetés és utánvét
- Regisztráció, bejelentkezés, kijelentkezés localStorage állapotmegőrzéssel
- Rendelés leadás, sikeres visszajelzés és státuszkövetés
- Admin felület a `/admin` útvonalon
- Rendelés státusz módosítás: Függőben, Készül, Kiszállítva
- PWA manifest és service worker
- Mobil alsó navigáció: Menü, Kosár, Rendelések, Profil
- Vercel kompatibilis projektstruktúra

## Futtatás

```bash
npm install
npm run dev
```

Ezután nyisd meg:

```text
http://localhost:3000
```

## Admin belépés

```text
Email: admin@kavandra.local
Jelszó: kavandra2026
```

## Környezeti változók

Másold az `.env.example` fájlt `.env.local` néven, és töltsd ki a kulcsokat, ha valódi Supabase vagy Stripe integrációt szeretnél.

```bash
cp .env.example .env.local
```

A jelenlegi demó localStorage alapú mock működést használ, ezért kulcsok nélkül is fut.

## Vercel deploy

1. Töltsd fel a projektet GitHubra.
2. Importáld Vercelben Next.js projektként.
3. Ha Supabase vagy Stripe integrációt kötsz be, add meg a szükséges environment változókat.
4. Deploy.

## Supabase adatmodell javaslat

```sql
create table users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  created_at timestamptz default now()
);

create table menu_items (
  id text primary key,
  category text not null,
  name text not null,
  description text not null,
  price integer not null,
  allergens text,
  featured boolean default false
);

create table orders (
  id text primary key,
  user_id uuid references users(id),
  customer jsonb not null,
  items jsonb not null,
  total integer not null,
  payment_method text not null,
  status text not null default 'Függőben',
  created_at timestamptz default now()
);
```

## Projektstruktúra

```text
app/
  admin/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  AuthPanel.tsx
  Button.tsx
  CartPanel.tsx
  HomeApp.tsx
  MenuCard.tsx
  MobileNav.tsx
  OrdersPanel.tsx
  PwaRegister.tsx
lib/
  menu.ts
  storage.ts
  store.tsx
  supabase.ts
  types.ts
public/
  icon.svg
  manifest.json
  sw.js
```
