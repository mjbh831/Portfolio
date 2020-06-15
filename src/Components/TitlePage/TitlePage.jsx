import React from "react";
import "./TitlePage.css";
import { linkedInTitle, githubTitle, resumeTitle } from "../Buttons/Buttons";

export default function TitlePage() {
  return (
    <header>
      <div className="container">
        <div className="menu">
          <p className="initials">mh.</p>
          <ul>
            <li>{linkedInTitle()}</li>
            <li>{githubTitle()}</li>
            <li>{resumeTitle()}</li>
          </ul>
        </div>
        <div className="main">
          <p className="welcome">
            Hi! I'm <span id="name">Marcos Hinojos</span>
          </p>
          <h1 className="title-name">
            Front-End <br /> Web Developer
          </h1>
        </div>
      </div>
    </header>
  );
}
