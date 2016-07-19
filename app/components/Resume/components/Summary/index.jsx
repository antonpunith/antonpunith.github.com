import React from 'react';

export default React.createClass({
	displayName: 'Summary',

	renderSummaries (summary, key) {
		if (!summary.active) {
			return null;
		}
		return (
			<li key={key}>
				{summary.text}
			</li>
		);
	},

	render () {
		const { summary } = this.props;
		return (
			<div>
				<h2>Summary</h2>
				<ul>
				{summary.map(this.renderSummaries)}
				</ul>
			</div>
		);
	}
});