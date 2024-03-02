import React from "react";
import assetsObject from "../assects/assects";

const ProductCard =(props)=>{
    return (
        <div style={{height:300,maxWidth:250,backgroundColor:'white',margin:30,padding:10}}>
           <div><img src={assetsObject[props.imagePath]} height={100} width={200} alt="W3Schools.com"/></div>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
            <p>{props.button}</p>
            <div style={{height:30,width:100,backgroundColor:'green',color:'white'}}>Add to Cart</div>
            </div>
    )
}
export default ProductCard;