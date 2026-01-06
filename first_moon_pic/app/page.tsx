import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Gallery from "@/components/gallery/Gallery";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-4xl font-bold">First Picture of the Moon</h1>
        <Gallery />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
}
