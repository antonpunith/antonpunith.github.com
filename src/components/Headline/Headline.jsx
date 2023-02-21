import moment from 'moment';

const renderHeadlines = (headline, key) => {
  if (!headline.active) {
    return null;
  }
  return (
    <div key={key}>
      {headline.position} with over{" "}
      {moment().diff(headline.careerStart, "years")} years of experience in{" "}
      {headline.skill}.
    </div>
  );
};

const Headline = ({ headlines }) => {
  return <h3>{headlines.map(renderHeadlines)}</h3>;
};

export { Headline };