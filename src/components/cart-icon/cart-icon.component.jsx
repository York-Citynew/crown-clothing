import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { setDropdown, dropdown, cartItems } = useContext(CartContext);
  const toggleDropdown = () => setDropdown(!dropdown);
  return (
    <CartIconContainer onClick={toggleDropdown}>
      <ShoppingIcon />
      <ItemCount>
        {cartItems.reduce((total, item) => {
          return total + item.quantity;
        }, 0)}
      </ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
