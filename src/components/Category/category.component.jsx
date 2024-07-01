import React from "react";
import "./category.style.scss";
import categories from "../../assets/arrayCategories/categories";
import CategoryItem from "../category-item/category-item.component";

const Category = () => {
  return (
    <>
      <div className="categories-container">
        {categories.map((Category) => (
          <CategoryItem key={Category.id} Category={Category} />
        ))}
      </div>
    </>
  );
};

export default Category;
