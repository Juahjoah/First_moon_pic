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
      <main className="w-full">
        <section className="pt-8 sm:pt-10 md:pt-16 pb-8 sm:pb-10 md:pb-12 text-center">
          <div className="mx-auto max-w-4xl px-4 space-y-6 sm:space-y-8">
            <div className="relative inline-block">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue-500/5 blur-[60px] scale-150" />

              <h1
                className="
                  logo-font animate-moon font-bold text-white
                  text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                  tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.2em]
                "
              >
                First_moon_pic
              </h1>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <div className="h-px w-6 sm:w-10 md:w-14 bg-slate-800" />
                <p
                  className="
                    uppercase font-light text-slate-500
                    text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem]
                    tracking-[0.25em] sm:tracking-[0.4em] md:tracking-[0.6em]
                  "
                >
                  @first_moon_pic
                </p>
                <div className="h-px w-6 sm:w-10 md:w-14 bg-slate-800" />
              </div>
            </div>

            <p
              className="
                mx-auto max-w-md
                text-[0.75rem] sm:text-sm
                font-light leading-relaxed italic text-slate-500
              "
            >
              사진작가 김상현입니다.
              <br className="hidden sm:block" />
              kimsh020111@naver.com
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <CategoryNav active={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="px-[10vw] md:px-[8vw] lg:px-[15vw]">
          <Gallery category={activeCategory} />
        </div>

        <Analytics />
      </main>

      <Footer />
    </div>
  );
}
