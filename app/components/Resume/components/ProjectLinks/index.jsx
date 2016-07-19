import React from 'react';

export default React.createClass({

	displayName: 'ProjectLinks',

	renderLinks (link, key) {
		return (
			<li key={key}><a href={link.link} target="_blank">{link.visibleLink}</a></li>
		);
	},

	render () {
		const { projectLinks } = this.props;
		return (
			<div>
				<h3>More Projects</h3>
				<ul>
				{projectLinks.map(this.renderLinks)}
				</ul>
			</div>
		);
	}

});