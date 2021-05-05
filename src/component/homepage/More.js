import React from "react";

import solutions from "../../assets/solutions.jpg";
import Card from "../layout/Card";

function More(props) {
  return (
    <div className="container">
      <h2>More about Beema</h2>
      <Card
        details="Beema is about designing, building and deliverying best quality software for your company. 

        We make sure that you get the best software inferstracture and set of applications to ensure the best experience of your clients. 
        
        So wether you are handling thousands of payment transactions or you’re just starting out, you are in the right place. "
        img={solutions}
      />
    </div>
  );
}

export default More;
