import { countries } from "country-data";
import moment from "moment";

const renderEducation = (education, key) => {
  return (
    <div key={key}>
      <strong>
        {education.studyType} ({education.area})
      </strong>
      , {education.institution}, {education.location},{" "}
      {countries[education.countryCode].name},{" "}
      {moment(education.endDate).format("MMM YYYY")}
    </div>
  );
};

export const Education = ({ education }) => (
  <div>
    <h2>Education</h2>
    {education.map(renderEducation)}
  </div>
);
