import { getAllProducts } from "@/services/products";
import { ProductType } from "@/types/products";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import Dropdown, { IOption } from "./Dropdown";
import { useProductsContext } from "@/context/ProductsContext";
import { sortOptionsFilter } from "@/constants/sortOptions";
import CardSkeleton from "./CardSkeleton";
import InfiniteScroll from "./InfiniteScroll";

export default function ProductGallery() {
  const {
    loading,
    error,
    filteredSortedProducts,
    sortProducts,
    fetchProducts,
    hasMoreData,
  } = useProductsContext();

  if (error) {
    return <p>Something went wrong... {error}</p>;
  }

  if (!loading && filteredSortedProducts.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <>
      <InfiniteScroll
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        fetchData={fetchProducts}
        data={filteredSortedProducts}
        hasMoreData={hasMoreData}
        loading={loading}
        loader={
          <>
            {Array.from({ length: 8 }).map((_, index) => {
              return <CardSkeleton key={index} />;
            })}
          </>
        }
        renderItem={(product: ProductType, index: number, ref) => {
          return (
            <ProductItem product={product} key={product.id} productRef={ref} />
          );
        }}
      />
    </>
  );
}
