  import toSentence from "underscore.string/toSentence";

  const renderSkills = (skill, key) => {
    const filteredSkill = skill.values.filter((skill) => skill.active);
    return (
      <tr key={key}>
        <th className="skillTitle">{skill.title}</th>
        <td>{toSentence(filteredSkill.map((skill) => skill.name))}</td>
      </tr>
    );
  }

  export const Skills = ({ skills }) => (
    <div className="dont-break">
      <h2>Skills</h2>
      <table className="table-bordered spaced-text">
        <tbody>{skills.map(renderSkills)}</tbody>
      </table>
    </div>
  );
