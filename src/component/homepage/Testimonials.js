import React from "react";
import Sections from "../layout/Sections";
import Testimonial from "../layout/Testimonial";

import customer from "../../assets/bg1.jpg";
function Testimonials(props) {
  return (
    <Sections>
      <h2>What others are saying about us</h2>
      <div className="testimonial_card">
        <Testimonial
          text=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
          img={customer}
          name="Elon Camella"
        />

<Testimonial
          text=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
          img={customer}
          name="Elon Camella"
        />

      </div>
    </Sections>
  );
}

export default Testimonials;
