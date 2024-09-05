"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageProps = {
  alt: string;
  src: string;
  height?: number;
  width?: number;
  className?: string;
  loading?: "eager" | "lazy" | undefined;
};

export default function ImageWithBlur({
  alt,
  src,
  height,
  width,
  className,
  loading,
}: ImageProps) {
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <Image
      alt={alt}
      src={src}
      height={height}
      width={width}
      loading={loading}
      onLoad={() => setImageLoading(false)}
      className={cn(
        className,
        `${isImageLoading ? "blur bg-slate-200" : "remove-blur animate-none"}`
      )}
    />
  );
}
