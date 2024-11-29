import React, { useState } from "react";
import Modal from "./Modal";

interface AddCategoryFormProps {
  onAddCategory: (category: any) => void;
}

export default function AddCategoryForm({
  onAddCategory,
}: AddCategoryFormProps) {
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddCategory({ _id: Date.now().toString(), name });
      setName("");
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer px-6 py-2 mb-2 rounded-full font-medium border text-white border-white"
      >
        Add Category
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className="px-2 py-4">
          <h2>Add Category</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="New category name"
            className="border p-2 my-5 rounded outline-none w-full block"
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
