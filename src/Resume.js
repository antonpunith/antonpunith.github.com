import { useState } from "react";
import "./App.css";
import resumeJSON from "./data/resume.json";
import resumeFullStack from "./data/resume-full-stack.json";
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
  const [resumeData, setResumeData] = useState(resumeFullStack);

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
      <div className="sr-hidden buttons">
        <button
          onClick={() => {
            setResumeData(resumeFullStack);
          }}
        >
          FS
        </button>
        <button
          onClick={() => {
            setResumeData(resumeJSON);
          }}
        >
          FE
        </button>
      </div>
    </div>
  );
};
