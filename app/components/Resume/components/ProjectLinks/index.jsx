import React from 'react';
import styles from './styles.scss';

export default React.createClass({

	displayName: 'ProjectLinks',

	renderTitle (link) {
		if (link.title) {
			return (link.title);
		}
		if (link.visibleLink) {
			return (link.visibleLink);
		}
		return (link.link);
	},

	renderLinks (link, key) {
		return (
			<li key={key}>{this.renderTitle(link)} - <a href={link.link} target="_blank">{link.visibleLink}</a></li>
		);
	},

	render () {
		const { projectLinks } = this.props;
		if (!projectLinks || projectLinks.length)
		return (
			<div>
				<h3>More Projects</h3>
				<ul className={styles.projectsList}>
				{projectLinks.map(this.renderLinks)}
				</ul>
			</div>
		);
	}

});