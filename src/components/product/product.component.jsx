import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product.styles.jsx";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/features/cart/cart-slice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { price, name, imageUrl } = product;

  const AddCartItemHandler = () => dispatch(addCartItem(product));

  return (
    <ProductCardContainer>
      <img
        src={imageUrl}
        alt={name}
      />
      <Footer>
        <Price>{price}</Price>
        <Name>{name}</Name>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={AddCartItemHandler}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
