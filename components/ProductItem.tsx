import { ProductType } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

interface IProductItem {
  product: ProductType;
}

export default function ProductItem({ product, productRef }: IProductItem) {
  const { albumId, id, title, url, thumbnailUrl } = product;
  const formattedTitle = title.slice(0, 1).toUpperCase() + title.slice(1);

  return (
    <li
      key={id}
      ref={productRef}
      className="max-w-[300px] w-full justify-self-center border border-gray-200 shadow-lg rounded-md overflow-hidden
      hover:scale-105 transition duration-300
      "
    >
      <Link href={`products/${id}`} className="block">
        <article>
          <div className="group w-full h-[150px] overflow-hidden">
            <Image
              src={thumbnailUrl}
              width={150}
              height={150}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-125 transition duration-300"
            />
          </div>
          <div className="px-6 py-4 text-sm">
            <div className="flex justify-between gap-4 mb-2">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-600">
                  Album Id
                </span>
                <span className="text-gray-800 pl-4">{albumId}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-600">Id</span>
                <span className="text-gray-800">{id}</span>
              </div>
            </div>
            <p
              className="text-gray-700"
              style={{ fontVariant: "titling-caps" }}
              title={formattedTitle}
            >
              {formattedTitle.length > 40
                ? `${formattedTitle.slice(0, 40)}...`
                : formattedTitle}
            </p>
          </div>
        </article>
      </Link>
    </li>
  );
}
