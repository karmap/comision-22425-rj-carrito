import React, { useState } from 'react'
import { products as productsDB } from '../../lib/products'
import ItemDetail from './ItemDetail'

const ItemList = () => {

    const [products, setproducts] = useState(productsDB)

    return (
        <div>
            <h2>Todos los productos</h2>
            {products.map( p => 
                <ItemDetail key={p.id} product={p}></ItemDetail>
            )}
        </div>
    )
}

export default ItemList
