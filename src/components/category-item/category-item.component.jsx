import React from "react";
import "./category-item.style.scss";

const CategoryItem = ({ Category }) => {
  const { title, img } = Category;
  return (
    <>
      <div className="category-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
