import {
  CartItemContainer,
  ItemDetails,
  Name,
  Img,
} from "./cart-item.styles.jsx";
const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <Img
        src={imageUrl}
        alt={name}
      />
      <ItemDetails>
        <Name>{name}</Name>
        <span className='price'>
          {quantity} * ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
