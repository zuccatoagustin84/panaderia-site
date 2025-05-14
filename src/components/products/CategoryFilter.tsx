import React from 'react';
import { categories } from '../../data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-3">Categorías</h2>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-md text-sm ${
            selectedCategory === '' 
              ? 'bg-primary-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onSelectCategory('')}
        >
          Todos
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md text-sm ${
              selectedCategory === category.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;