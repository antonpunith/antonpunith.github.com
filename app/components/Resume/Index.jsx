import React from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import Objective from './components/Objective';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectLinks from './components/ProjectLinks';
import Work from './components/Work';

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
				<Skills skills={data.skills} />
				<Projects projects={data.projects} />
				<ProjectLinks projectLinks={data.projectLinks} />
				<Work work={data.work} />
			</div>
		);
	}

});