import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-features">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">
          The possibilities are beyond your imagiantion
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgp3-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default WhatGPT3;
