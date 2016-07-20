import React from 'react';
import styles from './styles.scss';

export default React.createClass({

	displayName: 'ProjectLinks',

	renderLinks (link, key) {
		return (
			<li key={key}><a href={link.link} target="_blank">{link.visibleLink}</a></li>
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