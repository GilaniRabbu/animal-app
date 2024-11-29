import React, { useState } from "react";
import Modal from "./Modal";
import { Category, Animal } from "@/utils/types"; // Import shared types

interface AddAnimalFormProps {
  categories: Category[]; // Use the `Category` type
  onAddAnimal: (animal: Animal) => void; // Use the `Animal` type
}

export default function AddAnimalForm({
  categories,
  onAddAnimal,
}: AddAnimalFormProps) {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && categoryId && image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onAddAnimal({
          _id: Date.now().toString(),
          name,
          category: categoryId,
          imageUrl: reader.result as string, // FileReader result is a string
        });
      };
      reader.readAsDataURL(image);
      setName("");
      setCategoryId("");
      setImage(null);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer ml-2 px-6 py-2 rounded-full font-medium border text-white border-white"
      >
        Add Animal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2>Add Animal</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Animal name"
            className="border p-2 rounded outline-none w-full block"
          />
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files[0]);
              }
            }}
            className="w-full"
          />
          <button
            type="submit"
            className="px-4 py-2 w-full bg-black text-white rounded"
          >
            Add Animal
          </button>
        </form>
      </Modal>
    </>
  );
}
