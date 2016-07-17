import React from 'react';
import toSentence from 'underscore.string/toSentence';

export default React.createClass({
	displayName: 'Skills',

	renderSkills (skill, key) {
		return (
			<tr key={key}>
				<th>
				{skill.title}: 
				</th>
				<td>
				{toSentence(skill.values)}
				</td>
			</tr>
		);
	},

	render () {
		let { skills } = this.props;
		return (
			<div>
				<h2>Skills</h2>
				<table>
					<tbody>
						{skills.map(this.renderSkills)}
					</tbody>
				</table>
			</div>
		);
	}
});