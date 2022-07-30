import React from "react";
import Footer from "../parts/Footer";
import Notify from "../parts/Notify";
import { GiHamburgerMenu } from "react-icons/gi";

const NoficationPage = () => {
  const Blue = {
    color: "#4c88e1",
  };
  let colourful = {
    home: false,
    search: false,
    post: false,
    notify: true,
    profile: false,
  };
  return (
    <div>
      <div className="notify-heading">
        <h2>Activity</h2>
        <div className="hamburger">
          <GiHamburgerMenu />
        </div>
      </div>

      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <Notify />
      <div className="space"></div>

      <Footer path="/" Blue={Blue} />
    </div>
  );
};

export default NoficationPage;
