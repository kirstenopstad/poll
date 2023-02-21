import React, { useState } from "react";
import Dashboard from "./Dashboard";
import SurveyDetail from "./SurveyDetail";
import UpdateSurvey from "./UpdateSurvey";
import CreateSurvey from "./CreateSurvey";
import PropTypes from "prop-types"

// FEATURE: show create form when button is clicked on dashboard
// add local state 
// add conditional rendering
// add handleDisplayUpdateForm functionality

const BuildSurveyControl = ({surveyList}) => {
  // variable state
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [isEditing, setEditingStatus] = useState(false);
  const [isCreating, setCreatingStatus] = useState(false);

  // functions
  const handleDetailSelection = (id) => {
    const selected = surveyList.filter(survey => survey.id === id)[0];
    setSelectedSurvey(selected);
  }
  
  const handleDisplayUpdateForm = () => {
    setEditingStatus(true);
  }
  
  const handleDisplayCreateForm = () => {
    setCreatingStatus(true);
  }

  // eventually take new survey as input
  const handleCreateForm = () => {
    setCreatingStatus(false);
  }

  // conditional rendering
  let detail = null;

  if (isCreating) {
    detail = <CreateSurvey onSubmitClick={handleCreateForm}/>
  } else if (isEditing) {
    detail = <UpdateSurvey selectedSurvey={selectedSurvey}/>
  } else if (selectedSurvey) {
    detail = <SurveyDetail selectedSurvey={selectedSurvey} onUpdateClick={handleDisplayUpdateForm}/>
  }

  return(
    <React.Fragment>
      <h1>BuildSurveyControl</h1>
      <Dashboard surveyList={surveyList} onSurveySelect={handleDetailSelection} onCreateClick={handleDisplayCreateForm}/>
      {detail}
    </React.Fragment>
  );
}

BuildSurveyControl.propTypes = {
  surveyList: PropTypes.array
}

export default BuildSurveyControl;