import { useState } from "react";
import { useReducer } from "react";
import { createContext } from "react";
const addCartItem = (cartItems, productToAdd) => {
  const existingCardItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCardItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
  const singleItem = productToRemove.quantity === 1;
  if (singleItem) {
    return cartItems.filter((cartItem) => cartItem !== productToRemove);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem !== productToClear);
};
export const CartContext = createContext({
  dropdown: false,
  setDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeAllFromCart: () => {},
});

// const ACTION_TYPES = {
//   SET_CART_ITEMS: "SET_CART_ITEMS",
// };
// const INITIAL_STATE = {
//   cartItems: [],
// };
// const cartReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     default:
//       throw new Error(`unhandled type: ${type}`);
//   }
// };

export const CartProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };
  const value = {
    dropdown,
    setDropdown,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// const [{ cartItems }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

// const updateCartItemsReducer = (newCartItems) => {
//   const payload = { newCartItems };
//   dispatch({ type: ACTION_TYPES.SET_CART_ITEMS, payload });
// };

// const addItemToCart = (productToAdd) => {
//   const newCartItems = addCartItem(cartItems, productToAdd);
//   console.log(newCartItems);
//   updateCartItemsReducer(newCartItems);
// };
// const removeItemFromCart = (productToRemove) => {
//   const newCartItems = removeCartItem(cartItems, productToRemove);
//   updateCartItemsReducer(newCartItems);
// };
// const clearItemFromCart = (productToClear) => {
//   const newCartItems = clearCartItem(cartItems, productToClear);
//   updateCartItemsReducer(newCartItems);
// };
