import React from "react";
import logo from "../../assets/img/logo.png";
import "./Navigation.css";

const Navigation = ({ onLoginAccountClick }) => {
  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav");
      const header = document.querySelector(".header");

      if (navbar && header) {
        const headerHeight = header.offsetHeight;
        const navbarHeight = navbar.offsetHeight;

        if (window.pageYOffset > headerHeight - navbarHeight) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="nav">
      <a href="#bankist">
        <img
          src={logo}
          alt="Bankist logo"
          className="nav__logo"
          id="logo"
          designer="Deependra"
          data-version-number="3.0"
        />
      </a>
      <ul className="nav__links">
        <li className="nav__item">
          <a href="#section--1" className="nav__link">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="#section--2" className="nav__link">
            Operations
          </a>
        </li>
        <li className="nav__item">
          <a href="#section--3" className="nav__link">
            Testimonials
          </a>
        </li>

        <li className="nav__item">
          <button className="nav__link--btn " onClick={onLoginAccountClick}>
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
