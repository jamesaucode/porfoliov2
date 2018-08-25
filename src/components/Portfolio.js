import React, { Component } from "react";
import pomodoro from "../image/pomodoro.png";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="work">
          <img src={pomodoro} alt="blog1" class="portfolio__image" />
          <div className="middle">
            <div className="middle__text">
                React,HTML,SCSS,Javascript
                <br />
                <a href="https://jamesaucode.github.io/pomodoro" class="portfolio__link">Live version</a>
            </div>
          </div>
        </div>
        <div className="work">
          <img src={pomodoro} alt="blog1" class="portfolio__image" />
          <div className="middle">
            <div className="middle__text">
                React,HTML,SCSS,Javascript
                <br />
                <a href="https://jamesaucode.github.io/pomodoro" class="portfolio__link">Live version</a>
            </div>
          </div>
        </div>
        <div className="work">
          <img src={pomodoro} alt="blog1" class="portfolio__image" />
          <div className="middle">
            <div className="middle__text">
                React,HTML,SCSS,Javascript
                <br />
                <a href="https://jamesaucode.github.io/pomodoro" class="portfolio__link">Live version</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
