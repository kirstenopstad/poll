import React from "react";
import Survey from "./Survey";
import PropTypes from 'prop-types'

const SurveyList = ({onSurveySelect, surveyList}) => {
  console.log("made it in")
  // const surveyArray = Object.values(surveyList);
  console.log(surveyList);
  console.log("that was the survey array");
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
  surveyList: PropTypes.array,
  onSurveySelect: PropTypes.func
}
export default SurveyList;