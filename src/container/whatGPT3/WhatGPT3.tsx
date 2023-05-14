import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__wgpt section__margin">
      <div className="gpt3__wgpt-feature">
       <Feature />
       </div>
        <div className="gpt3__wgpt-heading">
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <p>Explore the Library</p>
        </div>
        <div className="gpt3__wgpt-container">
          <Feature />
          <Feature />
          <Feature />
        </div>
        </div>
  );
};

export default WhatGPT3;
