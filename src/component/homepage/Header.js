import React from "react";

import logo from "../../assets/icon.png";
import Button from "../layout/Button";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="logo_text">Beema</div>
      </div>
      <div className="menu">
        <Button>Get Started</Button>
        <div className="logo_text">Login</div>
      </div>
    </header>
  );
}

export default Header;
