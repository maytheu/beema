import React from "react";

import solutions from "../../assets/solutions.jpg";
import Card from "../layout/Card";
import component from "../../assets/component.jpg";
import collab from "../../assets/collab.webp";

function Services(props) {
  return (
    <div className="container">
      <h2>Best Quality Software</h2>
      <Card
        title="Fully integrated services"
        details="We build and deliver fully integrated webapps
 with customized control panels that fit your 
compnay needs"
        img={solutions}
      />

      <div className="card">
        <div className="card_img">
          <img src={component} alt="mobile first" />
        </div>
        <div className="card_text">
          <div className="card_title">
            <h3>Mobile optimized</h3>
          </div>
          {/* <div className="card_details">{props.details}</div> */}
        </div>
      </div>

      <Card
        title="Quality is our priority"
        details="We have teams of professional developers, designers and managers that ensures delivering the best software quality for your company"
        img={collab}
      />
    </div>
  );
}

export default Services;
