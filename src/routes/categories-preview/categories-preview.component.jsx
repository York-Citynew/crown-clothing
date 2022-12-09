import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import categoriesMapper from "../../store/features/categories/categories-mapper";
const CategoriesPreview = () => {
  const { isLoading, categories } = useSelector((store) => store.categories);
  const categoriesMap = categoriesMapper(categories);
  const categoriesEl = Object.keys(categoriesMap).map((title) => (
    <CategoryPreview
      key={title}
      products={categoriesMap[title]}
      title={title}
    />
  ));
  return isLoading ? <Spinner /> : <Fragment>{categoriesEl}</Fragment>;
};
export default CategoriesPreview;
