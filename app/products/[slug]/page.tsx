import { Metadata } from "next";
import { getAllProducts, getProductById } from "@/services/products";
import { ProductType } from "@/types/products";
import ProductDetails from "@/components/ProductDetails";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductById(params.slug);

  return {
    title: `Product | ${product.title}`,
    description: "Product Item",
  };
}

async function SingleProduct({ params }: { params: { slug: string } }) {
  const product = await getProductById(params.slug);

  return (
    <div>
      <h1 className="flex gap-8 text-2xl mb-4">
        <span className="font-semibold">Product Id</span>
        <span className="text-gray-600">{params.slug}</span>
      </h1>
      <ProductDetails product={product} />
    </div>
  );
}

export default SingleProduct;
