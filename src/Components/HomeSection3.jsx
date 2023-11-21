import React from "react";
import Montserrat from "@fontsource/montserrat";
import Poppins from "@fontsource/poppins";
import Portfolio1 from "../Images/portfolio-1.jpg";
import Portfolio2 from "../Images/portfolio-2.jpg";
import Portfolio3 from "../Images/portfolio-3.jpg";

export const HomeSection3 = () => {
  return (
    <>
      <section className="section-2-bg">
        <div className="container pb-5">
          <div className="row">
            <div className="col-sm-6">
              <div
                className="d-flex text-center widget-1"
                style={{ fontFamily: "Poppins", marginTop: "150px" }}
              >
                <p className="hr-lines">&rarr; Project 1</p>
              </div>
              <div>
                <h2 className="widget-3" style={{ fontFamily: "Montserrat" }}>
                  Branding Nice Studio
                </h2>
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  The technological revolution is changing aspect of our lives,
                  and the fabric of society itself. it's also changing the way
                  we learn and what we learn. Factual knowledge is less prized
                  when everything you ever need to know can be found on your
                  phone. There's no imperative to be an expert at doing
                  everything when you can.
                </p>
              </div>
            </div>
            <div className="col-sm-6 project-1">
              <img src={Portfolio1} alt="" className="portfolio-1" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 project-1">
              <img src={Portfolio2} alt="" className="portfolio-1" />
            </div>
            <div className="col-sm-6">
              <div
                className="d-flex text-center widget-1"
                style={{ fontFamily: "Poppins", marginTop: "150px" }}
              >
                <p className="hr-lines"> &rarr; Project 2</p>
              </div>
              <div>
                <h2 className="widget-3" style={{ fontFamily: "Montserrat" }}>
                  Mobile Card App
                </h2>
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  The technological revolution is changing aspect of our lives,
                  and the fabric of society itself. it's also changing the way
                  we learn and what we learn. Factual knowledge is less prized
                  when everything you ever need to know can be found on your
                  phone. There's no imperative to be an expert at doing
                  everything when you can.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div
                className="d-flex text-center widget-1"
                style={{ fontFamily: "Poppins", marginTop: "150px" }}
              >
                <p className="hr-lines">&rarr; Project 3</p>
              </div>
              <div>
                <h2 className="widget-3" style={{ fontFamily: "Montserrat" }}>
                  Resturant Landing Page
                </h2> 
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  The technological revolution is changing aspect of our lives,
                  and the fabric of society itself. it's also changing the way
                  we learn and what we learn. Factual knowledge is less prized
                  when everything you ever need to know can be found on your
                  phone. There's no imperative to be an expert at doing
                  everything when you can.
                </p>
              </div>
            </div>
            <div className="col-sm-6 project-1">
              <img src={Portfolio3} alt="" className="portfolio-1" />
            </div>
          </div>

          <div className="row">
            <div className="col text-center" style={{ fontFamily: "Poppins" }}>
              <button className="btn btn-info view-all">View All</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
