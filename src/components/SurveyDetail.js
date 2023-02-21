import React from "react";
import Survey from "./Survey";

const SurveyDetail = ({selectedSurvey}) => {
  const { name, description } = selectedSurvey
  return(
    <React.Fragment>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>eventually results</p>
    </React.Fragment>
  );
}
export default SurveyDetail;