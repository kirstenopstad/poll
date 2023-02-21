import React, { useState } from "react";
import Dashboard from "./Dashboard";
import SurveyDetail from "./SurveyDetail";
import UpdateSurvey from "./UpdateSurvey";
import CreateSurvey from "./CreateSurvey";
import PropTypes from "prop-types"

const BuildSurveyControl = ({surveyList}) => {
  // variable state
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [isEditing, setEditingStatus] = useState(false);

  // functions
  const handleDetailSelection = (id) => {
    const selected = surveyList.filter(survey => survey.id === id)[0];
    setSelectedSurvey(selected);
  }
  
  const handleDisplayUpdateForm = () => {
    setEditingStatus(true);
  }

  // conditional rendering
  let detail = null;

  if (isEditing) {
    detail = <UpdateSurvey selectedSurvey={selectedSurvey}/>
  } else if (selectedSurvey) {
    detail = <SurveyDetail selectedSurvey={selectedSurvey} onUpdateClick={handleDisplayUpdateForm}/>
  }

  return(
    <React.Fragment>
      <h1>BuildSurveyControl</h1>
      <Dashboard surveyList={surveyList} onSurveySelect={handleDetailSelection}/>
      {detail}
      <CreateSurvey />
    </React.Fragment>
  );
}

BuildSurveyControl.propTypes = {
  surveyList: PropTypes.array
}

export default BuildSurveyControl;