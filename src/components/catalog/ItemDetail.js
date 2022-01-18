import React, { useContext } from 'react'
import { CartContext } from '../../store/cart-context'

const ItemDetail = ({product}) => {

    const {id, name, desc, price} = product
    const {addItem} = useContext(CartContext)

    const addHandler = () => {
        addItem( {id, name, price, quantity: 1} )
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>Descripción {desc}</p>
            <p>Precio {price}</p>
            <button onClick={addHandler}>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail
