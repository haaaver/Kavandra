"use client";

import { Account, CartItem, Order, User } from "@/lib/types";

const read = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;

  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
};

const write = <T,>(key: string, value: T) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const storage = {
  cart: {
    get: () => read<CartItem[]>("kavandra:cart", []),
    set: (items: CartItem[]) => write("kavandra:cart", items)
  },
  user: {
    get: () => read<User | null>("kavandra:user", null),
    set: (user: User | null) => write("kavandra:user", user)
  },
  orders: {
    get: () => read<Order[]>("kavandra:orders", []),
    set: (orders: Order[]) => write("kavandra:orders", orders)
  },
  accounts: {
    get: () => read<Account[]>("kavandra:accounts", []),
    set: (accounts: Account[]) => write("kavandra:accounts", accounts)
  }
};
