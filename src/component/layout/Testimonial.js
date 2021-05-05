import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonial(props) {
  return (
    <div className="testimonial">
      <div className="testimonial_quote">
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      <div className="testimonial_text">{props.text}</div>
      <div className="testimonial_divider"></div>
      <div className="testimonial_info">
        <div className="testimonial_img">
          <img src={props.img} alt={props.img} />
        </div>
        <div className="testimonial_name">{props.name}</div>
      </div>
    </div>
  );
}

export default Testimonial;
