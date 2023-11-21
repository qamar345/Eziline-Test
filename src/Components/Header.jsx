import React from "react";
import "../App.css";
import Poppins from "@fontsource/poppins";
import Dribble from "../Images/dribble.png";
import Logo from "../Images/logo-header.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              <img src={Logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item" style={{ fontFamily: "Poppins" }}>
                  <Link className="nav-link" aria-current="page" to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item" style={{ fontFamily: "Poppins" }}>
                  <Link className="nav-link" to={"/portfolio"}>
                    Portfolio
                  </Link>
                </li>

                <li className="nav-item" style={{ fontFamily: "Poppins" }}>
                  <Link className="nav-link" to={"/contact"}>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="d-flex section-1" role="search">
                <button className="btn-dribble">
                  <img src={Dribble} alt="dribble" className="dribble" />
                </button>

                <Link to={"/contact"}>
                  {" "}
                  <button
                    className="btn btn-warning contact"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
