import React from "react";
import Survey from "./Survey";
import PropTypes from 'prop-types'

const SurveyList = ({onSurveySelect, surveyList}) => {
  return(
    <React.Fragment>
      <h3>Survey List</h3>
      {surveyList.map(survey => 
        <Survey 
          key={survey.id}
          whenSelected={onSurveySelect}
          survey={survey}/>
      )}
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  surveyList: PropTypes.array
}
export default SurveyList;