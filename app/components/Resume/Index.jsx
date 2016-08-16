import React from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import Objective from './components/Objective';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';
import Education from './components/Education';
import GoogleTagManager from '../GoogleTagManager';

export default React.createClass({

	displayName: 'Resume',

	render () {

		let { data } = this.props;

		return (
			<div>
				<Header basics={data.basics} />
				<Headline headlines={data.headlines} />
				<Objective objectives={data.objectives} />
				<Summary summary={data.summary} />
				<Education education={data.education} />
				<Skills skills={data.skills} />
				<div className="page-break" />
				<Work work={data.work} />
				<div className="page-break" />
				<Projects projects={data.projects} />
				<GoogleTagManager gtmId='GTM-TN2FKV' />
			</div>
		);
	}

});
