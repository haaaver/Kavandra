export type MenuCategory =
  | "Antipasti"
  | "Levesek"
  | "Főételek"
  | "Pizzák"
  | "Prémium pizzák"
  | "Burgerek"
  | "Tészták"
  | "Gyros"
  | "Desszertek";

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  allergens?: string;
  featured?: boolean;
};

export type CartItem = MenuItem & {
  quantity: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Account = User & {
  password: string;
};

export type PaymentMethod = "card" | "cod";

export type OrderStatus = "Függőben" | "Készül" | "Kiszállítva";

export type CustomerDetails = {
  name: string;
  address: string;
  phone: string;
  note?: string;
};

export type Order = {
  id: string;
  userId?: string;
  customer: CustomerDetails;
  items: CartItem[];
  total: number;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  createdAt: string;
};
