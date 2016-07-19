import React from 'react';
import toSentence from 'underscore.string/toSentence';
import styles from './styles.scss';

export default React.createClass({
	displayName: 'Projects',

	renderResponsibilities (responsibility, key) {
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
			<a href={project.link} target="_blank">{project.visibleLink}</a>
		);
	},

	renderProjects (project, key) {
		return (
			<div key={key}>
				<h3 className={styles.projectTitle}><strong>{project.title}</strong> {this.renderProjectLink(project)}</h3>
				<h4 className={styles.projectHeader}>Role: {project.role}</h4>
				{project.headline}
				<ul>
				{project.responsibilities.map(this.renderResponsibilities)}
				</ul>
				<h4 className={styles.projectHeader}>Technology</h4>
				{toSentence(project.technologies)}
			</div>
		);
	},

	render () {
		let { projects } = this.props;
		return (
			<div>
				<h2>Projects</h2>
				{projects.map(this.renderProjects)}
			</div>
		);
	}
});