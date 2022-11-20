import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Img,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img
          src={imageUrl}
          alt={name}
        />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => addItemToCart(cartItem)}>&#10094;</Arrow>
        <Value>{cartItem.quantity}</Value>
        <Arrow onClick={() => removeItemFromCart(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Price>{price * quantity}</Price>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
