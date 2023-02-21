const renderSummaries = (summary, key) => {
  if (!summary.active) {
    return null;
  }
  return <li key={key}>{summary.text}</li>;
};

export const Summary = ({ summary }) => (
  <div className="dont-break">
    <h2>Summary</h2>
    <ul className="spaced-text">{summary.map(renderSummaries)}</ul>
  </div>
);
