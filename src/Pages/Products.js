import React from "react";
import ProductCard from "./ProductCard";
import '../Styles/Products.css'


const Products = () => {
    return (
        <div className="row main-products">

            <div className="row list-products">
                <ProductCard imagePath={'carrotIcon'} title={'Carrot'} desc={'Frest and organic carrot from the farm Frest and organic carrot from the farm'}></ProductCard>
                <ProductCard  imagePath={'beetIcon'} title={'Beet'} desc={'Frest and organic Beet from the farm Frest and organic carrot from the farm'}></ProductCard>
                <ProductCard imagePath={'cucumberIcon'} title={'Cucumber'} desc={'Frest and organic Cucumber from the farm Frest and organic carrot from the farm'}></ProductCard>
            </div>

            <div  className="row list-products">
                <ProductCard imagePath={'tomattoIcon'} title={'Tomato'} desc={'Frest and organic Tomato from the farm Frest and organic carrot from the farm'}></ProductCard>
                <ProductCard imagePath={'pumkinIcon'} title={'Pumpkin'} desc={'Frest and organic Pumpkin from the farm Frest and organic carrot from the farm'}></ProductCard>
                <ProductCard imagePath={'broccoliIcon'} title={'Broccoli'} desc={'Frest and organic Broccoli from the farm Frest and organic carrot from the farm'}></ProductCard>
            </div>

        </div>
    )
}
export default Products;