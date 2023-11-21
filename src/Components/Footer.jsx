import React from "react";
import "../App.css";
import Logo from "../Images/logo-header.png";
import Facebook from "../Images/facebook.png";
import Linkedin from "../Images/linkedin.png";
import Skype from "../Images/skype.png";
import Instagram from "../Images/instagram.png";
import Poppins from "@fontsource/poppins";

export const Footer = () => {
  return (
    <>
    <section className="section-2-bg container-padding">
    <footer className="site-footer ">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 text-center">
              <div>
                <img src={Logo} alt="" />
              </div>
            </div>

            <div className="col-sm-6">
            <p style={{ fontFamily: "Poppins" }}>
                  &copy; 2023 Freelancer - Phlox Elementor WordPress Theme. All
                  rights reserved.
                </p>
            </div>

            <div className="col-sm-4">
              <button className="btn btn-social">
                <img src={Facebook} alt="" className="social"/>
              </button>
              <button className="btn btn-social">
                <img src={Linkedin} alt="" className="social"/>
              </button>

              <button className="btn btn-social">
                <img src={Instagram} alt="" className="social"/>
              </button>

              <button className="btn btn-social">
                <img src={Skype} alt="" className="social"/>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
    </>
  );
};
