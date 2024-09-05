import { sortOptionsFilter } from "@/constants/sortOptions";
import { useProductsContext } from "@/context/ProductsContext";
import Dropdown from "./Dropdown";

function ProductHeader() {
  const { filteredSortedProducts, sortProducts } = useProductsContext();
  return (
    <section className="mb-4 flex justify-between items-center gap-4 flex-col sm:flex-row">
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
