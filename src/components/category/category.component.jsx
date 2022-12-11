import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../product/product.component";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import { useSelector } from "react-redux";
import categoriesMapper from "../../store/features/categories/categories-mapper";
import Spinner from "../../components/spinner/spinner.component";
const Category = () => {
  const { category } = useParams();
  const { isLoading } = useSelector((store) => store.categories);
  const { categories } = useSelector((store) => store.categories);
  const categoriesMap = categoriesMapper(categories);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return isLoading ? (
    <Spinner />
  ) : (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};
export default Category;
