import React from "react";
import "./Header.css";
import Navigation from "../navigation/Navigation";
import HeaderTitle from "../header_title/HeaderTitle";

const Header = ({ onLoginAccountClick }) => {
  return (
    <header className="header" id="bankist">
      <Navigation onLoginAccountClick={onLoginAccountClick} />
      <HeaderTitle />
    </header>
  );
};

export default Header;
