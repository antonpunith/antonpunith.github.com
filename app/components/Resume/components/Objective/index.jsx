import React from 'react';

export default React.createClass({
	displayName: 'Objective',

	renderObjectives (objective, key) {
		if (!objective.active) {
			return null;
		}
		return (
			<div key={key}>
				{objective.text}
			</div>
		);
	},

	render () {
		const { objectives } = this.props;
		return (
			<div>
				<h2>Objective</h2>
				{objectives.map(this.renderObjectives)}
			</div>
		);
	}
});