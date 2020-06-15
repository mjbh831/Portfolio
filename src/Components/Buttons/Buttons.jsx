import React from "react";
import Resume from "../../../src/MarcosHinojosResume.pdf";
// Enter 'title' or 'contact' for which button

export const linkedInTitle = () => (
  <button
    onClick={() => {
      window.open(
        "https://www.linkedin.com/in/marcos-hinojos-8118251a7/",
        "_blank"
      );
    }}
    className="nav raise icons"
  >
    <i className="fab fa-linkedin"></i>
  </button>
);
export const linkedInContact = () => (
  <button
    onClick={() => {
      window.open(
        "https://www.linkedin.com/in/marcos-hinojos-8118251a7/",
        "_blank"
      );
    }}
    className="nav raise nav raise main-button mb-icon"
  >
    <i className="fab fa-linkedin"></i>
  </button>
);
export const githubTitle = () => (
  <button
    onClick={() => {
      window.open("https://github.com/mjbh831", "_blank");
    }}
    className="nav raise icons"
  >
    <i className="fab fa-github"></i>
  </button>
);
export const githubContact = () => (
  <button
    onClick={() => {
      window.open("https://github.com/mjbh831", "_blank");
    }}
    className="nav raise main-button mb-icon"
  >
    <i className="fab fa-github-square"></i>
  </button>
);
export const resumeTitle = () => (
  <button
    onClick={() => {
      window.open(Resume, "_blank");
    }}
    className="nav raise icons"
  >
    <i className="fab fas fa-file-alt"></i>
  </button>
);
export const resumeContact = () => (
  <button
    onClick={() => {
      window.open(Resume, "_blank");
    }}
    className="nav raise main-button mb-icon"
  >
    <i className="fab fas fa-file-alt"></i>
  </button>
);
export const phoneContact = () => (
  <button
    onClick={() => {
      window.open("tel:512-934-1814");
    }}
    className="nav raise main-button mb-icon"
  >
    <i className="fas fa-phone"></i>
  </button>
);
export const emailContact = () => (
  <button
    onClick={() => {
      window.open("mailto:mjbh831@gmail.com");
    }}
    className="nav raise main-button mb-icon"
  >
    <i className="far fa-envelope"></i>
  </button>
);
