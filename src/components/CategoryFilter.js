import React, { useState } from 'react';

const CategoryFilter = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2>Categories</h2>
      {categories.map(category => (
        <button
          key={category}
          className={category === selectedCategory ? 'selected' : ''}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
