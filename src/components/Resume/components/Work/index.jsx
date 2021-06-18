import React from 'react';
import countryData from 'country-data';
import moment from 'moment';
import styles from './styles.scss';

const countries = countryData.countries;

const Work = ({ work }) => {

	const renderHightlights = (hightlight, key) => {
		if (!hightlight.active) {
			return null;
		}
		return (
			<li key={key}>{hightlight.text}</li>
		);
	};

	const renderLink = (company) => {
		if (!company.website) {
			return null;
		}
		return (
			<small> - <a href={company.website} target="_blank">{company.website}</a></small>
		)
	};

	const renderSummary = (company) => {
		if (!company.summary) {
			return null;
		}
		return (
			<p className={styles.summary}>{company.summary}</p>
		);
	}

	const renderCompanies = (company, key) => {
		if (company.hidden) {
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
			end = ' - ' + endDate.format('MMM  YYYY');
		}

		return (
			<div key={key} className={`dont-break ${styles.companyDetailItem}`}>
				<small><strong>{moment(company.startDate).format('MMM  YYYY')} {end} </strong></small>
				<br />
				<em>{company.position}</em> | <strong>{company.company}</strong>, {company.location}, {countries[company.countryCode].name} {renderLink(company)}
				{renderSummary(company)}
				<ul className={styles.highLights}>
					{company.highlights.map(renderHightlights)}
				</ul>
			</div>
		);
	};




	return (
		<div className="break-before">
			<h2>Work Experience</h2>
			{work.map(renderCompanies)}
		</div>
	);


};
export default Work;