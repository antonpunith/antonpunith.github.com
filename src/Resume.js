import { useState } from "react";
import "./App.css";
import axios from "axios";
import resumeJSON from "./data/resume.json";
import {
  Header,
  Headline,
  Objective,
  Summary,
  Education,
  Skills,
  Work,
  Projects,
} from "./components";

export const Resume = () => {

  const [resumeData, setResumeData] = useState(resumeJSON);

  if (window.location.hostname !== "localhost") {
    axios.get("https://antonpunith.github.io/data/resume.json")
    .then(response => {setResumeData(response.data);})
  }

  return (
    <div className="App">
      <Header basics={resumeData.basics} />
      <Headline headlines={resumeData.headlines} />
      <Objective objectives={resumeData.objectives} />
      <Summary summary={resumeData.summary} />
      <Education education={resumeData.education} />
      <Skills skills={resumeData.skills} />
      <Work work={resumeData.work} />
      <Projects projects={resumeData.projects} />
    </div>
  );
}
