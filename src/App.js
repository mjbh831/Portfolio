import React from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import TitlePage from "./Components/TitlePage/TitlePage";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import {
  stateFarmObj,
  guessNumberObj,
  faceRecognitionObj,
  robofriendsObj,
  postItObj,
  fourDoorTourObj,
} from "./Constants";
import Contact from "./Components/Contact/Contact";

// use projectPage class to add project
class projectPage {
  constructor(obj = {}) {
    this.title = obj.title;
    this.info = obj.info;
    this.backgroundText = obj.backgroundText;
    this.backgroundColor = obj.backgroundColor;
    this.projectPic = obj.projectPic;
  }
  NewPage() {
    return (
      <ProjectPage
        title={this.title}
        info={this.info}
        backgroundText={this.backgroundText}
        backgroundColor={this.backgroundColor}
        projectPic={this.projectPic}
      />
    );
  }
}
// Project pages from Constants objects file
const stateFarm = new projectPage(stateFarmObj);
const guessNumber = new projectPage(guessNumberObj);
const faceRecognition = new projectPage(faceRecognitionObj);
const robofriends = new projectPage(robofriendsObj);
const postIt = new projectPage(postItObj);
const fourDoorTour = new projectPage(fourDoorTourObj);

function App() {
  return (
    <div className="App">
      <TitlePage />
      <AboutMe />
      {stateFarm.NewPage()}
      {guessNumber.NewPage()}
      {faceRecognition.NewPage()}
      {robofriends.NewPage()}
      {postIt.NewPage()}
      {fourDoorTour.NewPage()}
      <Contact />
    </div>
  );
}

export default App;
