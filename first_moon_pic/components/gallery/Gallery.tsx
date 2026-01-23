"use client";

import Image from "next/image";
import { photos } from "@/lib/photos";
import type { CategoryId } from "@/lib/categories";

interface GalleryProps {
  category: CategoryId;
}

const Gallery = ({ category }: GalleryProps) => {
  const images =
    category === "all" ? Object.values(photos).flat() : photos[category];

  return (
    <section className="w-full">
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
          md:gap-8
        "
      >
        {images.map((photo, index) => (
          <div
            key={index}
            className="
              relative
              w-full
              aspect-[4/5]
              md:aspect-[3/4]
              overflow-hidden
            "
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              className="object-cover"
              sizes="
                (min-width: 768px) 50vw,
                100vw
              "
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
