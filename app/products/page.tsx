"use client";
import Link from "next/link";
import { Suspense, useState } from "react";
import { getAllProducts } from "@/services/products";
import { ProductType } from "@/types/products";
import ProductGallery from "@/components/ProductGallery";
import SearchBar from "@/components/SearchBar";
import { useProductsContext } from "@/context/ProductsContext";
import ProductHeader from "@/components/ProductHeader";

function Products() {
  const { filterProducts } = useProductsContext();

  return (
    <main>
      <section>
        <h1 className="text-4xl mb-8 font-bold text-blue-950 opacity-95 text-center">
          Product Gallery
        </h1>
        <SearchBar onSearch={filterProducts} placeHolder="Search by title..." />
        <ProductHeader />
      </section>
      <section className="max-h-[400px] overflow-auto pr-4">
        <ProductGallery />
      </section>
    </main>
  );
}

export default Products;
