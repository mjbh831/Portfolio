import React from "react";
import "./ProjectPage.css";

export default function ProjectPage({
  title,
  info,
  backgroundText,
  backgroundColor,
  projectPic,
}) {
  return (
    <div className={projectPic} style={{ backgroundColor: backgroundColor }}>
      <div className="info">
        <div className="title">{title}</div>
        <div className="divider"></div>
        <div className="text-container">
          <div className="background-text">{backgroundText}</div>
          <div className="text">{info}</div>
        </div>
      </div>
    </div>
  );
}
