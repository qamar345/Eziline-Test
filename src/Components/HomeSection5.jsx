import React from "react";
import "../App.css";
import Client1 from "../Images/customer-1.jpg";
import Quote from "../Images/quote.png";
import Poppins from "@fontsource/poppins";
import Montserrat from "@fontsource/montserrat";

export const HomeSection5 = () => {
  return (
    <>
      <section className="section-2-bg container-padding">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm text-center">
                    <div className="shadow">
                      <img src={Client1} alt="" className="client-1" />
                    </div>
                  </div>

                  <div className="col-sm text-left">
                    <img src={Quote} />
                    <br />
                    <p className="comment-1" style={{ fontFamily: "Poppins" }}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Non delectus dolorem harum assumenda porro voluptatem
                      magni dignissimos ratione reiciendis rem deleniti, amet
                      consequuntur sit cum iure velit mollitia nulla
                      repudiandae.
                    </p>
                    <br />
                    <p className="author" style={{ fontFamily: "Montserrat" }}>
                      Jared Warner
                    </p>

                    <p className="desig" style={{ fontFamily: "Poppins" }}>
                      CEO of Figma
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm text-center">
                    <div className="shadow">
                      <img
                        src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/07/testi21.png"
                        alt=""
                        className="client-1"
                      />
                    </div>
                  </div>

                  <div className="col-sm text-left">
                    <img src={Quote} />
                    <br />
                    <p className="comment-1" style={{ fontFamily: "Poppins" }}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Non delectus dolorem harum assumenda porro voluptatem
                      magni dignissimos ratione reiciendis rem deleniti, amet
                      consequuntur sit cum iure velit mollitia nulla
                      repudiandae.
                    </p>
                    <br />

                    <p className="author" style={{ fontFamily: "Montserrat" }}>
                      Amman Payne
                    </p>

                    <p className="desig" style={{ fontFamily: "Poppins" }}>
                      CEO of Figma
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};
