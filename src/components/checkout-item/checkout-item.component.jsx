import { useDispatch } from "react-redux";
import { memo } from "react";
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
import {
  addCartItem,
  clearCartItem,
  removeCartItem,
} from "../../store/features/cart/cart-slice.js";

const CheckoutItem = memo(({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const addCartItemHandler = () => dispatch(addCartItem(cartItem));
  const removeCartItemHandler = () => dispatch(removeCartItem(cartItem));
  const clearCartItemHandler = () => dispatch(clearCartItem(cartItem));
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
        <Arrow onClick={addCartItemHandler}>&#10094;</Arrow>
        <Value>{cartItem.quantity}</Value>
        <Arrow onClick={removeCartItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price * quantity}</Price>
      <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
});
export default CheckoutItem;
