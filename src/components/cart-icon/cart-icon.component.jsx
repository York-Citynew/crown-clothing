import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss"
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context"

const CartIcon = ()=> {
    const {setDropdown, cartItems} = useContext(DropdownContext)
    const toggleDropdown = ()=>setDropdown(prev=>!prev)
    return (
        <div onClick={toggleDropdown} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">
                {cartItems.reduce((total, item)=>{
                    return total + item.quantity
                }, 0)}
            </span>
        </div>
    )
}
export default CartIcon