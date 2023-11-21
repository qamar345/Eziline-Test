import React from "react";
import "../App.css";
import Poppins from "@fontsource/poppins";
import Montserrat from "@fontsource/montserrat";
import Hero from "../Images/hero-img.png";

export const HomeSection1 = () => {
  return (
    <>
      <section className="background">
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="d-flex text-center widget-1"
                style={{ fontFamily: "Poppins" }}
              >
                <p className="hr-lines"> &rarr; introducing</p>
              </div>

              <div>
                <h1 className="widget-2" style={{ fontFamily: "Montserrat" }}>
                  Hello <br /> I'm Jessy <br /> Walter
                </h1>
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  Since beginning my journey as a freelance designer <br />{" "}
                  nearby 7 years ago, I 've done remote work for agencies,
                  consulted for startup, and collaborated with talented <br />{" "}
                  people to create digitalproducts.
                </p>
              </div>
              <div className="contact-btn-2">
                <button
                  className="btn btn-warning contact-2"
                  style={{ fontFamily: "Poppins" }}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <br />
            <div className="col">
              <div className="div-widget">
                {/* <div className="hero"> */}
                <img src={Hero} alt="heor" className="hero-img" />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
