import React from 'react';
import styles from './styles.scss';

const ProjectLinks = ({ projectLinks }) => {
	const renderTitle = (link) => {
		if (link.title) {
			return (link.title);
		}
		if (link.visibleLink) {
			return (link.visibleLink);
		}
		return (link.link);
	}
	const renderLinks = (link) => {
		return (
			// eslint-disable-next-line react/jsx-no-target-blank
			<li key={link}>{renderTitle(link)} - {link.link.map((link) => <a href={link.url} target="_blank">{link.title}</a>)}</li>
		);
	}

	if (!projectLinks || projectLinks.length)
		return (
			<div>
				<h3>More Projects</h3>
				<ul className={styles.projectsList}>
					{projectLinks.map(renderLinks)}
				</ul>
			</div>
		);
};

export default ProjectLinks;