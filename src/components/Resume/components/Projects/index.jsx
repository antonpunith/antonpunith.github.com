import React from 'react';
import toSentence from 'underscore.string/toSentence';
import styles from './styles.scss';
import ProjectLinks from '../ProjectLinks';

let projectList = [];

const Projects = ({ projects }) => {


	const renderHighlights = (project) => {
		if (!project.highlights || !project.highlights.length) {
			return null;
		}
		return (
			<ul className={styles.projectHighlights}>
				{project.highlights.map(renderHighlighItem)}
			</ul>
		);
	};

	const renderHighlighItem = (highlight, key) => {
		return (
			<li key={key}>
				{highlight}
			</li>
		);
	};

	const renderProjectLink = (project) => {
		if (!project.link) {
			return null;
		}
		if (project.link.length) {
			return project.link.map((link) => (<span> - <a href={link.url} target="_blank"><small>{link.title}</small></a></span>))
		}
		return '';
	}

	const renderRole = (project) => {
		if (!project.role) {
			return null;
		}
		return (<h4 className={styles.projectHeader}>Role: {project.role}</h4>);
	}

	const renderTechnologies = (project) => {
		if (!project.technologies || !project.technologies.length) {
			return null
		}
		return (
			<div className={styles.techStack}>
				<h4 className={styles.projectHeader}>Technology :</h4>
				<div className={styles.techStackList}>{toSentence(project.technologies)}</div>
			</div>
		);
	}

	const renderProjects = (project, key) => {
		if (!project.active) {
			return null;
		}
		if (!project.showFull) {
			projectList.push(project);
			return null;
		}
		else {
			return (
				<div key={key}>
					<h3 className={styles.projectTitle}>
						<strong>{project.title}</strong>
						{renderProjectLink(project)}
					</h3>
					{renderRole(project)}
					{project.headline}
					{renderHighlights(project)}
					{renderTechnologies(project)}
				</div>
			);
		}
	}


		return (
			<div>
				<h2>Projects</h2>
				{projects.map(renderProjects)}
				<ProjectLinks projectLinks={projectList} />
			</div>
		);

};

export default Projects;