"use client";
import Link from "next/link";
import { Suspense, useState } from "react";
import { getAllProducts } from "@/services/products";
import { ProductType } from "@/types/products";
import ProductGallery from "@/components/ProductGallery";
import SearchBar from "@/components/SearchBar";
import { useProductsContext } from "@/context/ProductsContext";

function Products() {
  const { filterProducts } = useProductsContext();

  return (
    <div>
      <h1 className="text-4xl mb-8 font-bold text-blue-950 opacity-95 text-center">
        Product Gallery
      </h1>
      <SearchBar onSearch={filterProducts} placeHolder="Search by title..." />
      <ProductGallery />
    </div>
  );
}

export default Products;
