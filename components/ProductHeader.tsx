import Dropdown from "./Dropdown";
import { useProductsContext } from "@/context/ProductsContext";
import { sortOptionsFilter } from "@/constants/sortOptions";

function ProductHeader() {
  const { filteredSortedProducts, sortProducts } = useProductsContext();
  return (
    <section className="mb-4 flex justify-between gap-8">
      <p className="flex gap-2 text-gray-700">
        <span className="text-gray-600">No.of products : </span>
        <span className="font-semibold">{filteredSortedProducts.length}</span>
      </p>
      <Dropdown
        label={"Sort"}
        options={sortOptionsFilter}
        onSelect={sortProducts}
      />
    </section>
  );
}
export default ProductHeader;
