import { ProductType } from "@/types/products";

const sleep = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

async function getAllProducts(start = 0, limit = 20): Promise<ProductType[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`
  );
  // Artificial delay to show loading effect when scrolling
  await sleep(2000);
  return await response.json();
}

async function getProductById(productId: string): Promise<ProductType> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${productId}`
  );
  return await response.json();
}

export { getAllProducts, getProductById };
