import React from 'react';
import toSentence from 'underscore.string/toSentence';

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
				<h3>{project.title} {this.renderProjectLink(project)}</h3>
				{project.headline}
				<h4>Role: {project.role}</h4>
				<ul>
				{project.responsibilities.map(this.renderResponsibilities)}
				</ul>
				<h4>Technology</h4>
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