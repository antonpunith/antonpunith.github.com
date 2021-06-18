import React from 'react';
import toSentence from 'underscore.string/toSentence';
import styles from './styles.scss';

const Skills = ({ skills }) => {

	const renderSkills = (skill, key) => {
		return (
			<tr key={key}>
				<th className={styles.skillTitle}>
					{skill.title}
				</th>
				<td>
					{toSentence(skill.values)}
				</td>
			</tr>
		);
	};


	return (
		<div className="dont-break">
			<h2>Skills</h2>
			<table className="table-bordered spaced-text">
				<tbody>
					{skills.map(renderSkills)}
				</tbody>
			</table>
		</div>
	);

};
export default Skills;
