import React, { useState } from "react";
import Dashboard from "./Dashboard";
import SurveyDetail from "./SurveyDetail";
import UpdateSurvey from "./UpdateSurvey";
import CreateSurvey from "./CreateSurvey";
import PropTypes from "prop-types"

// FEATURE: show survey detail when clicked
// add local state 
// add conditional rendering
// add handleDetailSelection functionality

const BuildSurveyControl = ({surveyList}) => {
  // variable state
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  // functions
  const handleDetailSelection = (id) => {
    const selected = surveyList.filter(survey => survey.id === id)[0];
    setSelectedSurvey(selected);
  }

  // conditional rendering
  let detail = null;

  if (selectedSurvey) {
    detail = <SurveyDetail selectedSurvey={selectedSurvey}/>
  }
  return(
    <React.Fragment>
      <h1>BuildSurveyControl</h1>
      <Dashboard surveyList={surveyList} onSurveySelect={handleDetailSelection}/>
      {detail}
      <UpdateSurvey />
      <CreateSurvey />
    </React.Fragment>
  );
}

BuildSurveyControl.propTypes = {
  surveyList: PropTypes.array
}

export default BuildSurveyControl;