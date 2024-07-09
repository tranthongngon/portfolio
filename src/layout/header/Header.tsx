import React from "react";
import "./style.scss";
import logo from "../../assets/images/logo.png";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__logo">
            <a href="#home" data-menuanchor="hone">
              <img src={logo} alt="ngontt" />
            </a>
          </div>
          <div className="header__nav">
            <ul className="header__nav-menu" id="menu">
              <li className="header__nav-item">
                <a href="#home" className="roboto-bold" data-menuanchor="hone">
                  Home
                </a>
              </li>
              <li className="header__nav-item">
                <a
                  href="#project"
                  className="roboto-bold"
                  data-menuanchor="hone"
                >
                  Projects
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#about" className="roboto-bold" data-menuanchor="hone">
                  About
                </a>
              </li>
              <li className="header__nav-item">
                <a
                  href="#contact"
                  className="roboto-bold"
                  data-menuanchor="hone"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
