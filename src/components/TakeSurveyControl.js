import React from "react";
import SurveyList from "./SurveyList";
import TakeSurvey from "./TakeSurvey";
import PropTypes from "prop-types";
import { useState } from "react";
import resultSeedData from "../resultSeedData";

// TODO: Add functionality to store results
// Seed result data

const TakeSurveyControl = ({surveyList}) => {
  // slices of state
  const [takingSurvey, setTakingSurvey] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [resultList, setResultList] = useState(resultSeedData);

  // functions
  const handleSelect = (id) => {
    const selected = surveyList.filter(survey => survey.id === id)[0]
    setSelectedSurvey(selected);
    setTakingSurvey(true);
  }

  // Add functionality to record survey result
  const handleRecordResult = (result) => {
    
    const newResultList = Object.values(resultList).concat(result);
    setResultList(newResultList)
  }

  let surveyBeingTaken = null;

  // if takingSurvey is true, survey for user to take
  if (takingSurvey) {
    surveyBeingTaken = <TakeSurvey survey={selectedSurvey} onSurveySubmit={handleRecordResult}/>
  }
  return(
    <React.Fragment>
      <h1>TakeSurveyControl</h1>
      <SurveyList surveyList={surveyList} onSurveySelect={handleSelect}/>
      {surveyBeingTaken}
    </React.Fragment>
  );
}

TakeSurveyControl.propTypes = {
  surveyList: PropTypes.array
}
export default TakeSurveyControl;