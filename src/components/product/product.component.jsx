import "./product.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { price, name, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddItemToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img
        src={imageUrl}
        alt={name}
      />
      <div className='footer'>
        <span className='price'>{price}</span>
        <span className='name'>{name}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={handleAddItemToCart}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
