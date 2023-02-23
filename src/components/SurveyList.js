import React from "react";
import Survey from "./Survey";
import PropTypes from 'prop-types'

const SurveyList = ({onSurveySelect, surveyList}) => {

  return(
    <React.Fragment>
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
  surveyList: PropTypes.array,
  onSurveySelect: PropTypes.func
}
export default SurveyList;