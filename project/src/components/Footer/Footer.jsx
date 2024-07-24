import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <p>
          Nestled in the heart of the mountains, this charming villa offers breathtaking 
          panoramic views and unparalleled tranquility. Featuring spacious interiors, 
          modern amenities, and a cozy fireplace, it's the perfect retreat for nature 
          lovers and those seeking a serene escape.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>9313563214</p>
          <p>hardikpatel1232@gmail.com</p>
          <p>coding by Hardik</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
