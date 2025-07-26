import React,{createContext, useEffect, useState} from "react";
import all_product from "../Components/Assets/all_product"; 
export const ShopContext=createContext(null);


const getDefaultCart= ()=>{
    let cart={};
    for (let index = 0; index<all_product.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(getDefaultCart());
    const[totalAmount,setTotalAmount]=useState(null);
    const[allItems,setAllItems]=useState(null);
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        // console.log(cartItems);
    }
    // useEffect(()=>{
    //     console.log("cartItems updated:",cartItems)},[cartItems]
    // )
    
    // const addToCart=(itemId)=>{
    //     setCartItems((prev)=>{
    //         const newCart={...prev,[itemId]:prev[itemId]+1};
    //     console.log("newCart",newCart);
    //     return newCart;
    // })};
    
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    useEffect(()=>{
        let total=0;
        for(const item  in cartItems)
        {
        //   console.log(cartItems);
        //     // console.log("cartItems keys:",Object.keys(cartItems));
        //     console.log("test");
        //     console.log(`item: ${item},value:${cartItems[item]},type:${typeof(cartItems[item])}`)
            if (cartItems[item]>0)
            // console.log("hello");
              {  let itemInfo=all_product.find((product)=>product.id===Number(item));
                total += itemInfo.new_price * cartItems[item];
            }
            // console.log("hi");
            setTotalAmount(total);
        }
     
    },[cartItems])

    useEffect(()=>{
        let totalItems=0;
        for(const item in cartItems)
        {if(cartItems[item]>0)
        {totalItems+=cartItems[item];}
        }
        setAllItems(totalItems);
    },[cartItems])
     
     
    
    const contextValue={allItems,totalAmount,all_product,cartItems,addToCart,removeFromCart}
    // console.log(all_product.length);
    // console.log(cartItems);
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;