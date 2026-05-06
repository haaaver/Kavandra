import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PwaRegister } from "@/components/PwaRegister";
import { StoreProvider } from "@/lib/store";

export const metadata: Metadata = {
  title: "Kavandra Pizzéria & Étterem",
  description: "Modern online rendelési felület a Kavandra Pizzéria & Étterem számára.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Kavandra"
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
