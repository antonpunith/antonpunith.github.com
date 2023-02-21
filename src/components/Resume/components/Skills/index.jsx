import React from "react";
import toSentence from "underscore.string/toSentence";
import styles from "./styles.scss";

export default React.createClass({
  displayName: "Skills",

  renderSkills(skill, key) {
    const filteredSkill = skill.values.filter((skill) => skill.active);
    return (
      <tr key={key}>
        <th className={styles.skillTitle}>{skill.title}</th>
        <td>{toSentence(filteredSkill.map((skill) => skill.name))}</td>
      </tr>
    );
  },

  render() {
    const { skills } = this.props;
    return (
      <div className="dont-break">
        <h2>Skills</h2>
        <table className="table-bordered spaced-text">
          <tbody>{skills.map(this.renderSkills)}</tbody>
        </table>
      </div>
    );
  },
});
