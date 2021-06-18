import React from 'react';

const Objective = ({ objectives }) => {

	const renderObjectives = (objective, key) => {
		if (!objective.active) {
			return null;
		}
		return (
			<div className="spaced-text" key={key}>
				{objective.text}
			</div>
		);
	};

	return (
		<div>
			<h2>Objective</h2>
			{objectives.map(renderObjectives)}
		</div>
	);
};

export default Objective;
