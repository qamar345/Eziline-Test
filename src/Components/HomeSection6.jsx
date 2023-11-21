import React from "react";
import Corn1 from "../Images/corn-1.png";
import Corn2 from "../Images/corn-2.png";
import Montserrat from "@fontsource/montserrat";
import Poppins from "@fontsource/poppins";

export const HomeSection6 = () => {
  return (
    <>
      <section className="section-2-bg container-padding ">
        <div className="container p-5">
          <div className="card side-1">
            <img src={Corn1} alt="" className="topLeft" />

            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <h1
                    className="head-cont"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Lets Work Together
                  </h1>
                  <p className="text-contact" style={{ fontFamily: "Poppins" }}>
                    The technological revolution is changing aspect of our
                    lives, and the fabric of <br /> society itself. it's also
                    changing the way we learn and what we learn
                  </p>
                  <button
                    className="btn btn-warning contact-3"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>

            <img src={Corn2} alt="" className="bottomRight" />
          </div>
        </div>
      </section>
    </>
  );
};
