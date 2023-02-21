import React from 'react';
import countryData from 'country-data';
import moment from 'moment';

const countries = countryData.countries;

export default React.createClass({

	displayName: 'Education',

	renderEducation (education, key) {

		return (
			<div key={key}>
				<strong>{education.studyType} ({education.area})</strong>, {education.institution}, {education.location}, {countries[education.countryCode].name}, {moment(education.endDate).format('MMM YYYY')}
			</div>
		);
	},

	render () {

		const { education } = this.props;

		return (
			<div>
				<h2>Education</h2>
				{education.map(this.renderEducation)}
			</div>
		);
	}
});