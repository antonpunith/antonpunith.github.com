import toSentence from "underscore.string/toSentence";
import { ProjectLinks } from "../";

const renderHighlights = (project) => {
  if (!project.highlights || !project.highlights.length) {
    return null;
  }
  return (
    <ul className="projectHighlights">
      {project.highlights.map(renderHighlighItem)}
    </ul>
  );
};

const renderHighlighItem = (highlight, key) => {
  return <li key={key}>{highlight}</li>;
};

const renderProjectLink = (project) => {
  if (!project.link) {
    return null;
  }
  if (project.link.length) {
    return project.link.map((link, index) => (
      <span key={link.url}>
        {index > 0 ? ", " : " - "}
        <a href={link.url} target="_blank">
          <small>{link.title}</small>
        </a>
      </span>
    ));
  }
  return "";
};

const renderRole = (project) => {
  if (!project.role) {
    return null;
  }
  return <span className="projectHeader"> {project.role}</span>;
};

const renderTechnologies = (project) => {
  if (!project.technologies || !project.technologies.length) {
    return null;
  }
  return (
    <div className="techStack">
      <h4 className="projectHeader">Technology :</h4>
      <div className="techStackList">{toSentence(project.technologies)}</div>
    </div>
  );
};

const renderProjects = (projectList) => (project, key) => {
  if (!project.active) {
    return null;
  }
  if (!project.showFull) {
    projectList.push(project);
    return null;
  } else {
    return (
      <div key={key}>
        <h3 className="projectTitle">
          <strong>{project.title} </strong>
          {renderProjectLink(project)} | {renderRole(project)}
        </h3>

        {project.headline}
        {renderHighlights(project)}
        {renderTechnologies(project)}
      </div>
    );
  }
};

export const Projects = ({ projects }) => {
  let projectList = [];
  return (
  <div>
    <h2>Projects</h2>
    {projects.map(renderProjects(projectList))}
    <ProjectLinks projectLinks={projectList} />
  </div>
)};