import React, { useContext, useState } from 'react'
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
   const {product}=props;
//    console.log(props);
   const{addToCart}=useContext(ShopContext);
   const [size,setSize]=useState("S");
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt=""/>
            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_dull_icon} alt=""/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old"> ${product.old_price}</div>
                    <div className="productdisplay-right-price-new"> ${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                <p className="productdisplay-right-description-paragraph">
                   A lightweight, usually knitted, pullover shirt,
                    close-fitting and with around neckline and short sleeves,
                     worn as an under shirt or outer garment.
                   </p>
            </div>
            <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div onClick={()=>setSize("S")} style={{border:size==="S"?"2px solid #ff4141":"1px solid #ebebeb"}}>S</div>
                        <div onClick={()=>setSize("M")} style={{border:size==="M"?"2px solid #ff4141":"1px solid #ebebeb"}}>M</div>
                        <div onClick={()=>setSize("L")} style={{border:size==="L"?"2px solid #ff4141":"1px solid #ebebeb"}}>L</div>
                        <div onClick={()=>setSize("XL")} style={{border:size==="XL"?"2px solid #ff4141":"1px solid #ebebeb"}}>XL</div>
                        <div onClick={()=>setSize("XXL")} style={{border:size==="XXL"?"2px solid #ff4141":"1px solid #ebebeb"}}>XXL</div>
                    </div>
            </div>
            <button onClick={()=>{addToCart(product.id,size)}}>ADD TO CART</button>
            <p className="producatdisplay-right-category"><span>Category :</span>{product.category} ,T-Shirt ,Crop Top</p>
            <p className="producatdisplay-right-category"><span>Tags :</span>Modern ,Latest</p>

        </div>

    </div>
  )
}

export default ProductDisplay