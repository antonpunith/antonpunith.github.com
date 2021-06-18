import React from 'react';
import moment from 'moment';



const Headline = ({ headlines } ) => {

	const renderHeadlines = (headline, key) => {
		if (!headline.active) {
			return null;
		}
		return (
			<div key={key}>
				{headline.position} with over {moment().diff(headline.careerStart, 'years')} years of experience in {headline.skill}.
			</div>
		);
	}

	return (
		<h3>
			{headlines.map(renderHeadlines)}
		</h3>
	);
}

export default Headline;