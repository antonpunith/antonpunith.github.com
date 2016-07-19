import React from 'react';
import toSentence from 'underscore.string/toSentence';
import styles from './styles.scss';

export default React.createClass({
	displayName: 'Projects',

	renderResponsibilities (project) {
		if(!project.responsibilities || !project.responsibilities.length) {
			return null;
		}
		return (
			<ul>
			{project.responsibilities.map(this.renderResponsibilityItem)}
			</ul>
		);
	},

	renderResponsibilityItem (responsibility, key) {
		return (
			<li key={key}>
				{responsibility}
			</li>
		);
	},

	renderProjectLink (project) {
		if (!project.link) {
			return null;
		}
		return (
			<a href={project.link} target="_blank"><small>{project.visibleLink}</small></a>
		);
	},

	renderRole (project) {
		if (!project.role) {
			return null;
		}
		return (<h4 className={styles.projectHeader}>Role: {project.role}</h4>);
	},

	renderTechnologies (project) {
		if (!project.technologies || !project.technologies.length) {
			return null
		}
		return (
			<div>
				<h4 className={styles.projectHeader}>Technology</h4>
				{toSentence(project.technologies)}
			</div>
		);
	},

	renderProjects (project, key) {
		return (
			<div key={key}>
				<h3 className={styles.projectTitle}>
					<strong>{project.title}</strong>
					&nbsp;&nbsp;{this.renderProjectLink(project)}
				</h3>
				{this.renderRole(project)}
				{project.headline}
				{this.renderResponsibilities(project)}
				{this.renderTechnologies(project)}
			</div>
		);
	},

	render () {
		const { projects } = this.props;
		return (
			<div>
				<h2>Projects</h2>
				{projects.map(this.renderProjects)}
			</div>
		);
	}
});