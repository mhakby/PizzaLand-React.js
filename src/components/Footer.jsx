import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p>&copy; 2023 PizzaLand.com</p>
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
      </div>
    </div>
  );
}

export default Footer;
