import React from 'react';

const Summary = ({ summary }) => {


	const renderSummaries = (summary, key) => {
		if (!summary.active) {
			return null;
		}
		return (
			<li key={key}>
				{summary.text}
			</li>
		);
	};

	return (
		<div className="dont-break">
			<h2>Summary</h2>
			<ul className="spaced-text">
				{summary.map(renderSummaries)}
			</ul>
		</div>
	);

};

export default Summary;