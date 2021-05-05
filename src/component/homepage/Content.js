import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import logo from "../../assets/logo.png";
import Button from "../layout/Button";

function Content(props) {
  return (
    <div className="content">
      <img src={logo} alt="logo" />
      <div className="content_text">Software Development</div>
      <div className="content_text">From the best in the industry</div>
      <Button margin={40}>Start your Project</Button>
      <div className="circle"><FontAwesomeIcon icon={faAngleDown} size='2x'/></div>
    </div>
  );
}

export default Content;
