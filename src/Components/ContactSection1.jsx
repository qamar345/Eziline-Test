import React from "react";
import "../App.css";
import Phone from "../Images/phone.png";
import Mail from "../Images/mail.png";
import Montserrat from "@fontsource/montserrat";
import Poppins from "@fontsource/poppins";

export const ContactSection1 = () => {
  return (
    <>
      <section className="section-2-bg container-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div
                className="d-flex text-center widget-1"
                style={{ fontFamily: "Poppins" }}
              >
                <p className="hr-lines">&rarr; Contact Me</p>
              </div>
              <div>
                <h2 className="widget-3" style={{ fontFamily: "Montserrat" }}>
                  Get In Touch With Me
                </h2>
                <p style={{ fontFamily: "Poppins", color: "white" }}>
                  The technological revolution is changing aspect of our lives,
                  and the fabric of society itself. it's also changing the way
                  we learn and what we learn. Factual knowledge is less prized
                  when everything you ever need to know can be found on your
                  phone. There's no imperative to be an expert Factual knowledge
                  is less prized when everything you ever need to know can be
                  found at doing everything.
                </p>
                <br />
                <div className="phone d-flex mt-5">
                  <div>
                    <span className="phone-circle">
                      <img src={Phone} alt="" />
                    </span>
                  </div>

                  <div className="phone-desc">
                    <h2
                      className="h-phone"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      <span>Phone</span>
                      <p
                        className="call-desc"
                        style={{ fontFamily: "Poppins" }}
                      >
                        +99 (0) 101 0000 888 <br /> +99 (0) 101 0000 777
                      </p>
                    </h2>
                  </div>
                </div>

                <div className="mail mt-5 d-flex">
                  <div>
                    <span className="email-circle">
                      <img src={Mail} alt="" />
                    </span>

                    <div className="e-mail-desc">
                      <h2
                        className="h-mail"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        <span>Email</span>
                        <p
                          className="mail-desc"
                          style={{ fontFamily: "Poppins" }}
                        >
                          Info@yourdomain.com <br /> Info@yourdomain.net
                        </p>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm mt-4" style={{ fontFamily: "Poppins" }}>
                  <input
                    type="text"
                    className="form-control name"
                    placeholder="Full Name"
                    name=""
                    id=""
                  />
                </div>
                <div className="col-sm mt-4" style={{ fontFamily: "Poppins" }}>
                  <input
                    type="text"
                    className="form-control email"
                    placeholder="Email"
                    name=""
                    id=""
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-sm" style={{ fontFamily: "Poppins" }}>
                  <textarea
                    className="form-control message"
                    placeholder="Message*"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

               <div className="row">
               <div className="col-sm text-left mt-5">
                  <button
                    className="btn btn-warning send-message"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Send To Me
                  </button>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
