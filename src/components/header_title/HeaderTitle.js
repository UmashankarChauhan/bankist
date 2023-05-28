import React from "react";
import hero from "../../assets/img/hero.png";
import "./HeaderTitle.css";

const HeaderTitle = () => {
  return (
    <div className="header__title">
      <h1>
        When
        <span className="highlight">banking</span>
        meets
        <br />
        <span className="highlight">minimalist</span>
      </h1>
      <h4>A simpler banking experience for a simpler life.</h4>
      <a className="btn--text learn--more" href="#section--1">
        Learn more &darr;
      </a>
      <img src={hero} className="header__img" alt="Minimalist bank items" />
    </div>
  );
};

export default HeaderTitle;
