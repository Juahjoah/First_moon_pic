"use client";

import { categories, CategoryId } from "@/lib/categories";

interface CategoryNavProps {
  active: CategoryId;
  onChange: (category: CategoryId) => void;
}

const CategoryNav = ({ active, onChange }: CategoryNavProps) => {
  return (
    <nav className="mb-8 w-full">
      <ul
        className="
          mx-auto
          flex
          flex-wrap
          justify-center
          gap-2
          sm:gap-3

          max-w-3xl
          px-4
        "
      >
        {categories.map((category) => {
          const isActive = active === category.id;

          return (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => onChange(category.id)}
                aria-current={isActive ? "true" : undefined}
                title={category.description}
                className={`
                  relative
                  rounded-full
                  border
                  transition-all duration-300

                  px-4 py-2
                  sm:px-5 sm:py-2.5

                  text-[0.7rem] sm:text-xs
                  uppercase font-medium

                  tracking-[0.15em]
                  sm:tracking-[0.25em]

                  ${
                    isActive
                      ? "bg-white text-black border-white shadow-[0_0_16px_rgba(255,255,255,0.25)]"
                      : "text-slate-500 border-white/5 hover:border-white/20 hover:text-slate-200"
                  }
                `}
              >
                {category.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoryNav;
