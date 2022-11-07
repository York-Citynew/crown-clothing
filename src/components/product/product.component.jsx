import "./product.styles.scss"

import { useContext } from "react"
import { DropdownContext } from "../../contexts/dropdown.context"

import Button from "../button/button.component"

const ProductCard = ({product})=> {
    const {price,name,imageUrl} = product
    const {addItemToCart} = useContext(DropdownContext)

    const handleAddItemToCart = ()=> addItemToCart(product)

    return (
        <div className="product-card-container">
            <img 
                src={imageUrl}
                alt={name}
            />
            <div className="footer">
                <span className="price">{price}</span>
                <span className="name">{name}</span>
            </div>
            <Button buttonType="inverted" onClick={handleAddItemToCart}>Add to card</Button>
        </div>
    )
}

export default ProductCard