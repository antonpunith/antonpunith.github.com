const renderObjectives = (objective, key) => {
  if (!objective.active) {
    return null;
  }
  return (
    <div className="spaced-text" key={key}>
      {objective.text}
    </div>
  );
};

export const Objective = ({ objectives }) => (
  <div>
    <h2>Objective</h2>
    {objectives.map(renderObjectives)}
  </div>
);


