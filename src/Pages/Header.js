import React from "react";
import '../Styles/Header.css';
import { useLocation, useNavigate } from 'react-router-dom';
// import { FcCallback } from 'react-icons/fc';
// import { BsFillCartPlusFill } from 'react-icons/bs';
// import { AiOutlineLogin } from 'react-icons/ai';
// import { AiOutlineHome } from 'react-icons/ai';
// import { FcAbout } from 'react-icons/fc';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRouteChange = (path) => {
    navigate(path);
    console.log('LocationData',location);
  }

  const isActive=(path)=>{
     return location.pathname === path;
  }

  return <>

    <nav className="container-fluid row main-nav">
      <div className="col-sm-1 col-md-3 col-lg-2 logo">
        <h2>
          <span style={{ color: 'black', fontWeight:500 }}></span>
        </h2>
      </div>
      <div className="col-sm-1 col-md-1 col-lg-1 menu-item" style={{backgroundColor:isActive('/HindcoAssignment') ? 'whitesmoke' : '' }} onClick={() => handleRouteChange('/HindcoAssignment')}>Home</div>
      <div className="col-sm-1 col-md-1 col-lg-1 menu-item" style={{backgroundColor:isActive('/products') ? 'whitesmoke' : '' }} onClick={() => handleRouteChange('/products')}> Product</div>
      <div className="col-sm-1 col-md-1 col-lg-1 menu-item" style={{backgroundColor:isActive('/other') ? 'whitesmoke' : '' }} onClick={() => handleRouteChange('/other')}> Other</div>
    </nav>
  </>

}
export default Header;