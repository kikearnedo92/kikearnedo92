// pawds-frontend/src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        // Asegúrate de que el item tenga un id, name y price
        if (item.id && item.name && item.price) {
            setCartItems((prevItems) => [...prevItems, item]);
        } else {
            console.warn('Item missing required fields');
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
