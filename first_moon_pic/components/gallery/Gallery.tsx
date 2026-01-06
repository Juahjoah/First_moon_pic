"use client";

import Image from "next/image";
import { photos } from "@/lib/photos";

const Gallery = () => {
  const images = photos.fashion;

  return (
    <div className="w-full">
      <h2 className="mb-4 text-2xl font-bold">Gallery</h2>

      <div className="flex gap-4 overflow-x-auto">
        {images.map((photo, index) => (
          <div
            key={index}
            className="relative h-[400px] min-w-[300px] flex-shrink-0"
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
