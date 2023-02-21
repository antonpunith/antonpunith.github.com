import React from "react";
import Header from "./components/Header";
import Headline from "./components/Headline";
import Objective from "./components/Objective";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Education from "./components/Education";
import GoogleTagManager from "../GoogleTagManager";
import resumeData from "../../data/resume.json";

var request = require("superagent");

export default React.createClass({
  displayName: "Resume",

  getInitialState() {
    return { data: null };
  },

  componentDidMount() {
    if (window.location.hostname === "localhost") {
      this.setState({ data: resumeData });
    } else {
      var Resume = this;
      request.get(this.props.url).end(function (err, res) {
        Resume.setState({ data: JSON.parse(res.text) });
      });
    }
  },

  render() {
    let { data } = this.state;

    if (!data) {
      return null;
    }

    return (
      <div>
        <Header basics={data.basics} />
        <Headline headlines={data.headlines} />
        <Objective objectives={data.objectives} />
        <Summary summary={data.summary} />
        <Education education={data.education} />
        <Skills skills={data.skills} />
        <Work work={data.work} />
        <Projects projects={data.projects} />
        <GoogleTagManager gtmId="GTM-TN2FKV" />
      </div>
    );
  },
});