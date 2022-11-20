import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const categoriesEl = Object.keys(categoriesMap).map((title) => {
    //???????????
    return (
      <CategoryPreview
        key={title}
        products={categoriesMap[title]}
        title={title}
      />
    );
  });
  return <Fragment>{categoriesEl}</Fragment>;
};
export default CategoriesPreview;
