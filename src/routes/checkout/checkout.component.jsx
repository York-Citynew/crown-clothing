import { useContext } from "react"
import { DropdownContext } from "../../contexts/dropdown.context"

import CheckoutItem from "../../components/checkout-item/checkout-item.component"

import "./checkout.styles.scss"

const Checkout= () => {
    const { cartItems } = useContext(DropdownContext)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Discription</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </div>
            {
                cartItems.map(cartItem=>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
            }
                <span className="total">
                    TOTAL: ${cartItems.reduce((total, cartItem)=> total+ cartItem.quantity*cartItem.price,0)}
                </span>
        </div>
    )
}

export default Checkout