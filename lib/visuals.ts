import { MenuItem } from "@/lib/types";

const categoryImages: Record<string, string> = {
  Antipasti: "https://images.unsplash.com/photo-1758157835961-5db4a033390b?auto=format&fit=crop&q=80&w=1200",
  Levesek: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200",
  Főételek: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
  Pizzák: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1200",
  "Prémium pizzák": "https://images.unsplash.com/photo-1758157835961-5db4a033390b?auto=format&fit=crop&q=80&w=1200",
  Burgerek: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200",
  Tészták: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=1200",
  Gyros: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&q=80&w=1200",
  Desszertek: "https://images.unsplash.com/photo-1542116021-0ff087fb0a41?auto=format&fit=crop&q=80&w=1200"
};

const itemImages: Record<string, string> = {
  "rose-kacsamell": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
  margherita: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1200",
  "mortadella-e-pistacchio": "https://images.unsplash.com/photo-1758157835961-5db4a033390b?auto=format&fit=crop&q=80&w=1200",
  "a-placc-burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200",
  "panna-cotta": "https://images.unsplash.com/photo-1542116021-0ff087fb0a41?auto=format&fit=crop&q=80&w=1200"
};

export function menuImage(item: MenuItem) {
  return itemImages[item.id] ?? categoryImages[item.category] ?? categoryImages.Pizzák;
}
