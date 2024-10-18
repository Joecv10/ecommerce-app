import categories from "../../assets/arrayCategories/categories";
import DirectoryItem from "../directory-item/directory-item.component";

import "./category.style.scss";

const Category = () => {
  return (
    <>
      <div className="categories-container">
        {categories.map((Category) => (
          <DirectoryItem key={Category.id} Category={Category} />
        ))}
      </div>
    </>
  );
};

export default Category;
