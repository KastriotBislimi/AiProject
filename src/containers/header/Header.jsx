import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-container">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bad any for traveling assistence indulgance unpleasing. Not
          thoughts all exerices blessing. indulgance way everything joy
          alteration
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email address" />
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
