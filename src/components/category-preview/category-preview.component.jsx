import ProductCard from "../product/product.component";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ products, title }) => {
  const productsEl4 = products.slice(0, 4).map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
      />
    );
  });
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>{productsEl4}</Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
