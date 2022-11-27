import { useDispatch, useSelector } from "react-redux";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";
import { toggleIsCartOpen } from "../../store/features/cart/cart-slice";

const CartIcon = () => {
  const dispatch = useDispatch();
  const { cartCount } = useSelector((store) => store.cart);
  const toggleIsCartOpenHandler = () => dispatch(toggleIsCartOpen());
  return (
    <CartIconContainer onClick={toggleIsCartOpenHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
