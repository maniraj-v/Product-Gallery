import { useProductsContext } from "@/context/ProductsContext";
import { ProductType } from "@/types/products";
import CardSkeleton from "./CardSkeleton";
import InfiniteScroll from "./InfiniteScroll";
import ProductItem from "./ProductItem";

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
        renderItem={(product: ProductType, index: number, ref: any) => {
          return (
            <ProductItem product={product} key={product.id} productRef={ref} />
          );
        }}
      />
    </>
  );
}
