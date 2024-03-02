import React from "react";
import OtherCard from "./OtherCard";
import '../Styles/Other.css'
import image from "../img/freshmart.png"

const Other = () => {
    return (
        <><div className="row main-other" style={{
            backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
        }}> <div style={{color:'white', textAlign:'center', marginTop:'80px',fontWeight:100}}><h1>FRESH & NON-GMO PRODUCTS</h1>
        <p>A vegetable is the edible portion of a plant. Vegetables are usually grouped according to the portion of the plant that is eaten such as leaves (lettuce), stem (celery), roots (carrot), tubers (potato), bulbs (onion) and flowers (broccoli). A fruit is the mature ovary of a plant.</p></div>
        </div>
        <div className="row main-otherp">
                <div className="row list-otherp">
                    <OtherCard title={'Carrot'} desc={'Frest and organic carrot from the farm Frest and organic Tomato from the farm'}></OtherCard>
                    <OtherCard title={'Beet'} desc={'Frest and organic Beet from the farm Frest and organic Tomato from the farm'}></OtherCard>
                    <OtherCard title={'Cucumber'} desc={'Frest and organic Cucumber from the farm Frest and organic Tomato from the farm'}></OtherCard>
                </div>

                <div className="row list-otherp">
                    <OtherCard title={'Tomato'} desc={'Frest and organic Tomato from the farm Frest and organic Tomato from the farm'}></OtherCard>
                    <OtherCard title={'Pumpkin'} desc={'Frest and organic Pumpkin from the farm Frest and organic Tomato from the farm'}></OtherCard>
                    <OtherCard title={'Broccoli'} desc={'Frest and organic Broccoli from the farm Frest and organic Tomato from the farm'}></OtherCard>
                </div>

            </div></>
    )
}
export default Other;