import React from "react";
import { Category } from "@/utils/types"; // Import shared types

interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (category: Category | null) => void; // Allow selecting a category or clearing the selection
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onSelectCategory,
}) => {
  return (
    <div>
      <ul className="flex gap-2 justify-start flex-wrap">
        <button
          className="cursor-pointer px-6 py-2 rounded-full font-medium border text-green-500 border-green-600 hover:border-red-700 hover:text-red-700 transition-all duration-300"
          onClick={() => onSelectCategory(null)} // Show all animals when "All" is selected
        >
          All
        </button>
        {categories.map((category) => (
          <li
            key={category._id}
            className="cursor-pointer px-6 py-2 rounded-full font-medium border text-green-500 border-green-600 hover:border-red-700 hover:text-red-700 transition-all duration-300"
            onClick={() => onSelectCategory(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
