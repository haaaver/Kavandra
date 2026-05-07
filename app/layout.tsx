import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PwaRegister } from "@/components/PwaRegister";
import { StoreProvider } from "@/lib/store";

export const metadata: Metadata = {
  title: "A PLACC Pizza Pasta & Grill",
  description: "Online rendelési felület az A PLACC Pizza Pasta & Grill számára.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png"
  },
  appleWebApp: {
    capable: true,
    title: "A PLACC",
    statusBarStyle: "default"
  }
};

export const viewport: Viewport = {
  themeColor: "#dcfff0",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body>
        <StoreProvider>
          <PwaRegister />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
