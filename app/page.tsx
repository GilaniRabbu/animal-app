"use client";

import { useState, useEffect } from "react";
import CategoryList from "@/components/CategoryList";
import AnimalList from "@/components/AnimalList";
import AddCategoryForm from "@/components/AddCategoryForm";
import AddAnimalForm from "@/components/AddAnimalForm";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Load data from localStorage on component mount
    const savedCategories = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );
    const savedAnimals = JSON.parse(localStorage.getItem("animals") || "[]");
    setCategories(savedCategories);
    setAnimals(savedAnimals);
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem("categories", JSON.stringify(categories));
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [categories, animals]);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex gap-2 justify-between flex-wrap">
        <div>
          <CategoryList
            categories={categories}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        <div className="w-1/4">
          <AddCategoryForm
            onAddCategory={(category) =>
              setCategories([...categories, category])
            }
          />
          <AddAnimalForm
            categories={categories}
            onAddAnimal={(animal) => setAnimals([...animals, animal])}
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
