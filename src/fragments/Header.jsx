import React from "react";
import {FaSearch, FaGripLines} from "react-icons/fa"

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-logo">
         Logo
      </div>
      <div className="Header-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Shop</a>
        <a href="#">Cart</a>
      </div>
      <div className="Header-search">
         <a href="#">
            <FaSearch/>
         </a>
         <a href="#">
            <FaGripLines/>
         </a>
      </div>
    </div>
  );
};

export default Header;
