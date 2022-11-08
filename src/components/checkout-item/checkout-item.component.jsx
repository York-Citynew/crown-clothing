import { useContext } from "react"
import { DropdownContext } from "../../contexts/dropdown.context"
import "./checkout-item.styles.scss"

const CheckoutItem = ({cartItem})=> {
    const {name, imageUrl, price, quantity} = cartItem
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(DropdownContext)
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={ ()=>addItemToCart(cartItem) }>&#10094;</div>
                <span className="value">{cartItem.quantity}</span>
                <div onClick={ ()=>removeItemFromCart(cartItem) }>&#10095;</div>
            </span>
            <span className="price">{price*quantity}</span>
            <div className="remove-button" onClick={()=>clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}
export default CheckoutItem