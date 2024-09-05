import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-12 w-full text-center">
      <Link href="products" className="text-blue-900 hover:underline">
        Product Gallery
      </Link>
    </main>
  );
}
