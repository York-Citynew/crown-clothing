import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../product/product.component";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import { useSelector } from "react-redux";
import categoriesMapper from "../../store/features/categories/categories-mapper";
const Category = () => {
  const { category } = useParams();
  const { categories } = useSelector((store) => store.categories);
  const categoriesMap = categoriesMapper(categories);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]); //problem: do we need categoriesMap any more?
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products && //problem: do we need products to protect our code?
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
