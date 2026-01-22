"use client";

import Image from "next/image";
import { photos } from "@/lib/photos";
import type { CategoryId } from "@/lib/categories";

interface GalleryProps {
  category: CategoryId;
}

const Gallery = ({ category }: GalleryProps) => {
  let images;

  if (category === "all") {
    images = Object.values(photos).flat();
  } else {
    images = photos[category];
  }

  return (
    <section className="w-full">
      <h2 className="mb-8 text-2xl font-bold">Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((photo, index) => (
          <div
            key={index}
            className="relative w-full aspect-[3/4] overflow-hidden bg-gray-200"
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
