import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(project) {
    if (project === 1) {
      let win = window.open("https://eduhive.com.bd", "_blank");
      win.focus();
    } else if (project === 2) {
      let win = window.open("https://play.google.com/store/apps/details?id=com.techhive.eduhive", "_blank");
      win.focus();
    } else if (project === 3) {
      let win = window.open("https://www.facebook.com/events/eduhivecombd/eduhive-scholars-2020/437352227156349/", "_blank");
      win.focus();
    } else if (project === 4) {
      let win = window.open("https://texthive.com.bd", "_blank");
      win.focus();
    }else if (project === 5) {
      let win = window.open("https://www.edumanbd.com/", "_blank");
      win.focus();
    } else if (project === 6) {
      let win = window.open("https://www.netiworld.com/", "_blank");
      win.focus();
    }
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
          <div className="startup-projects-main">
            <div className="project-inline">
              <div className="project-card" onClick={() => openProjectInNewWindow(1)}>
                <img style={{ marginTop: "50px", height: "90px", width: "200px" }} alt="no image" src={require("../../assets/icons/eduhive.png")}></img>
              </div>
              <div className="project-card" onClick={() => openProjectInNewWindow(2)}>
                <img style={{ marginTop: "42px", height: "115px", width: "200px" }} alt="no image" src={require("../../assets/icons/eduhiveapp.png")}></img>
              </div>
              <div className="project-card" onClick={() => openProjectInNewWindow(3)}>
                <img style={{ marginTop: "18px", height: "145px", width: "200px" }} alt="no image" src={require("../../assets/icons/scholars.png")}></img>
              </div>
              <div className="project-card" onClick={() => openProjectInNewWindow(4)}>
                <img style={{ marginTop: "45px", height: "110px", width: "200px" }} alt="no image" src={require("../../assets/icons/texthive.png")}></img>
              </div>
              <div className="project-card" onClick={() => openProjectInNewWindow(5)}>
                <img style={{ marginTop: "45px", height: "110px", width: "200px" }} alt="no image" src={require("../../assets/icons/eduman.png")}></img>
              </div>
              <div className="project-card" onClick={() => openProjectInNewWindow(6)}>
                <img style={{ marginTop: "45px", height: "110px", width: "200px" }} alt="no image" src={require("../../assets/icons/neti.png")}></img>
              </div>

            </div>
            {/* <div className="starup-project-image"></div> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
