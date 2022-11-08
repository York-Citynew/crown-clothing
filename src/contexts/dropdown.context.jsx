import { createContext, useState } from "react";
const addCartItem = (cartItems, productToAdd) => {
    const existingCardItem = cartItems.find(item => item.id === productToAdd.id)

    if (existingCardItem) {
        return cartItems.map(item => 
                item.id === productToAdd.id?
                {...item, quantity: item.quantity +1}:
                item
        )
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}
const removeCartItem = (cartItems, productToRemove) => {
    const singleItem = productToRemove.quantity === 1
    if (singleItem) {
        return cartItems.filter(cartItem=> cartItem !== productToRemove)
    }
    return cartItems.map(cartItem => 
        cartItem.id === productToRemove.id?
        {...cartItem, quantity: cartItem.quantity -1}:
        cartItem
    )
}
const clearCartItem = (cartItems, productToClear)=> {
    return cartItems.filter(cartItem=> cartItem !== productToClear)
}
export const DropdownContext = createContext({
    dropdown: false,
    setDropdown: ()=> {},
    cartItems: [],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    removeAllFromCart: ()=>{}
})

export const DropdownProvider = ({children})=>{
    const [dropdown, setDropdown] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const clearItemFromCart = productToClear => {
        setCartItems(clearCartItem(cartItems, productToClear))
    }

    const value= {
        dropdown, setDropdown, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems
    }
    return (
        <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
    )
}