import React from "react";
import '../Styles/Home.css'
import image from "../img/freshmart.png"

const Home =()=>{
    return (
        <div className="container-fluid row main-container" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
       }}>
<div style={{color:'white', textAlign:'center', marginTop:'200px'}}><h1>100% ORGANIC</h1></div>
        </div>
    )
}
export default Home;