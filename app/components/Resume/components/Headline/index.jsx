import React from 'react';

export default React.createClass({
	displayName: 'Summary',

	renderHeadlines (headline, key) {
		if (!headline.active) {
			return null;
		}
		return (
			<div key={key}>
				{headline.text}
			</div>
		);
	},

	render () {
		let { headlines } = this.props;
		return (
			<h3>
				{headlines.map(this.renderHeadlines)}
			</h3>
		);
	}
});