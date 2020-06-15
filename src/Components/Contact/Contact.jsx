import React from "react";
import "../TitlePage/TitlePage.css";
import {
  linkedInContact,
  githubContact,
  resumeContact,
  phoneContact,
  emailContact,
} from "../Buttons/Buttons";

//Uses TitlePage CSS Styles

export default function Contact() {
  return (
    <footer>
      <div className="container contact">
        <div className="last-page">
          <p className="thanks">Thanks for visiting my page!</p>
          <p className="thanks">I would love to hear from you.</p>
          <h1 className="footnote">contact me</h1>
          {phoneContact()}
          {emailContact()}
          {linkedInContact()}
          {githubContact()}
          {resumeContact()}
        </div>
      </div>
      <div class="contact-info">
        <p>Marcos Hinojos - (512)-934-1814 - mjbh831@gmail.com</p>
      </div>
    </footer>
  );
}
