import React from "react";
import Poppins from "@fontsource/poppins";
import Montserrat from "@fontsource/montserrat";
import Box from "../Images/box-1.png";
import Logo from "../Images/pen-1.png";
import UI from "../Images/ui-1.png";
import Icon from "../Images/ico-1.png";

export const HomeSection2 = () => {
  return (
    <>
      <section className="section-2-bg">
        <div className="container" style={{ padding: "50px" }}>
          <div className="row">
            <div
              className="col-sm-7 text-center"
              style={{ alignItems: "center", marginTop: "50px" }}
            >
              <div className="row">
                <div className="col text-center">
                  <div className="card card-color p-3">
                    <span className="card-circle">
                      <img src={Box} className="card-img-top" alt="box" />
                    </span>
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Product Design
                      </h5>
                      <p
                        className="card-text"
                        style={{ fontFamily: "Poppins" }}
                      >
                        The technological revolution is changing aspect
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col mt-5">
                  <div className="card card-color p-3">
                    <span className="card-circle">
                      <img src={Logo} className="card-img-top-1" alt="box" />
                    </span>
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Logo Design
                      </h5>
                      <p
                        className="card-text"
                        style={{ fontFamily: "Poppins" }}
                      >
                        The technological revolution is changing aspect
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col text-center">
                  <div className="card card-color p-3">
                    <span className="card-circle">
                      <img src={UI} className="card-img-top-2" alt="box" />
                    </span>
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        UI Design
                      </h5>
                      <p
                        className="card-text"
                        style={{ fontFamily: "Poppins" }}
                      >
                        The technological revolution is changing aspect
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mt-5">
                  <div className="card card-color p-3">
                    <span className="card-circle">
                      <img src={Icon} className="card-img-top-3" alt="box" />
                    </span>
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Icon Design
                      </h5>
                      <p
                        className="card-text"
                        style={{ fontFamily: "Poppins" }}
                      >
                        The technological revolution is changing aspect
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5" style={{ marginTop: "50px" }}>
              <div
                className="d-flex text-center widget-1"
                style={{ fontFamily: "Poppins", marginTop: "150px" }}
              >
                <p className="hr-lines">&rarr; My Skills</p>
              </div>

              <div>
                <h2 className="widget-3" style={{ fontFamily: "Montserrat" }}>
                  Why Hire Me For Next Project?
                </h2>
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  The technological revolution is changing aspect of our lives,
                  and the fabric of society itself. it's also changing the way
                  we learn and what we learn. Factual knowledge is less prized
                  when everything you ever need to know can be found on your
                  phone. There's no imperative to be an expert at doing
                  everything when you can.
                </p>

                <button
                  className="btn btn-warning contact"
                  style={{ fontFamily: "Poppins" }}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
