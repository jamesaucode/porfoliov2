import React, { Component } from 'react';
import burger from "../image/menu.svg";

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav">
        <input type="checkbox" id="nav-toggle" />
        <label class="burger-menu"  for="nav-toggle">
        <img src={burger} alt="menu" />
        </label>
            <div className="nav__left">
            <a href="#" className="hvr-underline-from-center nav__link" >Home</a>
            <a href="#about" className="hvr-underline-from-center nav__link">About</a>
            <a className="hvr-underline-from-center nav__link" href="#portfolio">Portfolio</a>
            <a className="hvr-underline-from-center nav__link" href="#contact">Contact</a>
            </div>
            <a href="#" className="logo">J . A</a>
        </div>
      </div>
    )
  }
}
