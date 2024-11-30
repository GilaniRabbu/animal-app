"use client";

import { useState, useEffect } from "react";
import { Category, Animal } from "@/utils/types"; // Import shared types
import CategoryList from "@/components/CategoryList";
import AnimalList from "@/components/AnimalList";
import AddCategoryForm from "@/components/AddCategoryForm";
import AddAnimalForm from "@/components/AddAnimalForm";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  useEffect(() => {
    const savedCategories: Category[] = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );
    const savedAnimals: Animal[] = JSON.parse(
      localStorage.getItem("animals") || "[]"
    );
    setCategories(savedCategories);
    setAnimals(savedAnimals);
  }, []);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [categories, animals]);

  const handleAddCategory = (category: Category) => {
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  const handleAddAnimal = (animal: Animal) => {
    setAnimals((prevAnimals) => [...prevAnimals, animal]);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex gap-3 flex-wrap justify-between">
        <div>
          <CategoryList
            categories={categories}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        <div>
          <AddCategoryForm onAddCategory={handleAddCategory} />
          <AddAnimalForm
            categories={categories}
            onAddAnimal={handleAddAnimal}
          />
        </div>
      </div>
      <div className="mt-16">
        <AnimalList
          animals={animals.filter(
            (animal) =>
              !selectedCategory || animal.category === selectedCategory._id
          )}
        />
      </div>
    </div>
  );
}
