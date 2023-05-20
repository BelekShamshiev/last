import React from "react";
import "./Burger.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import basket from "../../assets/basket.png";
const Burger = () => {
  return (
    <div className="home">
    <div className="container">
      <section class="top-nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" for="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <a href="#">HOME</a>
          <a href="#menu">MENU</a>
          <a href="#build">BASE</a>
          <a href="#best">BEST</a>
          <a href="#blog">BLOG</a>
          <a href="#rev">REVIEWS</a>
        </ul>
        <ul className="menu_connection">
          <a href="tel:0556042020">0556-04-20-20</a>
          <a href="#">0- $0.00</a>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default Burger;
