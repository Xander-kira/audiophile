// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/cart/CartContext";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Pixel-perfect Audiophile build",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        <Providers>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
