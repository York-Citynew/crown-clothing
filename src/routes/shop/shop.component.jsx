import { useContext } from "react"
import { ProductsContext } from "../../contexts/products.context"

import "./shop.styles.scss"

import ProductCard from "../../components/product/product.component"

const Shop = ()=> {
    const {products} = useContext(ProductsContext)

    const productsEl = products.map((product)=> {
        return (
            <ProductCard 
            id={product.id}
            product={product}
            />
        )
    })
    return (
        <div className="products-container">
            {productsEl}
        </div>
    )
}
export default Shop