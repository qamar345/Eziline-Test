import React, { useEffect, useState } from "react";
import "../App.css";
import Montserrat from "@fontsource/montserrat";
import Poppins from "@fontsource/poppins";

export const HomeSection4 = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [awards, setAwards] = useState(0);
  const [exp, setExp] = useState(0);

  function clientCount() {
    setClients(clients + 1);
  }

  function projectsCount() {
    setProjects(projects + 1);
  }

  function awardsCount() {
    setAwards(awards + 1);
  }

  function expCount() {
    setExp(exp + 1);
  }

  if (clients != 56) {
    setTimeout(clientCount, 100);
  }

  if (projects != 87) {
    setTimeout(projectsCount, 100);
  }

  if (awards != 16) {
    setTimeout(awardsCount, 100);
  }

  if (exp != 7) {
    setTimeout(expCount, 100);
  }

  return (
    <>
      <section className="section-2-bg">
        {/* <button onClick={stopClient}>Stop</button> */}
        <div className="container text-center container-padding">
          <div className="row">
            <div className="col-sm p-3">
              <div class="card experience-start">
                <div class="card-body">
                  <h1 className="count" style={{ fontFamily: "Montserrat" }}>
                    {clients}
                  </h1>
                  <h5
                    class="card-title c-title"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Happy Clients
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm p-3">
              <div class="card experience">
                <div class="card-body">
                  <h1 className="count" style={{ fontFamily: "Montserrat" }}>
                    {projects}
                  </h1>
                  <h5
                    class="card-title c-title"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Projects Done
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm p-3">
              <div class="card experience">
                <div class="card-body">
                  <h1 className="count" style={{ fontFamily: "Montserrat" }}>
                    {awards}
                  </h1>
                  <h5
                    class="card-title c-title"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Awards
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm p-3">
              <div class="card experience-end">
                <div class="card-body">
                  <h1 className="count" style={{ fontFamily: "Montserrat" }}>
                    {exp}
                  </h1>
                  <h5
                    class="card-title c-title"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Experience
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
