"use client";

import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";

import CategoryNav from "@/components/navigation/CategoryNav";
import Gallery from "@/components/gallery/Gallery";
import { CategoryId } from "@/lib/categories";

import Footer from "@/components/layout/Footer";


export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  
  return (
    <div className="min-h-screen bg-deepspace text-slate-200 selection:bg-slate-700 selection:text-white">
      <main className="mx-auto w-full max-w-7xl px-4 md:px-8 py-10 md:py-14">
        <section className="pt-10 md:pt-16 pb-10 md:pb-12 text-center">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="relative inline-block">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue-500/5 blur-[60px] scale-150" />
              <h1 className="logo-font animate-moon text-5xl md:text-7xl font-bold tracking-[0.2em] text-white">
                First_moon_pic
              </h1>
              <div className="mt-3 flex items-center justify-center gap-4">
                <div className="h-px w-10 md:w-14 bg-slate-800" />
                <p className="text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-slate-500 font-light">
                  @first_moon_pic
                </p>
                <div className="h-px w-10 md:w-14 bg-slate-800" />
              </div>
            </div>

            <p className="mx-auto max-w-md text-xs md:text-sm font-light leading-relaxed italic text-slate-500">
              사진작가 김상현입니다.
              <br className="hidden md:block" />
              kimsh020111@naver.com
            </p>
          </div>
        </section>
        <CategoryNav active={activeCategory} onChange={setActiveCategory} />
        <Gallery category={activeCategory} />
        <Analytics />
      </main>

      <Footer />
    </div>
  );
}