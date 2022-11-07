import { createContext, useState } from "react";
const addCartItem = (cartItems, productToAdd) => {
    const contains = cartItems.find(item => item.id === productToAdd.id)

    if (contains) {
        return cartItems.map(item => 
                item.id === productToAdd.id?
                {...item, quantity: item.quantity +1}:
                item
        )
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}
export const DropdownContext = createContext({
    dropdown: false,
    setDropdown: ()=> {},
    cartItems: [],
    addItemToCart: ()=>{}
})

export const DropdownProvider = ({children})=>{
    const [dropdown, setDropdown] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value= {
        dropdown, setDropdown, addItemToCart, cartItems
    }
    return (
        <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
    )
}