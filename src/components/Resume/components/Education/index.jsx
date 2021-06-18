import React from 'react';
import countryData from 'country-data';
import moment from 'moment';

const countries = countryData.countries;

const Education = ({ education }) => {



	const renderEducation = (education, key) => {

		return (
			<div key={key}>
				<strong>{education.studyType} ({education.area})</strong>, {education.institution}, {education.location}, {countries[education.countryCode].name}, {moment(education.endDate).format('MMM YYYY')}
			</div>
		);
	}


	return (
		<div>
			<h2>Education</h2>
			{education.map(renderEducation)}
		</div>
	);

};

export default Education;