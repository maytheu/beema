import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import logo from "../../assets/logo.png";
import Button from "../layout/Button";

function Footer(props) {
  return (
    <footer>
      <div className="content" style={{paddingBottom:40}}>
        <img src={logo} alt="logo" />
        <div className="content_text">Just say the magical word </div>
        <div className="content_text">and we will do the rest</div>
        <Button margin={40}>Start your Project</Button>
      </div>
      <div className="testimonial_divider"></div>
      <div className="footer_link">
        <div className="link">
          <div className="about">Privacy Policy</div>
          <div className="about">Terms of Service</div>
          <div className="about">Contact</div>
        </div>
        <div className="socials">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
