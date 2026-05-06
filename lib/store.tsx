"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { menuItems, takeawayFee } from "@/lib/menu";
import { storage } from "@/lib/storage";
import { Account, CartItem, CustomerDetails, MenuItem, Order, OrderStatus, PaymentMethod, User } from "@/lib/types";

type Store = {
  cart: CartItem[];
  user: User | null;
  orders: Order[];
  cartTotal: number;
  orderTotal: number;
  cartCount: number;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: string) => void;
  changeQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
  placeOrder: (customer: CustomerDetails, paymentMethod: PaymentMethod) => Order;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
};

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCart(storage.cart.get());
    setUser(storage.user.get());
    setOrders(storage.orders.get());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) storage.cart.set(cart);
  }, [cart, ready]);

  useEffect(() => {
    if (ready) storage.user.set(user);
  }, [user, ready]);

  useEffect(() => {
    if (ready) storage.orders.set(orders);
  }, [orders, ready]);

  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const orderTotal = cart.length ? cartTotal + takeawayFee : 0;

  const addToCart = (item: MenuItem) => {
    setCart((current) => {
      const existing = current.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const changeQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((current) => current.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const clearCart = () => setCart([]);

  const login = (email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const account = storage.accounts.get().find((storedAccount) => storedAccount.email === normalizedEmail);

    if (!account || account.password !== password) {
      throw new Error("Hibás email vagy jelszó.");
    }

    setUser({ id: account.id, email: account.email, name: account.name });
  };

  const register = (name: string, email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const accounts = storage.accounts.get();

    if (accounts.some((account) => account.email === normalizedEmail)) {
      throw new Error("Ezzel az email címmel már létezik fiók.");
    }

    const account: Account = {
      id: crypto.randomUUID(),
      name: name.trim() || "Kavandra vendég",
      email: normalizedEmail,
      password
    };

    storage.accounts.set([...accounts, account]);
    setUser({ id: account.id, name: account.name, email: account.email });
  };

  const logout = () => setUser(null);

  const placeOrder = (customer: CustomerDetails, paymentMethod: PaymentMethod) => {
    if (!cart.length) throw new Error("A kosár üres.");

    const order: Order = {
      id: `KV-${Date.now().toString().slice(-7)}`,
      userId: user?.id,
      customer,
      items: cart,
      total: orderTotal,
      paymentMethod,
      status: "Függőben",
      createdAt: new Date().toISOString()
    };

    setOrders((current) => [order, ...current]);
    clearCart();
    return order;
  };

  const updateOrderStatus = (id: string, status: OrderStatus) => {
    setOrders((current) => current.map((order) => (order.id === id ? { ...order, status } : order)));
  };

  const value: Store = {
    cart,
    user,
    orders,
    cartTotal,
    orderTotal,
    cartCount,
    addToCart,
    removeFromCart,
    changeQuantity,
    clearCart,
    login,
    register,
    logout,
    placeOrder,
    updateOrderStatus
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}

export const featuredItems = menuItems.filter((item) => item.featured);
