import React from "react";
import Landing from "../layout/Landing";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import More from "./More";
import Services from "./Services";
import Testimonials from "./Testimonials";

function Homepage(props) {
  return (
    <>
      <Landing>
        <Header />
        <Content />
      </Landing>
      <Services />
      <Testimonials />
      <More />
      <Footer />
    </>
  );
}

export default Homepage;
