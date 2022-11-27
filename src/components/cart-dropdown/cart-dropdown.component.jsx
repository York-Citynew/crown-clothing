import {
  CartItems,
  EmptyMessage,
  CartDropDown,
} from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDown>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
    </CartDropDown>
  );
};
export default CartDropdown;
