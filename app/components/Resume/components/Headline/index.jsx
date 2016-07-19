import React from 'react';
import moment from 'moment';

export default React.createClass({
	displayName: 'Summary',

	renderHeadlines (headline, key) {
		if (!headline.active) {
			return null;
		}
		return (
			<div key={key}>
				{headline.position} with over {moment().diff(headline.careerStart,'years')} years of experience in {headline.skill}.
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