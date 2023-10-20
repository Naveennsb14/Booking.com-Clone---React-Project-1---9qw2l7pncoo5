import React from "react";
import Image from "../../images/In@3x.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "../../styles/Header.css";

const Header = () => {
  return (
    <div className="Header-section">
      <div className="logo">Booking.com</div>
      <div className="header-details">
        <p>INR</p>
        <div className="india-logo"><img className="" src={Image} alt="Flag" /></div>
        <AiOutlineQuestionCircle/>
        <p>List Your Property</p>
          <button className="register">Register</button>
          <button className="signin">Sign in</button>
        
      </div>
    </div>
  );
};

export default Header;
