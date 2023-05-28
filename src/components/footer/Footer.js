import React from "react";
import "./Footer.css";
import logo from "../../assets/img/icon.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ul className="footer__nav">
          <li className="footer__item">
            <span className="footer__link" type="button">
              About
            </span>
          </li>
          <li className="footer__item">
            <span className="footer__link" type="button">
              Pricing
            </span>
          </li>
          <li className="footer__item">
            <span className="footer__link" type="button">
              Terms of Use
            </span>
          </li>
          <li className="footer__item">
            <span className="footer__link" type="button">
              Privacy Policy
            </span>
          </li>
          <li className="footer__item">
            <span className="footer__link" type="button">
              Careers
            </span>
          </li>
          <li className="footer__item">
            <span className="footer__link" type="button">
              Blog
            </span>
          </li>
          <li className="footer__item">
            <span className="footer__link" type="button">
              Contact Us
            </span>
          </li>
        </ul>
        <img src={logo} alt="Logo" className="footer__logo" />
        <p className="footer__copyright">
          &copy; Copyright by
          <span className="footer__link twitter-link">Umashankar chauhan</span>.
          Use for learning or your portfolio. Don't use to teach. Don't claim as
          your own product.
        </p>
      </footer>
    </>
  );
};

export default Footer;
