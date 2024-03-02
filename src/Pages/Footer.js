import React from "react";
import '../Styles/Footer.css'
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";


const Footer = () => {
  return (
    <div className="container-fluid row site-footer main-footer">
      <div className="col" style={{ border: 2, color: 'white' }}>
        <h5 style={{color:'yellow'}}>About</h5>
        <p>As our team of innovative thinkers.</p>
        <p>continues to deliver some of best vegetable products</p>
        <p> Our newest facility in Gonzales, </p>
        <p>California is equipped with a 260-foot</p>
        <p> tall wind turbine that will help offset our energy usage.</p>
        <p> At our Salinas, California facilities,</p>
      </div>
      <div className="col" style={{ border: 2, color: 'white' }}>
        <h5 style={{color:'yellow'}}>Products</h5>
        <ul>
          <li>Tomato</li>
          <li>Broccoli</li>
          <li>Pumpkin</li>
          <li>Carrot</li>
          <li>Potato</li>
          <li>Beet</li>
        </ul>

      </div>
      <div className="col" style={{ border: 2, color: 'white' }}>
        <h5 style={{color:'yellow'}}>Need Help</h5>
        <ul>
          <li>Call Us:</li>
          +1(585)589-4875
          <li>General enquiries</li>
          info@freshmart.com
          <li>Sales</li>
          sales@freshmart.com
          <li>Careers</li>
          Join our team
        </ul>

      </div>
      <div className="col" style={{ border: 2, color: 'white' }}>
        <h5 style={{color:'yellow'}}>Connect With Us </h5><br/>
         <SlSocialGoogle size={25} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <SlSocialFacebook size={25} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <TiSocialTwitter size={25} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <SlSocialInstagram size={25} />

      </div>
    </div>
  )
}
export default Footer;