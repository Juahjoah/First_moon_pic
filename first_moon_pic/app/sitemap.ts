import { photos } from "@/lib/photos";

export default function sitemap() {
  const baseUrl = "https://https://www.firstmoonpic.co.kr";

  const allPhotos = Object.values(photos).flat();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),

      // 👇 이게 핵심 (이미지 SEO)
      images: allPhotos.map((photo) => ({
        url: `${baseUrl}${photo.src}`, // 중요
        title: photo.title,
        caption: photo.description,
      })),
    },
  ];
}
