import React, { Component } from "react";
import reactlogo from '../image/react.png';
import htmllogo from '../image/html.png';
import csslogo from '../image/css.svg';
import jslogo from '../image/js.png';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="text-box">
          <h3 className="heading">Hi, I am James Au.</h3>
          <p className="description">
            An Aspiring front-end developer who enjoys creating simple,beautiful
            and responsive websites
          </p>
          <div className="btn-wrapper">
            <a href="#portfolio" className="content__btn">
              <span className="btn-text">View Portfolio</span>
            </a>
          </div>
    <div className="skills">
        <div className="hover">
        <img className="skill" src={reactlogo} alt="react-logo" />
        <span className="hover__text">Reactjs, my go-to Javascript framework.</span>
        </div>
        <div className="hover">
        <img className="skill" src={htmllogo} alt="react-logo"/>
        <span className="hover__text">HTML</span>
        </div>
        <div className="hover">
        <img className="skill" src={csslogo} alt="react-logo"/>
        <span className="hover__text">Css (Scss), flexbox and grid.</span>
        </div>
        <div className="hover">
        <img className="skill" src={jslogo} alt="react-logo"/>
        <span className="hover__text">Javascript, ES6, Regex etc.</span>
        </div>
      </div>
        </div>
      </div>
    );
  }
}
