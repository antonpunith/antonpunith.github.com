import React from 'react';
import countryData from 'country-data';
import moment from 'moment';

let countries = countryData.countries;

export default React.createClass({

	displayName: 'Work',

	renderHightlights (hightlight, key) {
		return (
			<li key={key}>{hightlight}</li>
		);
	},

	renderCompanies (company, key) {
		return (
			<div key={key}>
				<strong>{company.company}</strong>, {company.location}, {countries[company.countryCode].name} : {moment(company.startDate).format('MMMM  YYYY')} - {moment(company.endDate).format('MMMM  YYYY')}<br/>
				<em>{company.position}</em><br/>
				<ul>
					{company.highlights.map(this.renderHightlights)}
				</ul>

			</div>
		);
	},

	render () {
		let { work } = this.props;
		
		return (
			<div>
				<h3>Work Experience</h3>
				<div>
				{work.map(this.renderCompanies)}
				</div>
			</div>
		);
	}

});