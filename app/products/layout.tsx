"use client";
import { ProductsProvider } from "@/context/ProductsContext";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductsProvider>
      <main>{children}</main>
    </ProductsProvider>
  );
}
