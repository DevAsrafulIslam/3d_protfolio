import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">MyLogo</div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <a href="#signup" className="cta-button">
        Sign Up
      </a>
    </header>
  );
};

export default Header;
