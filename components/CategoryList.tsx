import React from "react";

export default function CategoryList({ categories, onSelectCategory }) {
  return (
    <div>
      <ul className="flex gap-2 justify-start flex-wrap">
        <button
          className="cursor-pointer px-6 py-2 rounded-full font-medium border text-green-500 border-green-600 hover:bg-green-100 hover:text-green-600 transition-all duration-300"
          onClick={() => onSelectCategory(null)} // Assuming null or an empty selection shows all animals
        >
          All
        </button>
        {categories.map((category) => (
          <li
            key={category._id}
            className="cursor-pointer px-6 py-2 rounded-full font-medium border text-green-500 border-green-600 hover:bg-green-100 hover:text-green-600 transition-all duration-300"
            onClick={() => onSelectCategory(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
