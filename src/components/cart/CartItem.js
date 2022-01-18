import React from 'react'

const CartItem = ({item, removeItem}) => {

    const removeHandler = () => {
        removeItem(item.id)
    }

    return (
        <div>
            <p>{item.name}: {item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={removeHandler}>Eliminar</button>
        </div>
    )
}

export default CartItem
