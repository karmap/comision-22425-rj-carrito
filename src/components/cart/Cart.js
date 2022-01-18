import React, { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = () => {

    const {items, removeItem} = useContext(CartContext)

    return (
        <div>
            <h1>Carrito</h1> 
            {items.map( (i) =>
                <CartItem key={i.id} item={i} removeItem={removeItem}></CartItem>
            )}
            Total: {}
        </div>
    )
}

export default Cart
