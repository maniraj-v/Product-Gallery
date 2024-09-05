import { ProductType } from "@/types/products";
import ImageWithBlur from "./ImageWithBlur";

interface IProductDetails {
  product: ProductType;
}

export default async function ProductDetails({ product }: IProductDetails) {
  const { id, title, url, albumId } = product;

  return (
    <section className="max-w-sm">
      <ImageWithBlur
        src={url}
        width={600}
        height={600}
        alt={title}
        className="w-[80%] aspect-square object-cover"
      />
      <div className="flex gap-4 flex-col my-4">
        <p className="grid grid-cols-6 gap-8">
          <span className="font-semibold col-span-2">Album ID</span>
          <span className="text-gray-600 col-span-4">{albumId}</span>
        </p>
        <p className="grid grid-cols-6 gap-8">
          <span className="font-semibold col-span-2">Title</span>
          <span className="text-gray-600 col-span-4">{title}</span>
        </p>
      </div>
    </section>
  );
}
