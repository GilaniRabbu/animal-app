import React, { useState } from "react";
import Modal from "./Modal";
import { Category } from "@/utils/types"; // Import the shared type for categories

interface AddCategoryFormProps {
  onAddCategory: (category: Category) => void; // Use the `Category` type
}

export default function AddCategoryForm({
  onAddCategory,
}: AddCategoryFormProps) {
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddCategory({ _id: Date.now().toString(), name }); // Create a new category object
      setName("");
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer glow-white px-6 py-2 mb-3 rounded-full font-medium border text-white border-white transition-all duration-300"
      >
        Add Category
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2>Add Category</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="New category name"
            className="border p-2 rounded outline-none w-full block"
          />
          <button
            type="submit"
            className="px-4 py-2 w-full bg-black text-white rounded"
          >
            Add Category
          </button>
        </form>
      </Modal>
    </>
  );
}
