import React, { useState } from "react";
import ProjectPage from "../ProjectPage/ProjectPage";

const AboutMe = () => {
  const fixed = "bg fixed bg1";
  const notFixed = "bg bg1";
  const [fixedState, setFixedState] = useState(notFixed);
  function setFixedBackgroud(e) {
    if (window.scrollY >= window.innerHeight) {
      setFixedState(fixed);
    } else {
      setFixedState(notFixed);
    }
  }
  window.addEventListener("scroll", setFixedBackgroud);

  let aboutMeObj = {
    title: "About Me",
    info:
      "Hello and thanks for visiting my page. I am a self-taught web developer born and raised in Dallas, Texas. After getting my CompTIA A+ certification a few years back and working in a tech support role, I found my true passion for coding. I began using Udemy, YouTube, and Harvard's CS50 online courses to learn to be a programmer. I've spent over 1000 hours studying computer science and web development, and now I create user-friendly applications while striving to write readable and scalable code. My years of being in the service industry have made me a strong communicator, hard-worker, and team player. I am also a huge believer in life-long learning and look forward to continuing to grow as a developer.",
    backgroundText: "About Me",
    backgroundColor: "#5cf4ff",
    projectPic: fixedState,
  };

  return (
    <ProjectPage
      title={aboutMeObj.title}
      info={aboutMeObj.info}
      backgroundText={aboutMeObj.backgroundText}
      backgroundColor={aboutMeObj.backgroundColor}
      projectPic={aboutMeObj.projectPic}
    />
  );
};

export default AboutMe;
