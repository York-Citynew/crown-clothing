import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import { useContext } from "react"
import { DropdownContext } from "../../contexts/dropdown.context"
import { useNavigate } from "react-router-dom"

const CartDropdown = ()=>{
    const { cartItems } = useContext(DropdownContext)
    const navigate = useNavigate()
    const navigateToCheckout  = ()=> {
        navigate('/checkout')
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(cartItem=>
                    <CartItem 
                    key={cartItem.id}
                    cartItem={cartItem}
                    />
                    )}
            </div>
            <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown