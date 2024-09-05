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

  // if (loading) {
  //   return (
  //     <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-16 lg:px-0">
  //       {Array.from({ length: 5 }).map((_, index) => {
  //         return <CardSkeleton key={index} />;
  //       })}
  //     </ul>
  //   );
  // }

  if (error) {
    return <p>Something went wrong... {error}</p>;
  }

  if (!loading && filteredSortedProducts.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <section>
      <div className="mb-4 flex justify-between gap-8">
        <p className="flex gap-2 text-gray-700">
          <span className="text-gray-600">No.of products : </span>
          <span className="font-semibold">{filteredSortedProducts.length}</span>
        </p>
        <Dropdown
          label={"Sort"}
          options={sortOptionsFilter}
          onSelect={sortProducts}
        />
      </div>
      {/* <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredSortedProducts.slice(0, 20).map((product: ProductType) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </ul> */}
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
    </section>
  );
}
