import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";

import CartegoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return (
          <CartegoryPreview key={title} title={title} products={product} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
