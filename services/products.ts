import { ProductType } from "@/types/products";

async function getAllProducts(): Promise<ProductType[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  return await response.json();
}

async function getProductById(productId: string): Promise<ProductType> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${productId}`
  );
  return await response.json();
}

export { getAllProducts, getProductById };
