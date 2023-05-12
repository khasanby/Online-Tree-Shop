import React, { createContext, useState} from "react";
import data from "../components/data/db.json";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    let x = 1;
    for(let i=0; i<data.trees.length; i++) {
        for(let j=0; j<data.trees[i].trees.length; j++) {
            cart[x] = 0;
            x++;
        }
    }

    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [cartItemCount, setCartItemCount] = useState(0);

    const addToCart = (itemId, count) => {
        setCartItems((prevCartItems) => {
            return { ...prevCartItems, [itemId]: prevCartItems[itemId] + parseInt(count, 10) };
        });
        setCartItemCount((prevCartItemCount) => prevCartItemCount + parseInt(count, 10));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => {
            return {...prevCartItems, [itemId]: prevCartItems[itemId] - 1 };
        });
        setCartItemCount((prevCartItemCount) => {
            if(prevCartItemCount > 0) {
                return prevCartItemCount - 1;
            }
        });
    }

    const contextValue = {cartItems, addToCart, removeFromCart, cartItemCount};

    return <ShopContext.Provider value={contextValue}> { props.children } </ShopContext.Provider>;  
};