import React from 'react';
import countryData from 'country-data';
import moment from 'moment';
import styles from './styles.scss';

const countries = countryData.countries;

export default React.createClass({

	displayName: 'Work',

	renderHightlights (hightlight, key) {
		return (
			<li key={key}>{hightlight}</li>
		);
	},

	renderCompanies (company, key) {
		return (
			<table className={styles.workExperienceTable} key={key}>
				<tbody>
					<tr>
						<td>
							<strong>{company.company}</strong>, {company.location}, {countries[company.countryCode].name}
							<br/>
							<em>{company.position}</em>
						</td>
						<td className="text-right">{moment(company.startDate).format('MMM  YYYY')} - {moment(company.endDate).format('MMM  YYYY')}</td>
					</tr>
					<tr>
						<td className={styles.workHightlights} colSpan="2">
						<ul>
							{company.highlights.map(this.renderHightlights)}
						</ul>
						</td>
					</tr>
				</tbody>
			</table>
		);
	},

	render () {
		const { work } = this.props;
		
		return (
			<div>
				<h3>Work Experience</h3>
				{work.map(this.renderCompanies)}
			</div>
		);
	}

});