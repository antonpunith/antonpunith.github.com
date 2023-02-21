import moment from "moment";
import {countries} from "country-data";

const renderHightlights = (hightlight, key) => {
  if (!hightlight.active) {
    return null;
  }
  return <li key={key}>{hightlight.text}</li>;
};

const renderLink = (company) => {
  if (!company.website) {
    return null;
  }
  return (
    <small>
      {" "}
      -{" "}
      <a href={company.website} target="_blank">
        {company.website}
      </a>
    </small>
  );
};

const renderSummary = (company) => {
    if (!company.summary) {
      return null;
    }
    return <p className="summary">{company.summary}</p>;
  }

  const renderCompanies = (company, key) => {
    if (company.hidden) {
      return null;
    }
    var startDate = moment(company.startDate);
    var endDate = moment(company.endDate);
    let end = "";
    if (company.isCurrent) {
      end = " - Present";
    }
    if (company.endDate) {
      end = " - " + endDate.format("MMM  YYYY");
    }

    return (
      <div key={key} className={`dont-break companyDetailItem`}>
        <small>
          <strong>
            {moment(company.startDate).format("MMM  YYYY")} {end}{" "}
          </strong>
        </small>
        <br />
        <em>{company.position}</em> | <strong>{company.company}</strong>,{" "}
        {company.location}, {countries[company.countryCode].name}{" "}
        {renderLink(company)}
        {company.showFull && renderSummary(company)}
        {company.showFull && (
          <ul className="highLights">
            {company.highlights.map(renderHightlights)}
          </ul>
        )}
      </div>
    );
  }

  export const Work = ({ work }) => (
    <div>
      <h2>Work Experience</h2>
      {work.map(renderCompanies)}
    </div>
  );