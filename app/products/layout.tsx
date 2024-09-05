"use client";
import { ProductsProvider } from "@/context/ProductsContext";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductsProvider>
      <main className="flex justify-center items-center">{children}</main>
    </ProductsProvider>
  );
}
