import {
  Footer,
  Name,
  Price,
  productCardContainer,
} from "./product.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { price, name, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddItemToCart = () => addItemToCart(product);

  return (
    <productCardContainer>
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
        onClick={handleAddItemToCart}
      >
        Add to card
      </Button>
    </productCardContainer>
  );
};

export default ProductCard;
