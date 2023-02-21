import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types"

const SurveyDetail = ({selectedSurvey, onUpdateClick}) => {
  const { name, description, options } = selectedSurvey
  return(
    <React.Fragment>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul> options
        <li>{options[1]}</li>
        <li>{options[2]}</li>
        <li>{options[3]}</li>
        <li>{options[4]}</li>
      </ul>
      <p>eventually results</p>
      <button onClick={onUpdateClick}>Update</button>
    </React.Fragment>
  );
}

SurveyDetail.propTypes = {
  selectedSurvey: PropTypes.object,
  onUpdateClick: PropTypes.func
}

export default SurveyDetail;