import React from "react";
import { Animal } from "@/utils/types"; // Import shared type

interface AnimalListProps {
  animals: Animal[];
}

const AnimalList: React.FC<AnimalListProps> = ({ animals }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {animals.map((animal) => (
        <div key={animal._id} className="">
          <div className="w-[120px] h-[120px] flex justify-center items-center p-5 mb-2 bg-[#141414] rounded-lg">
            <img
              src={animal.imageUrl}
              alt={animal.name}
              className="w-auto h-auto object-cover"
            />
          </div>
          <h3 className="font-medium text-center uppercase">{animal.name}</h3>
          {/* <p className="text-sm text-gray-500">{animal.category}</p> */}
        </div>
      ))}
    </div>
  );
};

export default AnimalList;
