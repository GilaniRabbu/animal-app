export interface Category {
  _id: string;
  name: string;
}

export interface Animal {
  _id: string;
  name: string;
  category: string; // Refers to the `_id` of a Category
  imageUrl: string;
}
