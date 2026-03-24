import { photos } from "@/lib/photos";

export default function sitemap() {
  const baseUrl = "https://www.firstmoonpic.co.kr";

  const allPhotos = Object.values(photos).flat();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      images: allPhotos.map((photo) => `${baseUrl}${photo.src}`),
    },
  ];
}
