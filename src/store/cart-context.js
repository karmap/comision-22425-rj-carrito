import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {}
})

export const CartContextProvider = ( {children} ) => {

    const [itemsInCart, setItemsInCart] = useState([])

    useEffect(() => {
        console.log('items', itemsInCart);
    }, [itemsInCart])

    const addToCart = (item) => {
        setItemsInCart( (prevItems) => {
            return prevItems.concat(item)
        })
    }

    const removeFromCart = (itemId) => {
        setItemsInCart( (prevItems) => {
            return prevItems.filter( i => i.id !== itemId )
        })
    }

    const context = {
        items: itemsInCart,
        addItem: addToCart,
        removeItem: removeFromCart
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

