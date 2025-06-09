import React, { Children } from 'react'
import { createContext,useState,useEffect } from 'react'

export const cartContext=createContext();

export const CartProvider=({Children})=>{};

const [cartItems,setCartItems]=useState([]);

const addToCart=(item)=>{
    const isItemInCart=cartItems.find((cartItem)=>cartItem.id === item.id);

    if(isItemInCart){
        setCartItems();
    }
}
