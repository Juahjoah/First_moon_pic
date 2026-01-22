"use client";

import { categories, CategoryId } from "@/lib/categories";

interface CategoryNavProps {
  active: CategoryId;
  onChange: (category: CategoryId) => void;
}

const CategoryNav = ({ active, onChange }: CategoryNavProps) => {
  return (
    <nav
      className="
        mb-12 w-full
        overflow-x-auto no-scrollbar
      "
    >
      <ul className="mx-auto flex min-w-max justify-center gap-3 px-4">
        {categories.map((category) => {
          const isActive = active === category.id;

          return (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => onChange(category.id)}
                className={`
                  relative px-6 py-2.5 rounded-full
                  text-[10px] md:text-xs
                  uppercase tracking-widest
                  transition-all duration-500
                  border
                  ${
                    isActive
                      ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      : "text-slate-500 border-white/5 hover:border-white/20 hover:text-slate-200"
                  }
                `}
                aria-current={isActive ? "true" : undefined}
                title={category.description}
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
