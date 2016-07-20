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

	renderLink (company) {
		if (!company.website) {
			return null;
		}
		return (
			<small> - <a href={company.website} target="_blank">{company.website}</a></small>
		)
	},

	renderCompanies (company, key) {
		return (
			<table className={styles.workExperienceTable} key={key}>
				<tbody>
					<tr>
						<td>
							<strong>{company.company}</strong>, {company.location}, {countries[company.countryCode].name} {this.renderLink(company)}
							<br/>
							<em>{company.position}</em>
						</td>
						<td className={`text-right ${styles.workDates}`}>{moment(company.startDate).format('MMM  YYYY')} - {moment(company.endDate).format('MMM  YYYY')}</td>
					</tr>
					<tr>
						<td className={styles.workHightlights} colSpan="2">
						{company.summary}
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
				<h2>Work Experience</h2>
				{work.map(this.renderCompanies)}
			</div>
		);
	}

});