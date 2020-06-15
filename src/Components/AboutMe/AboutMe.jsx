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
      "I'm a self-taught Web Developer born and raised in Dallas. After graduating from culinary school and spending a few years in the restaurant industry, I found my true passion for coding. Using Udemy, YouTube, and Harvard's CS50 online course, I've spent over 1000 hours studying computer science and web development. I now create user-friendly applications while striving to write readable and scalable code. I love to have fun and don't take myself too seriously. My years of being in the service industry have made me a strong communicator, hard-worker, and team player. I am also a huge believer in life-long learning and look forward to continuing to grow as a developer.",
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
