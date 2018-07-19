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

	renderSummary (company) {
		if (!company.summary) {
			return null;
		}
		return (
			<p className={styles.summary}>{company.summary}</p>
		);
	},

	renderCompanies (company, key) {
		if(company.hidden) {
			return null;
		}
		var startDate = moment(company.startDate);
		var endDate = moment(company.endDate);
		let end = '';
		if (company.isCurrent) {
			end = ' - Present';
			//company.endDate = moment().valueOf();
		}
		if (company.endDate) {
			end = ' - '+ endDate.format('MMM  YYYY');
/*			var years = endDate.diff(startDate, 'year');
			startDate.add(years, 'years');
			var months = endDate.diff(startDate, 'months');
			startDate.add(months, 'months');
			period = years + ' years ' + months + ' months ';*/
		}

		return (
			<div key={key} className={`dont-break ${styles.companyDetailItem}`}>
				<small><strong>{moment(company.startDate).format('MMM  YYYY')} {end} </strong></small>
				<br/>
				<em>{company.position}</em> | <strong>{company.company}</strong>, {company.location}, {countries[company.countryCode].name} {this.renderLink(company)}
				{this.renderSummary(company)}
				<ul className={styles.highLights}>
					{company.highlights.map(this.renderHightlights)}
				</ul>
			</div>
		);
	},

	render () {
		const { work } = this.props;

		return (
			<div className="break-before">
				<h2>Work Experience</h2>
				{work.map(this.renderCompanies)}
			</div>
		);
	}

});
