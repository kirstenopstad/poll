import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types"

const SurveyDetail = ({selectedSurvey, onUpdateClick, onDeleteClick}) => {
  const { name, description, options, id } = selectedSurvey
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
      <button onClick={onUpdateClick}>Update</button>
      <button onClick={() => onDeleteClick(id)}>Delete</button>
    </React.Fragment>
  );
}

SurveyDetail.propTypes = {
  selectedSurvey: PropTypes.object,
  onUpdateClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
}

export default SurveyDetail;