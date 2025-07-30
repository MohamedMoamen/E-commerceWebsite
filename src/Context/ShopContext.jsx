import React,{createContext, useEffect, useState} from "react";
import all_product from "../Components/Assets/all_product"; 
export const ShopContext=createContext(null);

const all_sizes=["S","M","L","XL","XXL"];
const getDefaultCart= ()=>{
    let cart={};
    for (let index = 0; index<all_product.length+1; index++) {
        let sizeValues={};
        for(let itemSize of all_sizes) 
        {
            sizeValues[itemSize]=0;
        }      
        cart[index]={
            sizes:sizeValues
        }
    }

    // console.log(cart);
    return cart;
}
const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(getDefaultCart());
    const[totalAmount,setTotalAmount]=useState(null);
    const[allItems,setAllItems]=useState(null);
    
    const addToCart=(itemId,itemSize)=>{
        // console.log(itemId);
        // console.log(itemSize);
        // console.log(cartItems[itemId].sizes[itemSize]);
        // setCartItems((prev)=>({...prev,[itemId].sizes[itemSize]:prev[itemId].sizes[itemSize]+1}));
        setCartItems((prev)=>({...prev,[itemId]:{...prev[itemId],sizes:{...prev[itemId].sizes,[itemSize]:prev[itemId].sizes[itemSize]+1}}}))
        console.log(cartItems);
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
    
    const removeFromCart=(itemId,itemSize)=>{
        setCartItems((prev)=>({...prev,[itemId]:{...prev[itemId],sizes:{...prev[itemId].sizes,[itemSize]:prev[itemId].sizes[itemSize]-1}}}))
    }
    useEffect(()=>{
        let total=0;
        Object.entries(cartItems).map(([id,item])=>(
            Object.entries(item.sizes).map(([size,quantity])=>
            {if(quantity>0)
            {
                let itemInfo=all_product.find((product)=>product.id===Number(id));
                total += itemInfo.new_price * quantity;
            }})
    )
        )
        setTotalAmount(total);
    },[cartItems])

    useEffect(()=>{
        let totalItems=0;
        Object.entries(cartItems).map(([id,item])=>(
            Object.entries(item.sizes).map(([size,quantity])=>
        {if(quantity>0)
        {totalItems+=quantity;}
        }
    )))
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