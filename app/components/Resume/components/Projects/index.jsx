import React from "react";
import toSentence from "underscore.string/toSentence";
import styles from "./styles.scss";
import ProjectLinks from "../ProjectLinks";

let projectList = [];

export default React.createClass({
  displayName: "Projects",

  renderHighlights(project) {
    if (!project.highlights || !project.highlights.length) {
      return null;
    }
    return (
      <ul className={styles.projectHighlights}>
        {project.highlights.map(this.renderHighlighItem)}
      </ul>
    );
  },

  renderHighlighItem(highlight, key) {
    return <li key={key}>{highlight}</li>;
  },

  renderProjectLink(project) {
    if (!project.link) {
      return null;
    }
    if (project.link.length) {
      return project.link.map((link) => (
        <span key={link.url}>
          {" "}
          -{" "}
          <a href={link.url} target="_blank">
            <small>{link.title}</small>
          </a>
        </span>
      ));
    }
    return "";
  },

  renderRole(project) {
    if (!project.role) {
      return null;
    }
    return <h4 className={styles.projectHeader}>Role: {project.role}</h4>;
  },

  renderTechnologies(project) {
    if (!project.technologies || !project.technologies.length) {
      return null;
    }
    return (
      <div className={styles.techStack}>
        <h4 className={styles.projectHeader}>Technology :</h4>
        <div className={styles.techStackList}>
          {toSentence(project.technologies)}
        </div>
      </div>
    );
  },

  renderProjects(project, key) {
    if (!project.active) {
      return null;
    }
    if (!project.showFull) {
      projectList.push(project);
      return null;
    } else {
      return (
        <div key={key}>
          <h3 className={styles.projectTitle}>
            <strong>{project.title}</strong>
            {this.renderProjectLink(project)}
          </h3>
          {this.renderRole(project)}
          {project.headline}
          {this.renderHighlights(project)}
          {this.renderTechnologies(project)}
        </div>
      );
    }
  },

  render() {
    const { projects } = this.props;
    return (
      <div>
        <h2>Projects</h2>
        {projects.map(this.renderProjects)}
        <ProjectLinks projectLinks={projectList} />
      </div>
    );
  },
});
